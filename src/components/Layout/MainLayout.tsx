import React from 'react';

import { Sidebar } from './Sidebar';
import { UserNavigation } from './UserNavigation';

type Props = {
  children: React.ReactNode;
};

export const MainLayout: React.VFC<Props> = ({ children }: Props) => {
  return (
    <div className="flex w-screen h-screen">
      <Sidebar />
      <div className="flex-col flex-1">
        <div className="flex flex-1 justify-end items-center px-4 h-16 bg-gray-300">
          <UserNavigation />
        </div>
        {children}
      </div>
    </div>
  );
};
