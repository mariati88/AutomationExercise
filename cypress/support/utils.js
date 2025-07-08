export function generateRandomEmail() {
  return Math.random().toString(36).substring(2, 7) + '@mailinator.com'
}