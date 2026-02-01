import { useState } from 'react';
import { Search, Filter, Calendar, MapPin, Users, Award } from 'lucide-react';

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filters = [
    { id: 'all', name: 'Hamısı', count: 24 },
    { id: 'residential', name: 'Yaşayış', count: 12 },
    { id: 'commercial', name: 'Ticarət', count: 8 },
    { id: 'industrial', name: 'Sənaye', count: 4 }
  ];

  const projects = [
    {
      id: 1,
      title: 'Lüks Villa Kompleksi',
      category: 'residential',
      location: 'Bakı, Yasamal',
      year: '2024',
      area: '450m²',
      status: 'Tamamlandı',
      image: '/api/placeholder/400/300',
      description: 'Modern dizayn və ənənəvi elementlərin mükəmməl birləşməsi'
    },
    {
      id: 2,
      title: 'Biznes Mərkəzi',
      category: 'commercial',
      location: 'Bakı, Nəsimi',
      year: '2023',
      area: '1200m²',
      status: 'Davam edir',
      image: '/api/placeholder/400/300',
      description: 'Müasir ofis binası və ticarət mərkəzi'
    },
    {
      id: 3,
      title: 'Sənaye Anbarı',
      category: 'industrial',
      location: 'Sumqayıt',
      year: '2023',
      area: '2500m²',
      status: 'Tamamlandı',
      image: '/api/placeholder/400/300',
      description: 'Yüksək texnologiyalı sənaye kompleksi'
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = activeFilter === 'all' || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
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
              Layihələrimiz
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Hər layihə bizim üçün yeni bir macəradır. Müştərilərimizin arzularını həqiqətə çevirməkdən qürur duyuruq.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Award, number: '150+', label: 'Tamamlanmış Layihə' },
              { icon: Users, number: '50+', label: 'Məmnun Müştəri' },
              { icon: Calendar, number: '25+', label: 'İllik Təcrübə' },
              { icon: MapPin, number: '15+', label: 'Şəhər' }
            ].map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all">
                <stat.icon className="w-8 h-8 text-gold mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="container mx-auto px-4 mb-12">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
              <input
                type="text"
                placeholder="Layihə axtarın..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm rounded-xl text-white placeholder-white/60 border border-white/20 focus:border-gold focus:outline-none transition-colors"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-4 py-2 rounded-xl font-medium transition-all ${
                    activeFilter === filter.id
                      ? 'bg-gold text-main shadow-lg'
                      : 'bg-white/10 backdrop-blur-sm text-white/80 hover:bg-white/20 border border-white/20'
                  }`}
                >
                  {filter.name} ({filter.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all group">
              {/* Project Image */}
              <div className="relative h-64 bg-gradient-to-br from-dark to-main overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Tamamlandı' 
                      ? 'bg-green-500/20 text-green-300 border border-green-400/30'
                      : 'bg-yellow-500/20 text-yellow-300 border border-yellow-400/30'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center text-white/90 text-sm mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    {project.location}
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-gold uppercase tracking-wider">
                    {filters.find(f => f.id === project.category)?.name}
                  </span>
                  <span className="text-xs text-white/60">{project.year}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gold transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-white/70 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-white/60">
                    <span className="font-medium">{project.area}</span>
                  </div>
                  <button className="px-4 py-2 bg-gold rounded-lg text-main font-medium hover:bg-gold/90 transition-colors hover:scale-105 transform">
                    Ətraflı
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

export default ProjectsPage;