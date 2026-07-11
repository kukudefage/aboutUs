const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

async function supabaseFetch<T = unknown>(path: string, options?: RequestInit): Promise<{ data: T | null; error: { message: string; code?: string } | null }> {
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1${path}`, {
      ...options,
      headers: {
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'Content-Type': 'application/json',
        ...options?.headers,
      },
    });

    if (!res.ok) {
      const text = await res.text();
      let errorData: { message?: string; code?: string } = {};
      try { errorData = JSON.parse(text); } catch { /* ignore */ }
      return { data: null, error: { message: errorData.message || `HTTP ${res.status}`, code: errorData.code } };
    }

    if (res.status === 204 || res.headers.get('content-length') === '0') {
      return { data: null, error: null };
    }

    const data = await res.json() as T;
    return { data, error: null };
  } catch (err) {
    return { data: null, error: { message: err instanceof Error ? err.message : 'Network error' } };
  }
}

export { SUPABASE_URL, SUPABASE_KEY, supabaseFetch };
