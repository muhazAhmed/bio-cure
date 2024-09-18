import { NextApiRequest, NextApiResponse, NextApiHandler } from 'next';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET as string;

// Middleware to check if the user is authenticated
export function withAuth(handler: NextApiHandler) {
    return async (req: NextApiRequest, res: NextApiResponse) => {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) return res.status(401).json({ message: 'Not authenticated' });

        try {
            const decode = jwt.verify(token, JWT_SECRET) as { userId: string, role: string }
            req.user = decode;
            return handler(req, res)
        } catch (error) {
            return res.status(401).json({ message: 'Invalid token' });
        }
    }
}

// Middleware to check if the user has a specific role
export function withRole(handler: NextApiHandler, requiredRole: string) {
    return async (req: NextApiRequest, res: NextApiResponse) => {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) return res.status(401).json({ message: 'Not authenticated' });

        try {
            const decoded = jwt.verify(token, JWT_SECRET) as { userId: string, role: string };
            if (decoded.role !== requiredRole) return res.status(403).json({ message: 'Access denied' });
            req.user = decoded;
            return handler(req, res);
        } catch (error) {
            return res.status(401).json({ message: 'Invalid token' });
        }
    }
}