"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import SideBar from "../../components/sideBar";
import Footer from "../../components/navigation/footer";
import MobileMenu from "../../components/navigation/mobileNav";
import PhotoGallery from "../../components/photography/PhotoGallery";
import { ViewMode, PhotoCategory } from "../../data/photography";

export default function PhotographyPage() {
    const [categories, setCategories] = useState<PhotoCategory[]>([]);

    useEffect(() => {
        async function loadCategories() {
            try {
                const response = await fetch('/api/photos');
                const loadedCategories = await response.json();
                setCategories(loadedCategories);
            } catch (error) {
                console.error('Error loading photo categories:', error);
            }
        }
        loadCategories();
    }, []);

    return (
        <div className="flex flex-col">
            <MobileMenu />
            <div className="sweIndex">
                <SideBar />
                <main className="top-0 bottom-0 right-0 pt-[40px] px-10 pb-10 relative min-h-[100vh] border-b-[1px] border-b-secondary1">
                    <div className="max-w-7xl">
                        <PhotoGallery categories={categories} viewMode="grid" />
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
}
