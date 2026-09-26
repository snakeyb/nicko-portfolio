import type { MarkdownInstance } from 'astro';

export interface ProjectData {
  title: string;
  organisation: string;
  category: string;
  featured: boolean;
  order: number;
  status: string;
  technologies: string[];
  summary: string;
  signal: string;
}

const modules = import.meta.glob<MarkdownInstance<ProjectData>>('../../content/projects/*.md', { eager: true });

export const projects = Object.entries(modules)
  .map(([path, module]) => ({ slug: path.split('/').pop()!.replace(/\.md$/, ''), ...module }))
  .sort((a, b) => a.frontmatter.order - b.frontmatter.order);
