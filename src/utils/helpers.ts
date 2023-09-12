import { AstroDistance, DateParams } from './types.ts';

export const getApproachDate = (approachDate: string): string =>
  new Date(approachDate)
    .toLocaleDateString('ru', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
    .toString()
    .replaceAll('.', '');

export const getApproachTime = (approachDate: string): string => {
  const date = new Date(approachDate);
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
};

export const getDistance = (distance: {
  kilometers: string;
  lunar: string;
}): AstroDistance => ({
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
