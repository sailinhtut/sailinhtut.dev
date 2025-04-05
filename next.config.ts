import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
	output: 'export',
	eslint: {
		ignoreDuringBuilds: true,
	},
	typescript: {
		ignoreBuildErrors: true,
	},
};

export default nextConfig;
