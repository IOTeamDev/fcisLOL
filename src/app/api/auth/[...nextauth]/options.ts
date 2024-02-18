// where we do all the sign in authentications with whatever prividers
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import { PrismaClient } from "@prisma/client/extension";
const prisma = PrismaClient();

export const authOptions: NextAuthOptions = {
	// adapter: prismaAdapter, // inserted prisma client

	session: {
		strategy: "jwt",
	},
	secret: process.env.NEXTAUTH_SECRET,

	providers: [
		GitHubProvider({
			clientId: process.env.GITHUB_ID as string,
			clientSecret: process.env.GITHUB_SECRET as string,
		}),
		CredentialsProvider({
			name: "Credentials", // use this name when using signIn function
			credentials: {
				phone: {
					label: "phone",
					type: "text",
				},
				password: {
					label: "password",
					type: "password",
				},
			},

			async authorize(credentials) {
				if (!credentials) {
					throw new Error("Credentials not provided");
				}

				// check to see if user exists
				const user = await prisma.user.findUnique({
					where: {
						phone: credentials?.phone,
					},
				});
				// if no user was found
				if (!user) {
					throw new Error("No user found");
				}

				const passwordMatch = credentials?.password === user.pass;
				// if password does not match
				if (!passwordMatch) {
					throw new Error("Incorrect password");
				}

				return user as any;
			},
		}),
	],
	pages: {
		signIn: "/login",
		signOut: "/login",
	},
};
