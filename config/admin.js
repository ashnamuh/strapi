module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'fd869f60150f5db126db9606e4c9488b'),
  },
});
