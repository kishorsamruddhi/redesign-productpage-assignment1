import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const SocialProofSection: React.FC = () => {
    return (
        <div className="bg-white w-full py-16 px-4 md:px-10 overflow-hidden">
            <div className="max-w-7xl mx-auto text-center text-gray-800">
                {/* Heading */}
                <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                    What Our Clients Say
                </h2>
                <p className="mt-4 text-lg font-light max-w-2xl mx-auto">
                    Discover how healthcare professionals are transforming their businesses with our AI-powered platform.
                </p>

                {/* Testimonials */}
                <div className="mt-16 space-y-12">
                    {/* Single Testimonial */}
                    <div className="flex flex-col items-center">
                        <p className="text-xl italic max-w-2xl mx-auto text-gray-600">
                            "I can now manage all patient leads, appointments, and my website—without the hassle. It's a game-changer!"
                        </p>
                        <p className="mt-6 text-lg font-semibold text-primary">Dr. Sarah, Family Physician</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <p className="text-xl italic max-w-2xl mx-auto text-gray-600">
                            "This platform saved me hours of administrative work every week. It’s like having an extra team member!"
                        </p>
                        <p className="mt-6 text-lg font-semibold text-primary">Dr. Mark, Pediatrician</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <p className="text-xl italic max-w-2xl mx-auto text-gray-600">
                            "Our clinic's productivity has improved drastically with the AI Front Office. The integration was seamless!"
                        </p>
                        <p className="mt-6 text-lg font-semibold text-primary">Dr. Jennifer, Dermatologist</p>
                    </div>
                </div>

                {/* Divider */}
                <div className="mt-20 border-t border-gray-300 pt-12">
                    {/* Case Studies */}
                    <h3 className="text-3xl font-bold mb-10">Client Success Stories</h3>

                    {/* Swiper Carousel */}
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        spaceBetween={20}
                        slidesPerView={1}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{ clickable: true }}
                        loop={true}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="!px-4"
                    >
                        {/* Slide 1 */}
                        <SwiperSlide>
                            <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between">
                                <h4 className="text-xl font-semibold mb-2 text-primary">Streamlining a Busy Clinic</h4>
                                <p className="text-gray-700 text-sm">
                                    We automated patient intake, scheduling, and website creation for a family clinic, saving them hundreds of hours annually.
                                </p>
                            </div>
                        </SwiperSlide>

                        {/* Slide 2 */}
                        <SwiperSlide>
                            <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between">
                                <h4 className="text-xl font-semibold mb-2 text-primary">Enhancing Patient Engagement</h4>
                                <p className="text-gray-700 text-sm">
                                    Our AI platform boosted patient engagement and retention for a large healthcare network through smarter communication.
                                </p>
                            </div>
                        </SwiperSlide>

                        {/* Slide 3 */}
                        <SwiperSlide>
                            <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between">
                                <h4 className="text-xl font-semibold mb-2 text-primary">Scaling Private Practices</h4>
                                <p className="text-gray-700 text-sm">
                                    Helped small private practices scale operations by automating lead management and reducing administrative burden.
                                </p>
                            </div>
                        </SwiperSlide>

                        {/* Slide 4 */}
                        <SwiperSlide>
                            <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between">
                                <h4 className="text-xl font-semibold mb-2 text-primary">Improving Clinic Visibility</h4>
                                <p className="text-gray-700 text-sm">
                                    Built high-converting websites integrated with appointment systems, improving local SEO and online visibility.
                                </p>
                            </div>
                        </SwiperSlide>

                        {/* Slide 5 */}
                        <SwiperSlide>
                            <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between">
                                <h4 className="text-xl font-semibold mb-2 text-primary">Optimizing Patient Journeys</h4>
                                <p className="text-gray-700 text-sm">
                                    Designed end-to-end patient journeys with automation tools to enhance satisfaction and clinic efficiency.
                                </p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                {/* CTA */}
                <div className="mt-20">
                    <p className="text-lg font-light">
                        Ready to transform your healthcare operations?{' '}
                        <span className="text-primary font-semibold underline cursor-pointer">Get Started Today</span>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SocialProofSection;
