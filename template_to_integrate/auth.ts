import NextAuth from 'next-auth';
import { authConfig } from '@/auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { User } from '@/app/lib/definitions';
import bycrypt from 'bcrypt';
import postgres from 'postgres';

////////////////////////
/////    Steps    /////
////////////////////////

// 1. finish defining user in /app/lib/definitions.ts
// 2. set up database with SQL prob (a sql server) or a some cloud service with 腾讯云 or 阿里云)
    // 2.1. cloud service needs to be big enough to also store and train models with user data (CV, interview and form filling)
// 3. set up database connection in /app/lib/data.ts
// 4. set up auth in /auth.ts
// 5. set up auth.config.ts


// async function getUser(email: string): Promise<User | undefined> {
//     try {
//         const user = await sql<User[]>`SELECT * FROM users WHERE email = ${email}`;
//         return user[0];
//     } catch (error) {
//         console.error(error);
//         throw new Error('Failed to fetch user.');
//     }
// }

// export const { auth, signIn, signOut } = NextAuth({
//     ...authConfig,
//     providers: [
//         Credentials({
//             async authorize(credentials) {
//                 const parsedCredentials = z
//                     .object({ email: z.string().email(), password: z.string().min(6) })
//                     .safeParse(credentials);

//                 if (parsedCredentials.success) {
//                     const { email, password } = parsedCredentials.data;
//                     const user = await getUser(email);
//                     if (!user) return null;
//                     const passwordMatch = await bycrypt.compare(password, user.password);

//                     if (passwordMatch) return user;
//                 }

//                 console.log('Invalid credentials');
//                 return null;
//             },
//         }),
//     ],
// });