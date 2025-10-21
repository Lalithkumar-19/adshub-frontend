import React from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-48">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          {project.liveUrl && (
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
              target="_blank"
              href={project.liveUrl}
            >
              Live Demo
              <ExternalLink className="w-4 h-4" />
            </Button>
          )}
          {project.githubUrl && (
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
              target="_blank"
              href={project.githubUrl}
            >
              GitHub
              <ExternalLink className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
