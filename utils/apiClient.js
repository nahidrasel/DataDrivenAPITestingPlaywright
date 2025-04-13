export async function createApiContext(playwright, token = null) {
  return await playwright.request.newContext({
    baseURL: 'https://reqres.in/api',
    extraHTTPHeaders: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` })
    }
  });
}