import axios from 'axios';
import { useQuery } from 'react-query';

import { MainLayout, Spinner } from '@/components';

const fetchUsers = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
  return data;
};

export const Sandbox = () => {
  const { data, isLoading } = useQuery('users', fetchUsers);

  if (isLoading) {
    return (
      <MainLayout>
        <Spinner className="m-4" />
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <h1 className="p-4 text-2xl">Sandbox Page</h1>
      <div className="flex flex-col justify-start ml-8">
        {data.map((user: any) => (
          <div key={user.id}>{user.name}</div>
        ))}
      </div>
    </MainLayout>
  );
};
