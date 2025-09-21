import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getAllProducts, getFeaturedProducts } from '../api/productAPI';
import Navbar from '../components/Navbar';

const Products = () => {
    const { category } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [sortBy, setSortBy] = useState('name');
    const [priceRange, setPriceRange] = useState([0, 1000]);
    const [selectedCategory, setSelectedCategory] = useState(category || 'all');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                let productData;

                if (category === 'featured') {
                    productData = await getFeaturedProducts();
                } else {
                    productData = await getAllProducts();
                }

                setProducts(productData || []);
                setError(null);
            } catch (err) {
                console.error('Error fetching products:', err);
                setError('Failed to load products');
                setProducts([]);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [category]);

    useEffect(() => {
        let filtered = [...products];

        // Filter by category
        if (selectedCategory !== 'all') {
            filtered = filtered.filter(product => {
                const productCategory = product.category?.name?.toLowerCase() || '';
                return productCategory.includes(selectedCategory.toLowerCase());
            });
        }

        // Filter by price range
        filtered = filtered.filter(product =>
            product.price >= priceRange[0] && product.price <= priceRange[1]
        );

        // Sort products
        filtered.sort((a, b) => {
            switch (sortBy) {
                case 'price-low':
                    return a.price - b.price;
                case 'price-high':
                    return b.price - a.price;
                case 'rating':
                    return (b.rating || 0) - (a.rating || 0);
                case 'name':
                default:
                    return a.title.localeCompare(b.title);
            }
        });

        setFilteredProducts(filtered);
    }, [products, selectedCategory, priceRange, sortBy]);

    const categories = [
        { value: 'all', label: 'All Products' },
        { value: 'men', label: "Men's Collection" },
        { value: 'women', label: "Women's Collection" },
        { value: 'unisex', label: 'Unisex Collection' },
        { value: 'featured', label: 'Featured Products' }
    ];

    const sortOptions = [
        { value: 'name', label: 'Name (A-Z)' },
        { value: 'price-low', label: 'Price (Low to High)' },
        { value: 'price-high', label: 'Price (High to Low)' },
        { value: 'rating', label: 'Highest Rated' }
    ];

    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating || 0);
        const hasHalfStar = (rating || 0) % 1 !== 0;

        for (let i = 0; i < 5; i++) {
            if (i < fullStars) {
                stars.push(<span key={i} className="text-amber-400">★</span>);
            } else if (i === fullStars && hasHalfStar) {
                stars.push(<span key={i} className="text-amber-400">★</span>);
            } else {
                stars.push(<span key={i} className="text-gray-300">☆</span>);
            }
        }
        return stars;
    };

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
                            {category === 'featured' ? 'Featured Products' :
                                category === 'men' ? "Men's Collection" :
                                    category === 'women' ? "Women's Collection" :
                                        category === 'unisex' ? 'Unisex Collection' : 'Our Products'}
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                            Discover our carefully curated collection of premium fragrances, each crafted with the finest ingredients and traditional techniques.
                        </p>
                    </motion.div>

                    {/* Filters and Sorting */}
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white rounded-2xl shadow-lg p-6 mb-8"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            {/* Category Filter */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                                >
                                    {categories.map(cat => (
                                        <option key={cat.value} value={cat.value}>{cat.label}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Sort By */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                                >
                                    {sortOptions.map(option => (
                                        <option key={option.value} value={option.value}>{option.label}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Price Range */}
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Price Range: ${priceRange[0]} - ${priceRange[1]}
                                </label>
                                <div className="flex items-center space-x-4">
                                    <input
                                        type="range"
                                        min="0"
                                        max="1000"
                                        step="10"
                                        value={priceRange[0]}
                                        onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                                        className="flex-1"
                                    />
                                    <input
                                        type="range"
                                        min="0"
                                        max="1000"
                                        step="10"
                                        value={priceRange[1]}
                                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                                        className="flex-1"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Results Count */}
                        <div className="mt-4 text-center text-gray-600">
                            Showing {filteredProducts.length} of {products.length} products
                        </div>
                    </motion.div>

                    {/* Products Grid */}
                    {loading ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                            {Array.from({ length: 8 }).map((_, index) => (
                                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
                                    <div className="w-full h-64 bg-gray-200"></div>
                                    <div className="p-6">
                                        <div className="h-4 bg-gray-200 rounded mb-2"></div>
                                        <div className="h-6 bg-gray-200 rounded mb-2"></div>
                                        <div className="flex justify-between items-center">
                                            <div className="h-8 bg-gray-200 rounded w-20"></div>
                                            <div className="h-8 bg-gray-200 rounded w-24"></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : error ? (
                        <div className="text-center py-20">
                            <div className="text-red-500 text-xl mb-4">⚠️ {error}</div>
                            <button
                                onClick={() => window.location.reload()}
                                className="bg-amber-500 text-white px-6 py-3 rounded-lg hover:bg-amber-600 transition-colors"
                            >
                                Try Again
                            </button>
                        </div>
                    ) : filteredProducts.length === 0 ? (
                        <div className="text-center py-20">
                            <div className="text-gray-500 text-xl mb-4">No products found</div>
                            <p className="text-gray-400">Try adjusting your filters to see more products.</p>
                        </div>
                    ) : (
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                        >
                            {filteredProducts.map((product) => (
                                <motion.div
                                    key={product._id}
                                    variants={itemVariants}
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    className="bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer"
                                >
                                    <Link to={`/product/${product._id}`}>
                                        <div className="relative overflow-hidden">
                                            <img
                                                src={product.picture}
                                                alt={product.title}
                                                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                            {/* Wishlist Button */}
                                            <button
                                                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white"
                                                onClick={(e) => e.preventDefault()}
                                            >
                                                <svg className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                </svg>
                                            </button>
                                        </div>

                                        <div className="p-6">
                                            {/* Category */}
                                            {product.category && (
                                                <p className="text-xs text-amber-600 uppercase tracking-wide font-medium mb-2">
                                                    {product.category.name}
                                                </p>
                                            )}

                                            {/* Product Title */}
                                            <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                                                {product.title}
                                            </h3>

                                            {/* Rating */}
                                            <div className="flex items-center gap-1 mb-3">
                                                <div className="flex">
                                                    {renderStars(product.rating)}
                                                </div>
                                                <span className="text-xs text-gray-500 ml-1">
                                                    ({product.rating || 0})
                                                </span>
                                            </div>

                                            {/* Price and Action */}
                                            <div className="flex items-center justify-between">
                                                <span className="text-xl font-bold text-gray-900">
                                                    ${product.price}
                                                </span>
                                                <button
                                                    className="bg-amber-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-amber-600 transition-colors"
                                                    onClick={(e) => e.preventDefault()}
                                                >
                                                    View Details
                                                </button>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}

                    {/* Load More Button */}
                    {filteredProducts.length > 0 && filteredProducts.length < products.length && (
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-center mt-12"
                        >
                            <button className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all">
                                Load More Products
                            </button>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Products;