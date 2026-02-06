import { useState } from 'react';
import { Wrench, Palette, Building, Calculator, CheckCircle, ArrowRight, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ServicesPage = () => {
  const [activeService, setActiveService] = useState(null);
  const navigate = useNavigate()

  const services = [
    {
      id: 1,
      icon: Palette,
      title: 'Dizayn & Planlaşdırma',
      description: 'Müasir arxitektura dizaynı və detallı layihə planlaşdırması',
      features: ['3D Vizualizasiya', 'Arxitektura Dizaynı', 'İnteryer Dizaynı', 'Landşaft Dizaynı'],
      price: '₼500-2000',
      duration: '2-4 həftə'
    },
    {
      id: 2,
      icon: Building,
      title: 'Tikinti Xidmətləri',
      description: 'Tam dövriyyəli tikinti işləri və professional icra',
      features: ['Əsas Tikinti', 'Daxili Təmir', 'Fasad İşləri', 'Çatı İşləri'],
      price: '₼50-150/m²',
      duration: '3-12 ay'
    },
    {
      id: 3,
      icon: Wrench,
      title: 'Tikinti Nəzarəti',
      description: 'Professional tikinti nəzarəti və keyfiyyət təminatı',
      features: ['Keyfiyyət Nəzarəti', 'Texniki Nəzarət', 'Material Yoxlanışı', 'İş Təhlükəsizliyi'],
      price: '₼1000-5000',
      duration: 'Layihə müddəti'
    },
    {
      id: 4,
      icon: Calculator,
      title: 'Qiymət Hesablaması',
      description: 'Dəqiq qiymət hesablaması və büdcə planlaşdırması',
      features: ['Material Hesabı', 'İşçilik Qiyməti', 'Büdcə Planı', 'Ödəniş Cədvəli'],
      price: 'Pulsuz',
      duration: '1-3 gün'
    }
  ];

  const materials = [
    { name: 'Keramik Plitələr', price: '₼15-80/m²', quality: 'Premium' },
    { name: 'Laminat Döşəmə', price: '₼25-120/m²', quality: 'Yüksək' },
    { name: 'Boya Materialları', price: '₼8-35/m²', quality: 'Eco-friendly' },
    { name: 'Elektrik Materialları', price: '₼200-800/otaq', quality: 'Sertifikatlı' },
    { name: 'Santexnika', price: '₼150-1500/dəst', quality: 'Avropa' },
    { name: 'Qapı və Pəncərələr', price: '₼300-2000/ədəd', quality: 'Enerji Qənaətli' }
  ];

  const testimonials = [
    {
      name: 'Əli Məmmədov',
      project: 'Villa Tikintisi',
      rating: 5,
      comment: 'Mükəmməl iş keyfiyyəti və professional yanaşma. Tövsiyə edirəm!',
      image: 'https://ui-avatars.com/api/?name=Ali+Mammadov&background=d5b898&color=00333f&size=128'
    },
    {
      name: 'Leyla Həsənova',
      project: 'Mənzil Təmiri',
      rating: 5,
      comment: 'Vaxtında bitirdilər və gözlədiyimdən də yaxşı nəticə aldıq.',
      image: 'https://ui-avatars.com/api/?name=Leyla+Hasanova&background=d5b898&color=00333f&size=128'
    },
    {
      name: 'Rəşad Quliyev',
      project: 'Ofis Dizaynı',
      rating: 5,
      comment: 'Dizayn və icra hər ikisi əla səviyyədə idi. Təşəkkürlər!',
      image: 'https://ui-avatars.com/api/?name=Rashad+Guliyev&background=d5b898&color=00333f&size=128'
    },
    {
      name: 'Nigar Əliyeva',
      project: 'Restoran İnteryeri',
      rating: 5,
      comment: 'Çox peşəkar komanda. Hər detalı düşünülmüş və keyfiyyətli işlənib.',
      image: 'https://ui-avatars.com/api/?name=Nigar+Aliyeva&background=d5b898&color=00333f&size=128'
    },
    {
      name: 'Elvin Məmmədli',
      project: 'Ticarət Mərkəzi',
      rating: 5,
      comment: 'Layihəni vaxtında və büdcə daxilində tamamladılar. Çox razıyam.',
      image: 'https://ui-avatars.com/api/?name=Elvin+Mammadli&background=d5b898&color=00333f&size=128'
    },
    {
      name: 'Səbinə Həsənova',
      project: 'Kafe Dizaynı',
      rating: 5,
      comment: 'Yaradıcı yanaşma və mükəmməl icra. Hər kəsə tövsiyə edirəm!',
      image: 'https://ui-avatars.com/api/?name=Sabina+Hasanova&background=d5b898&color=00333f&size=128'
    }
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen bg-main font-poppins">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Xidmətlərimiz
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Layihənizin hər mərhələsində professional dəstək və yüksək keyfiyyətli xidmətlər təqdim edirik.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 mb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all group cursor-pointer"
              onClick={() => setActiveService(activeService === service.id ? null : service.id)}
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16 bg-gold rounded-2xl flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-main" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-white/70 text-sm">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                  <div className="text-xs text-white/60 mb-1">Qiymət</div>
                  <div className="text-white font-semibold">{service.price}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                  <div className="text-xs text-white/60 mb-1">Müddət</div>
                  <div className="text-white font-semibold">{service.duration}</div>
                </div>
              </div>

              {activeService === service.id && (
                <div className="border-t border-white/10 pt-6 animate-fadeInUp">
                  <h4 className="text-white font-semibold mb-3">Xidmət Daxildir:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-gold" />
                        <span className="text-white/80 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button className="w-full mt-4 px-6 py-3 bg-gold rounded-lg text-main font-semibold hover:bg-gold/90 transition-colors hover:scale-105 transform"
                    onClick={() => navigate("/contact")}>
                    Təklif Al
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Materials Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Material Qiymətləri
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {materials.map((material, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-white font-semibold">{material.name}</h3>
                  <span className="text-xs bg-gold px-2 py-1 rounded-full text-main">
                    {material.quality}
                  </span>
                </div>
                <div className="text-gold font-bold text-lg">{material.price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="container mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Müştəri Rəyləri
        </h2>
        
        <div className="relative">
          {/* Custom Navigation Buttons */}
          <button 
            className="testimonials-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/20 -ml-6 hidden md:flex"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          
          <button 
            className="testimonials-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/20 -mr-6 hidden md:flex"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: '.testimonials-prev',
              nextEl: '.testimonials-next',
            }}
            pagination={{ 
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="testimonials-swiper pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all h-full">
                  {/* Rating Stars */}
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-gold fill-current" />
                    ))}
                  </div>
                  
                  {/* Comment */}
                  <p className="text-white/80 mb-6 italic leading-relaxed">
                    "{testimonial.comment}"
                  </p>
                  
                  {/* Client Info */}
                  <div className="flex items-center space-x-4 pt-4 border-t border-white/10">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full border-2 border-gold"
                    />
                    <div>
                      <div className="text-white font-semibold">{testimonial.name}</div>
                      <div className="text-white/60 text-sm">{testimonial.project}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 text-center border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-4">
            Layihənizi Başlayaq
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Pulsuz konsultasiya üçün bizimlə əlaqə saxlayın. Layihənizi müzakirə edək və ən yaxşı həlli tapaq.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="px-8 py-4 bg-gold rounded-xl text-main font-semibold hover:bg-gold/90 transition-all hover:scale-105"
              onClick={() => navigate("/contact")}>
              Pulsuz Konsultasiya
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;