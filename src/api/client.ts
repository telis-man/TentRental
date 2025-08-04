const API_URL = 'http://localhost:3000/';

export async function fetchJson<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_URL}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(options?.headers || {}),
    },
    ...options,
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error(error || 'Fetch failed');
  }

  return res.json();
}
