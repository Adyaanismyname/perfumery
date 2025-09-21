import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

const Notes = () => {
    const [selectedNote, setSelectedNote] = useState(null);

    // Placeholder data - you can replace this with actual data later
    const fragranceNotes = [
        {
            id: 1,
            name: 'Oudh',
            category: 'Base Note',
            description: 'A rich, woody, and complex fragrance note derived from the heartwood of Aquilaria trees. Known for its deep, resinous, and slightly medicinal aroma.',
            origin: 'Southeast Asia',
            strength: 'Very Strong',
            image: 'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=500',
            color: '#8B4513'
        },
        {
            id: 2,
            name: 'Rose',
            category: 'Heart Note',
            description: 'The queen of flowers, offering a sweet, floral, and romantic scent. Damascena and Bulgarian roses are most prized in perfumery.',
            origin: 'Bulgaria, Turkey',
            strength: 'Medium',
            image: 'https://images.unsplash.com/photo-1518621012823-d80707bf1ecc?w=500',
            color: '#FFB6C1'
        },
        {
            id: 3,
            name: 'Bergamot',
            category: 'Top Note',
            description: 'A citrusy, fresh, and slightly spicy note with Earl Grey tea-like qualities. Provides brightness and energy to fragrances.',
            origin: 'Italy, Morocco',
            strength: 'Light',
            image: 'https://images.unsplash.com/photo-1557800634-7bf3c7e2d6b6?w=500',
            color: '#90EE90'
        },
        {
            id: 4,
            name: 'Sandalwood',
            category: 'Base Note',
            description: 'Creamy, smooth, and milky woody note with subtle sweet undertones. One of the most versatile and beloved base notes.',
            origin: 'India, Australia',
            strength: 'Strong',
            image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=500',
            color: '#DEB887'
        },
        {
            id: 5,
            name: 'Jasmine',
            category: 'Heart Note',
            description: 'Intoxicating, sweet, and narcotic floral note. Known as the "king of flowers" in perfumery for its powerful and sensual aroma.',
            origin: 'India, Egypt',
            strength: 'Strong',
            image: 'https://images.unsplash.com/photo-1594736797933-d0a501ba2fe8?w=500',
            color: '#FFFACD'
        },
        {
            id: 6,
            name: 'Amber',
            category: 'Base Note',
            description: 'Warm, resinous, and honey-like note that adds depth and sensuality. Often created from a blend of labdanum, vanilla, and benzoin.',
            origin: 'Synthetic blend',
            strength: 'Medium-Strong',
            image: 'https://images.unsplash.com/photo-1570544891842-7d5b1dc4e27d?w=500',
            color: '#FFBF00'
        }
    ];

    const categories = ['All', 'Top Note', 'Heart Note', 'Base Note'];
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredNotes = activeCategory === 'All'
        ? fragranceNotes
        : fragranceNotes.filter(note => note.category === activeCategory);

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
                <div className="container mx-auto px-4 md:px-6">
                    {/* Header */}
                    <motion.div
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                            Fragrance Notes
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                            Discover the building blocks of perfumery. Each note contributes to the symphony of scent that creates our unique fragrances.
                        </p>
                    </motion.div>

                    {/* Category Filter */}
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex justify-center mb-8"
                    >
                        <div className="bg-white rounded-full p-2 shadow-lg">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeCategory === category
                                            ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-white shadow-lg'
                                            : 'text-gray-600 hover:text-amber-600 hover:bg-amber-50'
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </motion.div>

                    {/* Notes Grid */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {filteredNotes.map((note) => (
                            <motion.div
                                key={note.id}
                                variants={itemVariants}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer"
                                onClick={() => setSelectedNote(note)}
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={note.image}
                                        alt={note.name}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                    <div
                                        className="absolute top-4 right-4 w-8 h-8 rounded-full shadow-lg"
                                        style={{ backgroundColor: note.color }}
                                    ></div>
                                    <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm rounded-full px-3 py-1">
                                        <span className="text-white text-sm font-medium">{note.category}</span>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{note.name}</h3>
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{note.description}</p>

                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-amber-600 font-medium">{note.origin}</span>
                                        <span className="bg-gray-100 px-2 py-1 rounded-full text-gray-600">
                                            {note.strength}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Note Detail Modal */}
                    {selectedNote && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                            onClick={() => setSelectedNote(null)}
                        >
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="relative h-64">
                                    <img
                                        src={selectedNote.image}
                                        alt={selectedNote.name}
                                        className="w-full h-full object-cover"
                                    />
                                    <button
                                        onClick={() => setSelectedNote(null)}
                                        className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                    <div
                                        className="absolute top-4 left-4 w-12 h-12 rounded-full shadow-lg border-4 border-white"
                                        style={{ backgroundColor: selectedNote.color }}
                                    ></div>
                                </div>

                                <div className="p-8">
                                    <div className="flex items-center justify-between mb-4">
                                        <h2 className="text-3xl font-bold text-gray-900">{selectedNote.name}</h2>
                                        <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
                                            {selectedNote.category}
                                        </span>
                                    </div>

                                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                        {selectedNote.description}
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-2">Origin</h4>
                                            <p className="text-gray-600">{selectedNote.origin}</p>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-2">Strength</h4>
                                            <p className="text-gray-600">{selectedNote.strength}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}

                    {/* Coming Soon Section */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mt-16 text-center bg-gradient-to-r from-amber-100 to-yellow-100 rounded-2xl p-8"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                            More Notes Coming Soon
                        </h2>
                        <p className="text-gray-600 mb-6">
                            We're constantly expanding our fragrance note library. Stay tuned for more detailed information about the ingredients that make our perfumes special.
                        </p>
                        <button className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all">
                            Subscribe for Updates
                        </button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Notes;