/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'media.tenor.com'
            },
        ],
    },
    experimental: {
        allowedOrigins: [
            'http://localhost:3000', 
            'https://media.tenor.com',
            'https://didactic-fortnight-qpgjj9wq5q629xv7-3000.app.github.dev/',
            'https://def.works'
        ],
    }
}

module.exports = nextConfig
