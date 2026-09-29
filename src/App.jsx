import React, { useState, useEffect } from 'react';
import { GridCanvas } from './components/GridCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';

import { ProjectModal } from './components/ProjectModal';
import { CertModal } from './components/CertModal';
import { ResumeModal } from './components/ResumeModal';
import { Toast } from './components/Toast';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCert, setSelectedCert] = useState(null);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const showToast = (message, type = 'info') => {
    setToast({ message, type });
  };

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Background Interactive Ambient Canvas Grid */}
      <GridCanvas />

      {/* Floating Navbar Header */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* 01. Hero / Home */}
        <Hero />

        {/* 02. About */}
        <About />

        {/* 03. Skills */}
        <Skills />

        {/* 04. Projects */}
        <Projects onSelectProject={(proj) => setSelectedProject(proj)} />

        {/* 05. Certifications */}
        <Certifications onSelectCert={(cert) => setSelectedCert(cert)} />

        {/* 06. Resume */}
        <Resume onOpenResumeModal={() => setResumeModalOpen(true)} />

        {/* 07. Contact */}
        <Contact showToast={showToast} />
      </main>

      {/* Modals & Dialogues */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <CertModal
        cert={selectedCert}
        onClose={() => setSelectedCert(null)}
      />

      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
        showToast={showToast}
      />

      {/* Toast Alert */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}
