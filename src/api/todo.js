import callApiMock from './utilsMock';

export const getTasks = () => {
  return callApiMock('/todos', 'GET');
};

export const addTask = task => {
  return callApiMock('/todos', 'POST', task);
};

export const updateTask = (id, task) => {
  return callApiMock(`todos/${id}`, 'PUT', task);
};

export const deleteTask = id => {
  return callApiMock(`todos/${id}`, 'DELETE');
};
