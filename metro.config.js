const { getDefaultConfig } = require("expo/metro-config");
const defaultConfig = getDefaultConfig(__dirname);
const Dotenv = require("dotenv");

// Load .env file contents into process.env
Dotenv.config();

module.exports = defaultConfig;
