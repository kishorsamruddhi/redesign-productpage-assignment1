import React, { useEffect, useRef, useState } from 'react';
import HeroSection from './components/HeroSection';
import HomeFAQs from './components/HomeFAQ';
import ContactForm from './components/ContactForm';
import MainFooter from './components/MainFooter';
import InfoSection from './components/InfoSection';
import FeaturesGrid from './components/FeaturesGrid';
import SocialProofSection from './components/SocialProofSection';
import VirtualAssistant from './components/VirtualAssistant'; // Import the Virtual Assistant component

// FadeInSection component for smooth fade-in animations on scroll
const FadeInSection = ({ children }: { children: React.ReactNode }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Stop observing after it's visible
                }
            },
            { threshold: 0.1 } // Trigger when 10% of the element is visible
        );

        const element = document.querySelector('.fadeIn');
        if (element) observer.observe(element);

        return () => {
            if (element) observer.disconnect();
        };
    }, []);

    return (
        <div className={`fadeIn ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 ease-in-out`}>
            {children}
        </div>
    );
};

const Home: React.FC = () => {
    const contactRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const FqRef = useRef<HTMLDivElement>(null);

    const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        let lastScrollTop = 0;

        const handleScroll = () => {
            const hcf = document.querySelector(".hcf-profile");
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

            if (scrollTop > lastScrollTop) {
                hcf?.classList.add("hcf-profile-fixed");
            } else if (scrollTop < lastScrollTop) {
                hcf?.classList.remove("hcf-profile-fixed");
            }

            lastScrollTop = scrollTop;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="flex flex-col min-h-screen overflow-x-hidden">
            {/* Hero Section */}
            <section className="bg-gradient-to-b from-blue-50 to-white opacity-100 transition-all duration-1000 ease-in-out">
                <HeroSection
                    scrollToSection={scrollToSection}
                    featuresRef={FqRef}
                    contactRef={contactRef}
                    aboutRef={aboutRef}
                />
            </section>

            {/* Features Section */}
            <FadeInSection>
                <section ref={FqRef} className="bg-[#eff6ff] py-16 px-4 md:px-12">
                    <div className="max-w-7xl mx-auto">
                        <FeaturesGrid />
                    </div>
                </section>
            </FadeInSection>

            {/* About / Info Section */}
            <FadeInSection>
                <section ref={aboutRef} className="bg-white py-16 px-4 md:px-12">
                    <div className="max-w-6xl mx-auto">
                        <InfoSection />
                    </div>
                </section>
            </FadeInSection>

            {/* Social Proof Section */}
            <FadeInSection>
                <section className="bg-gray-100 py-16 px-4 md:px-12">
                    <div className="max-w-7xl mx-auto">
                        <SocialProofSection />
                    </div>
                </section>
            </FadeInSection>

            {/* FAQs Section */}
            <FadeInSection>
                <section className="bg-gray-50 py-16 px-4 md:px-12">
                    <div className="max-w-6xl mx-auto">
                        <HomeFAQs />
                    </div>
                </section>
            </FadeInSection>

            {/* Contact Section */}
            <FadeInSection>
                <section ref={contactRef} className="bg-white py-16 px-4 md:px-12">
                    <div className="max-w-5xl mx-auto">
                        <ContactForm />
                    </div>
                </section>
            </FadeInSection>

            {/* Footer */}
            <footer className="bg-gray-100 mt-auto">
                <MainFooter />
            </footer>

            {/* Virtual Assistant */}
            <VirtualAssistant /> {/* Add the Virtual Assistant here */}
        </div>
    );
};

export default Home;
