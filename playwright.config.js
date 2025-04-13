import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'https://reqres.in/api',
    extraHTTPHeaders: {
      'Content-Type': 'application/json'
    }
  },
  reporter: [['list'], ['allure-playwright']],
  timeout: 30000
});