/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/until-you-die",
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

module.exports = nextConfig;