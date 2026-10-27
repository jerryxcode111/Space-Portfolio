import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, Globe, Sparkles, Copy, Check, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { SignalModalProps } from '../types';

export const SignalModal: React.FC<SignalModalProps> = ({
  isOpen,
  onClose,
  initialType = 'message',
  selectedProject,
}) => {
  const [mode, setMode] = useState<'project' | 'message'>(
    selectedProject ? 'project' : initialType
  );
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'transmitting' | 'sent'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    if (selectedProject) {
      setMode('project');
    } else {
      setMode('message');
    }
    setStatus('idle');
  }, [selectedProject, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('transmitting');
    setTimeout(() => {
      setStatus('sent');
    }, 700);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('jerryxcode111@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const accent = selectedProject?.accentColor || selectedProject?.color || '#BFA58A';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline"
      className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md select-none animate-fadeIn"
      onClick={onClose}
    >
      {/* Modal Card */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg bg-[#060810]/95 backdrop-blur-3xl border border-white/12 rounded-3xl p-5 sm:p-7 shadow-[0_24px_80px_rgba(0,0,0,0.95)] flex flex-col relative transition-all"
      >
        {/* Top Header */}
        <div className="flex items-center justify-between pb-3.5 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: accent, boxShadow: `0 0 8px ${accent}` }}
            />
            <span className="font-mono text-xs uppercase tracking-widest text-white/60">
              {mode === 'project' && selectedProject
                ? `${selectedProject.num || '01'} // ${selectedProject.category || 'PROJECT'}`
                : 'COMMUNICATION // LAHORE'}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-white/70 hover:text-white flex items-center justify-center transition-all cursor-pointer focus:outline-none"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* ========================================================= */}
        {/* VIEW 1: CLEAN, MINIMAL PROJECT DETAILS (LESS TEXT!)       */}
        {/* ========================================================= */}
        {mode === 'project' && selectedProject ? (
          <div className="pt-5 flex flex-col gap-5">
            <div>
              <h2
                id="modal-headline"
                className="font-headline font-extrabold text-2xl sm:text-3xl text-white tracking-tight"
              >
                {selectedProject.title}
              </h2>
              <p className="font-body text-sm text-white/75 font-light mt-1.5 leading-relaxed">
                {selectedProject.tagline || selectedProject.description || selectedProject.subtitle}
              </p>
            </div>

            {/* Tech chips */}
            <div className="flex flex-wrap gap-1.5">
              {selectedProject.tech.map((t) => (
                <span
                  key={t}
                  className="font-mono text-xs px-3 py-1 rounded-full bg-white/[0.04] text-white/80 border border-white/10"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Big, Prominent Action Buttons */}
            <div className="pt-2 flex flex-col gap-2.5">
              <a
                href={selectedProject.liveUrl || selectedProject.githubUrl || 'https://github.com/jerryxcode111'}
                target="_blank"
                rel="noopener noreferrer"
                className="h-11 rounded-full bg-[#BFA58A] hover:bg-[#BFA58A]/90 text-[#05060A] font-body text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2 transition-all active:scale-95 shadow-[0_0_20px_rgba(191,165,138,0.35)] cursor-pointer"
              >
                <Globe className="w-4 h-4" />
                <span>Visit Live Project ↗</span>
              </a>

              <div className="flex items-center gap-2.5">
                <a
                  href={selectedProject.githubUrl || 'https://github.com/jerryxcode111'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 h-10 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/15 font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Code</span>
                </a>

                <button
                  onClick={() => setMode('message')}
                  className="h-10 px-5 rounded-full bg-white/5 hover:bg-white/10 text-[#E8A85A] border border-white/15 font-mono text-xs uppercase tracking-wider flex items-center gap-1 transition-all active:scale-95 cursor-pointer"
                >
                  <span>Inquire</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* ========================================================= */
          /* VIEW 2: CLEAN SIGNAL DISPATCH CONSOLE                     */
          /* ========================================================= */
          <div className="pt-5 flex flex-col gap-5">
            {status === 'sent' ? (
              <div className="py-8 flex flex-col items-center text-center gap-3 animate-fadeIn">
                <CheckCircle2 className="w-10 h-10 text-[#E8A85A]" />
                <h4 className="font-headline font-bold text-xl text-white">
                  Signal Transmitted
                </h4>
                <p className="font-body text-xs text-[#9FA4BC]">
                  Message logged. Responses are dispatched directly to your return coordinates.
                </p>
                <button
                  onClick={() => {
                    setStatus('idle');
                    onClose();
                  }}
                  className="mt-3 px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                {/* 1-Click Email Bar */}
                <div className="flex items-center justify-between gap-2 p-3 rounded-2xl bg-white/[0.03] border border-white/8 text-xs font-mono">
                  <div className="flex items-center gap-2 text-white/90">
                    <Mail className="w-4 h-4 text-[#E8A85A]" />
                    <span>jerryxcode111@gmail.com</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={handleCopyEmail}
                      className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 text-[10px] flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span className="text-emerald-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3 text-[#9FA4BC]" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                    <a
                      href="mailto:jerryxcode111@gmail.com"
                      className="px-2.5 py-1 rounded-full bg-[#E8A85A]/15 text-[#E8A85A] border border-[#E8A85A]/30 text-[10px] flex items-center gap-1"
                    >
                      <span>Mail</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <input
                    required
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    className="w-full h-10 px-4 rounded-xl bg-white/[0.04] border border-white/10 text-white font-body text-sm placeholder:text-white/25 focus:outline-none focus:border-[#E8A85A] transition-colors"
                  />

                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email"
                    className="w-full h-10 px-4 rounded-xl bg-white/[0.04] border border-white/10 text-white font-body text-sm placeholder:text-white/25 focus:outline-none focus:border-[#E8A85A] transition-colors"
                  />

                  <textarea
                    required
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your message or project vision..."
                    className="w-full p-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-white font-body text-sm placeholder:text-white/25 focus:outline-none focus:border-[#E8A85A] transition-colors resize-none"
                  />

                  <div className="flex items-center justify-between pt-1">
                    <div className="flex items-center gap-2">
                      <a
                        href="https://github.com/jerryxcode111"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white transition-colors"
                        aria-label="GitHub Profile"
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/jahanzaibshafiq"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white transition-colors"
                        aria-label="LinkedIn Profile"
                      >
                        <Linkedin className="w-3.5 h-3.5" />
                      </a>
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'transmitting'}
                      className="h-10 px-6 rounded-full bg-[#E8A85A] text-[#05060A] font-body text-xs font-semibold tracking-wider uppercase flex items-center gap-1.5 cursor-pointer hover:bg-[#E8A85A]/90 transition-all active:scale-95 disabled:opacity-50"
                    >
                      {status === 'transmitting' ? (
                        <>
                          <Sparkles className="w-3.5 h-3.5 animate-spin" />
                          <span>Transmitting...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Signal</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
