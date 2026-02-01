import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Navigation } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const contactInfo = {
    address: 'Bakı şəh., Sabunçu ray., Bakıxanov qəsəbəsi, Şamil Kamilov küç., ev 2h',
    phones: [
      { number: '+994 51 511 12 12', type: 'Əsas' },
      { number: '+994 55 806 00 22', type: 'Növbəti' }
    ],
    email: 'stonehouse022@gmail.com',
    hours: {
      weekdays: 'Bazar ertəsi - Cümə: 09:00 - 18:00',
      saturday: 'Şənbə: 10:00 - 16:00',
      sunday: 'Bazar: Qapalı'
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form göndərildi:', formData);
    alert('Mesajınız göndərildi! Tezliklə sizinlə əlaqə saxlayacağıq.');
  };

  const openGoogleMaps = () => {
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactInfo.address)}`;
    window.open(mapsUrl, '_blank');
  };

  return (
    <div className="pt-24 pb-16 min-h-screen bg-main font-poppins">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Əlaqə Saxlayın
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Layihəniz üçün pulsuz konsultasiya almaq üçün bizimlə əlaqə saxlayın.
            Sizə 24 saat ərzində cavab verəcəyik.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {/* Address Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gold rounded-lg flex items-center justify-center">
                  <MapPin className="text-main" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">Ünvanımız</h3>
              </div>
              <div className="mb-4">
                <p className="text-white/80 p-3 bg-white/10 backdrop-blur-sm rounded-lg text-center border border-white/20">
                  {contactInfo.address}
                </p>
              </div>
              <button
                onClick={openGoogleMaps}
                className="w-full flex items-center justify-center space-x-2 bg-gold hover:bg-gold/90 text-main py-3 rounded-lg font-semibold transition-colors"
              >
                <Navigation size={20} />
                <span>Xəritədə Aç</span>
              </button>
            </div>

            {/* Phone Numbers */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gold rounded-lg flex items-center justify-center">
                  <Phone className="text-main" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">Telefon</h3>
              </div>
              <div className="space-y-3">
                {contactInfo.phones.map((phone, index) => (
                  <a 
                    key={index}
                    href={`tel:${phone.number.replace(/\s/g, '')}`}
                    className="flex items-center justify-between p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors group border border-white/20"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                        <Phone size={14} className="text-main" />
                      </div>
                      <span className="text-lg font-semibold text-white group-hover:text-gold">
                        {phone.number}
                      </span>
                    </div>
                    <span className="text-sm bg-gold text-main px-3 py-1 rounded-full">
                      {phone.type}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Email & Hours */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail size={20} className="text-gold mt-1" />
                  <div>
                    <h4 className="font-semibold text-white">Email</h4>
                    <a 
                      href={`mailto:${contactInfo.email}`}
                      className="text-white/80 hover:text-gold transition-colors"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 pt-4 border-t border-white/10">
                  <Clock size={20} className="text-gold mt-1" />
                  <div>
                    <h4 className="font-semibold text-white">İş Saatları</h4>
                    <p className="text-white/80 text-sm">{contactInfo.hours.weekdays}</p>
                    <p className="text-white/80 text-sm">{contactInfo.hours.saturday}</p>
                    <p className="text-white/60 text-sm">{contactInfo.hours.sunday}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6">
                Layihənizi Bizimlə Müzakirə Edin
              </h2>
              <p className="text-white/80 mb-8">
                Sizə zəng edib, layihəniz üçün pulsuz konsultasiya təklif edək.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white mb-2 font-medium">
                      Adınız *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all text-white placeholder-white/60"
                      placeholder="Ad və soyad"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white mb-2 font-medium">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all text-white placeholder-white/60"
                      placeholder="+994 __ ___ __ __"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white mb-2 font-medium">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all text-white placeholder-white/60"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-white mb-2 font-medium">
                    Mövzu
                  </label>
                  <select
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all text-white"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  >
                    <option value="" className="text-main">Mövzu seçin</option>
                    <option value="consultation" className="text-main">Pulsuz Konsultasiya</option>
                    <option value="project" className="text-main">Layihə Müzakirəsi</option>
                    <option value="price" className="text-main">Qiymət Təklifi</option>
                    <option value="visit" className="text-main">Ofisə Ziyarət</option>
                    <option value="other" className="text-main">Digər</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white mb-2 font-medium">
                    Mesajınız *
                  </label>
                  <textarea
                    rows="5"
                    required
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all resize-none text-white placeholder-white/60"
                    placeholder="Layihəniz haqqında ətraflı məlumat..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <button
                    type="submit"
                    className="flex-1 bg-gold hover:bg-gold/90 text-main py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all hover:scale-[1.02] min-w-[200px]"
                  >
                    <span>Mesaj Göndər</span>
                    <Send size={20} />
                  </button>
                  
                  <div className="flex items-center space-x-4">
                    <button
                      type="button"
                      className="px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg font-semibold hover:bg-white/20 transition-colors whitespace-nowrap text-white"
                      onClick={() => window.open(`tel:${contactInfo.phones[0].number.replace(/\s/g, '')}`, '_blank')}
                    >
                      Birbaşa Zəng
                    </button>
                    
                    <button
                      type="button"
                      onClick={openGoogleMaps}
                      className="px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg font-semibold hover:bg-white/20 transition-colors whitespace-nowrap flex items-center space-x-2 text-white"
                    >
                      <Navigation size={18} />
                      <span>Ünvana Gəl</span>
                    </button>
                  </div>
                </div>

                <p className="text-sm text-white/60 text-center pt-4 border-t border-white/10">
                  Formu doldurduqdan sonra 24 saat ərzində sizinlə əlaqə saxlayacağıq.
                  Həftəiçi 09:00-18:00 arası birbaşa ofisimizə də gələ bilərsiniz.
                </p>
              </form>
            </div>

            {/* Location Map Preview */}
            <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">
                Bizimlə harada görüşə bilərsiniz
              </h3>
              <div className="h-64 bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden relative border border-white/20">
                {/* Google Maps iframe burada olacaq */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-white/10 to-white/5">
                  <MapPin size={48} className="text-gold mb-4" />
                  <p className="text-white font-semibold text-center px-4">
                    {contactInfo.address}
                  </p>
                  <button
                    onClick={openGoogleMaps}
                    className="mt-4 px-6 py-2 bg-gold hover:bg-gold/90 text-main rounded-lg font-medium transition-colors"
                  >
                    Google Maps-də Aç
                  </button>
                </div>
              </div>
              
              <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-white/80">
                <div>
                  <span className="font-semibold">Rayon:</span> Sabunçu
                </div>
                <div>
                  <span className="font-semibold">Qəsəbə:</span> Bakıxanov
                </div>
                <div>
                  <span className="font-semibold">Küçə:</span> Şamil Kamilov
                </div>
                <div>
                  <span className="font-semibold">Ev:</span> 2h
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;