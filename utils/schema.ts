import { z } from 'zod';

export const releaseSchema = z.union([
	z.literal('staging'),
	z.literal('production'),
	z.null(),
]);
