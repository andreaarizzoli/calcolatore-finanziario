import { useCallback, useEffect, useState } from "react";

type UseMobileResponse = {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isDesktopMedium: boolean;
  isDesktopLarge: boolean;
};

type UseMobile = () => UseMobileResponse;

type VoidEvent = () => void;

export const breakpoints = {
  mobile: 600,
  tablet: 1024,
  desktopLow: 1200,
  desktopMid: 1367,
  desktopLarge: 1920,
};

export const useMobile: UseMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isTablet, setIsTablet] = useState<boolean>(false);
  const [isDesktop, setisDesktop] = useState<boolean>(false);
  const [isDesktopMedium, setisDesktopMedium] = useState<boolean>(false);
  const [isDesktopLarge, setIsDesktopLarge] = useState<boolean>(false);
  const [inputSizeResponsive, setInputSizeResponsive] = useState<
    "small" | "middle"
  >("middle");

  const handleDevice = useCallback<VoidEvent>(() => {
    setIsMobile(window.innerWidth < breakpoints.mobile);
    setIsTablet(
      window.innerWidth >= breakpoints.mobile &&
        window.innerWidth < breakpoints.desktopLow
    );
    setisDesktop(window.innerWidth >= breakpoints.desktopLow);
    setisDesktopMedium(window.innerWidth >= breakpoints.desktopMid);
    setIsDesktopLarge(window.innerWidth >= breakpoints.desktopLarge);
    handleInputSizeResponsive();
  }, []);

  useEffect(() => {
    if (typeof window === undefined) {
      return () => {};
    }
    handleDevice();
    window.self.addEventListener("resize", handleDevice);
    return () => window.self.removeEventListener("resize", handleDevice);
  }, []);

  const handleInputSizeResponsive = useCallback(() => {
    if (isMobile || isTablet) {
      setInputSizeResponsive("small");
    } else if (isDesktop || isDesktopMedium || isDesktopLarge) {
      setInputSizeResponsive("middle");
    } else {
      setInputSizeResponsive("middle");
    }
  }, [isMobile, isTablet, isDesktop, isDesktopMedium, isDesktopLarge]);

  return {
    isMobile,
    isTablet,
    isDesktop,
    isDesktopMedium,
    isDesktopLarge,
    inputSizeResponsive,
  };
};
