/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['res.cloudinary.com', 'images.unsplash.com', 'w7.pngwing.com']
    }
}

module.exports = nextConfig