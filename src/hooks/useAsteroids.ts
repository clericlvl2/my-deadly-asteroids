import { useInfiniteQuery } from '@tanstack/react-query';
import { api, ASTEROIDS_KEY } from '../api';
import { DEFAULT_PARAMS } from '../utils/constants.ts';
import { GetInfiniteAsteroidsInfoResponse } from '../utils/types.ts';

export const useInfiniteAsteroids = () =>
  useInfiniteQuery<GetInfiniteAsteroidsInfoResponse>({
    queryKey: [ASTEROIDS_KEY],
    queryFn: ({ pageParam = DEFAULT_PARAMS }) =>
      api.getInfiniteAsteroidsInfo(pageParam),
    getNextPageParam: lastPage => lastPage.pageParams.next,
    getPreviousPageParam: lastPage => lastPage.pageParams.prev,
  });
