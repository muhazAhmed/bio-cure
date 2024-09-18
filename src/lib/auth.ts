import jwt from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET as string;

export const genToken = (userId: string, role: string) => {
    return jwt.sign({ userId, role }, JWT_SECRET, { expiresIn: '1hr' });
}

export const verifyToken = (token: string) => {
    try {
        return jwt.verify(token, JWT_SECRET)
    } catch (error) {
        throw new Error('auth.ts: Invalid Token')
    }
}