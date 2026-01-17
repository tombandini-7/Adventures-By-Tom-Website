import { useState, useMemo } from 'react';
import { Star, CheckCircle2, ArrowRight, Sparkles, MapPin, Phone, ChevronDown, Play, Building2, X, Bed, Users, Eye, Info, Search, RotateCcw } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import {
  wdwResortCategories,
  resortGuestBenefits,
  deluxeBenefits,
  wdwResorts,
  resortCategoryOrder,
  getRoomsByResortId,
  groupRoomsByCategory,
  familySizeOptions,
  resortCategoryOptions,
  resortAreaOptions,
  amenityOptions,
  filterResortsCompact,
  type WDWResort,
  type WDWResortRoom,
  type ResortFilters,
} from '../../data/wdw';
import { Modal } from '../common';
import { QUOTE_URL } from '../../constants';

const WDWResorts = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: benefitsRef, isVisible: benefitsVisible } = useScrollAnimation();
  const { ref: deluxeRef, isVisible: deluxeVisible } = useScrollAnimation();
  const { ref: finderRef, isVisible: finderVisible } = useScrollAnimation();
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [selectedResort, setSelectedResort] = useState<WDWResort | null>(null);
  const [filters, setFilters] = useState<ResortFilters>({
    familySize: '',
    category: '',
    area: '',
    amenities: [],
  });

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  const updateFilter = (key: keyof ResortFilters, value: string | string[]) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const toggleAmenity = (amenityId: string) => {
    setFilters(prev => ({
      ...prev,
      amenities: prev.amenities.includes(amenityId)
        ? prev.amenities.filter(id => id !== amenityId)
        : [...prev.amenities, amenityId],
    }));
  };

  const clearFilters = () => {
    setFilters({ familySize: '', category: '', area: '', amenities: [] });
  };

  const hasActiveFilters = filters.familySize || filters.category || filters.area || filters.amenities.length > 0;

  // Get filtered resorts
  const filteredResorts = useMemo(() => {
    return filterResortsCompact(filters);
  }, [filters]);

  // Get the category data from wdwResortCategories for additional info
  const getCategoryInfo = (categoryKey: string) => {
    const mapping: Record<string, string> = {
      'Deluxe Villa Resort': 'villas',
      'Deluxe Resort': 'deluxe',
      'Moderate Resort': 'moderate',
      'Value Resort': 'value',
      'Campground Resort': 'value', // Use value styling for campground
    };
    return wdwResortCategories.find(c => c.id === mapping[categoryKey]);
  };

  return (
    <section id="resorts" className="py-24 bg-ocean relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-yellow uppercase tracking-[0.2em] text-sm font-medium mb-4">
            Stay in the Magic
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-6">
            Disney Resort Hotels
          </h2>
          <p className="text-sky text-lg leading-relaxed">
            Walt Disney World offers over 25 resort hotels across four categories. Each provides exclusive benefits you can&apos;t get staying off-site!
          </p>
        </div>

        {/* Resort Finder - Compact Version */}
        <div
          ref={finderRef}
          className={`bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-5 mb-8 transition-all duration-700 ${
            finderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-2">
              <Search className="w-5 h-5 text-yellow" />
              <h3 className="font-serif text-lg text-white">Find Your Perfect Resort</h3>
            </div>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-1 text-white/70 hover:text-white text-xs transition-colors"
              >
                <RotateCcw className="w-3 h-3" />
                Reset
              </button>
            )}
          </div>

          {/* Compact Filter Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-3">
            {/* Family Size */}
            <div>
              <label className="text-white/60 text-[10px] uppercase tracking-wider mb-1 block">Party Size</label>
              <select
                value={filters.familySize}
                onChange={(e) => updateFilter('familySize', e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-white/10 text-white text-sm border border-white/20 focus:border-yellow focus:outline-none cursor-pointer appearance-none"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 10px center' }}
              >
                {familySizeOptions.map(opt => (
                  <option key={opt.value} value={opt.value} className="bg-ocean text-white">
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Resort Category */}
            <div>
              <label className="text-white/60 text-[10px] uppercase tracking-wider mb-1 block">Category</label>
              <select
                value={filters.category}
                onChange={(e) => updateFilter('category', e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-white/10 text-white text-sm border border-white/20 focus:border-yellow focus:outline-none cursor-pointer appearance-none"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 10px center' }}
              >
                {resortCategoryOptions.map(opt => (
                  <option key={opt.value} value={opt.value} className="bg-ocean text-white">
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Resort Area */}
            <div>
              <label className="text-white/60 text-[10px] uppercase tracking-wider mb-1 block">Location</label>
              <select
                value={filters.area}
                onChange={(e) => updateFilter('area', e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-white/10 text-white text-sm border border-white/20 focus:border-yellow focus:outline-none cursor-pointer appearance-none"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 10px center' }}
              >
                {resortAreaOptions.map(opt => (
                  <option key={opt.value} value={opt.value} className="bg-ocean text-white">
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Amenities - Small Chips */}
            <div className="col-span-2 sm:col-span-1">
              <label className="text-white/60 text-[10px] uppercase tracking-wider mb-1 block">Amenities</label>
              <div className="flex flex-wrap gap-1.5">
                {amenityOptions.map(amenity => {
                  const isActive = filters.amenities.includes(amenity.id);
                  return (
                    <button
                      key={amenity.id}
                      onClick={() => toggleAmenity(amenity.id)}
                      className={`px-2 py-1 rounded text-[11px] font-medium transition-all duration-200 ${
                        isActive
                          ? 'bg-yellow text-ocean'
                          : 'bg-white/10 text-white/80 hover:bg-white/20'
                      }`}
                    >
                      {amenity.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Results */}
          {hasActiveFilters && (
            <div className="pt-3 border-t border-white/10">
              <p className="text-white text-sm mb-3">
                <span className="font-semibold text-yellow">{filteredResorts.length}</span>
                {' '}resort{filteredResorts.length !== 1 ? 's' : ''} match
              </p>

              {filteredResorts.length > 0 ? (
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2">
                  {filteredResorts.map(resort => (
                    <button
                      key={resort.id}
                      onClick={() => setSelectedResort(resort)}
                      className="group text-left bg-white/10 rounded-lg overflow-hidden transition-all duration-300 hover:bg-white/20 hover:-translate-y-0.5"
                    >
                      <div className="relative h-16 overflow-hidden">
                        <img
                          src={resort.image_url}
                          alt={resort.name}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-ocean/80 to-transparent" />
                      </div>
                      <div className="p-1.5">
                        <h4 className="font-medium text-[10px] text-white leading-tight line-clamp-2 group-hover:text-yellow transition-colors">
                          {resort.name.replace("Disney's ", "").replace("Walt Disney World ", "")}
                        </h4>
                      </div>
                    </button>
                  ))}
                </div>
              ) : (
                <p className="text-white/60 text-xs text-center py-2">
                  No resorts match. Try adjusting your filters.
                </p>
              )}
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-white/20" />
          <span className="text-white/60 text-sm">or browse by category</span>
          <div className="flex-1 h-px bg-white/20" />
        </div>

        {/* Resort Categories with Hotels */}
        <div className="space-y-4 mb-12">
          {resortCategoryOrder.map((categoryInfo, index) => {
            const categoryResorts = wdwResorts.filter(r => r.category === categoryInfo.key);
            const isExpanded = expandedCategory === categoryInfo.key;
            const categoryData = getCategoryInfo(categoryInfo.key);
            const isDeluxe = categoryInfo.key === 'Deluxe Resort' || categoryInfo.key === 'Deluxe Villa Resort';

            return (
              <ResortCategorySection
                key={categoryInfo.key}
                categoryName={categoryInfo.displayName}
                categoryKey={categoryInfo.key}
                resorts={categoryResorts}
                isExpanded={isExpanded}
                onToggle={() => toggleCategory(categoryInfo.key)}
                onSelectResort={setSelectedResort}
                isDeluxe={isDeluxe}
                categoryImage={categoryData?.image}
                categoryDescription={categoryData?.description}
                highlights={categoryData?.highlights}
                delay={index * 100}
              />
            );
          })}
        </div>

        {/* All Resort Guest Benefits */}
        <div
          ref={benefitsRef}
          className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 mb-8 transition-all duration-700 ${
            benefitsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-start gap-4 mb-6">
            <Star className="w-8 h-8 text-yellow flex-shrink-0" />
            <div>
              <h3 className="font-serif text-xl text-white mb-2">All Resort Guest Benefits</h3>
              <p className="text-sky/90 text-sm">Every Disney Resort hotel guest enjoys these exclusive perks:</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {resortGuestBenefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-aqua flex-shrink-0 mt-0.5" />
                <span className="text-white text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Deluxe-Exclusive Benefits */}
        <div
          ref={deluxeRef}
          className={`bg-gradient-to-r from-yellow/20 to-yellow/10 border-2 border-yellow/30 rounded-2xl p-6 lg:p-8 transition-all duration-700 ${
            deluxeVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
            <div className="flex items-start gap-4 flex-1">
              <Sparkles className="w-8 h-8 text-yellow flex-shrink-0" />
              <div>
                <h3 className="font-serif text-xl text-white mb-2">Why Choose Deluxe?</h3>
                <p className="text-sky/90 text-sm mb-4">
                  Deluxe and Deluxe Villa guests enjoy <span className="text-yellow font-medium">Extended Evening Hours</span>—exclusive park time after close on select nights with access to popular attractions and shorter waits.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {deluxeBenefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-yellow flex-shrink-0 mt-0.5" />
                      <span className="text-white/90 text-xs">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <a
              href={QUOTE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-magenta text-white font-semibold uppercase tracking-wide text-sm hover:bg-magenta-light transition-all duration-300"
            >
              Book a Resort
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Resort Detail Modal */}
      <ResortModal
        resort={selectedResort}
        isOpen={!!selectedResort}
        onClose={() => setSelectedResort(null)}
      />
    </section>
  );
};

interface ResortCategorySectionProps {
  categoryName: string;
  categoryKey: string;
  resorts: WDWResort[];
  isExpanded: boolean;
  onToggle: () => void;
  onSelectResort: (resort: WDWResort) => void;
  isDeluxe: boolean;
  categoryImage?: string;
  categoryDescription?: string;
  highlights?: string[];
  delay: number;
}

const ResortCategorySection = ({
  categoryName,
  resorts,
  isExpanded,
  onToggle,
  onSelectResort,
  isDeluxe,
  categoryImage,
  categoryDescription,
  highlights,
  delay,
}: ResortCategorySectionProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Category Header (Clickable) */}
      <button
        onClick={onToggle}
        className={`w-full bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-300 hover:bg-white/15 ${
          isExpanded ? 'rounded-b-none' : ''
        }`}
      >
        <div className="flex items-center gap-4 p-5">
          {/* Category Image Thumbnail */}
          {categoryImage && (
            <div className="hidden sm:block w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
              <img
                src={categoryImage}
                alt={categoryName}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="flex-1 text-left">
            <div className="flex items-center gap-3 mb-1">
              <h3 className="font-serif text-xl lg:text-2xl text-white">
                {categoryName}
              </h3>
              {isDeluxe && (
                <span className="hidden sm:inline-block px-2 py-0.5 bg-yellow text-ocean text-xs font-bold uppercase tracking-wide rounded-full">
                  Extended Evening Hours
                </span>
              )}
            </div>
            <p className="text-sky/80 text-sm">
              {resorts.length} {resorts.length === 1 ? 'resort' : 'resorts'} available
              {categoryDescription && (
                <span className="hidden md:inline"> • {categoryDescription}</span>
              )}
            </p>
            <p className="text-yellow/80 text-xs mt-1 flex items-center gap-1">
              <span>Click to explore resorts</span>
              <ArrowRight className="w-3 h-3" />
            </p>
          </div>

          {/* Expand Icon */}
          <ChevronDown
            className={`w-6 h-6 text-white transition-transform duration-300 ${
              isExpanded ? 'rotate-180' : ''
            }`}
          />
        </div>
      </button>

      {/* Expanded Content - Hotels Grid */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white/5 backdrop-blur-sm rounded-b-2xl p-5 pt-2">
          {/* Category Highlights */}
          {highlights && highlights.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4 pt-3 border-t border-white/10">
              {highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 text-white text-xs rounded-full"
                >
                  <CheckCircle2 className="w-3 h-3 text-yellow" />
                  {highlight}
                </span>
              ))}
            </div>
          )}

          {/* Hotels Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {resorts.map((resort) => (
              <ResortCard
                key={resort.id}
                resort={resort}
                onClick={() => onSelectResort(resort)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

interface ResortCardProps {
  resort: WDWResort;
  onClick: () => void;
}

const ResortCard = ({ resort, onClick }: ResortCardProps) => {
  return (
    <button
      onClick={onClick}
      className="group text-left bg-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:bg-white/20 hover:shadow-lg hover:-translate-y-1"
    >
      {/* Image */}
      <div className="relative h-32 overflow-hidden">
        <img
          src={resort.image_url}
          alt={resort.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ocean/80 to-transparent" />

        {/* Resort Area Badge */}
        <div className="absolute bottom-2 left-2 right-2">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-white/90 text-ocean text-[10px] font-medium rounded-full truncate max-w-full">
            <MapPin className="w-2.5 h-2.5 flex-shrink-0" />
            <span className="truncate">{resort.resort_area.replace(' Resort Area', '')}</span>
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-3">
        <h4 className="font-serif text-sm text-white leading-tight line-clamp-2 group-hover:text-yellow transition-colors">
          {resort.name}
        </h4>
      </div>
    </button>
  );
};

// Resort Detail Modal
interface ResortModalProps {
  resort: WDWResort | null;
  isOpen: boolean;
  onClose: () => void;
}

type ModalTab = 'overview' | 'rooms' | 'amenities';

const ResortModal = ({ resort, isOpen, onClose }: ResortModalProps) => {
  const [showVideo, setShowVideo] = useState(false);
  const [activeTab, setActiveTab] = useState<ModalTab>('overview');
  const [selectedRoom, setSelectedRoom] = useState<WDWResortRoom | null>(null);
  const [showRoomVideo, setShowRoomVideo] = useState(false);

  // Get rooms for this resort
  const rooms = useMemo(() => {
    if (!resort) return [];
    return getRoomsByResortId(resort.id);
  }, [resort]);

  const roomsByCategory = useMemo(() => {
    return groupRoomsByCategory(rooms);
  }, [rooms]);

  // Get unique amenities from all rooms
  const allAmenities = useMemo(() => {
    if (rooms.length === 0) return [];
    const amenitySet = new Set<string>();
    rooms.forEach(room => {
      if (room.amenities) {
        room.amenities.split(',').forEach(a => amenitySet.add(a.trim()));
      }
    });
    return Array.from(amenitySet).sort();
  }, [rooms]);

  if (!resort) return null;

  const formatPhone = (phone: string) => {
    if (phone.length === 10) {
      return `(${phone.slice(0, 3)}) ${phone.slice(3, 6)}-${phone.slice(6)}`;
    }
    return phone;
  };

  // Extract YouTube video ID from various URL formats
  const getYouTubeVideoId = (url: string): string | null => {
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&?/]+)/,
      /youtube\.com\/watch\?.*v=([^&]+)/,
    ];
    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) return match[1];
    }
    return null;
  };

  const videoId = resort.youtube_url ? getYouTubeVideoId(resort.youtube_url) : null;
  const isDeluxe = resort.category === 'Deluxe Resort' || resort.category === 'Deluxe Villa Resort';

  // Reset state when modal closes
  const handleClose = () => {
    setShowVideo(false);
    setActiveTab('overview');
    setSelectedRoom(null);
    setShowRoomVideo(false);
    onClose();
  };

  // Get YouTube thumbnail URL
  const getYouTubeThumbnail = (url: string): string | null => {
    const videoId = getYouTubeVideoId(url);
    if (videoId) {
      return `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
    }
    return null;
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <Building2 className="w-4 h-4" /> },
    { id: 'rooms', label: 'Room Types', icon: <Bed className="w-4 h-4" /> },
    { id: 'amenities', label: 'Amenities', icon: <CheckCircle2 className="w-4 h-4" /> },
  ];

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      icon={<Building2 className="w-7 h-7" />}
      label={resort.category}
      badge={isDeluxe ? 'Extended Evening Hours' : undefined}
      title={resort.name}
      subtitle={resort.resort_area}
      ctaText="Book This Resort"
      size="wide"
      tabs={tabs}
      activeTab={activeTab}
      onTabChange={(tabId) => setActiveTab(tabId as ModalTab)}
    >
      {/* Tab Content */}
      <div className="min-h-[300px]">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Resort Image or Video */}
            <div className="relative h-56 sm:h-72 rounded-xl overflow-hidden">
              {showVideo && videoId ? (
                <div className="relative w-full h-full">
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                    title={`${resort.name} Video`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <button
                    onClick={() => setShowVideo(false)}
                    className="absolute top-2 right-2 w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center transition-colors"
                    aria-label="Close video"
                  >
                    <X className="w-4 h-4 text-white" />
                  </button>
                </div>
              ) : (
                <>
                  <img
                    src={resort.image_url}
                    alt={resort.name}
                    className="w-full h-full object-cover"
                  />
                  {videoId && (
                    <button
                      onClick={() => setShowVideo(true)}
                      className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors group"
                      aria-label="Play video"
                    >
                      <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 text-magenta ml-1" />
                      </div>
                    </button>
                  )}
                </>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">{resort.description}</p>

            {/* Location & Contact */}
            <div className="bg-sky/30 rounded-xl p-4 space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-ocean flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm">{resort.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-ocean flex-shrink-0" />
                <a
                  href={`tel:+1${resort.phone}`}
                  className="text-ocean hover:text-ocean-dark text-sm font-medium transition-colors"
                >
                  {formatPhone(resort.phone)}
                </a>
              </div>
            </div>

            {/* Deluxe Benefits Reminder */}
            {isDeluxe && (
              <div className="bg-yellow/10 border border-yellow/30 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-yellow flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-ocean font-medium text-sm mb-1">Deluxe Resort Perk</p>
                    <p className="text-gray-600 text-sm">
                      Enjoy Extended Evening Hours with exclusive after-hours access to select attractions at Magic Kingdom and EPCOT.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Room Types Tab */}
        {activeTab === 'rooms' && (
          <div>
            {selectedRoom ? (
              // Room Detail View
              <div className="space-y-4">
                <button
                  onClick={() => { setSelectedRoom(null); setShowRoomVideo(false); }}
                  className="flex items-center gap-2 text-ocean hover:text-ocean-dark text-sm font-medium transition-colors"
                >
                  <ChevronDown className="w-4 h-4 rotate-90" />
                  Back to all rooms
                </button>

                <div className="bg-sky/20 rounded-xl p-5">
                  <h3 className="font-serif text-xl text-ocean mb-1">{selectedRoom.name}</h3>
                  <p className="text-gray-500 text-sm mb-4">{selectedRoom.room_category}</p>

                  {/* Room Video with Thumbnail Preview */}
                  {selectedRoom.youtube_url && (
                    <div className="relative h-48 sm:h-56 rounded-lg overflow-hidden mb-4">
                      {showRoomVideo ? (
                        <div className="relative w-full h-full">
                          <iframe
                            src={`https://www.youtube.com/embed/${getYouTubeVideoId(selectedRoom.youtube_url)}?autoplay=1&rel=0`}
                            title={`${selectedRoom.name} Video`}
                            className="w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                          <button
                            onClick={() => setShowRoomVideo(false)}
                            className="absolute top-2 right-2 w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center transition-colors"
                            aria-label="Close video"
                          >
                            <X className="w-4 h-4 text-white" />
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => setShowRoomVideo(true)}
                          className="relative w-full h-full group"
                        >
                          <img
                            src={getYouTubeThumbnail(selectedRoom.youtube_url) || ''}
                            alt={`${selectedRoom.name} video preview`}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                            <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                              <Play className="w-6 h-6 text-magenta ml-0.5" />
                            </div>
                          </div>
                          <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                            Room Tour
                          </div>
                        </button>
                      )}
                    </div>
                  )}

                  {/* Room Details Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-start gap-2">
                      <Eye className="w-4 h-4 text-aqua flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-gray-500 text-xs uppercase tracking-wider">View</p>
                        <p className="text-gray-700 text-sm">{selectedRoom.view_type}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Bed className="w-4 h-4 text-aqua flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-gray-500 text-xs uppercase tracking-wider">Beds</p>
                        <p className="text-gray-700 text-sm">{selectedRoom.bed_type}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Users className="w-4 h-4 text-aqua flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-gray-500 text-xs uppercase tracking-wider">Sleeps</p>
                        <p className="text-gray-700 text-sm">{selectedRoom.sleeping_occupancy}</p>
                      </div>
                    </div>
                    {selectedRoom.additional_information && (
                      <div className="flex items-start gap-2 col-span-2">
                        <Info className="w-4 h-4 text-magenta flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-gray-500 text-xs uppercase tracking-wider">Notes</p>
                          <p className="text-gray-700 text-sm">{selectedRoom.additional_information}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Room Amenities */}
                  {selectedRoom.amenities && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">Room Amenities</p>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                        {selectedRoom.amenities.split(',').map((amenity, idx) => (
                          <div key={idx} className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3 h-3 text-aqua flex-shrink-0" />
                            <span className="text-gray-600 text-xs">{amenity.trim()}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              // Room Category List
              <div className="space-y-4">
                {Object.entries(roomsByCategory).map(([category, categoryRooms]) => (
                  <div key={category}>
                    <h4 className="font-medium text-ocean text-sm mb-2 flex items-center gap-2">
                      <Bed className="w-4 h-4" />
                      {category}
                      <span className="text-gray-400 font-normal">({categoryRooms.length})</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {categoryRooms.map(room => {
                        const hasVideo = !!room.youtube_url;
                        const thumbnail = hasVideo ? getYouTubeThumbnail(room.youtube_url!) : null;
                        return (
                          <button
                            key={room.id}
                            onClick={() => setSelectedRoom(room)}
                            className="flex items-stretch bg-gray-50 hover:bg-sky/30 rounded-lg overflow-hidden transition-colors text-left group"
                          >
                            {/* Video Thumbnail Preview */}
                            {thumbnail && (
                              <div className="relative w-24 flex-shrink-0">
                                <img
                                  src={thumbnail}
                                  alt=""
                                  className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                  <div className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center">
                                    <Play className="w-4 h-4 text-magenta ml-0.5" />
                                  </div>
                                </div>
                              </div>
                            )}
                            <div className="flex-1 flex items-center justify-between p-3 min-w-0">
                              <div className="flex-1 min-w-0">
                                <p className="font-medium text-gray-800 text-sm truncate group-hover:text-ocean transition-colors">
                                  {room.name}
                                </p>
                                <p className="text-gray-500 text-xs truncate">{room.view_type}</p>
                              </div>
                              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-ocean transition-colors flex-shrink-0 ml-2" />
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Amenities Tab */}
        {activeTab === 'amenities' && (
          <div>
            <p className="text-gray-500 text-sm mb-4">
              Available amenities vary by room type. Here are all amenities you may find at this resort:
            </p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
              {allAmenities.map((amenity, idx) => (
                <div key={idx} className="flex items-center gap-2 py-1">
                  <CheckCircle2 className="w-4 h-4 text-aqua flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{amenity}</span>
                </div>
              ))}
            </div>
            {allAmenities.length === 0 && (
              <p className="text-gray-400 text-center py-8">No amenity information available.</p>
            )}
          </div>
        )}
      </div>
    </Modal>
  );
};

export default WDWResorts;
