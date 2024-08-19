import { DateParams, DistanceUnits } from './types.ts';
import { getToday } from './helpers.ts';

export const BASE_URL = 'https://api.nasa.gov/neo/rest/v1';
export const DEPLOY_BASENAME = '/my-deadly-asteroids';
export const API_KEY = 'E2oDAmIPAWlnPDGFe4fhlri0KETvG4zONAr3KEfi';

export const DEFAULT_START_DATE = getToday();
export const DEFAULT_END_DATE = getToday();

export const DEFAULT_PARAMS: DateParams = {
  startDate: DEFAULT_START_DATE,
  endDate: DEFAULT_END_DATE,
};

export const unitsByDistanceUnits: Record<DistanceUnits, string> = {
  km: 'км',
  lunar: 'лун. орб.',
};
