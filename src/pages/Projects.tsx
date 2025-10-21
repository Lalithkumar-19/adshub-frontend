import { Button } from "@/components/ui/button";
import Masonry from 'react-masonry-css'
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Sparkles,
  ExternalLink,
  Filter,
} from "lucide-react";
import { useState, useEffect } from "react";
import { projectsAPI, type Project, type Filters, type ProjectFilters } from "@/services/api";

// Filter options from API
const Filters = {
  IndustryFilters: [],
  TechStacksFilters: []
};
const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [projects, setProjects] = useState<Project[]>([]);
  const [filters, setFilters] = useState<Filters>({
    IndustryFilters: [],
    TechStacksFilters: []
  });
  const [selectedFilters, setSelectedFilters] = useState<ProjectFilters>({
    page: 1,
    limit: 10,
    category: "All",
    tags: []
  });
  const [totalPages, setTotalPages] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  // Fetch filters from API
  useEffect(() => {
    const fetchFilters = async () => {
      try {
        const response = await projectsAPI.getFilters();
        setFilters(response.data);
      } catch (err) {
        console.error('Error fetching filters:', err);
        setError('Failed to load filters');
      }
    };

    fetchFilters();
  }, []);

  // Fetch projects based on filters and pagination
  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true);
      try {
        const params = {
          page: currentPage,
          limit: selectedFilters.limit,
          ...(selectedFilters.category !== 'All' && { category: selectedFilters.category }),
          ...(selectedFilters.tags.length > 0 && { tags: selectedFilters.tags })
        };

        const response = await projectsAPI.getFiltered(params);
        setProjects(response.data.projects);
        setTotalCount(response.data.totalCount);
        setTotalPages(response.data.totalPages);
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError('Failed to load projects');
        setProjects([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, [selectedFilters, currentPage]);

  // Handle filter changes
  const handleFilterChange = (filterType: string, value: string) => {
    if (filterType === "category") {
      setSelectedFilters((prev) => ({
        ...prev,
        category: value,
      }));
    } else if (filterType === "techStack") {
      setSelectedFilters((prev) => ({
        ...prev,
        tags: value === "All" ? [] : [value],
      }));
    }
    setCurrentPage(1);
  };

  const filterOptions = [
    {
      name: "Industry",
      type: "category",
      options: ["All", ...(filters.IndustryFilters || [])],
    },
    {
      name: "Tech Stack",
      type: "techStack",
      options: ["All", ...(filters.TechStacksFilters || [])],
    },
  ];

  return (
    <div className="min-h-screen mt-10 bg-gradient-to-br from-gray-900 via-purple-900/20 to-black relative overflow-hidden">
      {/* Magical background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-800/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-2000"></div>

        {/* Floating sparkles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          >
            <Sparkles className="w-4 h-4 text-purple-400/40" />
          </div>
        ))}
      </div>

      {/* Hero Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center items-center mb-6">
              <Star
                className="w-8 h-8 text-purple-500 mr-3 animate-spin"
                style={{ animationDuration: "4s" }}
              />
              <h1 className="text-5xl font-bold bg-gradient-to-r h-20 from-white via-purple-400 to-purple-600 bg-clip-text text-transparent">
                Our  Portfolio
              </h1>
              <Star
                className="w-8 h-8 text-purple-500 ml-3 animate-spin"
                style={{
                  animationDuration: "4s",
                  animationDirection: "reverse",
                }}
              />
            </div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Discover our successful portofolios where creativity meets strategy. 
              Each project showcases our expertise in driving brand growth and delivering 
              measurable results through innovative marketing solutions.
            </p>
            {totalCount > 0 && (
              <div className="mt-6 inline-flex items-center bg-gray-800/70 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-purple-700/50">
                <Sparkles className="w-4 h-4 text-purple-400 mr-2" />
                <span className="text-sm font-medium text-gray-300">
                  Showcasing {projects.length} of {totalCount} 
                </span>
              </div>
            )}
          </div>

          {/* Enhanced Filters */}
          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <div className="flex items-center mb-4">
              <Filter className="w-5 h-5 text-purple-400 mr-2" />
              <span className="text-lg font-semibold text-white">
                Filter portofolios:
              </span>
            </div>
            {filterOptions.map((filter, index) => (
              <div key={index} className="relative group">
                <select
                  className="appearance-none bg-gray-800/80 backdrop-blur-sm border-2 border-purple-700 rounded-2xl px-6 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 shadow-lg hover:shadow-xl transition-all duration-300 font-medium text-white"
                  value={
                    filter.type === "category"
                      ? selectedFilters.category
                      : selectedFilters.tags?.[0] || "All"
                  }
                  onChange={(e) =>
                    handleFilterChange(filter.type, e.target.value)
                  }
                >
                  <option value="All">All {filter.name}</option>
                  {filter.options.slice(1).map((option, optionIndex) => (
                    <option key={optionIndex} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <ChevronRight className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-purple-400 rotate-90 pointer-events-none group-hover:text-purple-300 transition-colors" />
              </div>
            ))}
          </div>

          {/* Projects Grid */}
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="relative">
                <div className="w-16 h-16 border-4 border-purple-700 border-t-purple-400 rounded-full animate-spin mb-4"></div>
                <Sparkles className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-purple-400 animate-pulse" />
              </div>
              <div className="text-xl text-gray-300 font-medium">
                Loading our Portofolio...
              </div>
            </div>
          ) : projects.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🎯</div>
              <div className="text-xl text-gray-300 font-medium">
                No Portofolio found with these filters.
              </div>
              <div className="text-gray-400 mt-2">
                Try adjusting your search criteria to discover more success stories!
              </div>
            </div>
          ) : (
            <>
              <Masonry
                breakpointCols={{
                  default: 4,
                  1100: 3,
                  700: 2,
                  500: 1
                }}
                className="w-full flex gap-3 justify-center"
              >
                {projects.map((project, index) => (
                  <div
                    key={project._id || index}
                    className="group cursor-pointer W-[500PX] relative m-5"
                    onMouseEnter={() => setHoveredProject(project._id)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    <div className="relative bg-gray-800 rounded-3xl p-6 flex flex-col justify-between transition-all duration-500 group-hover:scale-105 group-hover:rotate-1 shadow-lg hover:shadow-2xl border border-purple-700/50 overflow-hidden">
                      {/* Magical glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-purple-400/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                      {/* Floating sparkle on hover */}
                      {hoveredProject === project._id && (
                        <div className="absolute top-4 right-4 animate-bounce">
                          <Star className="w-5 h-5 text-purple-400" />
                        </div>
                      )}

                      <div className="relative z-10">
                        <div className="w-full h-40 bg-gradient-to-br from-gray-700 to-purple-900/50 rounded-2xl mb-4 overflow-hidden shadow-inner border border-gray-600">
                          <img
                            src={project.img}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm mb-4 text-gray-300 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <div className="relative z-10">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-purple-900/50 to-purple-800/50 text-purple-300 font-medium shadow-sm hover:shadow-md transition-shadow border border-purple-700/50"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-semibold text-purple-400 bg-purple-900/50 px-3 py-1 rounded-full border border-purple-700/50">
                            {project.category}
                          </span>
                          {project.url && (
                            <a
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-xs bg-gradient-to-r from-purple-600 to-purple-800 text-white px-3 py-2 rounded-full hover:from-purple-500 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 border border-purple-500/50"
                            >
                              <ExternalLink className="w-3 h-3 mr-1" />
                              View 
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Masonry>

              {/* Enhanced Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center space-x-3 mt-12">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="rounded-full border-2 border-purple-700 hover:bg-purple-900/50 hover:border-purple-500 transition-all duration-300 disabled:opacity-50 text-black"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>

                  {[...Array(totalPages)].map((_, index) => (
                    <Button
                      key={index}
                      variant={
                        currentPage === index + 1 ? "default" : "outline"
                      }
                      size="sm"
                      onClick={() => setCurrentPage(index + 1)}
                      className={`rounded-full transition-all duration-300 ${currentPage === index + 1
                          ? "bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 shadow-lg text-black"
                          : "border-2 border-purple-700 hover:bg-purple-900/50 hover:border-purple-500 text-black"
                        }`}
                    >
                      {index + 1}
                    </Button>
                  ))}

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      setCurrentPage(Math.min(totalPages, currentPage + 1))
                    }
                    disabled={currentPage === totalPages}
                    className="rounded-full border-2 border-purple-700 hover:bg-purple-900/50 hover:border-purple-500 transition-all duration-300 disabled:opacity-50 text-black"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;