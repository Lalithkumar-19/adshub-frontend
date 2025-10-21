import React, { useState, useEffect } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { projectsAPI } from '@/services/api';
import { Project } from '@/types/project';

interface OurWorkSectionProps {
  title?: string;
  subtitle?: string;
  badgeText?: string;
}

const OurWorkSection = ({
  title = "Our Creative Portfolio",
  subtitle = "Explore our latest campaigns and innovative solutions that drive results for forward-thinking brands.",
  badgeText = "Case Studies"
}: OurWorkSectionProps) => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await projectsAPI.getAll();
        // Get first 10 projects
        const projectsData = response.data.projects;
        console.log(projectsData, "f");
        setProjects(projectsData);

      } catch (err) {
        setError('Failed to fetch projects');
        console.error('Error fetching projects:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  console.log(projects, "projects");
  if (projects.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>No projects available</p>
      </div>
    )
  }
  return (
    <section className="w-full py-20 lg:py-32 bg-gradient-to-br from-black via-gray-900 to-purple-900/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-6 items-center text-center max-w-3xl mx-auto">
            <div className="bg-purple-900/50 text-purple-300 border-purple-700 px-4 py-1 rounded-full text-sm font-semibold">
              {badgeText}
            </div>
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                {title}
              </h2>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
                {subtitle}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading ? (
              <div className="col-span-full text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
                <p className="mt-4 text-gray-400">Loading projects...</p>
              </div>
            ) : error ? (
              <div className="col-span-full text-center py-12">
                <p className="text-red-400">{error}</p>
                <button
                  onClick={() => window.location.reload()}
                  className="mt-4 px-4 py-2 bg-purple-700 text-white rounded hover:bg-purple-600 transition-colors"
                >
                  Try Again
                </button>
              </div>
            ) : projects.length > 0 ? (
              projects.map((project) => (
                <div key={project._id} className="group bg-gray-800 border border-gray-700 rounded-xl p-6 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 hover:border-purple-600 hover:scale-[1.02]">
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        {project.tags?.map((tech, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-900/50 text-purple-300 border border-purple-700 hover:bg-purple-800 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      {project.url && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 border-purple-700 text-black hover:bg-purple-900/50 hover:border-purple-500 hover:text-white group/btn transition-all"
                          onClick={() => window.open(project.url, '_blank')}
                        >
                          <span>View Campaign</span>
                          <ExternalLink className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 border-gray-600 text-gray-400 hover:bg-gray-700 hover:border-gray-500 hover:text-white group/btn transition-all"
                          onClick={() => window.open(project.githubUrl, '_blank')}
                        >
                          <span>Case Study</span>
                          <Github className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      )}
                    </div>
                  </div>
                 
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-400">No projects available</p>
              </div>
            )}
          </div>
          <Button 
          size="sm"
          onClick={() => window.location.href = '/projects'}
          variant="outline"
          className='w-[150px] h-12 rounded-md mx-auto border-purple-700 text-black hover:bg-purple-900/50 hover:border-purple-500 hover:text-white transition-all'>
            View All Work
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OurWorkSection;