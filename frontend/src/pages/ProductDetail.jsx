import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById } from '../api/productAPI';
import './ProductDetail.css';

const ProductDetail = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedImage, setSelectedImage] = useState(0);
    const [activeTab, setActiveTab] = useState('description');

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true);
                const productData = await getProductById(productId);
                setProduct(productData);
                setError(null);
            } catch (err) {
                console.error('Error fetching product:', err);
                setError('Failed to load product details');
            } finally {
                setLoading(false);
            }
        };

        if (productId) {
            fetchProduct();
        }
    }, [productId]);

    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        for (let i = 0; i < 5; i++) {
            if (i < fullStars) {
                stars.push(<span key={i} className="star filled">★</span>);
            } else if (i === fullStars && hasHalfStar) {
                stars.push(<span key={i} className="star half">★</span>);
            } else {
                stars.push(<span key={i} className="star">☆</span>);
            }
        }
        return stars;
    };

    if (loading) {
        return (
            <div className="product-detail-container">
                <div className="loading-spinner">
                    <div className="spinner"></div>
                    <p>Loading product details...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="product-detail-container">
                <div className="error-message">
                    <h2>Oops! Something went wrong</h2>
                    <p>{error}</p>
                    <button onClick={() => navigate('/')} className="back-button">
                        Back to Home
                    </button>
                </div>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="product-detail-container">
                <div className="error-message">
                    <h2>Product not found</h2>
                    <p>The product you're looking for doesn't exist.</p>
                    <button onClick={() => navigate('/')} className="back-button">
                        Back to Home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="product-detail-container">
            <div className="product-detail-content">
                <button onClick={() => navigate(-1)} className="back-button">
                    ← Back
                </button>

                <div className="product-detail-grid">
                    <div className="product-images">
                        <div className="main-image">
                            <img
                                src={Array.isArray(product.picture) ? product.picture[selectedImage] : product.picture}
                                alt={product.title}
                                className="product-main-image"
                            />
                        </div>

                        {Array.isArray(product.picture) && product.picture.length > 1 && (
                            <div className="image-thumbnails">
                                {product.picture.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        alt={`${product.title} ${index + 1}`}
                                        className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                                        onClick={() => setSelectedImage(index)}
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="product-info">
                        <div className="product-header">
                            <h1 className="product-title">{product.title}</h1>
                            <div className="product-rating">
                                <div className="stars">
                                    {renderStars(product.rating || 0)}
                                </div>
                                <span className="rating-number">({product.rating || 0})</span>
                            </div>
                        </div>

                        <div className="product-price">
                            <span className="price">${product.price}</span>
                            {product.originalPrice && (
                                <span className="original-price">${product.originalPrice}</span>
                            )}
                        </div>

                        {product.category && (
                            <div className="product-category">
                                <span className="category-label">Category:</span>
                                <span className="category-name">{product.category.name}</span>
                            </div>
                        )}

                        {product.description && (
                            <div className="product-description">
                                <h3>Description</h3>
                                <p>{product.description}</p>
                            </div>
                        )}

                        {product.ingredients && (
                            <div className="product-ingredients">
                                <h3>Ingredients</h3>
                                <p>{product.ingredients}</p>
                            </div>
                        )}

                        {product.size && (
                            <div className="product-size">
                                <span className="size-label">Size:</span>
                                <span className="size-value">{product.size}</span>
                            </div>
                        )}

                        {product.brand && (
                            <div className="product-brand">
                                <span className="brand-label">Brand:</span>
                                <span className="brand-value">{product.brand}</span>
                            </div>
                        )}

                        <div className="product-actions">
                            <button className="add-to-cart-btn">
                                Add to Cart
                            </button>
                            <button className="wishlist-btn">
                                ♡ Add to Wishlist
                            </button>
                        </div>

                        {product.inStock !== undefined && (
                            <div className={`stock-status ${product.inStock ? 'in-stock' : 'out-of-stock'}`}>
                                {product.inStock ? '✓ In Stock' : '✗ Out of Stock'}
                            </div>
                        )}
                    </div>
                </div>

                {/* Detailed Description Section */}
                <div className="product-detailed-description">
                    <div className="description-tabs">
                        <div className="tab-buttons">
                            <button
                                className={`tab-button ${activeTab === 'description' ? 'active' : ''}`}
                                onClick={() => setActiveTab('description')}
                            >
                                Description
                            </button>
                            <button
                                className={`tab-button ${activeTab === 'notes' ? 'active' : ''}`}
                                onClick={() => setActiveTab('notes')}
                            >
                                Fragrance Notes
                            </button>
                            <button
                                className={`tab-button ${activeTab === 'ingredients' ? 'active' : ''}`}
                                onClick={() => setActiveTab('ingredients')}
                            >
                                Ingredients
                            </button>
                            <button
                                className={`tab-button ${activeTab === 'reviews' ? 'active' : ''}`}
                                onClick={() => setActiveTab('reviews')}
                            >
                                Reviews
                            </button>
                        </div>

                        <div className="tab-content">
                            {/* Description Tab */}
                            {activeTab === 'description' && (
                                <div className="tab-panel active" id="description">
                                    <div className="description-content">
                                        <h3>Product Description</h3>
                                        <p className="description-text">
                                            {product.description || `Discover the captivating essence of ${product.title}, a masterfully crafted fragrance that embodies sophistication and elegance. This exquisite scent opens with vibrant top notes that immediately capture attention, followed by a heart of luxurious floral and aromatic accords that create depth and character.`}
                                        </p>

                                        <div className="product-highlights">
                                            <h4>Product Highlights</h4>
                                            <ul>
                                                <li>Long-lasting Eau de Parfum concentration</li>
                                                <li>Premium quality ingredients sourced globally</li>
                                                <li>Suitable for both day and evening wear</li>
                                                <li>Elegant packaging perfect for gifting</li>
                                                <li>Cruelty-free and ethically sourced</li>
                                            </ul>
                                        </div>

                                        <div className="fragrance-family">
                                            <h4>Fragrance Family</h4>
                                            <p>{product.category?.name || 'Luxury Collection'} - A sophisticated blend that appeals to discerning fragrance enthusiasts.</p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Fragrance Notes Tab */}
                            {activeTab === 'notes' && (
                                <div className="tab-panel" id="notes">
                                    <div className="notes-content">
                                        <h3>Fragrance Composition</h3>

                                        <div className="notes-pyramid">
                                            <div className="note-layer top-notes">
                                                <div className="note-header">
                                                    <span className="note-icon">🌸</span>
                                                    <h4>Top Notes</h4>
                                                    <span className="note-timing">First 15 minutes</span>
                                                </div>
                                                <div className="note-list">
                                                    <span className="note-item">Bergamot</span>
                                                    <span className="note-item">Lemon</span>
                                                    <span className="note-item">Pink Pepper</span>
                                                </div>
                                            </div>

                                            <div className="note-layer heart-notes">
                                                <div className="note-header">
                                                    <span className="note-icon">🌹</span>
                                                    <h4>Heart Notes</h4>
                                                    <span className="note-timing">15 minutes - 2 hours</span>
                                                </div>
                                                <div className="note-list">
                                                    <span className="note-item">Rose</span>
                                                    <span className="note-item">Jasmine</span>
                                                    <span className="note-item">Patchouli</span>
                                                </div>
                                            </div>

                                            <div className="note-layer base-notes">
                                                <div className="note-header">
                                                    <span className="note-icon">🌰</span>
                                                    <h4>Base Notes</h4>
                                                    <span className="note-timing">2+ hours</span>
                                                </div>
                                                <div className="note-list">
                                                    <span className="note-item">Oudh</span>
                                                    <span className="note-item">Sandalwood</span>
                                                    <span className="note-item">Amber</span>
                                                    <span className="note-item">Musk</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="scent-journey">
                                            <h4>The Scent Journey</h4>
                                            <p>Experience how this fragrance evolves throughout the day, from the initial bright burst of citrus to the deep, sensual base that lingers on your skin.</p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Ingredients Tab */}
                            {activeTab === 'ingredients' && (
                                <div className="tab-panel" id="ingredients">
                                    <div className="ingredients-content">
                                        <h3>Premium Ingredients</h3>

                                        <div className="ingredient-categories">
                                            <div className="ingredient-category">
                                                <h4>Natural Extracts</h4>
                                                <p>Our fragrances feature carefully selected natural extracts sourced from the finest suppliers worldwide.</p>
                                                <ul>
                                                    <li>Bulgarian Rose Oil</li>
                                                    <li>Indian Sandalwood</li>
                                                    <li>Cambodian Oudh</li>
                                                    <li>Italian Bergamot</li>
                                                </ul>
                                            </div>

                                            <div className="ingredient-category">
                                                <h4>Sustainable Sourcing</h4>
                                                <p>We are committed to ethical and sustainable sourcing practices, supporting local communities and preserving natural habitats.</p>
                                            </div>

                                            <div className="ingredient-category">
                                                <h4>Quality Assurance</h4>
                                                <p>Every ingredient undergoes rigorous quality testing to ensure the highest standards of purity and excellence.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Reviews Tab */}
                            {activeTab === 'reviews' && (
                                <div className="tab-panel" id="reviews">
                                    <div className="reviews-content">
                                        <h3>Customer Reviews</h3>

                                        <div className="review-summary">
                                            <div className="rating-overview">
                                                <div className="average-rating">
                                                    <span className="rating-number">{product.rating || 4.8}</span>
                                                    <div className="stars-large">
                                                        {renderStars(product.rating || 4.8)}
                                                    </div>
                                                    <p>Based on 127 reviews</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="individual-reviews">
                                            <div className="review-item">
                                                <div className="review-header">
                                                    <div className="reviewer-info">
                                                        <strong>Sarah M.</strong>
                                                        <span className="verified">Verified Purchase</span>
                                                    </div>
                                                    <div className="review-rating">
                                                        {renderStars(5)}
                                                    </div>
                                                </div>
                                                <p className="review-text">"Absolutely love this fragrance! The scent is sophisticated and lasts all day. Perfect for special occasions."</p>
                                                <span className="review-date">2 weeks ago</span>
                                            </div>

                                            <div className="review-item">
                                                <div className="review-header">
                                                    <div className="reviewer-info">
                                                        <strong>Michael R.</strong>
                                                        <span className="verified">Verified Purchase</span>
                                                    </div>
                                                    <div className="review-rating">
                                                        {renderStars(4)}
                                                    </div>
                                                </div>
                                                <p className="review-text">"Great fragrance with excellent longevity. The oudh notes are prominent without being overwhelming."</p>
                                                <span className="review-date">1 month ago</span>
                                            </div>

                                            <div className="review-item">
                                                <div className="review-header">
                                                    <div className="reviewer-info">
                                                        <strong>Emma L.</strong>
                                                        <span className="verified">Verified Purchase</span>
                                                    </div>
                                                    <div className="review-rating">
                                                        {renderStars(5)}
                                                    </div>
                                                </div>
                                                <p className="review-text">"This has become my signature scent. The quality is exceptional and the packaging is beautiful."</p>
                                                <span className="review-date">3 weeks ago</span>
                                            </div>
                                        </div>

                                        <button className="load-more-reviews">Load More Reviews</button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;