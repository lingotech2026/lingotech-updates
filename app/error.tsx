'use client';

import { AlertTriangle, RefreshCw } from 'lucide-react';

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-12 bg-background">
      <section className="max-w-md w-full text-center">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-error-50 rounded-full">
            <AlertTriangle className="w-8 h-8 text-error-600" />
          </div>
        </div>

        <h1 className="text-2xl font-bold text-primary-700 mb-3">Something went wrong</h1>
        <p className="text-body mb-6 leading-relaxed">
          We encountered an unexpected error. Please try again, or refresh the page if this continues.
        </p>

        {process.env.NODE_ENV === 'development' && (
          <div className="mb-6 p-4 bg-error-50 border border-error-100 rounded-lg text-left">
            <p className="text-xs font-mono text-error-700 overflow-auto max-h-32">{error.message}</p>
          </div>
        )}

        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-inverse rounded-lg font-semibold transition-colors"
        >
          <RefreshCw className="w-4 h-4" />
          Try Again
        </button>
      </section>
    </main>
  );
}
