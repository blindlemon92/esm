/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'hosting.photobucket.com',
			},
		],
	},
};

export default nextConfig;
