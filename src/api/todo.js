import callApiMock from './utilsMock';

export const getTasks = () => {
  return callApiMock('/todos', 'GET', null);
};

// export const addTask = newTask => {
//   return callApiMock('/todos', 'POST', newTask);
// };

// export const updateTask = (task) => {

// }

// export const deleteTask = (id) => {
//}
