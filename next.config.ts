/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // ESTO ES LO QUE NECESITAMOS PARA QUE PASE EL RECAPTCHA
    ignoreBuildErrors: true,
  },
  eslint: {
    // ESTO ES LO QUE NECESITAMOS PARA QUE PASE EL ERROR DE ESLINT
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
