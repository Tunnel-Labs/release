import type { z } from 'zod';

import type { releaseSchema } from '~/utils/schema.js';

export type Release = z.infer<typeof releaseSchema>;
