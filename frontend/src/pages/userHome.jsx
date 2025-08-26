import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const UserHome = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // set slideshow
    useEffect(() => {
        setIsLoaded(true);
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const heroSlides = [
        {
            title: "Authentic Oudh",
            subtitle: "Discover our signature collection",
            image: "hero.jpg" // You can replace this with the actual path to your uploaded image
        }
        // Add more slides here later as needed
        // {
        //     title: "Another Collection",
        //     subtitle: "Another subtitle",
        //     image: "/path/to/another/image.jpg"
        // }
    ];

    // change later once backend established
    const featuredProducts = [
        { id: 1, name: "Golden Aura", price: "$120", image: "https://images.unsplash.com/photo-1595425970945-1563269b3d26?w=300&h=400&fit=crop" },
        { id: 2, name: "Midnight Bloom", price: "$98", image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=300&h=400&fit=crop" },
        { id: 3, name: "Citrus Dreams", price: "$85", image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=300&h=400&fit=crop" },
        { id: 4, name: "Royal Essence", price: "$150", image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59db9?w=300&h=400&fit=crop" }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6 }
        }
    };

    const floatAnimation = {
        y: [0, -10, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
            {/* Navigation */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8 }}
                className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-md shadow-lg border-b border-amber-500/20"
            >
                <div className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <motion.div
                            className="flex cursor-pointer items-center space-x-4"
                            whileHover={{ scale: 1.05 }}
                        >
                            <img src="/logo.svg" alt="House of Oudh" className="h-12 w-12" />
                            <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
                                House of Oudh
                            </span>
                        </motion.div>

                        {/* Right Side - Navigation and Cart */}
                        <motion.div
                            className="flex items-center space-x-6"
                        >
                            {/* Desktop Navigation */}
                            <div className="hidden md:flex space-x-9">
                                {['Home', 'Collections', 'About', 'Contact'].map((item, index) => (
                                    <motion.a
                                        key={item}
                                        href="#"
                                        className="text-white hover:text-amber-400 font-medium transition-colors relative group"
                                        whileHover={{ y: -2 }}
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        {item}
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                                    </motion.a>
                                ))}
                            </div>

                            {/* Cart Icon */}
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className=" cursor-pointer relative p-3 text-white hover:text-amber-400 transition-colors"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h7M19 18a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                {/* Cart Count Badge */}
                                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-amber-500 to-yellow-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
                                    0
                                </span>
                            </motion.button>

                            {/* Mobile Menu Button */}
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="md:hidden p-2 text-white hover:text-amber-400 transition-colors"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    {isMobileMenuOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </motion.button>
                        </motion.div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="fixed top-0 right-0 w-80 h-full bg-black/95 backdrop-blur-md z-50 md:hidden"
                    >
                        <div className="p-6 pt-20">
                            <div className="flex flex-col space-y-6">
                                {['Home', 'Collections', 'About', 'Contact'].map((item, index) => (
                                    <motion.a
                                        key={item}
                                        href="#"
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-white hover:text-amber-400 font-medium text-xl transition-colors border-b border-gray-700 pb-4"
                                    >
                                        {item}
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    />
                )}
            </AnimatePresence>            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10"></div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 1 }}
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${heroSlides[currentSlide].image})` }}
                    />
                </AnimatePresence>

                <div className="relative z-20 text-center text-white px-4 md:px-6 max-w-6xl">
                    <motion.h1
                        key={`title-${currentSlide}`}
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent"
                    >
                        {heroSlides[currentSlide].title}
                    </motion.h1>

                    <motion.p
                        key={`subtitle-${currentSlide}`}
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 text-gray-200"
                    >
                        {heroSlides[currentSlide].subtitle}
                    </motion.p>

                    <motion.button
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-8 md:px-12 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold shadow-2xl hover:shadow-amber-500/25 transition-all"
                    >
                        Explore Collection
                    </motion.button>
                </div>

                {/* Slide Indicators - Hidden on small screens */}
                {heroSlides.length > 1 && (
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
                        {heroSlides.map((_, index) => (
                            <motion.button
                                key={index}
                                className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-amber-400' : 'bg-white/50'
                                    }`}
                                whileHover={{ scale: 1.2 }}
                                onClick={() => setCurrentSlide(index)}
                            />
                        ))}
                    </div>
                )}

                {/* Floating Elements - Hidden on mobile */}
                <motion.div
                    animate={floatAnimation}
                    className="hidden lg:block absolute top-1/4 left-10 text-amber-300/30"
                >
                    <svg className="w-8 lg:w-12 h-8 lg:h-12" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                </motion.div>

                <motion.div
                    animate={{ ...floatAnimation, transition: { ...floatAnimation.transition, delay: 1 } }}
                    className="hidden lg:block absolute top-1/3 right-16 text-yellow-300/30"
                >
                    <svg className="w-6 lg:w-8 h-6 lg:h-8" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                </motion.div>
            </section>

            {/* Featured Products */}
            <section className="py-12 md:py-20 px-4 md:px-6">
                <div className="container mx-auto">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-center mb-12 md:mb-16"
                    >
                        <motion.h2
                            variants={itemVariants}
                            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent"
                        >
                            Featured Collection
                        </motion.h2>
                        <motion.p
                            variants={itemVariants}
                            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4"
                        >
                            Handcrafted fragrances that tell your unique story
                        </motion.p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
                    >
                        {featuredProducts.map((product, index) => (
                            <motion.div
                                key={product.id}
                                variants={itemVariants}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer"
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <motion.button
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="absolute top-4 right-4 bg-white/90 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    >
                                        <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    </motion.button>
                                </div>

                                <div className="p-4 md:p-6">
                                    <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-800">{product.name}</h3>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xl md:text-2xl font-bold text-amber-600">{product.price}</span>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium shadow-lg hover:shadow-xl transition-all"
                                        >
                                            Add to Cart
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-12 md:py-20 bg-gradient-to-r from-amber-100 to-yellow-100">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="order-2 lg:order-1"
                        >
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                                Our Story
                            </h2>
                            <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6 leading-relaxed">
                                For over a decade, we've been crafting exceptional fragrances that capture the essence of luxury and sophistication. Each bottle tells a story, each scent creates a memory.
                            </p>
                            <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8 leading-relaxed">
                                Our master perfumers blend the finest ingredients from around the world to create unique fragrances that celebrate individuality and elegance.
                            </p>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
                            >
                                Learn More
                            </motion.button>
                        </motion.div>

                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative order-1 lg:order-2"
                        >
                            <motion.img
                                animate={floatAnimation}
                                src="https://images.unsplash.com/photo-1595425970945-1563269b3d26?w=600&h=700&fit=crop"
                                alt="Perfume crafting"
                                className="w-full h-64 sm:h-80 md:h-96 lg:h-auto rounded-2xl shadow-2xl object-cover"
                            />
                            <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-white p-4 md:p-6 rounded-2xl shadow-xl">
                                <div className="text-2xl md:text-3xl font-bold text-amber-600">10+</div>
                                <div className="text-sm md:text-base text-gray-600">Years of Excellence</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="py-12 md:py-20 bg-gradient-to-r from-amber-600 to-yellow-600">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                            Stay in the Scent
                        </h2>
                        <p className="text-lg md:text-xl text-white/90 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
                            Subscribe to our newsletter and be the first to discover new fragrances and exclusive offers
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 md:px-6 py-2.5 md:py-3 rounded-full border-none outline-none text-gray-700 text-sm md:text-base"
                            />
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white text-amber-600 px-6 md:px-8 py-2.5 md:py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all text-sm md:text-base"
                            >
                                Subscribe
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-8 md:py-12">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="sm:col-span-2 md:col-span-1"
                        >
                            <div className="flex items-center space-x-3 mb-4">
                                <img src="/logo.svg" alt="House of Oudh" className="h-6 md:h-8 w-6 md:w-8" />
                                <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
                                    House of Oudh
                                </span>
                            </div>
                            <p className="text-gray-400 text-sm md:text-base">
                                Crafting exceptional fragrances since 2013. Your signature scent awaits.
                            </p>
                        </motion.div>

                        {[
                            { title: 'Collections', items: ['Men', 'Women', 'Unisex', 'Limited Edition'] },
                            { title: 'Company', items: ['About Us', 'Our Story', 'Careers', 'Press'] },
                            { title: 'Support', items: ['Contact', 'FAQ', 'Shipping', 'Returns'] }
                        ].map((section, index) => (
                            <motion.div
                                key={section.title}
                                initial={{ y: 30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">{section.title}</h3>
                                <ul className="space-y-1.5 md:space-y-2">
                                    {section.items.map((item) => (
                                        <li key={item}>
                                            <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors text-sm md:text-base">
                                                {item}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>

                    <div className="border-t border-gray-800 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-gray-400">
                        <p className="text-sm md:text-base">&copy; 2024 House of Oudh. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default UserHome;