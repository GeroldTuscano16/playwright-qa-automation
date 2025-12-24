import { test, expect } from '@playwright/test';

test('Day 18 - API GET request validation', async ({ request }) => {
  // 1️⃣ Send GET request
  const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');

  // 2️⃣ Validate status code
  expect(response.status()).toBe(200);

  // 3️⃣ Parse response body
  const responseBody = await response.json();

  // 4️⃣ Assertions on response data
  expect(responseBody.id).toBe(1);
  expect(responseBody.userId).toBe(1);
  expect(responseBody.title).toBeTruthy();

  // 5️⃣ Log response (learning purpose)
  console.log('API Response:', responseBody);
});
