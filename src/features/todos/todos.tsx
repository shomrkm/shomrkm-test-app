import { MainLayout, Spinner } from '@/components';

import { useTodos } from './api/getTodos';
import { Todo } from './types';

export const Todos = () => {
  const todosQuery = useTodos();

  if (todosQuery.isLoading) {
    return (
      <MainLayout>
        <Spinner size="lg" className="m-4" />
      </MainLayout>
    );
  }

  if (!todosQuery.data) {
    return <MainLayout>No Todos</MainLayout>;
  }

  console.dir(todosQuery.data, { depth: null });
  return (
    <MainLayout>
      <h1 className="p-4 text-2xl">Your tasks</h1>
      <div className="flex flex-col justify-start ml-8">
        {todosQuery.data?.map((todo: Todo) => (
          <div key={todo.id}>{todo.title}</div>
        ))}
      </div>
    </MainLayout>
  );
};
