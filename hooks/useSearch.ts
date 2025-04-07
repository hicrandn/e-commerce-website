import { useState, useEffect } from 'react';

interface SearchHookResult<T> {
  results: T[];
  loading: boolean;
  error: string | null;
}

export function useSearch<T>(query: string, fetchFn: (q: string) => Promise<T[]>): SearchHookResult<T> {
  const [results, setResults] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const search = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchFn(query);
        setResults(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    search();
  }, [query, fetchFn]);

  return { results, loading, error };
}

export default useSearch; 