/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["aceternity.com","img.freepik.com","assets.aceternity.com","images.unsplash.com","readdy.ai"],
        remotePatterns:[
          {
            protocol:"https",
            hostname:"cdn.sanity.io",
            pathname:"**"
          }
        ] // Add the external image domain here
      },
};

export default nextConfig;
