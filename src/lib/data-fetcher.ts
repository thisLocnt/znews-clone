import { BACKEND_URL } from './config';

export async function fetchDummyData<T>(endpoint: string): Promise<T> {
  const res = await fetch(`${BACKEND_URL}/api/${endpoint}`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch ${endpoint}: ${res.status}`);
  }

  return res.json();
}
