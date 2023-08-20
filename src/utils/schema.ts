import { z } from 'zod';

/**
	The "release" is a runtime concept that is used to toggle between servicing a development deployment, the staging/green deployment or the production/blue deployment. The "expected" release is determined at runtime. For example, for the Tunnel Webapp, the release is determined by the "Origin" header of the request, and for the Tunnel CLI, the release is determined by the presence of the RELEASE environment variable.

	These behavior differences must be runtime-only so that the same application can be instantly promoted from green to blue without needing to be rebuilt. For example, `@t/webapp` determines which release to use based on the origin URL of a request instead of a hardcoded environment variable. This also includes applications which are built.
*/
export const releaseSchema = z.enum(['development', 'staging', 'production']);
