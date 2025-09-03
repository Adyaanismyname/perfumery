const mongoose = require('mongoose');
const Category = require('../models/category');
require('dotenv').config();

const categories = [
    {
        name: "Men's Fragrances",
        description: "Sophisticated and masculine scents for the modern man",
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=300&fit=crop"
    },
    {
        name: "Women's Fragrances",
        description: "Elegant and captivating perfumes for women",
        image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?w=400&h=300&fit=crop"
    },
    {
        name: "Unisex Fragrances",
        description: "Versatile scents that transcend gender boundaries",
        image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400&h=300&fit=crop"
    },
    {
        name: "Luxury Collection",
        description: "Premium and exclusive fragrances from top designers",
        image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=300&fit=crop"
    },
    {
        name: "Fresh & Citrus",
        description: "Light, refreshing scents perfect for everyday wear",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop"
    },
    {
        name: "Oriental & Spicy",
        description: "Rich, warm fragrances with exotic spices and woods",
        image: "https://images.unsplash.com/photo-1594736797933-d0fd56fa3b1d?w=400&h=300&fit=crop"
    }
];

const seedCategories = async () => {
    try {
        // Always clear existing categories and reseed
        const existingCategories = await Category.countDocuments();
        if (existingCategories > 0) {
            await Category.deleteMany({});
            console.log(`�️  Cleared ${existingCategories} existing categories`);
        }

        // Insert new categories
        const createdCategories = await Category.insertMany(categories);
        console.log(`✅ Created ${createdCategories.length} fresh categories`);

    } catch (error) {
        console.error('Error seeding categories:', error);
        throw error;
    }
};

// Run the seeder
if (require.main === module) {
    seedCategories();
}

module.exports = { seedCategories, categories };
