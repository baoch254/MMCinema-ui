'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';

import { ScreenType } from '@mmcinema-ui/shared-utils';

const ScreenContext = createContext<{
  deviceType: ScreenType;
  screenWidth: number;
}>(undefined as any);

type ScreenProviderProps = {
  children: React.ReactNode;
};

const ScreenProvider = ({ children }: ScreenProviderProps) => {
  const [screenWidth, setScreenWidth] = useState<number>(0);

  const deviceType = useMemo(() => {
    if (screenWidth < 576) {
      return ScreenType.MOBILE;
    }
    if (screenWidth < 992) {
      return ScreenType.TABLET;
    }
    return ScreenType.DESKTOP;
  }, [screenWidth]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setScreenWidth(window.innerWidth);

      const onResize = () => {
        setScreenWidth(window.innerWidth);
      };

      window.addEventListener('resize', onResize);
      return () => {
        window.removeEventListener('resize', onResize);
      };
    }
  }, []);

  const data = useMemo(() => {
    return { screenWidth, deviceType };
  }, [screenWidth, deviceType]);

  return (
    <ScreenContext.Provider value={data}>{children}</ScreenContext.Provider>
  );
};

type ScreenPropsType = {
  fallback?: React.ReactNode | React.ReactNode[];
  children: React.ReactNode | React.ReactNode[];
  device: ScreenType;
} & (
  | {
      accept: true;
      deny?: never;
    }
  | {
      deny: true;
      accept?: never;
    }
);

const Screen = ({
  fallback = null,
  children,
  device,
  accept,
  deny,
}: ScreenPropsType) => {
  const { deviceType } = useContext(ScreenContext);
  if (accept) {
    if (device === deviceType) {
      return <>{children}</>;
    }
  }
  if (deny) {
    if (device !== deviceType) {
      return <>{children}</>;
    }
  }
  return <>{fallback}</>;
};

export { ScreenContext, ScreenProvider, Screen };
