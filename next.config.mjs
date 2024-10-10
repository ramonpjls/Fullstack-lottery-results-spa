/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['lottery.mossit.xyz'],
    },
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'https://lottery.mossit.xyz/:path*',
            },
        ];
    },
}

export default nextConfig;