module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8d708ab941cec57a9a5a1740ba1eb815'),
  },
});
