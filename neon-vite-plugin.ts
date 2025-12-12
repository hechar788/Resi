import postgresPlugin from 'vite-plugin-db'

export default postgresPlugin({
  // No seed file; rely on Drizzle migrations (db:push/migrate) after DB creation
  referrer: 'create-tanstack',
  dotEnvKey: 'VITE_DATABASE_URL',
})
