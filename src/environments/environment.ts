export const environment = {
  production: false,
  calendlyUrl:
    process.env['CALENDLY_URL'] ||
    'https://calendly.com/lilydeveloppement/new-meeting',
  apiUrl: process.env['API_URL'] || 'http://localhost:4200',
};
