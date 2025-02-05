'use server';

import { z } from "zod";
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
// import { signIn }  from '@/auth';
import { AuthError } from 'next-auth';

// performs all server-side actions