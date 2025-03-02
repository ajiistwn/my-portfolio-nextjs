/** @type {import('next').NextConfig} */
const nextConfig = {
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
