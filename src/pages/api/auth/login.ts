import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import { ConnectDatabase } from "@/lib/mongodb";
import User from "@/models/User";
import { genToken } from "@/lib/auth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await ConnectDatabase();

    if (req.method != 'POST') {
        return res.status(405).json({ message: "login.ts: Method Not Allowed" })
    }

    const { email, password } = req.body;

    if (!email) return res.status(400).json({ message: "Email is required" })
    if (!password) return res.status(400).json({ message: "Password is required" })

    const user = await User.findOne({ email })
    if (!user) return res.status(401).json({ message: "Invalid email or password" });

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) return res.status(401).json({ message: "Invalid email or password" });

    const token = genToken(user._id.toString(), user.role);
    res.status(200).json({ message: "Login successful", token, userInfo: user })
}