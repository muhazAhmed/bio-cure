/// <reference types="next" />
/// <reference types="next/image-types/global" />
/// <reference types="next/navigation-types/compat/navigation" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.

import { NextApiRequest } from 'next';

declare module 'next' {
    interface NextApiRequest {
        user?: {
            userId: string;
            role: string;
        };
    }
}