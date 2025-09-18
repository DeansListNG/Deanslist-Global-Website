/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    return config;
  },
  transpilePackages: [
    '@metaplex-foundation/umi-eddsa-web3js',
    '@soceanfi/solana-cli-config',
    '@metaplex-foundation/mpl-core',
    '@metaplex-foundation/mpl-core-das',
  ],
  images: {
    unoptimized: true, // <-- Add this to allow static export
    domains: ['gateway.irys.xyz'],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
