import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Play } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const HeroSection = () => {
  const { t } = useLanguage();

  const features = [
    'Peşəkar Tikinti Komandası',
    'Keyfiyyətli Materiallar',
    'Vaxtında Çatdırılma',
    '15 İl Zəmanət'
  ];

  const stats = [
    { number: '150+', label: 'Layihə', subtitle: 'Tamamlanmış' },
    { number: '50+', label: 'Müştəri', subtitle: 'Məmnun' },
    { number: '25+', label: 'İl', subtitle: 'Təcrübə' },
    { number: '100%', label: 'Zəmanət', subtitle: 'Keyfiyyət' }
  ];

  return (
    <section className="relative min-h-screen bg-main overflow-hidden font-poppins">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-8rem)]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Company Badge */}
            <div className="inline-flex items-center space-x-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <div className="w-3 h-3 bg-gold rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-white tracking-wide">
                "Stone House Construction" şirkəti
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                {t("maintitle")}
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold text-gold leading-tight">
                15 İLLİK İPOTEKA
              </h2>
            </div>

            {/* Loan Info */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-2xl font-bold text-gold mb-1">İLLİK 12%-DƏN</div>
                  <div className="text-white/80 text-sm">Faiz dərəcəsi</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gold mb-1">İLKİN ÖDƏNIŞ 15%-DƏN</div>
                  <div className="text-white/80 text-sm">Minimum ödəniş</div>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border-l-4 border-gold">
              <p className="text-lg text-white/90 italic mb-2">
                "Layihələrimiz imzamızdır!"
              </p>
              <p className="text-white/70 text-sm leading-relaxed">
                Şirkətimiz sadiq qalırıq, keyfiyyət və estetikliyin artırılması ilə əlaqədar.
                Müştərilərimizin tələblərinə və 100 il ərzində təcrübəmizə əsaslanaraq,
                müştərilərimizin layihələrini həyata keçiririk.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle2 size={18} className="text-gold flex-shrink-0" />
                  <span className="text-white/90 font-medium text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="/contact"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gold text-main font-bold rounded-xl shadow-lg hover:shadow-xl hover:bg-gold/90 transform hover:scale-105 transition-all duration-300"
              >
                <span>Layihəyə Başla</span>
                <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <button className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300">
                <Play className="mr-3" size={20} />
                Video İzlə
              </button>
            </div>
          </motion.div>

          {/* Right Content - 3D House Model */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main House Container */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                  alt="3D House Model"
                  className="w-full h-[500px] object-cover rounded-3xl"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-main/60 via-transparent to-transparent rounded-3xl"></div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -bottom-8 -left-4 right-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      className="bg-white/95 backdrop-blur-sm rounded-xl p-4 text-center shadow-lg"
                    >
                      <div className="text-2xl font-bold text-main mb-1">
                        {stat.number}
                      </div>
                      <div className="text-xs text-main/80 font-medium">
                        {stat.label}
                      </div>
                      <div className="text-xs text-main/60">
                        {stat.subtitle}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gold/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/20 rounded-full blur-lg"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-xs text-white/60 font-medium tracking-wider uppercase">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
            <div className="w-1 h-3 bg-gold rounded-full animate-bounce"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
