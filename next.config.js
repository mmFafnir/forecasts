/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "**",
      },
    ],
  },

  env: {
    GOOGLE_CLIENT_SECRET: "salkdmsalkdmlksamdlkmsadl",
    GOOGLE_CLIENT_SECRET: "123usakjdnkajsdn",

    NEXT_AUTH_URL: "http://localhost:3000",

    JWT_SECRET: "lovopTVGJs6zZ460tmAHADyI5FuTL/C067koGj3kCls=",

    RECAPTCHA_SITE_KEY: "6LfOa64oAAAAAMJdvElOaDsH5jgkG79tQ-aRpaT3",
    RECAPTCHA_SECRET_KEY: "6LfOa64oAAAAAIfjBZBLY_vv1S96MaEbig37dQaj",
  },
};

module.exports = nextConfig;
