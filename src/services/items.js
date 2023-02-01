import { checkError, client } from './client.js';

export async function getListItems() {
  const response = await client.from('groceries').select();
  console.log('response.data', response.data);
  return checkError(response);
}

export async function createTask(item) {
  const response = await client.from('groceries').insert({ item }).single();
  return checkError(response);
}
