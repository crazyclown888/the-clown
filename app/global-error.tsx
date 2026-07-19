'use client';

import { useEffect } from 'react';

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html>
      <body className="bg-dark flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="text-4xl font-black text-primary mb-4">Something went wrong!</h2>
          <p className="text-primary/70 mb-8">{error.message}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-8 py-3 bg-primary text-dark font-bold rounded-full hover:shadow-lg transition-all duration-300"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
