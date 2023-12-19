require("dotenv").config();

module.exports = {
  i18n: {
    locales: ["en", "it", "es", "tr", "fr", "fa"],
    defaultLocale: "en",
  },
  env: {
    NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN:
      process.env.NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN,
    NEXT_EXAMPLE_CMS_DATOCMS_PREVIEW_SECRET: process.env.NEXT_EXAMPLE_CMS_DATOCMS_PREVIEW_SECRET,
  },
  async headers () {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  }
};
