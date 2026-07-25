'use server';

import { redirect } from 'next/navigation';
import { supabaseAdmin } from '@/lib/supabase/server';

export async function signUpWithEmail(formData: FormData) {
  const email = String(formData.get('email') || '').trim();
  const password = String(formData.get('password') || '');
  const fullName = String(formData.get('fullName') || '').trim();

  if (!email || !password) {
    throw new Error('Email and password are required');
  }

  const { data: authData, error: authError } = await supabaseAdmin.auth.signUp({
    email,
    password,
  });

  if (authError) {
    throw new Error(authError.message);
  }

  if (authData.user) {
    await supabaseAdmin.from('profiles').upsert({
      id: authData.user.id,
      full_name: fullName,
    });
  }

  redirect('/auth/login');
}

export async function signInWithEmail(formData: FormData) {
  const email = String(formData.get('email') || '').trim();
  const password = String(formData.get('password') || '');

  if (!email || !password) {
    throw new Error('Email and password are required');
  }

  const { error } = await supabaseAdmin.auth.signInWithPassword({ email, password });

  if (error) {
    throw new Error(error.message);
  }

  redirect('/');
}
