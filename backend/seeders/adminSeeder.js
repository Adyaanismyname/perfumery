const Admin = require('../models/admin');

const seedAdmin = async () => {
    try {
        // Check if admin already exists
        const existingAdmin = await Admin.findOne({ email: 'adyaanrocks15@gmail.com' });

        if (existingAdmin) {
            console.log('   ✅ Admin user already exists');
            return;
        }

        // Create admin user
        const adminData = {
            username: 'adyaan',
            email: 'adyaanrocks15@gmail.com',
            currentOTP: null,
            otpExpiresAt: null
        };

        const admin = new Admin(adminData);
        await admin.save();

        console.log('   ✅ Admin user created successfully');
        console.log(`   📧 Email: ${admin.email}`);
        console.log(`   👤 Username: ${admin.username}`);

    } catch (error) {
        console.error('   ❌ Error seeding admin:', error.message);
        throw error;
    }
};

module.exports = { seedAdmin };