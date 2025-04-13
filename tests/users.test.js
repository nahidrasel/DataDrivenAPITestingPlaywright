import { test, expect } from '@playwright/test';
import { readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Resolve __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load test data from JSON
const usersFilePath = path.resolve(__dirname, '../testdata/users.json');
const userData = JSON.parse(readFileSync(usersFilePath, 'utf-8'));

test.describe(' User Creation ', () => {
  for (const user of userData) {
    test(`Create user → ${user.name}`, async ({ request }) => {
      if (!user.name || !user.job) {
        console.warn('Skipping test due to missing user fields:', user);
        return;
      }

      const res = await request.post('https://reqres.in/api/users', {
        json: user,
      });

      const status = res.status();
      const body = await res.json();

      console.log('\nRequest:', user);
      console.log('Response:', body);

      expect(status, 'Expected HTTP 201 Created').toBe(201);
      expect(body).toHaveProperty('id');
      expect(body).toHaveProperty('createdAt');

      if (body.name && body.job) {
        expect(body.name.toLowerCase()).toBe(user.name.toLowerCase());
        expect(body.job.toLowerCase()).toBe(user.job.toLowerCase());
      }
    });
  }
});
