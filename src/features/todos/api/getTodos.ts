import axios from 'axios';
import { useQuery } from 'react-query';

import { Todo } from '../types';

export const getTodos = async (userId: number): Promise<Todo[]> => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
  if (userId === 0) return response.data;
  const filtered = response.data.filter((todo: Todo) => todo.userId == userId);
  return filtered;
};

export const useTodos = (userId: number) => {
  return useQuery({
    queryKey: ['todos', userId],
    queryFn: () => getTodos(userId),
  });
};
