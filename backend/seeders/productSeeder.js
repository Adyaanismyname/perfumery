const mongoose = require('mongoose');
const Product = require('../models/product');
const Category = require('../models/category');
require('dotenv').config();

const getRandomRating = () => (Math.random() * 2 + 3).toFixed(1); // 3.0 - 5.0 stars
const getRandomStock = () => Math.floor(Math.random() * 50) + 10; // 10-60 items

const createProducts = async () => {
    const categories = await Category.find();
    const mensCategory = categories.find(c => c.name === "Men's Fragrances")?._id;
    const womensCategory = categories.find(c => c.name === "Women's Fragrances")?._id;
    const unisexCategory = categories.find(c => c.name === "Unisex Fragrances")?._id;
    const luxuryCategory = categories.find(c => c.name === "Luxury Collection")?._id;
    const freshCategory = categories.find(c => c.name === "Fresh & Citrus")?._id;
    const orientalCategory = categories.find(c => c.name === "Oriental & Spicy")?._id;

    return [
        // Men's Fragrances
        {
            title: "Dior Sauvage Eau de Toilette",
            description: "A fresh, raw and noble fragrance. Sauvage is an act of creation inspired by wide-open spaces. An ozone blue sky sprawled above a rocky landscape, white-hot under the desert sun.",
            picture: "https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?w=300&h=400&fit=crop",
            rating: getRandomRating(),
            price: 89.99,
            category: mensCategory,
            stock: getRandomStock(),
            featured: true
        },
        {
            title: "Tom Ford Oud Wood",
            description: "Rare oud wood is combined with rosewood and cardamom, then golden sandalwood and creamy coconut to create this sophisticated and mysterious fragrance.",
            picture: "https://images.unsplash.com/photo-1594736797933-d0fd56fa3b1d?w=300&h=400&fit=crop",
            rating: getRandomRating(),
            price: 245.00,
            category: luxuryCategory,
            stock: getRandomStock(),
            featured: true
        },
        {
            title: "Creed Aventus",
            description: "The bestselling men's fragrance in Creed's history. A sophisticated scent perfect for the bold, spirited and confident man.",
            picture: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=300&h=400&fit=crop",
            rating: getRandomRating(),
            price: 315.00,
            category: luxuryCategory,
            stock: getRandomStock(),
            featured: true
        },
        {
            title: "Versace Eros",
            description: "Masculine and confident, the Eros fragrance fuses woody, oriental and fresh notes, creating a powerful perfume that evokes Eros—the god of love.",
            picture: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop",
            rating: getRandomRating(),
            price: 74.99,
            category: mensCategory,
            stock: getRandomStock(),
            featured: false
        },
        {
            title: "Bleu de Chanel",
            description: "An unexpected contrast of crisp citrus and warm wood accord. A timeless scent housed in a bottle of pure, simple elegance.",
            picture: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=300&h=400&fit=crop",
            rating: getRandomRating(),
            price: 97.00,
            category: mensCategory,
            stock: getRandomStock(),
            featured: false
        },

        // Women's Fragrances
        {
            title: "Chanel No. 5",
            description: "The ultimate expression of femininity. A bouquet of aldehydes and florals including rose, ylang-ylang, and jasmine.",
            picture: "https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?w=300&h=400&fit=crop",
            rating: getRandomRating(),
            price: 132.00,
            category: womensCategory,
            stock: getRandomStock(),
            featured: true
        },
        {
            title: "Dior Miss Dior",
            description: "A sparkling floral bouquet that is both fresh and elegant. The new Miss Dior is a declaration of love from Christian Dior to all women.",
            picture: "https://images.unsplash.com/photo-1595425970945-1563269b3d26?w=300&h=400&fit=crop",
            rating: getRandomRating(),
            price: 89.00,
            category: womensCategory,
            stock: getRandomStock(),
            featured: true
        },
        {
            title: "Viktor & Rolf Flowerbomb",
            description: "An explosion of flowers that makes everything seem more positive. Flowerbomb is a floral explosion, a profusion of flowers that has the power to make everything seem more positive.",
            picture: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=300&h=400&fit=crop",
            rating: getRandomRating(),
            price: 104.00,
            category: womensCategory,
            stock: getRandomStock(),
            featured: false
        },
        {
            title: "Yves Saint Laurent Black Opium",
            description: "An addictive gourmand fragrance. Black Opium is the first feminine fragrance by Yves Saint Laurent to dare addictive coffee.",
            picture: "https://images.unsplash.com/photo-1594736797933-d0fd56fa3b1d?w=300&h=400&fit=crop",
            rating: getRandomRating(),
            price: 78.00,
            category: womensCategory,
            stock: getRandomStock(),
            featured: false
        },

        // Unisex Fragrances
        {
            title: "Le Labo Santal 33",
            description: "A cult favorite with a distinctive scent that's both smoky and leathery, yet sweet and spicy. Santal 33 is a unisex fragrance that's instantly recognizable.",
            picture: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=300&h=400&fit=crop",
            rating: getRandomRating(),
            price: 182.00,
            category: unisexCategory,
            stock: getRandomStock(),
            featured: true
        },
        {
            title: "Maison Margiela REPLICA Beach Walk",
            description: "The memory of a summer stroll along the shore. Beach Walk captures the essence of a carefree day by the ocean.",
            picture: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop",
            rating: getRandomRating(),
            price: 135.00,
            category: freshCategory,
            stock: getRandomStock(),
            featured: false
        },

        // Fresh & Citrus
        {
            title: "Acqua di Parma Colonia",
            description: "A timeless Italian classic. Fresh and vibrant with notes of lemon, bergamot, and sweet orange, balanced with lavender and rose.",
            picture: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop",
            rating: getRandomRating(),
            price: 125.00,
            category: freshCategory,
            stock: getRandomStock(),
            featured: false
        },
        {
            title: "Hermès Un Jardin Sur Le Toit",
            description: "A garden suspended between sky and earth. A vegetal and mineral fragrance theme that evokes the grass, the wind and the rose petals.",
            picture: "https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?w=300&h=400&fit=crop",
            rating: getRandomRating(),
            price: 110.00,
            category: freshCategory,
            stock: getRandomStock(),
            featured: false
        },

        // Oriental & Spicy
        {
            title: "Amouage Interlude Man",
            description: "A masterpiece of smoky incense and oregano. Interlude Man is chaos and order, captured in perfect harmony.",
            picture: "https://images.unsplash.com/photo-1594736797933-d0fd56fa3b1d?w=300&h=400&fit=crop",
            rating: getRandomRating(),
            price: 285.00,
            category: orientalCategory,
            stock: getRandomStock(),
            featured: false
        },
        {
            title: "By Kilian Love Don't Be Shy",
            description: "A gourmand fragrance that's both sweet and sophisticated. Marshmallow, neroli, and orange blossom create an irresistible scent.",
            picture: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=300&h=400&fit=crop",
            rating: getRandomRating(),
            price: 245.00,
            category: orientalCategory,
            stock: getRandomStock(),
            featured: false
        },

        // Additional luxury items
        {
            title: "Tom Ford Black Orchid",
            description: "A luxurious and sensual fragrance of rich, dark accords and an alluring potion of black orchids and spice.",
            picture: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=300&h=400&fit=crop",
            rating: getRandomRating(),
            price: 150.00,
            category: luxuryCategory,
            stock: getRandomStock(),
            featured: true
        },
        {
            title: "Maison Francis Kurkdjian Baccarat Rouge 540",
            description: "A sophisticated and mysterious fragrance. Baccarat Rouge 540 lays on the skin like an amber, floral and woody breeze.",
            picture: "https://images.unsplash.com/photo-1595425970945-1563269b3d26?w=300&h=400&fit=crop",
            rating: getRandomRating(),
            price: 325.00,
            category: luxuryCategory,
            stock: getRandomStock(),
            featured: true
        }
    ];
};

const seedProducts = async () => {
    try {
        // Check if categories exist
        const categoryCount = await Category.countDocuments();
        if (categoryCount === 0) {
            console.log('⚠️  No categories found. Please run the category seeder first.');
            return;
        }

        // Always clear existing products and reseed
        const existingProducts = await Product.countDocuments();
        if (existingProducts > 0) {
            await Product.deleteMany({});
            console.log(`�️  Cleared ${existingProducts} existing products`);
        }

        // Create and insert products
        const products = await createProducts();
        const createdProducts = await Product.insertMany(products);

        console.log(`✅ Created ${createdProducts.length} fresh products`);
        console.log('🎉 Product seeding completed successfully!');

        // Display summary by category
        const categories = await Category.find();
        for (const category of categories) {
            const count = await Product.countDocuments({ category: category._id });
            console.log(`   📦 ${category.name}: ${count} products`);
        }

    } catch (error) {
        console.error('Error seeding products:', error);
        throw error;
    }
};

// Run the seeder
if (require.main === module) {
    seedProducts();
}

module.exports = { seedProducts };
