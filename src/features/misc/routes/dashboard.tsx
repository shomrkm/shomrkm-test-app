import React from 'react';

import { MainLayout } from '@/components';

export const Dashboard = () => {
  return (
    <MainLayout>
      <h1 className="p-4 text-2xl">Dashboard</h1>
      <div className="pl-2 text-base">Welcome to our application.</div>
    </MainLayout>
  );
};
