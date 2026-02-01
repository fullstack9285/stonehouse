import { motion } from 'framer-motion';
import { Award, Users, Target, TrendingUp, CheckCircle2, Shield, X, Phone, Mail, MapPin, User, Menu } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    phone: ''
  });

  const navItems = [
    { path: '/', name: 'Ana Səhifə' },
    { path: '/projects', name: 'Layihələr' },
    { path: '/portfolio', name: 'Portfolio' },
    { path: '/services', name: 'Dizayn Xidmətləri' },
    { path: '/contact', name: 'Əlaqə' },
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setIsModalOpen(false);
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      address: '',
      phone: ''
    });
  };

  const features = [
    {
      icon: Award,
      title: 'Peşəkar Komanda',
      description: '25+ illik təcrübəyə malik mütəxəssislər'
    },
    {
      icon: Shield,
      title: '15 İl Zəmanət',
      description: 'Bütün işlərimizə uzunmüddətli zəmanət'
    },
    {
      icon: Target,
      title: 'Keyfiyyət Standartları',
      description: 'ISO 9001 sertifikatlaşdırılmış proseslər'
    },
    {
      icon: TrendingUp,
      title: 'İnnovasiya',
      description: 'Ən son texnologiya və materiallar'
    }
  ];

  const achievements = [
    { number: '150+', label: 'Tamamlanmış Layihə' },
    { number: '50+', label: 'Məmnun Müştəri' },
    { number: '25+', label: 'İllik Təcrübə' },
    { number: '100%', label: 'Keyfiyyət Zəmanəti' }
  ];

  const values = [
    'Müştəri məmnuniyyəti prioritetimizdir',
    'Yüksək keyfiyyət standartları',
    'Vaxtında və büdcə daxilində çatdırılma',
    'Şəffaf və etibarlı əməkdaşlıq',
    'Ekoloji cəhətdən təmiz materiallar',
    'Peşəkar texniki dəstək'
  ];

  return (
    <section className="py-20 bg-main relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d5b898' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 glass-effect rounded-full mb-6">
            <Users size={18} className="text-gold" />
            <span className="text-sm font-semibold text-white">Haqqımızda</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            STONE HOUSE Construction
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            25 ildən artıq təcrübəyə malik peşəkar tikinti şirkəti. Müasir texnologiyalar və 
            ənənəvi keyfiyyət standartlarını birləşdirərək, xəyallarınızdakı evi həyata keçiririk.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden elegant-shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
                alt="Construction Team"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent"></div>
              
              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 right-8 glass-effect rounded-xl p-6">
                <div className="grid grid-cols-2 gap-4">
                  {achievements.slice(0, 2).map((item, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-white mb-1">{item.number}</div>
                      <div className="text-xs text-gray-300 font-medium">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 gold-gradient rounded-2xl -z-10"></div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Niyə Bizi Seçməlisiniz?
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                STONE HOUSE Construction olaraq, hər bir layihəyə fərdi yanaşır və müştərilərimizin 
                ehtiyaclarını ən yüksək səviyyədə qarşılayırıq. Komandamız yalnız tikinti işləri ilə 
                məhdudlaşmır, həm də dizayn, planlaşdırma və texniki məsləhət xidmətləri təqdim edir.
              </p>

              {/* Values List */}
              <div className="space-y-3">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle2 size={20} className="text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{value}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="inline-flex items-center px-8 py-4 gold-gradient text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Menu size={20} className="mr-2" />
              Menu
            </button>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group glass-effect p-8 rounded-2xl border border-gold/20 hover:border-gold hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 gold-gradient rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={24} className="text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 glass-effect rounded-3xl p-12 border border-gold/20"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {achievements.map((item, index) => (
              <div key={index}>
                <div className="text-5xl font-bold text-gold mb-2">{item.number}</div>
                <div className="text-gray-300 font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Contact Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-main border border-gold/20 rounded-2xl p-8 w-full max-w-md relative"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            {/* Modal Header */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 gold-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Əlaqə Formu</h3>
              <p className="text-gray-300 text-sm">Məlumatlarınızı daxil edin və biz sizinlə əlaqə saxlayacağıq</p>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Ad
                  </label>
                  <div className="relative">
                    <User size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-dark/50 border border-gold/20 rounded-lg text-white placeholder-gray-400 focus:border-gold focus:outline-none transition-colors"
                      placeholder="Adınız"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Soyad
                  </label>
                  <div className="relative">
                    <User size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-dark/50 border border-gold/20 rounded-lg text-white placeholder-gray-400 focus:border-gold focus:outline-none transition-colors"
                      placeholder="Soyadınız"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Ünvan
                </label>
                <div className="relative">
                  <MapPin size={18} className="absolute left-3 top-3 text-gray-400" />
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    rows="3"
                    className="w-full pl-10 pr-4 py-3 bg-dark/50 border border-gold/20 rounded-lg text-white placeholder-gray-400 focus:border-gold focus:outline-none transition-colors resize-none"
                    placeholder="Ünvanınızı daxil edin"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Telefon Nömrəsi
                </label>
                <div className="relative">
                  <Phone size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-dark/50 border border-gold/20 rounded-lg text-white placeholder-gray-400 focus:border-gold focus:outline-none transition-colors"
                    placeholder="+994 XX XXX XX XX"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 gold-gradient text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300"
              >
                Göndər
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default AboutSection;
