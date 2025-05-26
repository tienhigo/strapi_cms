export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::security', // Security middleware (e.g., helmet)
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'https://res.cloudinary.com'], // Adjust if using a different image provider
          'media-src': ["'self'", 'data:', 'blob:', 'https://res.cloudinary.com'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: 'strapi::cors', // CORS middleware
    config: {
      origin: ['http://localhost:1523'], // Allow requests from your Vite frontend
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'], // Allowed HTTP methods
      headers: ['Content-Type', 'Authorization'], // Allowed headers
      credentials: true, // Allow cookies or auth headers if needed
    }},
];
