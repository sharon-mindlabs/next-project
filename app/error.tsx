'use client'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="error-container">
      <div className="container">
        <div className="error-content">
          <h1>Something went wrong!</h1>
          <p>We apologize for the inconvenience. An unexpected error occurred.</p>
          {process.env.NODE_ENV === 'development' && (
            <pre className="error-details">
              {error.message}
            </pre>
          )}
          <button 
            onClick={() => reset()}
            className="button-solid-primary button-lg"
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  )
}
