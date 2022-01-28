module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd5e99888865c9924b960454f2aba7b03'),
  },
});
