import { ReactNode } from "react";

export type FaqPannelType = {
  key: string;
  label: string;
  extra?: ReactNode;
  content: string;
};

export type FaqPannelProps = {
  faqPallelContent: FaqPannelType[];
};
