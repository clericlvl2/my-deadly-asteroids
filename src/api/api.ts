import {
  ApiOptions,
  DateParams,
  GetInfiniteAsteroidsInfoResponse,
  GetAsteroidsInfoResponseRaw,
} from '../utils/types.ts';
import { API_KEY, BASE_URL } from '../utils/constants.ts';
import { parseParams } from '../utils/helpers.ts';

class NeoApi {
  private readonly _baseUrl: string;
  private readonly _apiKey: string;

  constructor(options: ApiOptions) {
    this._baseUrl = options.baseUrl;
    this._apiKey = options.apiKey;
  }

  async _request<T>(endpoint: string, params?: string[]): Promise<T> {
    const urlParams = params !== undefined ? '&' + params.join('&') : '';
    const res = await fetch(
      this._baseUrl + endpoint + '?api_key=' + this._apiKey + urlParams
    );
    return res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`);
  }

  async getInfiniteAsteroidsInfo({
    startDate,
    endDate,
  }: DateParams): Promise<GetInfiniteAsteroidsInfoResponse> {
    const { near_earth_objects: nearEarthObjects, links } =
      await this._request<GetAsteroidsInfoResponseRaw>('/feed', [
        `start_date=${startDate}`,
        `end_date=${endDate}`,
      ]);

    return {
      data: Object.entries(nearEarthObjects).flatMap(([, value]) => value),
      pageParams: {
        prev: parseParams(links.prev),
        self: parseParams(links.self),
        next: parseParams(links.next),
      },
    };
  }
}

export const api = new NeoApi({
  baseUrl: BASE_URL,
  apiKey: API_KEY,
});
