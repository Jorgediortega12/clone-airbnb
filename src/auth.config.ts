import NextAuth, { type NextAuthConfig } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { z } from "zod";
import prisma from "@/lib/prisma";
import bcryptjs from 'bcryptjs';

export const authConfig: NextAuthConfig = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "your-email@example.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                const parsedCredentials = z
                    .object({ email: z.string().email(), password: z.string().min(7) })
                    .safeParse(credentials);
            
                if (!parsedCredentials.success) return null;
            
                const { email, password: inputPassword } = parsedCredentials.data;
            
                const user = await prisma.user.findUnique({
                    where: { email: email.toLowerCase() },
                });
            
                if (!user) return null;
            
                if (!bcryptjs.compareSync(inputPassword, user.password)) return null;
            
                const { ...userWithoutPassword } = user;
            
                return userWithoutPassword;
            }
        }),
    ],
};

export const { signIn, signOut, auth, handlers } = NextAuth(authConfig);