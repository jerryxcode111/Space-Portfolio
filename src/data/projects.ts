import { ProjectItem } from '../types';

/**
 * Easily add, edit, or reorder your projects here!
 * Simply copy-paste a block to add a new project.
 */
export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'orbit-mobile',
    num: '01',
    title: 'Orbit Mobile',
    category: 'Spatial Note App',
    subtitle: 'Flutter & Dart Mobile Architecture',
    tagline: 'Gesture-driven spatial note canvas with offline-first SQLite sync.',
    description: 'A fluid cross-platform mobile client designed with zero-friction gestures, offline-first SQLite sync, and reactive Riverpod state management.',
    year: '2026',
    tech: ['Flutter', 'Dart', 'Riverpod', 'SQLite'],
    accentColor: '#C9D3F0',
    color: '#C9D3F0',
    icon: 'crescent',
    status: 'ACTIVE',
    highlights: [
      '60 FPS gesture-driven orbital timeline interface',
      'Bi-directional offline-first synchronization with SQLite',
      'Modular Clean Architecture with isolated Riverpod state',
    ],
    liveUrl: 'https://j-dev.me/#work',
    githubUrl: 'https://github.com/jerryxcode111',
  },
  {
    id: 'celestial-ui',
    num: '02',
    title: 'Celestial UI Kit',
    category: 'Component Library',
    subtitle: 'Design System & Motion Primitives',
    tagline: 'Physics-based spring curves, WCAG AA compliance, and dark-matter tokens.',
    description: 'An accessible, high-performance Flutter widget library featuring physics-based spring curves, WCAG AA compliance, and dark-matter theme tokens.',
    year: '2026',
    tech: ['Flutter SDK', 'CustomPainter', 'Vector Math'],
    accentColor: '#769CFF',
    color: '#769CFF',
    icon: 'globe',
    status: 'V1.4',
    highlights: [
      'Zero-dependency reactive widget primitives',
      'Sub-16ms layout calculations optimized for budget Android hardware',
      'Automated CI golden image regression pipeline',
    ],
    liveUrl: 'https://github.com/jerryxcode111',
    githubUrl: 'https://github.com/jerryxcode111',
  },
  {
    id: 'aura-telemetry',
    num: '03',
    title: 'Aura Telemetry',
    category: 'Real-Time Protocol',
    subtitle: 'Real-time WebSocket & Protocol Client',
    tagline: 'Real-time mobile API telemetry monitor with background isolates & stream buffering.',
    description: 'An observatory instrument app built for real-time mobile API telemetry monitoring with background isolates, binary protocol buffering, and low-latency packet streaming.',
    year: '2026',
    tech: ['Dart Async', 'WebSockets', 'Isolates'],
    accentColor: '#E8A85A',
    color: '#E8A85A',
    icon: 'star',
    status: 'LIVE',
    highlights: [
      'Multi-threaded Dart isolate workers for zero UI stutter',
      'Live packet visualizer with logarithmic timeline scales',
      'Exportable session logs and protocol buffer diagnostics',
    ],
    liveUrl: 'https://github.com/jerryxcode111',
    githubUrl: 'https://github.com/jerryxcode111',
  },
];
