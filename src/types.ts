export type SectionId = 'home' | 'about' | 'focus' | 'journey' | 'work' | 'next' | 'contact';

export interface SectionMeta {
  id: SectionId;
  number: string;
  name: string;
  code: string;
  color: string;
}

export interface ProjectItem {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  icon: 'crescent' | 'globe' | 'star';
  status: string;
  highlights: string[];
  githubUrl?: string;
}

export interface SignalModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: 'message' | 'project';
  selectedProject?: ProjectItem | null;
}
