import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	images: {
		domains: ['github.com','sailinhtut.dev'],
	},
	output: 'standalone',
	eslint: {
		ignoreDuringBuilds: true,
	},
	typescript: {
		ignoreBuildErrors: true,
	},
};

export default nextConfig;
