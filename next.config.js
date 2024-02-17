/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
            {
                // https://i.ytimg.com/vi/XDxr8W-9Yz4/w
                //https://drive.google.com/
                protocol: 'https',
                hostname: 'i.ytimg.com',
                port: '',
                pathname: '/**',
            }, {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '/**'
            }
        ],
    },
}

module.exports = nextConfig
