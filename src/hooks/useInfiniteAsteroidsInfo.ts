import { useInfiniteQuery } from '@tanstack/react-query';
import { api, INFINITE_ASTEROIDS_KEY } from '../api';
import { DEFAULT_PARAMS } from '../utils/constants.ts';
import { InfiniteAsteroidsData } from '../utils/types.ts';

export const useInfiniteAsteroidsInfo = () =>
  useInfiniteQuery<InfiniteAsteroidsData>({
    queryKey: [INFINITE_ASTEROIDS_KEY],
    queryFn: ({ pageParam = DEFAULT_PARAMS }) =>
      api.fetchInfiniteAsteroidsInfo(pageParam),
    getNextPageParam: lastPage => lastPage.pageParams.next,
    getPreviousPageParam: lastPage => lastPage.pageParams.prev,
  });
