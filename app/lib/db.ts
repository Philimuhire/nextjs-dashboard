import { neon, neonConfig } from '@neondatabase/serverless';
import { fetch, Agent } from 'undici';

const dispatcher = new Agent({ connect: { family: 4 } });
neonConfig.fetchFunction = (url: string | URL | Request, opts: RequestInit) =>
  fetch(url as string | URL, { ...opts, dispatcher } as Parameters<typeof fetch>[1]);

export const sql = neon(process.env.POSTGRES_URL!);
