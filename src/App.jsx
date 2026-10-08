import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { portfolioData } from './data/portfolioData';
import Header from './components/Header';
import HomeSection from './components/HomeSection';
import ProjectsSection from './components/ProjectsSection';
import WorkExperienceSection from './components/WorkExperienceSection';
import CVSection from './components/CVSection';
import NowSection from './components/NowSection';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';
import AssetUploadGuideModal from './components/AssetUploadGuideModal';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [userPhotos, setUserPhotos] = useState({
    photo1: '/assets/photo1.jpg',
    photo2: '/assets/photo2.jpg',
    memoji: '/assets/memoji_3d.jpg'
  });

  return (
    <div className="min-h-screen bg-[#080b11] text-slate-100 relative selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* High-Tech Background Grid & Subtle Ambient Glows */}
      <div className="fixed inset-0 bg-tech-grid pointer-events-none z-0" />
      <div className="fixed inset-0 bg-radial-gradient pointer-events-none z-0" />
      
      {/* Subtle Ambient Radial Spotlights */}
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="fixed top-1/2 right-10 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[130px] pointer-events-none z-0" />
      <div className="fixed bottom-10 left-1/3 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none z-0" />

      {/* Main Content Area */}
      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* Navigation Header */}
        <Header 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          onOpenUploadModal={() => setIsUploadModalOpen(true)}
        />

        {/* Dynamic Section Switcher */}
        <main className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              {activeTab === 'home' && (
                <HomeSection 
                  profile={portfolioData.profile}
                  setActiveTab={setActiveTab}
                  userPhotos={userPhotos}
                  onOpenUploadModal={() => setIsUploadModalOpen(true)}
                />
              )}

              {activeTab === 'projects' && (
                <ProjectsSection projects={portfolioData.projects} />
              )}

              {activeTab === 'experience' && (
                <WorkExperienceSection experience={portfolioData.workExperience} />
              )}

              {activeTab === 'cv' && (
                <CVSection 
                  cv={portfolioData.cv}
                  profile={portfolioData.profile}
                  onOpenUploadModal={() => setIsUploadModalOpen(true)}
                />
              )}

              {activeTab === 'now' && (
                <NowSection nowData={portfolioData.now} />
              )}

              {activeTab === 'blog' && (
                <BlogSection posts={portfolioData.blog} />
              )}
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Footer */}
        <Footer 
          profile={portfolioData.profile} 
          setActiveTab={setActiveTab} 
        />

        {/* Asset Upload & Context Modal */}
        <AssetUploadGuideModal
          isOpen={isUploadModalOpen}
          onClose={() => setIsUploadModalOpen(false)}
          userPhotos={userPhotos}
          setUserPhotos={setUserPhotos}
        />

      </div>
    </div>
  );
}
