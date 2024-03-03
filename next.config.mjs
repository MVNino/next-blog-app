/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // https://loremflickr.com/320/240?random=1
    remotePatterns: [
      {
        protocol: "https",
        hostname: "loremflickr.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
