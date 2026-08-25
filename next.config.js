const isProd = process.env.NODE_ENV === "production";

module.exports = {
  output: "export",
  trailingSlash: true,
  basePath: isProd ? "/mookhpay-landing" : "",
  assetPrefix: isProd ? "/mookhpay-landing" : "",
  images: { unoptimized: true },
};
