'use client';

import { useContext, useMemo } from 'react';

import { ScreenType } from '@mmcinema-ui/shared-utils';
import { ScreenContext } from '@mmcinema-ui/shared-providers';

const useScreenWidth = () => {
  const { deviceType, screenWidth } = useContext(ScreenContext);

  const result = useMemo(() => {
    const isMobile = deviceType === ScreenType.MOBILE;
    const isTablet = deviceType === ScreenType.TABLET;
    const isDesktop = deviceType === ScreenType.DESKTOP;
    return { deviceType, screenWidth, isMobile, isTablet, isDesktop };
  }, [deviceType, screenWidth]);

  return result;
};

export default useScreenWidth;
