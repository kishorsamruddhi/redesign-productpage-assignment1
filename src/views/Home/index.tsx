import React, { useEffect, useRef } from 'react';
import HeroSection from './components/HeroSection';
import HomeFAQs from './components/HomeFAQ';
import ContactForm from './components/ContactForm';
import MainFooter from './components/MainFooter';
import InfoSection from './components/InfoSection';
import FeaturesGrid from './components/FeaturesGrid';

// Add SocialProofSection Component
import SocialProofSection from './components/SocialProofSection';

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
            <section className="bg-gradient-to-b from-blue-50 to-white">
                <HeroSection
                    scrollToSection={scrollToSection}
                    featuresRef={FqRef}
                    contactRef={contactRef}
                    aboutRef={aboutRef}
                />
            </section>

            {/* Features Section */}
            <section ref={FqRef} className="bg-[#eff6ff] py-16 px-4 md:px-12">
                <div className="max-w-7xl mx-auto">
                    <FeaturesGrid />
                </div>
            </section>

           
            {/* About / Info Section */}
            <section ref={aboutRef} className="bg-white py-16 px-4 md:px-12">
                <div className="max-w-6xl mx-auto">
                    <InfoSection />
                </div>
            </section>
			
			 {/* Social Proof Section (Testimonials and Case Studies) */}
			 <section className="bg-gray-100 py-16 px-4 md:px-12">
                <div className="max-w-7xl mx-auto">
                    <SocialProofSection />
                </div>
            </section>


            {/* FAQs Section */}
            <section className="bg-gray-50 py-16 px-4 md:px-12">
                <div className="max-w-6xl mx-auto">
                    <HomeFAQs />
                </div>
            </section>

            {/* Contact Section */}
            <section ref={contactRef} className="bg-white py-16 px-4 md:px-12">
                <div className="max-w-5xl mx-auto">
                    <ContactForm />
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-100 mt-auto">
                <MainFooter />
            </footer>
        </div>
    );
};

export default Home;
