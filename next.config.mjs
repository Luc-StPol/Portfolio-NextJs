/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['picsum.photos', 'next-auth.js.org'], // Ajoute picsum.photos comme domaine autorisé
  },
};

export default nextConfig;
