import React from 'react';

import { MainLayout } from '@/components';

export const Dashboard = () => {
  return (
    <MainLayout>
      <h1 className="text-2xl p-4">Dashboard</h1>
      <div className="text-base pl-2">Welcome to our application</div>
    </MainLayout>
  );
};
