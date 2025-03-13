/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "pbavcalneedsmfcjlbaf.supabase.co",
            },
        ],
    },
    productionBrowserSourceMaps: true,
    async rewrites() {
        return [
            {
                source: "/send-mail",
                destination: "/api/sendmail",
            },
        ];
    },
    // untuk optimassi preload image dan icon
    experimental: {
        optimizeCss: true,
    },
    images: {
        unoptimized: true, // Coba set ini untuk mencegah preload otomatis
    },
};

export default nextConfig;
