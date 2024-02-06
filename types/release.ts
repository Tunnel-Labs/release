import type { z } from 'zod';

import type { releaseSchema } from '#utils/schema.ts';

export type Release = z.infer<typeof releaseSchema>;
