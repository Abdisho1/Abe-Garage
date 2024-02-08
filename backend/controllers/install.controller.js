// Import the install service to handle the installation
const installService = require('../services/install.service');
// Create a function to handle the installation
async function install(req, res) {
    // Call the install service to handle the installation
    const installMessage = await installService.install();
    // Check if the installation was successful or not
    if (installMessage.status === 200) {
        // If successful, redirect to the login page
        res.status(200).json({
            message: installMessage
        });
    } else {
        // If not successful, redirect to the installation page
        res.status(500).json({
            message: installMessage
        });
    }
}

// Export the install function
module.exports = {
    install
};