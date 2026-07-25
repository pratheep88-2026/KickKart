"use client";

import Link from 'next/link';
import { useActionState } from 'react';
import { signInWithEmail } from '../actions';

const initialState = { error: '' };

export default function LoginPage() {
  const [state, formAction, pending] = useActionState(async (_prev: typeof initialState, formData: FormData) => {
    try {
      await signInWithEmail(formData);
      return initialState;
    } catch (error) {
      return { error: error instanceof Error ? error.message : 'Unable to sign in' };
    }
  }, initialState);

  return (
    <main className="container" style={{ padding: '3rem 0', maxWidth: '480px' }}>
      <div className="card" style={{ padding: '1.5rem' }}>
        <h1 style={{ marginTop: 0 }}>Log in</h1>
        <p style={{ color: '#666' }}>Sign in to view your order history and continue checkout.</p>
        <form action={formAction} style={{ display: 'grid', gap: '0.9rem' }}>
          <input name="email" placeholder="Email" type="email" required style={{ padding: '0.8rem', borderRadius: '0.75rem', border: '1px solid #ddd' }} />
          <input name="password" placeholder="Password" type="password" required style={{ padding: '0.8rem', borderRadius: '0.75rem', border: '1px solid #ddd' }} />
          <button className="btn" type="submit" disabled={pending}>{pending ? 'Signing in...' : 'Log in'}</button>
          {state.error ? <p style={{ color: '#dc2626', margin: 0 }}>{state.error}</p> : null}
        </form>
        <p style={{ marginTop: '1rem' }}>
          New here? <Link href="/auth/signup" style={{ color: '#dc2626' }}>Create an account</Link>
        </p>
      </div>
    </main>
  );
}
