import { useState } from 'react';
import { Play, Image, Video, Grid, List, Filter, Search } from 'lucide-react';

const GalleryPage = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');

  const tabs = [
    { id: 'all', name: 'Hamısı', count: 48 },
    { id: 'photos', name: 'Şəkillər', count: 32 },
    { id: 'videos', name: 'Videolar', count: 12 },
    { id: 'before-after', name: 'Əvvəl/Sonra', count: 8 }
  ];

  const galleryItems = [
    {
      id: 1,
      type: 'photo',
      title: 'Modern Villa İnteryer',
      category: 'Yaşayış',
      image: '/api/placeholder/400/300',
      description: 'Lüks villa daxili dizaynı'
    },
    {
      id: 2,
      type: 'video',
      title: 'Tikinti Prosesi',
      category: 'Proses',
      image: '/api/placeholder/400/300',
      description: 'Layihənin başlanğıcdan sonuna qədər'
    },
    {
      id: 3,
      type: 'before-after',
      title: 'Renovasiya Nəticəsi',
      category: 'Renovasiya',
      image: '/api/placeholder/400/300',
      description: 'Köhnə binanın müasir görünüşü'
    },
    {
      id: 4,
      type: 'photo',
      title: 'Biznes Mərkəzi',
      category: 'Ticarət',
      image: '/api/placeholder/400/300',
      description: 'Müasir ofis binası'
    },
    {
      id: 5,
      type: 'video',
      title: '3D Vizualizasiya',
      category: 'Dizayn',
      image: '/api/placeholder/400/300',
      description: 'Layihənin 3D modeli'
    },
    {
      id: 6,
      type: 'photo',
      title: 'Sənaye Kompleksi',
      category: 'Sənaye',
      image: '/api/placeholder/400/300',
      description: 'Böyük miqyaslı sənaye layihəsi'
    }
  ];

  const filteredItems = galleryItems.filter(item => {
    const matchesTab = activeTab === 'all' ||
      (activeTab === 'photos' && item.type === 'photo') ||
      (activeTab === 'videos' && item.type === 'video') ||
      (activeTab === 'before-after' && item.type === 'before-after');
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });

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
              Qalereya
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              İşlərimizin nəticələrini görün. Hər layihə bizim üçün yeni bir uğur hekayəsidir.
            </p>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="container mx-auto px-4 mb-12">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
              <input
                type="text"
                placeholder="Qalereyada axtarın..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm rounded-xl text-white placeholder-white/60 border border-white/20 focus:border-gold focus:outline-none transition-colors"
              />
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-xl font-medium transition-all ${activeTab === tab.id
                    ? 'bg-gold text-main shadow-lg'
                    : 'bg-white/10 backdrop-blur-sm text-white/80 hover:bg-white/20 border border-white/20'
                    }`}
                >
                  {tab.name} ({tab.count})
                </button>
              ))}
            </div>

            {/* View Mode */}
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-gold text-main' : 'bg-white/10 backdrop-blur-sm text-white/80 hover:bg-white/20 border border-white/20'
                  }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-all ${viewMode === 'list' ? 'bg-gold text-main' : 'bg-white/10 backdrop-blur-sm text-white/80 hover:bg-white/20 border border-white/20'
                  }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>


      <div className="container mx-auto px-4">
        <div className={`grid gap-8 ${viewMode === 'grid'
          ? 'md:grid-cols-2 lg:grid-cols-3'
          : 'grid-cols-1 max-w-4xl mx-auto'
          }`}>
          {filteredItems.map((item) => (
            <div key={item.id} className={`bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all group ${viewMode === 'list' ? 'flex' : ''
              }`}>
              {/* Image */}
              <div className={`relative bg-gradient-to-br from-dark to-main overflow-hidden ${viewMode === 'list' ? 'w-80 h-48' : 'h-64'
                }`}>
                <div className="absolute inset-0 bg-black/20"></div>

                {/* Type Indicator */}
                <div className="absolute top-4 left-4">
                  <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
                    {item.type === 'video' && <Video className="w-4 h-4 text-white" />}
                    {item.type === 'photo' && <Image className="w-4 h-4 text-white" />}
                    {item.type === 'before-after' && <Filter className="w-4 h-4 text-white" />}
                    <span className="text-xs text-white font-medium">
                      {item.type === 'video' ? 'Video' :
                        item.type === 'before-after' ? 'Əvvəl/Sonra' : 'Şəkil'}
                    </span>
                  </div>
                </div>

                {/* Play Button for Videos */}
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all hover:scale-110">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </button>
                  </div>
                )}

                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-gold rounded-full text-xs font-medium text-main">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gold transition-colors">
                  {item.title}
                </h3>

                <p className="text-white/70 text-sm mb-4">
                  {item.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/60 uppercase tracking-wider">
                    {item.category}
                  </span>
                  <button className="px-4 py-2 bg-gold rounded-lg text-main font-medium hover:bg-gold/90 transition-all hover:scale-105">
                    Bax
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all hover:scale-105">
            Daha Çox Yüklə
          </button>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;