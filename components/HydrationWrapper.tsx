'use client';

import { ReactNode, useEffect, useState } from 'react';

export function HydrationWrapper({ children }: { children: ReactNode }) {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return <div className="min-h-screen pt-20" />;
  }

  return <>{children}</>;
}
