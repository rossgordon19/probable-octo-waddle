const { getDefaultConfig } = require("expo/metro-config");
const defaultConfig = getDefaultConfig(__dirname);
const Dotenv = require("dotenv");

module.exports = defaultConfig;
