
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { projectsAPI, Project } from "@/services/api";
import { toast } from "sonner";

interface ProjectFormProps {
  project?: Project | null;
  onSuccess: () => void;
  onCancel: () => void;
}

const ProjectForm = ({ project, onSuccess, onCancel }: ProjectFormProps) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    img: "",
    url: "",
    tags: "",
    category: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (project) {
      setFormData({
        title: project.title,
        description: project.description,
        img: project.img,
        url: project.url,
        tags: project.tags.join(", "),
        category: project.category,
      });
    }
  }, [project]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const projectData = {
        ...formData,
        tags: formData.tags.split(",").map(tag => tag.trim()),
      };

      if (project?._id) {
        await projectsAPI.update(project._id, projectData);
        toast.success("Project updated successfully");
      } else {
        await projectsAPI.create(projectData);
        toast.success("Project created successfully");
      }
      onSuccess();
    } catch (error) {
      toast.error("Failed to save project");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />
      </div>
      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          required
        />
      </div>
      <div>
        <Label htmlFor="img">Image URL</Label>
        <Input
          id="img"
          type="url"
          value={formData.img}
          onChange={(e) => setFormData({ ...formData, img: e.target.value })}
          required
        />
      </div>
      <div>
        <Label htmlFor="url">Project URL</Label>
        <Input
          id="url"
          type="url"
          value={formData.url}
          onChange={(e) => setFormData({ ...formData, url: e.target.value })}
          required
        />
      </div>
      <div>
        <Label htmlFor="tags">Tags (comma separated)</Label>
        <Input
          id="tags"
          value={formData.tags}
          onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
          placeholder="React, TypeScript, Node.js"
          required
        />
      </div>
      <div>
        <Label htmlFor="category">Category</Label>
        <Input
          id="category"
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          required
        />
      </div>
      <div className="flex justify-end space-x-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Saving..." : project ? "Update" : "Create"}
        </Button>
      </div>
    </form>
  );
};

export default ProjectForm;
