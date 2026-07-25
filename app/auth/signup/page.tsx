"use client";

import Link from 'next/link';
import { useActionState } from 'react';
import { signUpWithEmail } from '../actions';

const initialState = { error: '' };

export default function SignupPage() {
  const [state, formAction, pending] = useActionState(async (_prev: typeof initialState, formData: FormData) => {
    try {
      await signUpWithEmail(formData);
      return initialState;
    } catch (error) {
      return { error: error instanceof Error ? error.message : 'Unable to create account' };
    }
  }, initialState);

  return (
    <main className="container" style={{ padding: '3rem 0', maxWidth: '480px' }}>
      <div className="card" style={{ padding: '1.5rem' }}>
        <h1 style={{ marginTop: 0 }}>Create account</h1>
        <p style={{ color: '#666' }}>Join Kickd to save your orders and checkout faster.</p>
        <form action={formAction} style={{ display: 'grid', gap: '0.9rem' }}>
          <input name="fullName" placeholder="Full name" required style={{ padding: '0.8rem', borderRadius: '0.75rem', border: '1px solid #ddd' }} />
          <input name="email" placeholder="Email" type="email" required style={{ padding: '0.8rem', borderRadius: '0.75rem', border: '1px solid #ddd' }} />
          <input name="password" placeholder="Password" type="password" required style={{ padding: '0.8rem', borderRadius: '0.75rem', border: '1px solid #ddd' }} />
          <button className="btn" type="submit" disabled={pending}>{pending ? 'Creating account...' : 'Sign up'}</button>
          {state.error ? <p style={{ color: '#dc2626', margin: 0 }}>{state.error}</p> : null}
        </form>
        <p style={{ marginTop: '1rem' }}>
          Already have an account? <Link href="/auth/login" style={{ color: '#dc2626' }}>Log in</Link>
        </p>
      </div>
    </main>
  );
}
