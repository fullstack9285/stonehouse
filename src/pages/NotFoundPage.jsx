import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Home, ArrowLeft, Search, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const NotFoundPage = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const quickLinks = [
    { path: '/', name: t('home'), icon: Home },
    { path: '/projects', name: t('projects'), icon: Search },
    { path: '/gallery', name: t('gallery'), icon: Search },
    { path: '/services', name: t('services'), icon: Search },
    { path: '/contact', name: t('contact'), icon: Phone }
  ];

  return (
    <div className="min-h-screen bg-main font-poppins flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gold/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* 404 Number */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h1 className="text-[180px] md:text-[250px] font-bold leading-none">
              <span className="bg-gradient-to-br from-gold via-gold/80 to-gold/60 bg-clip-text text-transparent">
                404
              </span>
            </h1>
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Səhifə Tapılmadı
            </h2>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              Axtardığınız səhifə mövcud deyil və ya köçürülüb. 
              Zəhmət olmasa aşağıdakı keçidlərdən istifadə edin.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <ArrowLeft className="mr-3" size={20} />
              Geri Qayıt
            </button>
            <Link
              to="/"
              className="inline-flex items-center justify-center px-8 py-4 bg-gold text-main font-bold rounded-xl shadow-lg hover:shadow-xl hover:bg-gold/90 transform hover:scale-105 transition-all duration-300"
            >
              <Home className="mr-3" size={20} />
              Ana Səhifə
            </Link>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-white/60 text-sm uppercase tracking-wider mb-6">
              Sürətli Keçidlər
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="group p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 hover:border-gold/30 transition-all duration-300"
                >
                  <link.icon className="w-8 h-8 text-gold mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <span className="text-white/80 group-hover:text-white text-sm font-medium">
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Help Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 pt-8 border-t border-white/10"
          >
            <p className="text-white/50 text-sm">
              Əgər problem davam edərsə, bizimlə əlaqə saxlayın:{' '}
              <a 
                href="tel:+994515111212" 
                className="text-gold hover:text-gold/80 transition-colors"
              >
                +994 51 511 12 12
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
