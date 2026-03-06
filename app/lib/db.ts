import { neon } from '@neondatabase/serverless';

let client: ReturnType<typeof neon>;

export const sql = ((strings: TemplateStringsArray, ...values: unknown[]) => {
  if (!client) {
    client = neon(process.env.POSTGRES_URL!);
  }
  return client(strings, ...values);
}) as ReturnType<typeof neon>;
