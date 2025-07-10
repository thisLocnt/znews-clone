export async function fetchDummyData<T>(endpoint: string): Promise<T> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/${endpoint}`,
    {
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch ${endpoint}: ${res.status}`);
  }

  return res.json();
}
