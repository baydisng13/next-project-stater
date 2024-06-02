// import NextAuth, { DefaultSession } from "next-auth";

// declare module 'next-auth' {
//   export interface Session {
//     user?: {
//       id?: string;
//       name?: string;
//       email?: string;
//       image?: string;
//       // Add other user properties based on your provider
//     };
//     accessToken?: string;
//     error?: string;
//   }

//   export interface User {
//     id?: string;
//     name?: string;
//     email?: string;
//     image?: string;
//     // Add other user properties based on your provider
//   }

//   export interface Provider {
//     id: string; // e.g. "github", "twitter"
//     callback: {
//       profile(profile: any): User; // Define the profile mapping function
//     };
//   }

//   export interface CallbackOptions {
//     session: Session;
//     token?: string;
//     user: User;
//   }

//   export interface SessionCallback {
//     (options: CallbackOptions): Promise<Session>;
//   }

//   export interface JWT {
//     secret: string;
//     maxAge: number;
//   }

//   export interface NextAuthOptions {
//     providers: Provider[];
//     callbacks: {
//       session?: SessionCallback;
//       jwt?: {
//         encode(token: any, secret: string): Promise<string>;
//         decode(token: string, secret: string): Promise<any>;
//       };
      
//     };
//     secret: string;
//     jwt?: JWT;
//     // Other NextAuth.js options
//   }
// }
