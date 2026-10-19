function displayName(name: string): string {
  return name.trim() || "friend";
}

export function greeting(name: string): string {
  return `Hello, ${displayName(name)}!`;
}
