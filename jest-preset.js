module.exports = {
  clearMocks: true,
  preset: 'jest',
  projects: ['<rootDir>/packages/**/jest.config.js'],
  testEnvironment: 'node',
  testMatch: ['*.spec.js', '*.spec.jsx']
}
