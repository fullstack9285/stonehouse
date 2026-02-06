import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Calendar, 
  MapPin, 
  Ruler, 
  Users, 
  CheckCircle2,
  Clock,
  Award,
  Phone,
  Mail,
  Share2,
  Download,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import ImageModal from '../components/Shared/ImageModal';

const ProjectDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [project, setProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Mock project data - Replace with API call
  useEffect(() => {
    const fetchProject = async () => {
      setIsLoading(true);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Mock data
      const mockProject = {
        id: parseInt(id),
        title: 'Lüks Villa Kompleksi',
        category: 'residential',
        location: 'Bakı, Yasamal rayonu',
        year: '2024',
        area: '450m²',
        status: 'Tamamlandı',
        client: 'Əli Məmmədov',
        duration: '8 ay',
        budget: '₼250,000',
        team: '15 nəfər',
        description: 'Bu layihə müasir arxitektura dizaynı və ənənəvi Azərbaycan elementlərinin mükəmməl birləşməsidir. Villa kompleksi 3 mərtəbəli, 5 otaqlı, geniş həyət və hovuz sahəsi ilə təchiz edilmişdir.',
        fullDescription: `
          Lüks Villa Kompleksi layihəsi Bakının prestijli Yasamal rayonunda yerləşir. 
          Layihə müasir memarlıq standartlarına uyğun olaraq hazırlanmış və ən yüksək 
          keyfiyyətli materiallardan istifadə edilərək tikilib.
          
          Villa kompleksi 450 kvadratmetr sahəyə malik olub, 3 mərtəbədən ibarətdir. 
          Binanın dizaynında müasir minimalizm və ənənəvi Azərbaycan memarlıq 
          elementləri harmonik şəkildə birləşdirilib.
        `,
        features: [
          'Smart Home Sistemi',
          'Mərkəzi İstilik Sistemi',
          'Təhlükəsizlik Kameraları',
          'Hovuz və Sauna',
          'Geniş Qaraj (3 avtomobil)',
          'Landşaft Dizaynı',
          'Günəş Panelləri',
          'Su Filtrasiya Sistemi'
        ],
        specifications: [
          { label: 'Ümumi Sahə', value: '450m²' },
          { label: 'Yaşayış Sahəsi', value: '320m²' },
          { label: 'Otaq Sayı', value: '5' },
          { label: 'Mərtəbə', value: '3' },
          { label: 'Hamam', value: '4' },
          { label: 'Qaraj', value: '3 avtomobil' },
          { label: 'Həyət', value: '200m²' },
          { label: 'Hovuz', value: '40m²' }
        ],
        timeline: [
          { phase: 'Layihələndirmə', duration: '1 ay', status: 'completed' },
          { phase: 'Təməl İşləri', duration: '2 ay', status: 'completed' },
          { phase: 'Konstruksiya', duration: '3 ay', status: 'completed' },
          { phase: 'Daxili Təmir', duration: '2 ay', status: 'completed' },
          { phase: 'Landşaft', duration: '1 ay', status: 'completed' }
        ],
        gallery: [
          'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
          'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
          'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
          'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80',
          'https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1200&q=80',
          'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80'
        ],
        materials: [
          'Premium Keramik Plitələr',
          'Alman Pəncərə Sistemləri',
          'İtalyan Santexnika',
          'Türk Fasad Materialları',
          'Yerli Təbii Daş'
        ]
      };
      
      setProject(mockProject);
      setIsLoading(false);
    };

    fetchProject();
  }, [id]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: project?.title,
        text: project?.description,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link kopyalandı!');
    }
  };

  const openImageModal = (index) => {
    setCurrentImageIndex(index);
    setSelectedImage(project.gallery[index]);
  };

  const navigateImage = (direction) => {
    const newIndex = direction === 'next' 
      ? (currentImageIndex + 1) % project.gallery.length
      : (currentImageIndex - 1 + project.gallery.length) % project.gallery.length;
    
    setCurrentImageIndex(newIndex);
    setSelectedImage(project.gallery[newIndex]);
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

  if (!project) {
    return (
      <div className="min-h-screen bg-main flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Layihə tapılmadı</h2>
          <button
            onClick={() => navigate('/projects')}
            className="px-6 py-3 bg-gold text-main font-semibold rounded-lg hover:bg-gold/90 transition-colors"
          >
            Layihələrə qayıt
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-main font-poppins">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src={project.gallery[0]}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-main via-main/50 to-transparent"></div>
        
        {/* Back Button */}
        <button
          onClick={() => navigate('/projects')}
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

        {/* Project Title */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1 bg-gold text-main text-sm font-semibold rounded-full mb-4">
                {project.category === 'residential' ? 'Yaşayış' : 
                 project.category === 'commercial' ? 'Ticarət' : 'Sənaye'}
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-6 text-white/80">
                <div className="flex items-center space-x-2">
                  <MapPin size={18} className="text-gold" />
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar size={18} className="text-gold" />
                  <span>{project.year}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Ruler size={18} className="text-gold" />
                  <span>{project.area}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 size={18} className="text-green-400" />
                  <span>{project.status}</span>
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
              <h2 className="text-3xl font-bold text-white mb-6">Layihə Haqqında</h2>
              <p className="text-white/80 leading-relaxed mb-4">
                {project.description}
              </p>
              <p className="text-white/70 leading-relaxed whitespace-pre-line">
                {project.fullDescription}
              </p>
            </motion.section>

            {/* Features */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Xüsusiyyətlər</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
                  >
                    <CheckCircle2 size={20} className="text-gold flex-shrink-0" />
                    <span className="text-white/90">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Timeline */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">İcra Mərhələləri</h2>
              <div className="space-y-4">
                {project.timeline.map((phase, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
                  >
                    <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-main font-bold">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold mb-1">{phase.phase}</h3>
                      <p className="text-white/60 text-sm">{phase.duration}</p>
                    </div>
                    <CheckCircle2 size={24} className="text-green-400" />
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Gallery */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Qalereya</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {project.gallery.map((image, index) => (
                  <div
                    key={index}
                    onClick={() => openImageModal(index)}
                    className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
                  >
                    <img
                      src={image}
                      alt={`${project.title} - ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white font-semibold">Bax</span>
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
              <h3 className="text-xl font-bold text-white mb-6">Texniki Məlumatlar</h3>
              <div className="space-y-4">
                {project.specifications.map((spec, index) => (
                  <div key={index} className="flex justify-between items-center pb-4 border-b border-white/10 last:border-0">
                    <span className="text-white/60 text-sm">{spec.label}</span>
                    <span className="text-white font-semibold">{spec.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-white/10 space-y-3">
                <div className="flex items-center space-x-3 text-white/80">
                  <Clock size={18} className="text-gold" />
                  <span className="text-sm">Müddət: {project.duration}</span>
                </div>
                <div className="flex items-center space-x-3 text-white/80">
                  <Users size={18} className="text-gold" />
                  <span className="text-sm">Komanda: {project.team}</span>
                </div>
                <div className="flex items-center space-x-3 text-white/80">
                  <Award size={18} className="text-gold" />
                  <span className="text-sm">Büdcə: {project.budget}</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10">
                <Link
                  to="/contact"
                  className="block w-full px-6 py-3 bg-gold text-main text-center font-semibold rounded-lg hover:bg-gold/90 transition-colors"
                >
                  Məsləhət Al
                </Link>
              </div>
            </motion.div>

            {/* Materials */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
            >
              <h3 className="text-xl font-bold text-white mb-4">İstifadə Olunan Materiallar</h3>
              <ul className="space-y-2">
                {project.materials.map((material, index) => (
                  <li key={index} className="flex items-start space-x-2 text-white/80 text-sm">
                    <CheckCircle2 size={16} className="text-gold mt-0.5 flex-shrink-0" />
                    <span>{material}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          imageUrl={selectedImage}
          title={project.title}
          onPrevious={() => navigateImage('prev')}
          onNext={() => navigateImage('next')}
          currentIndex={currentImageIndex}
          totalImages={project.gallery.length}
        />
      )}
    </div>
  );
};

export default ProjectDetailPage;
