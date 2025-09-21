import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setSubmitStatus('success');
            setIsSubmitting(false);
            setFormData({ name: '', email: '', subject: '', message: '' });
        }, 2000);
    };

    const contactInfo = [
        {
            icon: '📍',
            title: 'Visit Our Store',
            details: ['123 Fragrance Avenue', 'Dubai, UAE 12345'],
            link: '#'
        },
        {
            icon: '📞',
            title: 'Call Us',
            details: ['+971 4 123 4567', '+971 50 123 4567'],
            link: 'tel:+97141234567'
        },
        {
            icon: '✉️',
            title: 'Email Us',
            details: ['info@houseofoudh.com', 'support@houseofoudh.com'],
            link: 'mailto:info@houseofoudh.com'
        },
        {
            icon: '🕒',
            title: 'Business Hours',
            details: ['Mon - Fri: 9:00 AM - 8:00 PM', 'Sat - Sun: 10:00 AM - 6:00 PM'],
            link: '#'
        }
    ];

    const faqs = [
        {
            question: 'How long do your fragrances last?',
            answer: 'Our Eau de Parfum fragrances typically last 6-8 hours, while our concentrated oudh oils can last up to 12-24 hours depending on skin type and application.'
        },
        {
            question: 'Do you offer international shipping?',
            answer: 'Yes, we ship worldwide! Shipping times vary by location: 3-5 days for UAE, 7-10 days for GCC countries, and 10-15 days for international destinations.'
        },
        {
            question: 'Can I return or exchange a fragrance?',
            answer: 'We offer a 30-day return policy for unopened products. For exchanges due to scent preferences, please contact our customer service team.'
        },
        {
            question: 'Do you offer custom fragrances?',
            answer: 'Yes! We offer bespoke fragrance services. Our master perfumers can create a unique scent just for you. Contact us to discuss your requirements.'
        },
        {
            question: 'How should I store my fragrances?',
            answer: 'Store your fragrances in a cool, dry place away from direct sunlight and heat. Keep the bottles upright and tightly closed to preserve the scent quality.'
        }
    ];

    const [openFaq, setOpenFaq] = useState(null);

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
                {/* Header */}
                <section className="container mx-auto px-4 md:px-6 mb-20">
                    <motion.div
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                            Contact Us
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                        </p>
                    </motion.div>
                </section>

                {/* Contact Info Grid */}
                <section className="container mx-auto px-4 md:px-6 mb-20">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={info.title}
                                variants={itemVariants}
                                className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow"
                            >
                                <div className="text-4xl mb-4">{info.icon}</div>
                                <h3 className="text-xl font-bold mb-4 text-gray-900">{info.title}</h3>
                                <div className="space-y-2">
                                    {info.details.map((detail, idx) => (
                                        <p key={idx} className="text-gray-600">{detail}</p>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>

                {/* Contact Form and Map */}
                <section className="container mx-auto px-4 md:px-6 mb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl p-8 shadow-xl"
                        >
                            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
                                Send us a Message
                            </h2>

                            {submitStatus === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6"
                                >
                                    Thank you for your message! We'll get back to you soon.
                                </motion.div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                            Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                        Subject *
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                                        placeholder="What's this about?"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="6"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
                                        placeholder="Tell us more about your inquiry..."
                                    ></textarea>
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                                    className={`w-full py-4 rounded-lg font-semibold text-white transition-all ${isSubmitting
                                            ? 'bg-gray-400 cursor-not-allowed'
                                            : 'bg-gradient-to-r from-amber-500 to-yellow-500 hover:shadow-lg'
                                        }`}
                                >
                                    {isSubmitting ? (
                                        <div className="flex items-center justify-center space-x-2">
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            <span>Sending...</span>
                                        </div>
                                    ) : (
                                        'Send Message'
                                    )}
                                </motion.button>
                            </form>
                        </motion.div>

                        {/* Map/Location */}
                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl p-8 shadow-xl"
                        >
                            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
                                Visit Our Store
                            </h2>

                            <div className="mb-6">
                                <div className="bg-gradient-to-br from-amber-100 to-yellow-100 rounded-lg p-6 h-64 flex items-center justify-center">
                                    <div className="text-center text-gray-600">
                                        <div className="text-4xl mb-4">🗺️</div>
                                        <p className="font-medium">Interactive Map</p>
                                        <p className="text-sm">Map integration coming soon</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
                                    <p className="text-gray-600">123 Fragrance Avenue<br />Dubai, UAE 12345</p>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2">Store Hours</h3>
                                    <div className="text-gray-600 space-y-1">
                                        <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                                        <p>Saturday - Sunday: 10:00 AM - 6:00 PM</p>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2">Parking</h3>
                                    <p className="text-gray-600">Free parking available for customers</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="bg-white py-20">
                    <div className="container mx-auto px-4 md:px-6">
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                                Frequently Asked Questions
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Find answers to common questions about our products and services.
                            </p>
                        </motion.div>

                        <div className="max-w-3xl mx-auto">
                            {faqs.map((faq, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="mb-4"
                                >
                                    <button
                                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                        className="w-full text-left bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"
                                    >
                                        <div className="flex justify-between items-center">
                                            <h3 className="font-semibold text-gray-900 pr-4">{faq.question}</h3>
                                            <svg
                                                className={`w-5 h-5 text-gray-500 transition-transform ${openFaq === index ? 'rotate-180' : ''
                                                    }`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </button>
                                    {openFaq === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="bg-white border-l-4 border-amber-500 p-6 ml-6"
                                        >
                                            <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                                        </motion.div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Social Media */}
                <section className="py-20 bg-gradient-to-r from-amber-600 to-yellow-600">
                    <div className="container mx-auto px-4 md:px-6 text-center">
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Follow Our Journey
                            </h2>
                            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                                Stay connected with us on social media for the latest updates, behind-the-scenes content, and exclusive offers.
                            </p>
                            <div className="flex justify-center space-x-6">
                                {['Instagram', 'Facebook', 'Twitter', 'YouTube'].map((platform) => (
                                    <motion.button
                                        key={platform}
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full font-medium hover:bg-white/30 transition-all"
                                    >
                                        {platform}
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Contact;