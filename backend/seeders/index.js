const mongoose = require('mongoose');
const { seedCategories } = require('./categorySeeder');
const { seedProducts } = require('./productSeeder');
const { seedAdmin } = require('./adminSeeder');
require('dotenv').config();

const runAllSeeders = async () => {
    try {
        console.log('🚀 Checking and seeding database...\n');

        // Seed admin first
        console.log('1️⃣  Checking admin user...');
        await seedAdmin();

        // Seed categories
        console.log('2️⃣  Checking categories...');
        await seedCategories();

        // Seed products
        console.log('3️⃣  Checking products...');
        await seedProducts();

        console.log('\n🎉 Database seeding check completed!');

    } catch (error) {
        console.error('❌ Error running seeders:', error);
        throw error;
    }
};

// Run all seeders
if (require.main === module) {
    runAllSeeders();
}

module.exports = { runAllSeeders };
