import axios from 'axios';
import { useQuery } from 'react-query';

import { Todo } from '../types';

export const getTodos = async (): Promise<Todo[]> => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
  return response.data;
};

export const useTodos = () => {
  return useQuery({
    queryKey: ['todos'],
    queryFn: () => getTodos(),
  });
};
