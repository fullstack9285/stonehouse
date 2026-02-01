import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

// TikTok icon component (lucide doesn't have it)
const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

// WhatsApp icon component
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

// Facebook icon component
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

// Instagram icon component
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const Footer = () => {
  const { t } = useLanguage();

  const footerLinks = [
    { name: t('home'), path: '/' },
    { name: t('projects'), path: '/projects' },
    { name: t('portfolio'), path: '/portfolio' },
    { name: t('services'), path: '/services' },
    { name: t('contact'), path: '/contact' }
  ];

  const contactInfo = {
    address: t('address'),
    phones: ['+994 51 511 12 12', '+994 55 806 00 22'],
    email: 'stonehouse022@gmail.com',
    workingHours: {
      weekdays: 'Bazar ertəsi - Cümə: 09:00 - 18:00',
      saturday: 'Şənbə: 10:00 - 16:00',
      sunday: 'Bazar: Qapalı'
    }
  };

  const socialLinks = [
    { icon: FacebookIcon, href: 'https://facebook.com/YOUR_PROFILE', label: 'Facebook' },
    { icon: InstagramIcon, href: 'https://instagram.com/YOUR_PROFILE', label: 'Instagram' },
    { icon: TikTokIcon, href: 'https://tiktok.com/@YOUR_PROFILE', label: 'TikTok' },
    { icon: WhatsAppIcon, href: 'https://wa.me/994515111212', label: 'WhatsApp' }
  ];

  return (
    <footer className="bg-dark text-white font-poppins">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-14 h-14 stone-gradient rounded-lg flex items-center justify-center shadow-xl">
                <span className="text-white text-2xl font-bold font-serif">S</span>
              </div>
              <div>
                <h3 className="text-xl font-bold font-serif text-white">STONE HOUSE</h3>
                <p className="text-xs text-white/60 tracking-wider uppercase">Construction</p>
              </div>
            </div>
            <p className="text-white/80 mb-6 text-sm leading-relaxed">
              Professional daş ev tikintisi və müasir konstruksiya həlləri. 
              Layihənizin hər mərhələsində yanınızdayıq.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 bg-white/10 backdrop-blur-sm hover:bg-gold rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg border border-white/20"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-bold font-serif mb-6 relative inline-block text-white">
              Sürətli Keçidlər
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gold"></span>
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-white/80 hover:text-gold transition-colors flex items-center group text-sm"
                  >
                    <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold font-serif mb-6 relative inline-block text-white">
              {t('contact')}
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gold"></span>
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-gold mt-1 flex-shrink-0" />
                <p className="text-white/80 text-sm leading-relaxed break-words">
                  {contactInfo.address}
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <Phone size={18} className="text-gold mt-1 flex-shrink-0" />
                <div className="space-y-2">
                  {contactInfo.phones.map((phone, index) => (
                    <a
                      key={index}
                      href={`tel:${phone.replace(/\s/g, '')}`}
                      className="block text-white/80 hover:text-gold transition-colors text-sm font-medium"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail size={18} className="text-gold mt-1 flex-shrink-0" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-white/80 hover:text-gold transition-colors text-sm break-all"
                >
                  {contactInfo.email}
                </a>
              </div>

              <div className="flex items-start space-x-3 pt-2">
                <Clock size={18} className="text-gold mt-1 flex-shrink-0" />
                <div className="text-sm space-y-1">
                  <p className="text-white/80">{contactInfo.workingHours.weekdays}</p>
                  <p className="text-white/60">{contactInfo.workingHours.saturday}</p>
                  <p className="text-white/50">{contactInfo.workingHours.sunday}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-white/60 text-sm">{t('copyright')}</p>
              <p className="text-white/40 text-xs mt-1">
                VÖEN: 123456789 | Qeydiyyat nömrəsi: 987654321
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2.5 bg-gold text-main font-semibold text-sm rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <MapPin size={16} className="mr-2" />
                {t('mapLocation')}
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center px-5 py-2.5 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold text-sm rounded-lg transition-colors border border-white/20"
              >
                {t('onlineApplication')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
