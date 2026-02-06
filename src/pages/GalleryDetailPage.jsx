import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Calendar, 
  Tag,
  Share2,
  Play,
  Image as ImageIcon,
  Video as VideoIcon,
  ChevronLeft,
  ChevronRight,
  Download
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import ImageModal from '../components/Shared/ImageModal';
import VideoModal from '../components/Shared/VideoModal';

const GalleryDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [galleryItem, setGalleryItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Mock gallery data - Replace with API call
  useEffect(() => {
    const fetchGalleryItem = async () => {
      setIsLoading(true);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Mock data
      const mockGalleryItem = {
        id: parseInt(id),
        title: 'Modern Villa İnteryer Dizaynı',
        type: 'photo', // 'photo', 'video', 'before-after'
        category: 'Yaşayış',
        date: '15 Yanvar 2024',
        location: 'Bakı, Yasamal',
        photographer: 'Studio Team',
        description: 'Müasir villa kompleksinin daxili dizaynı. Minimalist yanaşma və funksionallığın mükəmməl birləşməsi.',
        fullDescription: `
          Bu layihə müasir yaşayış məkanlarının dizaynında yeni standartlar təyin edir. 
          Açıq plan həlli, təbii işıqlandırma və keyfiyyətli materialların istifadəsi 
          rahat və estetik yaşayış mühiti yaradır.
          
          Dizayn konsepsiyası minimalizm və funksionallıq prinsiplərinə əsaslanır. 
          Hər detal diqqətlə düşünülmüş və məkanın ümumi harmoniyasına töhfə verir.
        `,
        tags: ['İnteryer', 'Minimalizm', 'Lüks', 'Modern'],
        specifications: [
          { label: 'Layihə Tipi', value: 'Yaşayış İnteryeri' },
          { label: 'Sahə', value: '320m²' },
          { label: 'Otaq Sayı', value: '5' },
          { label: 'Stil', value: 'Modern Minimalizm' },
          { label: 'Rəng Palitrası', value: 'Neytral Tonlar' },
          { label: 'Müddət', value: '2 ay' }
        ],
        features: [
          'Açıq Plan Həlli',
          'Təbii İşıqlandırma',
          'Smart Home İnteqrasiyası',
          'Premium Materiallar',
          'Xüsusi Mebel Dizaynı',
          'Akustik Həllər'
        ],
        media: [
          {
            type: 'image',
            url: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1200&q=80',
            thumbnail: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=400&q=80',
            caption: 'Qonaq otağı - ümumi görünüş'
          },
          {
            type: 'image',
            url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
            thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80',
            caption: 'Mətbəx zonası'
          },
          {
            type: 'video',
            url: 'https://www.w3schools.com/html/mov_bbb.mp4',
            thumbnail: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=400&q=80',
            caption: 'Virtual tur - 360° baxış'
          },
          {
            type: 'image',
            url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
            thumbnail: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=400&q=80',
            caption: 'Yataq otağı'
          },
          {
            type: 'video',
            url: 'https://www.w3schools.com/html/movie.mp4',
            thumbnail: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=400&q=80',
            caption: 'Dizayn prosesi'
          },
          {
            type: 'image',
            url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
            thumbnail: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=400&q=80',
            caption: 'Hamam'
          }
        ],
        relatedProjects: [
          { id: 1, title: 'Lüks Villa Kompleksi', image: '/api/placeholder/300/200' },
          { id: 2, title: 'Biznes Mərkəzi', image: '/api/placeholder/300/200' }
        ]
      };
      
      setGalleryItem(mockGalleryItem);
      setIsLoading(false);
    };

    fetchGalleryItem();
  }, [id]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: galleryItem?.title,
        text: galleryItem?.description,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link kopyalandı!');
    }
  };

  const openMedia = (index) => {
    const media = galleryItem.media[index];
    setCurrentMediaIndex(index);
    setSelectedMedia(media);
    
    if (media.type === 'image') {
      setIsImageModalOpen(true);
    } else if (media.type === 'video') {
      setIsVideoModalOpen(true);
    }
  };

  const navigateMedia = (direction) => {
    const newIndex = direction === 'next' 
      ? (currentMediaIndex + 1) % galleryItem.media.length
      : (currentMediaIndex - 1 + galleryItem.media.length) % galleryItem.media.length;
    
    const newMedia = galleryItem.media[newIndex];
    
    // Close current modal
    setIsImageModalOpen(false);
    setIsVideoModalOpen(false);
    
    // Open new modal after a brief delay
    setTimeout(() => {
      setCurrentMediaIndex(newIndex);
      setSelectedMedia(newMedia);
      
      if (newMedia.type === 'image') {
        setIsImageModalOpen(true);
      } else if (newMedia.type === 'video') {
        setIsVideoModalOpen(true);
      }
    }, 100);
  };

  const closeModals = () => {
    setIsImageModalOpen(false);
    setIsVideoModalOpen(false);
    setSelectedMedia(null);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-main flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-gold border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white/80">Yüklənir...</p>
        </div>
      </div>
    );
  }

  if (!galleryItem) {
    return (
      <div className="min-h-screen bg-main flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Məzmun tapılmadı</h2>
          <button
            onClick={() => navigate('/gallery')}
            className="px-6 py-3 bg-gold text-main font-semibold rounded-lg hover:bg-gold/90 transition-colors"
          >
            Qalereyaya qayıt
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-main font-poppins">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        {galleryItem.media[0].type === 'image' ? (
          <img
            src={galleryItem.media[0].url}
            alt={galleryItem.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="relative w-full h-full">
            <img
              src={galleryItem.media[0].thumbnail}
              alt={galleryItem.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <button
                onClick={() => openMedia(0)}
                className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all hover:scale-110"
              >
                <Play className="w-10 h-10 text-white ml-1" />
              </button>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-main via-main/50 to-transparent"></div>
        
        {/* Back Button */}
        <button
          onClick={() => navigate('/gallery')}
          className="absolute top-24 left-6 flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-lg transition-all border border-white/20 text-white"
        >
          <ArrowLeft size={20} />
          <span>Geri</span>
        </button>

        {/* Share Button */}
        <button
          onClick={handleShare}
          className="absolute top-24 right-6 p-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-lg transition-all border border-white/20 text-white"
        >
          <Share2 size={20} />
        </button>

        {/* Title */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1 bg-gold text-main text-sm font-semibold rounded-full mb-4">
                {galleryItem.category}
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                {galleryItem.title}
              </h1>
              <div className="flex flex-wrap gap-6 text-white/80">
                <div className="flex items-center space-x-2">
                  <Calendar size={18} className="text-gold" />
                  <span>{galleryItem.date}</span>
                </div>
                {galleryItem.location && (
                  <div className="flex items-center space-x-2">
                    <Tag size={18} className="text-gold" />
                    <span>{galleryItem.location}</span>
                  </div>
                )}
                <div className="flex items-center space-x-2">
                  {galleryItem.type === 'video' ? (
                    <VideoIcon size={18} className="text-gold" />
                  ) : (
                    <ImageIcon size={18} className="text-gold" />
                  )}
                  <span>{galleryItem.media.length} media</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Description */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Haqqında</h2>
              <p className="text-white/80 leading-relaxed mb-4">
                {galleryItem.description}
              </p>
              <p className="text-white/70 leading-relaxed whitespace-pre-line">
                {galleryItem.fullDescription}
              </p>
            </motion.section>

            {/* Features */}
            {galleryItem.features && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h2 className="text-3xl font-bold text-white mb-6">Xüsusiyyətlər</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {galleryItem.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
                    >
                      <div className="w-2 h-2 bg-gold rounded-full"></div>
                      <span className="text-white/90">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* Media Gallery */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Media Qalereya</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {galleryItem.media.map((media, index) => (
                  <div
                    key={index}
                    onClick={() => openMedia(index)}
                    className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
                  >
                    <img
                      src={media.thumbnail || media.url}
                      alt={media.caption}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    
                    {/* Media Type Indicator */}
                    <div className="absolute top-3 left-3">
                      <div className="flex items-center space-x-1 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full">
                        {media.type === 'video' ? (
                          <VideoIcon size={14} className="text-white" />
                        ) : (
                          <ImageIcon size={14} className="text-white" />
                        )}
                      </div>
                    </div>

                    {/* Play Button for Videos */}
                    {media.type === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <Play className="w-6 h-6 text-white ml-0.5" />
                        </div>
                      </div>
                    )}

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute bottom-0 left-0 right-0 p-3">
                        <p className="text-white text-sm font-medium">{media.caption}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Specifications */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 sticky top-24"
            >
              <h3 className="text-xl font-bold text-white mb-6">Məlumatlar</h3>
              <div className="space-y-4">
                {galleryItem.specifications.map((spec, index) => (
                  <div key={index} className="flex justify-between items-center pb-4 border-b border-white/10 last:border-0">
                    <span className="text-white/60 text-sm">{spec.label}</span>
                    <span className="text-white font-semibold text-sm">{spec.value}</span>
                  </div>
                ))}
              </div>

              {/* Tags */}
              {galleryItem.tags && (
                <div className="mt-6 pt-6 border-t border-white/10">
                  <h4 className="text-white font-semibold mb-3 text-sm">Teqlər</h4>
                  <div className="flex flex-wrap gap-2">
                    {galleryItem.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full border border-white/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Photographer */}
              {galleryItem.photographer && (
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-white/60 text-xs mb-1">Foto/Video</p>
                  <p className="text-white font-semibold">{galleryItem.photographer}</p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <ImageModal
        isOpen={isImageModalOpen}
        onClose={closeModals}
        imageUrl={selectedMedia?.url}
        title={selectedMedia?.caption}
        onPrevious={() => navigateMedia('prev')}
        onNext={() => navigateMedia('next')}
        currentIndex={currentMediaIndex}
        totalImages={galleryItem.media.length}
      />

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={closeModals}
        videoUrl={selectedMedia?.url}
        title={selectedMedia?.caption}
      />
    </div>
  );
};

export default GalleryDetailPage;
