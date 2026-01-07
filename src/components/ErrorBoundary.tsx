import React from 'react';

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

// Check if error is a transient/recoverable error
const isTransientError = (error: any) => {
  if (!error?.message) return false;
  return (
    error.message.includes('Network') ||
    error.message.includes('fetch') ||
    error.message.includes('timeout') ||
    error.message.includes('CORS') ||
    error.message.includes('undefined') ||
    error.message.includes('null') ||
    error.message.includes('Cannot read properties')
  );
};

export class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error: any; retryCount: number; isRetrying: boolean }
> {
  private retryTimeout: NodeJS.Timeout | null = null;
  private maxAutoRetries = 2;

  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null, retryCount: 0, isRetrying: false };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true, error };
  }

  componentDidCatch(error: any) {
    console.warn('ErrorBoundary caught error:', error);
    
    // If it's a chunk loading error, reload the page
    if (isChunkLoadError(error)) {
      console.log('Chunk loading error detected, reloading page...');
      window.location.reload();
      return;
    }

    // Auto-retry for transient errors (up to maxAutoRetries times)
    if (isTransientError(error) && this.state.retryCount < this.maxAutoRetries) {
      this.scheduleRetry();
    }
  }

  componentWillUnmount() {
    if (this.retryTimeout) {
      clearTimeout(this.retryTimeout);
    }
  }

  scheduleRetry = () => {
    this.setState({ isRetrying: true });
    this.retryTimeout = setTimeout(() => {
      this.handleRetry();
    }, 1000); // Wait 1 second before retrying
  };

  handleRetry = () => {
    this.setState((prevState) => ({
      hasError: false,
      error: null,
      retryCount: prevState.retryCount + 1,
      isRetrying: false
    }));
  };

  handleRefresh = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      // Show loading spinner while auto-retrying
      if (this.state.isRetrying) {
        return (
          <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-4 border-green-200 border-t-green-600 rounded-full animate-spin"></div>
              <p className="text-gray-600 text-sm">Retrying...</p>
            </div>
          </div>
        );
      }

      // Show loading for chunk errors (page will reload)
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
      
      // Show user-friendly error UI with retry button
      return (
        <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Oops! Something went wrong</h2>
            <p className="text-gray-500 text-sm mb-6">
              Don't worry, this usually fixes itself. Try refreshing the page.
            </p>
            <div className="flex flex-col gap-3">
              <button
                onClick={this.handleRefresh}
                className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors"
              >
                Refresh Page
              </button>
              <button
                onClick={this.handleRetry}
                className="w-full py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}