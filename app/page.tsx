"use client";

import Image from 'next/image'
import SideBar from '../components/sideBar'
import MainContent from '../components/mainContent'
import Footer from '../components/navigation/footer'
import MobileMenu from '../components/navigation/mobileNav'
import PreloaderComponent from '../components/preloader'
import { useState, useEffect } from 'react'

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div>
      {loading ? (
        <PreloaderComponent />
      ) : (
        <div id="content" className="flex flex-col">
          <MobileMenu />
          <div className="sweIndex">
            <SideBar />
            <MainContent />
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}