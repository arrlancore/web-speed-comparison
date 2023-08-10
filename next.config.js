/** @type {import('next').NextConfig} */
const rewrites = () => {
  return [
    {
      source: "/api/compare",
      destination: "https://webspeed-comparison.arrlancore.workers.dev/",
    },
  ];
};
const nextConfig = {
  rewrites,
};

module.exports = nextConfig;
