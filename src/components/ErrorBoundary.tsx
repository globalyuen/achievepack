import React from 'react';

const searilizeError = (error: any) => {
  if (error instanceof Error) {
    return error.message + '\n' + error.stack;
  }
  return JSON.stringify(error, null, 2);
};

// Check if error is a chunk loading error
const isChunkLoadError = (error: any) => {
  if (!error?.message) return false;
  return (
    error.message.includes('Failed to fetch dynamically imported module') ||
    error.message.includes('Loading chunk') ||
    error.message.includes('Loading CSS chunk') ||
    error.message.includes('ChunkLoadError')
  );
};

export class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error: any }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true, error };
  }

  componentDidCatch(error: any) {
    // If it's a chunk loading error, reload the page
    if (isChunkLoadError(error)) {
      console.log('Chunk loading error detected, reloading page...');
      window.location.reload();
    }
  }

  render() {
    if (this.state.hasError) {
      // Don't show error UI for chunk loading errors (page will reload)
      if (isChunkLoadError(this.state.error)) {
        return (
          <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-4 border-green-200 border-t-green-600 rounded-full animate-spin"></div>
              <p className="text-gray-600 text-sm">Loading updated version...</p>
            </div>
          </div>
        );
      }
      
      return (
        <div className="p-4 border border-red-500 rounded">
          <h2 className="text-red-500">Something went wrong.</h2>
          <pre className="mt-2 text-sm">{searilizeError(this.state.error)}</pre>
        </div>
      );
    }

    return this.props.children;
  }
}