import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
      remotePatterns: [
          {
              protocol: 'https',
              hostname: 'wjdcsgphjygrjkhdqzdp.supabase.co',
              port: '',
              pathname: '/storage/v1/object/public/cards/**'
          }
      ]
  }
};

export default nextConfig;
