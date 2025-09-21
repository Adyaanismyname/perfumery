import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

const About = () => {
    const teamMembers = [
        {
            name: 'Master Ahmed Al-Rashid',
            role: 'Master Perfumer & Founder',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500',
            description: 'With over 20 years of experience in Middle Eastern perfumery, Ahmed brings traditional oudh crafting techniques to modern fragrance creation.'
        },
        {
            name: 'Sarah Johnson',
            role: 'Head of Product Development',
            image: 'https://images.unsplash.com/photo-1494790108755-2616b612b218?w=500',
            description: 'Sarah combines her chemistry background with artistic vision to develop our signature scent profiles and ensure quality consistency.'
        },
        {
            name: 'Omar Hassan',
            role: 'Sourcing Director',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500',
            description: 'Omar travels the world to source the finest raw materials, building relationships with suppliers across Asia, Africa, and the Middle East.'
        }
    ];

    const milestones = [
        { year: '2013', event: 'House of Oudh founded with a vision to bring authentic oudh fragrances to the modern world' },
        { year: '2015', event: 'Launched our first signature collection featuring 12 unique oudh-based fragrances' },
        { year: '2018', event: 'Expanded internationally, bringing our fragrances to customers across 15 countries' },
        { year: '2020', event: 'Introduced sustainable sourcing practices and eco-friendly packaging initiatives' },
        { year: '2022', event: 'Opened our state-of-the-art fragrance laboratory and customer experience center' },
        { year: '2024', event: 'Celebrating over 100,000 satisfied customers worldwide and 50+ unique fragrances' }
    ];

    const values = [
        {
            icon: '🌿',
            title: 'Sustainability',
            description: 'We are committed to ethical sourcing and environmental responsibility in every aspect of our business.'
        },
        {
            icon: '👥',
            title: 'Craftsmanship',
            description: 'Each fragrance is carefully crafted by master perfumers using time-honored techniques and the finest ingredients.'
        },
        {
            icon: '✨',
            title: 'Authenticity',
            description: 'We preserve traditional perfumery methods while innovating for modern tastes and preferences.'
        },
        {
            icon: '💎',
            title: 'Quality',
            description: 'We never compromise on quality, ensuring every bottle meets our exacting standards.'
        }
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

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
            <Navbar />

            <div className="pt-24 pb-12">
                {/* Hero Section */}
                <section className="container mx-auto px-4 md:px-6 mb-20">
                    <motion.div
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                            About House of Oudh
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            For over a decade, we have been dedicated to creating exceptional fragrances that honor the rich tradition of Middle Eastern perfumery while embracing modern innovation. Our journey began with a simple passion: to share the mystical and captivating scent of authentic oudh with the world.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative rounded-3xl overflow-hidden shadow-2xl"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=1200"
                            alt="Perfume laboratory"
                            className="w-full h-96 md:h-[500px] object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                            <div className="p-8 md:p-12 text-white">
                                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                    Where Tradition Meets Innovation
                                </h3>
                                <p className="text-lg opacity-90 max-w-2xl">
                                    Our state-of-the-art laboratory combines ancient perfumery wisdom with cutting-edge techniques to create fragrances that tell stories and evoke emotions.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Our Story */}
                <section className="bg-white py-20">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ x: -50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                                    Our Story
                                </h2>
                                <div className="space-y-6 text-gray-700 leading-relaxed">
                                    <p>
                                        House of Oudh was born from a deep appreciation for the art of traditional perfumery. Our founder, Master Ahmed Al-Rashid, grew up in a family of perfumers in the heart of the Middle East, where the secrets of oudh distillation have been passed down through generations.
                                    </p>
                                    <p>
                                        Inspired by these ancient techniques but driven by a vision to make luxury fragrances accessible to a global audience, Ahmed established House of Oudh in 2013. What started as a small workshop has grown into an internationally recognized brand, beloved by fragrance enthusiasts worldwide.
                                    </p>
                                    <p>
                                        Today, we continue to honor our heritage while pushing the boundaries of modern perfumery, creating scents that bridge cultures and connect people through the universal language of beautiful fragrance.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ x: 50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1594736797933-d0a501ba2fe8?w=600"
                                    alt="Traditional perfumery"
                                    className="rounded-2xl shadow-2xl"
                                />
                                <div className="absolute -bottom-6 -right-6 bg-amber-500 text-white p-6 rounded-2xl shadow-xl">
                                    <div className="text-3xl font-bold">100K+</div>
                                    <div className="text-sm opacity-90">Happy Customers</div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Our Values */}
                <section className="py-20 bg-gradient-to-r from-amber-100 to-yellow-100">
                    <div className="container mx-auto px-4 md:px-6">
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                                Our Values
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                These core principles guide everything we do, from sourcing ingredients to crafting the perfect customer experience.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                        >
                            {values.map((value, index) => (
                                <motion.div
                                    key={value.title}
                                    variants={itemVariants}
                                    className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow"
                                >
                                    <div className="text-4xl mb-4">{value.icon}</div>
                                    <h3 className="text-xl font-bold mb-4 text-gray-900">{value.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Timeline */}
                <section className="py-20">
                    <div className="container mx-auto px-4 md:px-6">
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                                Our Journey
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                From humble beginnings to international recognition, here are the key milestones in our story.
                            </p>
                        </motion.div>

                        <div className="max-w-4xl mx-auto">
                            {milestones.map((milestone, index) => (
                                <motion.div
                                    key={milestone.year}
                                    initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                                >
                                    <div className={`flex-1 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                                        <div className={`bg-white rounded-2xl p-6 shadow-lg ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                                            <div className="text-2xl font-bold text-amber-600 mb-2">{milestone.year}</div>
                                            <p className="text-gray-700">{milestone.event}</p>
                                        </div>
                                    </div>
                                    <div className="w-4 h-4 bg-amber-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                                    <div className="flex-1"></div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Team */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 md:px-6">
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                                Meet Our Team
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                The passionate experts behind every bottle of House of Oudh fragrance.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        >
                            {teamMembers.map((member, index) => (
                                <motion.div
                                    key={member.name}
                                    variants={itemVariants}
                                    className="text-center"
                                >
                                    <div className="relative mb-6">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-48 h-48 rounded-full mx-auto object-cover shadow-2xl"
                                        />
                                        <div className="absolute inset-0 rounded-full bg-gradient-to-t from-amber-500/20 to-transparent"></div>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                                    <p className="text-amber-600 font-medium mb-4">{member.role}</p>
                                    <p className="text-gray-600 leading-relaxed">{member.description}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 bg-gradient-to-r from-amber-600 to-yellow-600">
                    <div className="container mx-auto px-4 md:px-6 text-center">
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Experience Our Story
                            </h2>
                            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                                Every fragrance we create carries a piece of our heritage and passion. Discover your signature scent today.
                            </p>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white text-amber-600 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
                            >
                                Explore Our Collection
                            </motion.button>
                        </motion.div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;