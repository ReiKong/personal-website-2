const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use this app as the tracing root when other lockfiles exist elsewhere on the machine.
  outputFileTracingRoot: path.join(__dirname),
};

module.exports = nextConfig;
