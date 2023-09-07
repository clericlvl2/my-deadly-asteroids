import { DateParams, DistanceUnits } from './types.ts';

export const getApproachDate = (approachDate: string): string =>
  new Date(approachDate)
    .toLocaleDateString('ru', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
    .toString()
    .replaceAll('.', '');

export const getDiameter = (diameter: number): string =>
  Math.round(diameter).toLocaleString();

export const getDistance = (distance: {
  kilometers: string;
  lunar: string;
}): Record<DistanceUnits, string> => ({
  km: parseInt(distance.kilometers).toLocaleString(),
  lunar: parseInt(distance.lunar).toLocaleString(),
});

export const parseParams = (query: string): DateParams => {
  const params = new URL(query).searchParams;
  return {
    startDate: params.get('start_date') ?? '',
    endDate: params.get('end_date') ?? '',
  };
};
