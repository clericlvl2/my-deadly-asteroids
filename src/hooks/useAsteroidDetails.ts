import { useQuery } from '@tanstack/react-query';
import { api, ASTEROID_KEY } from '../api';

export const useAsteroidDetails = (id: string | undefined) =>
  useQuery({
    queryKey: [ASTEROID_KEY, id],
    queryFn: () => api.fetchAsteroidDetails(id),
  });
