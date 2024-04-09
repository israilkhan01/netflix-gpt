/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    trailingSlash:true,
    output: 'export',
    images: {
        unoptimized:false,
        remotePatterns: [{
            protocol: 'https',
            hostname: 'avatars.githubusercontent.com',
            port: '',
            pathname: '/u/44443989/**',
        }],
        // domains: ["cdn.cookielaw.org", "assets.nflxext.com"],
    }
}

module.exports = nextConfig

