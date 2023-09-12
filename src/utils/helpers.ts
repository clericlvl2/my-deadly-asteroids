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
  // Нельзя использовать new Date(), парсинг даты ("2195-Apr-03 08:20") работает иначе в Chrome и Safari
  // https://stackoverflow.com/questions/21883699/safari-javascript-date-nan-issue-yyyy-mm-dd-hhmmss
  const time = approachDate.split(' ')[1];
  return time !== undefined ? time : 'Время неизвестно';
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
