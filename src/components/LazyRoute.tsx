import React, { Suspense, lazy, ComponentType } from 'react';

interface LazyRouteProps {
  component: () => Promise<{ default: ComponentType<any> }>;
  fallback?: React.ReactNode;
  [key: string]: any;
}

const LazyRoute: React.FC<LazyRouteProps> = ({ component, fallback = null, ...props }) => {
  // Memoize the lazy component to prevent infinite suspense loops on re-renders
  const LazyComponent = React.useMemo(() => lazy(component), [component]);

  return (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

export default LazyRoute;
