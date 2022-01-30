import React from 'react';

import { Sidebar } from './sidebar';

type Props = {
  children: React.ReactNode;
};

export const MainLayout: React.VFC<Props> = ({ children }: Props) => {
  return (
    <div className="flex w-screen h-screen">
      <Sidebar />
      <div className="flex-1">{children}</div>
    </div>
  );
};
