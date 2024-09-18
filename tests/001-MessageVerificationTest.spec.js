import { test, expect } from "@playwright/test";

test('Frontend displays correct message from backend', async ({ page }) => {

  // frontend URL after  frontend-service deplyment on minikube
  const frontendUrl = 'http://127.0.0.1:56616/';

  // Navigate to the frontend
  await page.goto(frontendUrl);

  // Wait for the backend message to be displayed on the frontend
  const messageElement = await page.locator('//html/body/h1').textContent();

  console.log(messageElement);

 // Verify the frontend message received from backend
  expect(messageElement === "Hello from the Backend!").toBeTruthy();
  
});
