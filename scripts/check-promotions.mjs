#!/usr/bin/env node
/**
 * Promotion expiry watchdog.
 *
 * Reports on the `bookBy` dates in src/components/Promotions.tsx so an expired
 * offer is never a surprise. Expired promotions already stop rendering on their
 * own (see `activePromotions`); this script is the heads-up that one dropped off
 * the site, or is about to.
 *
 * Intentionally warn-only - it always exits 0 so a stale promo can never break a
 * deploy. Run `npm run check:promos -- --strict` to exit non-zero instead, which
 * is the mode to use if you ever want CI to fail on an expired offer.
 */

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const SOURCE = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'components', 'Promotions.tsx');
const EXPIRING_SOON_DAYS = 14;

const strict = process.argv.includes('--strict');
const source = readFileSync(SOURCE, 'utf8');

// Each promotion object carries a title and a bookBy; pair them up in order.
// Deliberately simple: if the shape of the data changes, this reports 0 promos
// rather than silently reporting a wrong answer - which the "no promotions
// found" warning below makes loud.
const titles = [...source.matchAll(/^\s{4}title: '(.+?)',$/gm)].map((m) => m[1]);
const bookBys = [...source.matchAll(/^\s{4}bookBy: (?:'(\d{4}-\d{2}-\d{2})'|null),$/gm)].map((m) => m[1] ?? null);

if (titles.length === 0 || titles.length !== bookBys.length) {
  console.warn(
    `\n⚠️  check-promotions: could not read promotions (found ${titles.length} titles, ${bookBys.length} bookBy fields).\n` +
      `   The data shape in ${SOURCE} probably changed - update this script.\n`
  );
  process.exit(0);
}

const now = new Date();
const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
const DAY_MS = 24 * 60 * 60 * 1000;

const expired = [];
const expiringSoon = [];
let evergreen = 0;

titles.forEach((title, i) => {
  const bookBy = bookBys[i];
  if (!bookBy) {
    evergreen++;
    return;
  }
  const [year, month, day] = bookBy.split('-').map(Number);
  const deadline = new Date(year, month - 1, day);
  const daysLeft = Math.round((deadline - today) / DAY_MS);

  if (daysLeft < 0) expired.push({ title, bookBy, daysLeft });
  else if (daysLeft <= EXPIRING_SOON_DAYS) expiringSoon.push({ title, bookBy, daysLeft });
});

const live = titles.length - expired.length;
console.log(`\nPromotions: ${live} live, ${expired.length} expired, ${evergreen} with no deadline`);

for (const { title, bookBy, daysLeft } of expiringSoon) {
  console.log(`  ⏳ expires in ${daysLeft} day${daysLeft === 1 ? '' : 's'} (${bookBy}) - ${title}`);
}

for (const { title, bookBy, daysLeft } of expired) {
  console.warn(`  ❌ EXPIRED ${Math.abs(daysLeft)} day${daysLeft === -1 ? '' : 's'} ago (${bookBy}) - ${title}`);
}

if (expired.length > 0) {
  console.warn(
    `\n⚠️  ${expired.length} promotion${expired.length === 1 ? ' is' : 's are'} past the booking deadline and no longer showing on the site.\n` +
      `   Replace or remove ${expired.length === 1 ? 'it' : 'them'} in src/components/Promotions.tsx.\n`
  );
  if (strict) process.exit(1);
} else {
  console.log('  ✓ nothing expired\n');
}
