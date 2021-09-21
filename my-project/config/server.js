module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 3000),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '33e5a27b585e605950887fc083ba66c7'),
    },
  },
});
