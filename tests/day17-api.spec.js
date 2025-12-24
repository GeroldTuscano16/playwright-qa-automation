import { test, expect } from '@playwright/test';

test('Day 17 - API GET request validation', async ({ request }) => {
  // 1️⃣ Send GET request
  const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');

  // 2️⃣ Validate status code
  expect(response.status()).toBe(200);

  // 3️⃣ Parse response body
  const body = await response.json();

  // 4️⃣ Assertions on response
  expect(body).toHaveProperty('id', 1);
  expect(body).toHaveProperty('userId');
  expect(body).toHaveProperty('title');
  expect(body).toHaveProperty('body');

  console.log('API response:', body);
});
