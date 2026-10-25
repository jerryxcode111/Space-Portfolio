import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, ExternalLink, Sparkles, Terminal } from 'lucide-react';
import { SignalModalProps } from '../types';

export const SignalModal: React.FC<SignalModalProps> = ({
  isOpen,
  onClose,
  initialType = 'message',
  selectedProject,
}) => {
  const [activeTab, setActiveTab] = useState<'message' | 'project'>(
    selectedProject ? 'project' : initialType
  );
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('Mobile App Project');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'transmitting' | 'sent'>('idle');

  useEffect(() => {
    if (selectedProject) {
      setActiveTab('project');
    } else {
      setActiveTab('message');
    }
    setStatus('idle');
  }, [selectedProject, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('transmitting');
    setTimeout(() => {
      setStatus('sent');
    }, 900);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="signal-modal-title"
      className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-xl bg-[#090B12] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-[0_24px_80px_rgba(0,0,0,0.9)] flex flex-col max-h-[90vh] overflow-y-auto no-scrollbar relative"
      >
        {/* Top Header */}
        <div className="flex items-center justify-between pb-5 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#E8A85A] shadow-[0_0_8px_#E8A85A]" />
            <h3
              id="signal-modal-title"
              className="font-mono text-xs uppercase tracking-[0.2em] text-white/90 font-medium"
            >
              {selectedProject && activeTab === 'project'
                ? `SIGNAL TELEMETRY // ${selectedProject.num}`
                : 'COMMUNICATION FREQUENCY'}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal dialog"
            className="w-8 h-8 rounded-full bg-white/5 text-white/70 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab switch if viewing project or messaging */}
        {selectedProject && (
          <div className="flex items-center gap-2 pt-4">
            <button
              onClick={() => setActiveTab('project')}
              className={`px-4 py-1.5 rounded-full font-mono text-xs uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'project'
                  ? 'bg-[#BFA58A] text-[#05060A] font-semibold'
                  : 'bg-white/5 text-white/60 hover:text-white'
              }`}
            >
              Project Overview
            </button>
            <button
              onClick={() => setActiveTab('message')}
              className={`px-4 py-1.5 rounded-full font-mono text-xs uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'message'
                  ? 'bg-[#E8A85A] text-[#05060A] font-semibold'
                  : 'bg-white/5 text-white/60 hover:text-white'
              }`}
            >
              Transmit Signal
            </button>
          </div>
        )}

        {/* TAB 1: PROJECT DETAILS */}
        {selectedProject && activeTab === 'project' ? (
          <div className="pt-6 flex flex-col gap-5">
            <div>
              <span className="font-mono text-xs text-[#BFA58A] uppercase tracking-widest">
                Project {selectedProject.num}
              </span>
              <h4 className="font-headline font-bold text-2xl text-white mt-1">
                {selectedProject.title}
              </h4>
              <p className="font-body text-sm text-[#9FA4BC] mt-2">
                {selectedProject.description}
              </p>
            </div>

            {/* Tech Badges */}
            <div>
              <span className="font-mono text-[11px] uppercase tracking-wider text-white/50 block mb-2">
                Core Architecture & Stack
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs px-3 py-1 rounded-full bg-white/5 text-white/90 border border-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div className="bg-[#05060A]/60 p-4 rounded-2xl border border-white/5">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#BFA58A] flex items-center gap-2 mb-2 font-medium">
                <Terminal className="w-3.5 h-3.5" /> Key Engineering Highlights
              </span>
              <ul className="space-y-1.5 pl-4 list-disc text-xs sm:text-sm font-body text-white/80">
                {selectedProject.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => setActiveTab('message')}
                className="flex-1 h-11 rounded-full bg-[#E8A85A] text-[#05060A] font-body text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer hover:bg-[#E8A85A]/90 transition-all active:scale-95"
              >
                Inquire about this build
              </button>
              <a
                href={selectedProject.githubUrl || 'https://github.com/jerryxcode111'}
                target="_blank"
                rel="noopener noreferrer"
                className="h-11 px-5 rounded-full border border-white/15 text-white flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-wider hover:bg-white/10 transition-colors cursor-pointer"
              >
                <span>Code</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ) : (
          /* TAB 2: SEND SIGNAL MESSAGE FORM */
          <div className="pt-6">
            {status === 'sent' ? (
              <div className="py-8 flex flex-col items-center text-center gap-3 animate-fadeIn">
                <CheckCircle2 className="w-12 h-12 text-[#E8A85A]" />
                <h4 className="font-headline font-bold text-2xl text-white">
                  Signal Transmitted
                </h4>
                <p className="font-body text-sm text-[#9FA4BC] max-w-sm">
                  Thank you, {name || 'visitor'}. Your message has been logged into the transmission buffer.
                  You can also email directly at{' '}
                  <a
                    href="mailto:jerryxcode111@gmail.com"
                    className="text-[#E8A85A] underline underline-offset-4"
                  >
                    jerryxcode111@gmail.com
                  </a>
                  .
                </p>
                <button
                  onClick={() => {
                    setStatus('idle');
                    onClose();
                  }}
                  className="mt-4 px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white font-mono text-xs uppercase tracking-wider cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label
                    htmlFor="signal-name"
                    className="block font-mono text-[11px] uppercase tracking-wider text-white/70 mb-1.5"
                  >
                    Your Identity / Name
                  </label>
                  <input
                    id="signal-name"
                    required
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alex Vance"
                    className="w-full h-11 px-4 rounded-xl bg-white/5 border border-white/10 text-white font-body text-sm placeholder:text-white/30 focus:outline-none focus:border-[#E8A85A] transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="signal-email"
                    className="block font-mono text-[11px] uppercase tracking-wider text-white/70 mb-1.5"
                  >
                    Return Coordinate / Email
                  </label>
                  <input
                    id="signal-email"
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. alex@example.com"
                    className="w-full h-11 px-4 rounded-xl bg-white/5 border border-white/10 text-white font-body text-sm placeholder:text-white/30 focus:outline-none focus:border-[#E8A85A] transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="signal-cat"
                    className="block font-mono text-[11px] uppercase tracking-wider text-white/70 mb-1.5"
                  >
                    Signal Category
                  </label>
                  <select
                    id="signal-cat"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full h-11 px-4 rounded-xl bg-[#090B12] border border-white/10 text-white font-body text-sm focus:outline-none focus:border-[#E8A85A] transition-colors cursor-pointer"
                  >
                    <option value="Mobile App Project">Mobile App Project (Flutter / Dart)</option>
                    <option value="Collaboration">Open Source / Collaboration</option>
                    <option value="Freelance & Consulting">Freelance & Architecture Consulting</option>
                    <option value="General Greetings">General Inquiries / Say Hello</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="signal-msg"
                    className="block font-mono text-[11px] uppercase tracking-wider text-white/70 mb-1.5"
                  >
                    Transmission Message
                  </label>
                  <textarea
                    id="signal-msg"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your vision, timeline, or thoughts..."
                    className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white font-body text-sm placeholder:text-white/30 focus:outline-none focus:border-[#E8A85A] transition-colors resize-none"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <a
                    href="mailto:jerryxcode111@gmail.com"
                    className="font-mono text-xs text-[#9FA4BC] hover:text-[#E8A85A] transition-colors underline underline-offset-4"
                  >
                    Or open in mail client →
                  </a>

                  <button
                    type="submit"
                    disabled={status === 'transmitting'}
                    className="h-11 px-7 rounded-full bg-[#E8A85A] text-[#05060A] font-body text-xs font-semibold tracking-wider uppercase flex items-center gap-2 cursor-pointer hover:bg-[#E8A85A]/90 transition-all active:scale-95 disabled:opacity-50"
                  >
                    {status === 'transmitting' ? (
                      <>
                        <Sparkles className="w-4 h-4 animate-spin" />
                        <span>Transmitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Broadcast Signal</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
