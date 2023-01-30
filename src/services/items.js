import { checkError, client } from './client.js';

export async function getListItems() {
  const response = await client.from('groceries').select();
  console.log('response.data', response.data);
  return checkError(response);
}
