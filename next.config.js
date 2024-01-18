/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'media.tenor.com'
            },
            {
                protocol: 'https',
                hostname: 'def-works-bucket.s3.sa-east-1.amazonaws.com'
            },
        ],
    }
}

module.exports = nextConfig
