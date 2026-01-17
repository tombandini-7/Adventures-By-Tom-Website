import { useState, useMemo } from 'react';
import { Star, CheckCircle2, ArrowRight, Building2, Bed, Users, Eye, Info, Play, X, ChevronDown, MapPin, Phone, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import {
  disneylandResorts,
  getDLRRoomsByResortId,
  groupDLRRoomsByCategory,
  type DisneylandResort,
  type DLRResortRoom,
} from '../../data/disneyland';
import { Modal } from '../common';
import { QUOTE_URL } from '../../constants';

const DisneylandResorts = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: benefitsRef, isVisible: benefitsVisible } = useScrollAnimation();
  const [selectedResort, setSelectedResort] = useState<DisneylandResort | null>(null);

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
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-yellow uppercase tracking-[0.2em] text-sm font-medium mb-4">
            Stay in the Magic
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-6">
            Disneyland Resort Hotels
          </h2>
          <p className="text-sky text-lg leading-relaxed">
            Extend the magic by staying at one of the three Disney Resort hotels. Enjoy exclusive perks like early park entry and the convenience of being steps away from the fun!
          </p>
        </div>

        {/* Resorts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {disneylandResorts.map((resort, index) => (
            <ResortCard
              key={resort.id}
              resort={resort}
              delay={index * 100}
              onClick={() => setSelectedResort(resort)}
            />
          ))}
        </div>

        {/* Benefits Banner */}
        <div
          ref={benefitsRef}
          className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 transition-all duration-700 ${
            benefitsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <Star className="w-10 h-10 text-yellow flex-shrink-0" />
            <div className="flex-1 text-center lg:text-left">
              <h4 className="font-serif text-xl text-white mb-2">Resort Guest Benefits</h4>
              <p className="text-sky text-sm leading-relaxed">
                Disney Resort hotel guests receive <span className="text-yellow font-medium">one complimentary Lightning Lane Multi Pass</span> attraction entry at either park—redeemable at any available time on one day of your stay.
              </p>
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

interface ResortCardProps {
  resort: DisneylandResort;
  delay: number;
  onClick: () => void;
}

const ResortCard = ({ resort, delay, onClick }: ResortCardProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const tierColors: Record<string, string> = {
    'Deluxe': 'bg-yellow text-ocean',
    'Moderate': 'bg-aqua text-white',
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <button
        onClick={onClick}
        className="group w-full text-left bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-300 hover:bg-white/15 hover:-translate-y-1 hover:shadow-lg"
      >
      {/* Image */}
      <div className="relative h-48 lg:h-52 overflow-hidden">
        <img
          src={resort.image}
          alt={resort.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ocean/60 to-transparent" />

        {/* Tier Badge */}
        <div className={`absolute top-4 right-4 px-3 py-1 ${tierColors[resort.tier]} text-xs font-bold uppercase tracking-wide rounded-full`}>
          {resort.tier}
        </div>

        {/* Click Indicator - visible by default on mobile, hover only on desktop */}
        <div className="absolute bottom-3 left-3 px-3 py-1.5 bg-white/90 text-ocean text-xs font-medium rounded-full opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity flex items-center gap-1">
          <Info className="w-3 h-3" />
          View Details
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-serif text-xl lg:text-2xl text-white mb-2 group-hover:text-yellow transition-colors">
          {resort.shortName}
        </h3>
        <p className="text-sky/90 text-sm leading-relaxed mb-4">
          {resort.description}
        </p>

        {/* Highlights */}
        <ul className="space-y-1.5 mb-4">
          {resort.highlights.slice(0, 4).map((highlight) => (
            <li key={highlight} className="flex items-center gap-2 text-sm text-white/80">
              <CheckCircle2 className="w-3.5 h-3.5 text-yellow flex-shrink-0" />
              {highlight}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <span className="inline-flex items-center gap-2 text-yellow font-medium text-sm group-hover:text-yellow/80 transition-colors">
          Explore Rooms & Details
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
      </button>
    </div>
  );
};

// Resort Detail Modal
interface ResortModalProps {
  resort: DisneylandResort | null;
  isOpen: boolean;
  onClose: () => void;
}

type ModalTab = 'overview' | 'rooms' | 'amenities';

const ResortModal = ({ resort, isOpen, onClose }: ResortModalProps) => {
  const [showVideo, setShowVideo] = useState(false);
  const [activeTab, setActiveTab] = useState<ModalTab>('overview');
  const [selectedRoom, setSelectedRoom] = useState<DLRResortRoom | null>(null);
  const [showRoomVideo, setShowRoomVideo] = useState(false);

  // Get rooms for this resort
  const rooms = useMemo(() => {
    if (!resort) return [];
    return getDLRRoomsByResortId(resort.id);
  }, [resort]);

  const roomsByCategory = useMemo(() => {
    return groupDLRRoomsByCategory(rooms);
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
  const isDeluxe = resort.tier === 'Deluxe';

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
    const id = getYouTubeVideoId(url);
    if (id) {
      return `https://img.youtube.com/vi/${id}/mqdefault.jpg`;
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
      label={resort.tier + ' Resort'}
      badge={isDeluxe ? 'Early Park Entry' : undefined}
      title={resort.name}
      subtitle="Disneyland Resort"
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
                    src={resort.image}
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

            {/* Highlights */}
            <div className="bg-sky/20 rounded-xl p-4">
              <h4 className="font-medium text-ocean text-sm mb-3 flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow" />
                Resort Highlights
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {resort.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-aqua flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Location & Contact */}
            <div className="bg-gray-50 rounded-xl p-4 space-y-3">
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
                      Enjoy Early Park Entry with 30 minutes early access to both Disneyland Park and Disney California Adventure every day of your stay.
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
                    {selectedRoom.view_type && (
                      <div className="flex items-start gap-2">
                        <Eye className="w-4 h-4 text-aqua flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-gray-500 text-xs uppercase tracking-wider">View</p>
                          <p className="text-gray-700 text-sm">{selectedRoom.view_type}</p>
                        </div>
                      </div>
                    )}
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
                                <p className="text-gray-500 text-xs truncate">{room.view_type || 'Various views'}</p>
                              </div>
                              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-ocean transition-colors flex-shrink-0 ml-2" />
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
                {Object.keys(roomsByCategory).length === 0 && (
                  <p className="text-gray-400 text-center py-8">Room information coming soon.</p>
                )}
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

export default DisneylandResorts;
