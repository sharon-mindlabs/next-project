'use client'
 
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="error-container">
          <div className="container">
            <div className="error-content">
              <h1>Something went wrong!</h1>
              <p>We apologize for the inconvenience. An unexpected error occurred.</p>
              <button 
                onClick={() => reset()}
                className="button-solid-primary button-lg"
              >
                Try again
              </button>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
