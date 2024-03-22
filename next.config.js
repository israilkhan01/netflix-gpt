/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    trailingSlash:true,
    // output: 'export',
    images: {
        // unoptimized:false,
        // remotePatterns: [{
        //     protocol: 'https',
        //     hostname: '**',
        //     port: '',
        //     pathname: '**',
        // }],
        // domains: ["cdn.cookielaw.org", "assets.nflxext.com"],
    }
}

module.exports = nextConfig

