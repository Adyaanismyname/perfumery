import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
    const location = useLocation();

    const navigationItems = [
        { name: 'Home', path: '/', hasDropdown: false },
        {
            name: 'Products',
            path: '/products',
            hasDropdown: true,
            dropdownItems: [
                { name: 'All Products', path: '/products' },
                { name: 'Men\'s Collection', path: '/products/men' },
                { name: 'Women\'s Collection', path: '/products/women' },
                { name: 'Unisex Collection', path: '/products/unisex' },
                { name: 'Featured Products', path: '/products/featured' },
            ]
        },
        { name: 'About', path: '/about', hasDropdown: false },
        { name: 'Contact', path: '/contact', hasDropdown: false },
    ];

    const isActive = (path) => {
        if (path === '/') {
            return location.pathname === '/';
        }
        return location.pathname.startsWith(path);
    };

    return (
        <>
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
                            <Link to="/" className="flex items-center space-x-4">
                                <img src="/logo.svg" alt="House of Oudh" className="h-12 w-12" />
                                <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
                                    House of Oudh
                                </span>
                            </Link>
                        </motion.div>

                        {/* Right Side - Navigation and Cart */}
                        <motion.div
                            className="flex items-center space-x-6"
                        >
                            {/* Desktop Navigation */}
                            <div className="hidden md:flex space-x-9 relative">
                                {navigationItems.map((item, index) => (
                                    <div
                                        key={item.name}
                                        className="relative"
                                        onMouseEnter={() => item.hasDropdown && setIsProductsDropdownOpen(true)}
                                        onMouseLeave={() => item.hasDropdown && setIsProductsDropdownOpen(false)}
                                    >
                                        {item.hasDropdown ? (
                                            <motion.button
                                                className={`text-white hover:text-amber-400 font-medium transition-colors relative group flex items-center space-x-1 ${isActive(item.path) ? 'text-amber-400' : ''
                                                    }`}
                                                whileHover={{ y: -2 }}
                                                initial={{ opacity: 0, y: -20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                            >
                                                <span>{item.name}</span>
                                                <svg className="w-4 h-4 transition-transform duration-200"
                                                    style={{ transform: isProductsDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-400 transition-all duration-300 ${isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'
                                                    }`}></span>
                                            </motion.button>
                                        ) : (
                                            <Link to={item.path}>
                                                <motion.span
                                                    className={`text-white hover:text-amber-400 font-medium transition-colors relative group ${isActive(item.path) ? 'text-amber-400' : ''
                                                        }`}
                                                    whileHover={{ y: -2 }}
                                                    initial={{ opacity: 0, y: -20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: index * 0.1 }}
                                                >
                                                    {item.name}
                                                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-400 transition-all duration-300 ${isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'
                                                        }`}></span>
                                                </motion.span>
                                            </Link>
                                        )}

                                        {/* Dropdown Menu */}
                                        {item.hasDropdown && (
                                            <AnimatePresence>
                                                {isProductsDropdownOpen && (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: -10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: -10 }}
                                                        transition={{ duration: 0.2 }}
                                                        className="absolute top-full left-0 mt-2 w-56 bg-black/95 backdrop-blur-md rounded-lg shadow-2xl border border-amber-500/20 z-50"
                                                    >
                                                        <div className="py-2">
                                                            {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                                                                <Link
                                                                    key={dropdownItem.name}
                                                                    to={dropdownItem.path}
                                                                    className="block px-4 py-3 text-white hover:text-amber-400 hover:bg-amber-500/10 transition-colors"
                                                                    onClick={() => setIsProductsDropdownOpen(false)}
                                                                >
                                                                    <motion.div
                                                                        initial={{ opacity: 0, x: -10 }}
                                                                        animate={{ opacity: 1, x: 0 }}
                                                                        transition={{ delay: dropdownIndex * 0.05 }}
                                                                        className="flex items-center space-x-2"
                                                                    >
                                                                        <span className="text-amber-400">•</span>
                                                                        <span>{dropdownItem.name}</span>
                                                                    </motion.div>
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Search Bar */}
                            <div className="hidden lg:flex items-center">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search products..."
                                        className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 pr-10 text-white placeholder-white/70 focus:outline-none focus:border-amber-400 focus:bg-white/20 transition-all w-64"
                                    />
                                    <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-amber-400 transition-colors">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* Cart and User Actions */}
                            <div className="hidden md:flex items-center space-x-4">
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="relative p-2 text-white hover:text-amber-400 transition-colors"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                    <span className="absolute -top-1 -right-1 bg-amber-500 text-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">0</span>
                                </motion.button>

                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="relative p-2 text-white hover:text-amber-400 transition-colors"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6.5-5v5a2 2 0 01-2 2H9a2 2 0 01-2-2v-5m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                                    </svg>
                                    <span className="absolute -top-1 -right-1 bg-amber-500 text-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">0</span>
                                </motion.button>
                            </div>

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
                            {/* Mobile Search */}
                            <div className="mb-6">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search products..."
                                        className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-3 pr-10 text-white placeholder-white/70 focus:outline-none focus:border-amber-400 focus:bg-white/20 transition-all"
                                    />
                                    <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-amber-400 transition-colors">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div className="flex flex-col space-y-6">
                                {navigationItems.map((item, index) => (
                                    <div key={item.name}>
                                        {item.hasDropdown ? (
                                            <div className="space-y-3">
                                                <motion.span
                                                    initial={{ opacity: 0, x: 50 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: index * 0.1 }}
                                                    className="text-white font-medium text-xl border-b border-gray-700 pb-4 block"
                                                >
                                                    {item.name}
                                                </motion.span>
                                                <div className="pl-4 space-y-2">
                                                    {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                                                        <Link
                                                            key={dropdownItem.name}
                                                            to={dropdownItem.path}
                                                            onClick={() => setIsMobileMenuOpen(false)}
                                                            className="block text-white/80 hover:text-amber-400 transition-colors py-2"
                                                        >
                                                            <motion.div
                                                                initial={{ opacity: 0, x: 30 }}
                                                                animate={{ opacity: 1, x: 0 }}
                                                                transition={{ delay: (index * 0.1) + (dropdownIndex * 0.05) }}
                                                                className="flex items-center space-x-2"
                                                            >
                                                                <span className="text-amber-400 text-sm">•</span>
                                                                <span>{dropdownItem.name}</span>
                                                            </motion.div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        ) : (
                                            <Link
                                                to={item.path}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className={`block text-white hover:text-amber-400 font-medium text-xl transition-colors border-b border-gray-700 pb-4 ${isActive(item.path) ? 'text-amber-400' : ''
                                                    }`}
                                            >
                                                <motion.span
                                                    initial={{ opacity: 0, x: 50 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: index * 0.1 }}
                                                >
                                                    {item.name}
                                                </motion.span>
                                            </Link>
                                        )}
                                    </div>
                                ))}

                                {/* Mobile Cart and Wishlist */}
                                <div className="flex space-x-4 pt-6 border-t border-gray-700">
                                    <motion.button
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: navigationItems.length * 0.1 }}
                                        className="flex items-center space-x-2 text-white hover:text-amber-400 transition-colors"
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                        <span>Wishlist (0)</span>
                                    </motion.button>
                                    <motion.button
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: (navigationItems.length * 0.1) + 0.1 }}
                                        className="flex items-center space-x-2 text-white hover:text-amber-400 transition-colors"
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6.5-5v5a2 2 0 01-2 2H9a2 2 0 01-2-2v-5m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                                        </svg>
                                        <span>Cart (0)</span>
                                    </motion.button>
                                </div>
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
            </AnimatePresence>
        </>
    );
};

export default Navbar;
