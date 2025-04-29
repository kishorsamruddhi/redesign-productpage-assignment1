import React from 'react';
import { Button } from '@/components/ui';
import HomeNavbar from '@/components/shared/HomeNav';
import HcfSignupPopup from '@/components/shared/Popups/HcfSignupPopup';
import smallBG from '@/assets/images/main-bg-small.png';

interface HeroSectionProps {
    scrollToSection: (ref: React.RefObject<HTMLElement>) => void;
    featuresRef: React.RefObject<HTMLElement>;
    contactRef: React.RefObject<HTMLElement>;
    aboutRef: React.RefObject<HTMLElement>;
}

const HeroSection: React.FC<HeroSectionProps> = ({
    scrollToSection,
    featuresRef,
    contactRef,
    aboutRef,
}) => {
    return (
        <div className="!bg-[#01052f] w-full relative flex flex-col py-2 md:py-5 overflow-hidden">
            <style>
                {`
                /* FadeIn Animation */
                @keyframes fadeIn {
                    0% {
                        opacity: 0;
                        transform: translateY(30px); /* Adding slight upward motion */
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .fadeInElement {
                    animation: fadeIn 1.5s ease-out;
                }

                /* Zoom-in effect for the hero section */
                @keyframes zoomIn {
                    0% {
                        transform: scale(0.8);
                        opacity: 0;
                    }
                    100% {
                        transform: scale(1);
                        opacity: 1;
                    }
                }

                .zoomInElement {
                    animation: zoomIn 1.5s ease-out;
                }

                /* Hover effect for buttons */
                .buttonHoverEffect:hover {
                    transform: scale(1.1);
                    transition: transform 0.3s ease;
                }

                /* Gradient Animation for hero background */
                @keyframes gradientBG {
                    0% {
                        background: linear-gradient(45deg, #ff7a18, #af002d);
                    }
                    50% {
                        background: linear-gradient(45deg, #002aff, #00e6e6);
                    }
                    100% {
                        background: linear-gradient(45deg, #ff7a18, #af002d);
                    }
                }

                .hero-bg {
                    animation: gradientBG 15s ease infinite;
                }

                /* Parallax effect on hero section */
                .hero-section {
                    position: relative;
                    overflow: hidden;
                    height: 100vh;
                    background-image: url('your-image.jpg'); /* Hero background image */
                    background-attachment: fixed;
                    background-position: center;
                    background-size: cover;
                }

                /* Animated text */
                @keyframes typingText {
                    0% {
                        width: 0;
                    }
                    100% {
                        width: 100%;
                    }
                }

                .typingText {
                    font-family: "Courier New", Courier, monospace;
                    white-space: nowrap;
                    overflow: hidden;
                    border-right: 4px solid;
                    width: 0;
                    animation: typingText 2s steps(30) 1s forwards;
                }

                /* Card Flip Animation */
                .card-container {
                    perspective: 1000px;
                }

                .card {
                    width: 300px;
                    height: 400px;
                    transform-style: preserve-3d;
                    transition: transform 0.6s;
                }

                .card:hover {
                    transform: rotateY(180deg);
                }

                .card-back {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    transform: rotateY(180deg);
                    background-color: #fff;
                    padding: 20px;
                }

                /* Button */
                .buttonHoverEffect {
                    padding: 12px 24px;
                    border: 2px solid #0073e6;
                    background-color: #fff;
                    color: #0073e6;
                    font-size: 16px;
                    border-radius: 4px;
                    cursor: pointer;
                    transition: background-color 0.3s ease, transform 0.3s ease;
                }

                .buttonHoverEffect:hover {
                    background-color: #0073e6;
                    color: white;
                    transform: scale(1.1);
                }
                `}
            </style>

            <HomeNavbar
                scrollToSection={scrollToSection}
                featuresRef={featuresRef}
                contactRef={contactRef}
                aboutRef={aboutRef}
            />

            <div className="hero-section min-h-[90vh] flex items-center fadeInElement">
                <img
                    src={smallBG}
                    alt="background_image"
                    className="md:hidden h-full w-full object-cover absolute top-0 left-0 z-[-10]"
                />
                
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-[-5]"></div>
                
                <div className="relative z-10 text-white w-full flex flex-col lg:flex-row-reverse md:mt-6 lg:mt-0 lg:items-center lg:justify-between px-4 max-w-[1538px] mx-auto">
                    <div className="lg:w-5/12 mt-8 lg:mt-0 lg:mb-0 mb-6">
                        {/* Video or Image section can go here */}
                    </div>

                    <div className="lg:w-1/2 lg:pr-8 zoomInElement">
                        <h1 className="text-2xl md:text-4xl font-semibold mb-4 capitalize text-white">
                            <span className="text-primary">AI front office </span> <br />
                            for healthcare agents
                        </h1>
                        <p style={{ lineHeight: '0.7' }} className="text-lg my-8 font-light">
                            Create <span className="text-primary font-bold">AI Store</span>  in 2 min <br />
                            <br />
                            Scale with{' '}
                            <span className="font-bold text-primary">
                                Digital Marketing
                            </span>{' '}
                        </p>

                        <div>
                            <HcfSignupPopup popupButtonStatus buttonChildren={<Button block variant='solid' className='rounded-[5px] max-w-[200px] buttonHoverEffect'>Get Started</Button>} />
                        </div>

                        <div className="text-white flex gap-12 mt-8 flex-wrap">
                            <div>
                                <h1 className="text-3xl font-bold text-white">
                                    2100<span className="text-primary ml-1">+</span>
                                </h1>
                                <p className="text-lg capitalize">qualified doctors</p>
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold text-white">
                                    1000<span className="text-primary ml-1">+</span>
                                </h1>
                                <p className="text-lg capitalize">hospitals</p>
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold text-white">
                                    800<span className="text-primary ml-1">+</span>
                                </h1>
                                <p className="text-lg capitalize">Treatment Plans</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
