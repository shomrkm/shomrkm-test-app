import { useState } from 'react';

import { Spinner, Form, Button } from '@/components';
import { InputField } from '@/components/Form/InputField';

import { useTodos } from './api/getTodos';
import { Todo } from './types';

type FilterValue = {
  userId: string;
};

export const Todos = () => {
  const [userId, setUserId] = useState<number>(0);
  const todosQuery = useTodos(userId);

  const onSubmit = (values: FilterValue) => {
    setUserId(Number(values.userId));
  };

  if (todosQuery.isLoading) {
    return <Spinner size="lg" className="m-4" />;
  }

  if (!todosQuery.data) {
    return <div>No Todos</div>;
  }

  return (
    <>
      <h1 className="p-4 text-2xl">Your tasks</h1>
      <div className="flex flex-col justify-start ml-8">
        <Form<FilterValue>
          onSubmit={onSubmit}
          id="user-id"
          className="flex gap-x-2 mb-4 align-bottom"
        >
          {({ register, formState }) => (
            <>
              <InputField
                label="user id"
                error={formState.errors['userId']}
                registration={register('userId')}
              />
              <div className="pb-4">
                <Button type="submit">Filter</Button>
              </div>
            </>
          )}
        </Form>
        {todosQuery.data?.map((todo: Todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </div>
    </>
  );
};
