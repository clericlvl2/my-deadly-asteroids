import { DateParams, DistanceUnits } from './types.ts';

export const BASE_URL = 'https://api.nasa.gov/neo/rest/v1';
export const API_KEY = 'E2oDAmIPAWlnPDGFe4fhlri0KETvG4zONAr3KEfi';

export const START_DATE = '2023-07-20';
export const END_DATE = '2023-07-20';

export const unitsByDistanceUnits: Record<DistanceUnits, string> = {
  km: 'км',
  lunar: 'лун. орб.',
};
export const DEFAULT_PARAMS: DateParams = {
  startDate: START_DATE,
  endDate: END_DATE,
};
