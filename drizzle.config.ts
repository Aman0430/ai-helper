import { defineConfig } from 'drizzle-kit'
export default defineConfig({
    schema: './utlis/schema.ts',
    dialect: "postgresql",
    dbCredentials: {
        url: process.env.NEXT_PUBLIC_DRIZZLE_DB_URL!,
    },
})