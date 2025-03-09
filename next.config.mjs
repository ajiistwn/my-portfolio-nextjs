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
};

export default nextConfig;
