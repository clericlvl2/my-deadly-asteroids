export type DistanceUnits = 'km' | 'lunar';

export interface ApiOptions {
  baseUrl: string;
  apiKey: string;
}

export interface GetInfiniteAsteroidsInfoResponse {
  data: AsteroidsInfoRaw[];
  pageParams: PaginationData;
}

export interface DateParams {
  startDate: string;
  endDate: string;
}

export interface PaginationDataRaw {
  prev: string;
  self: string;
  next: string;
}

export interface PaginationData {
  prev: DateParams;
  self: DateParams;
  next: DateParams;
}

// TODO добавить mapper для полей
export interface GetAsteroidsInfoResponseRaw {
  element_count: number;
  links: PaginationDataRaw;
  near_earth_objects: Record<string, AsteroidsInfoRaw[]>;
}

export interface AsteroidsInfoRaw {
  links: {
    self: string;
  };
  id: number;
  neo_reference_id: number;
  name: string;
  nasa_jpl_url: string;
  absolute_magnitude_h: number;
  estimated_diameter: {
    kilometers: {
      estimated_diameter_min: number;
      estimated_diameter_max: number;
    };
    meters: {
      estimated_diameter_min: number;
      estimated_diameter_max: number;
    };
    miles: {
      estimated_diameter_min: number;
      estimated_diameter_max: number;
    };
    feet: {
      estimated_diameter_min: number;
      estimated_diameter_max: number;
    };
  };
  is_potentially_hazardous_asteroid: boolean;
  close_approach_data: [
    {
      close_approach_date: string;
      close_approach_date_full: string;
      epoch_date_close_approach: number;
      relative_velocity: {
        kilometers_per_second: string;
        kilometers_per_hour: string;
        miles_per_hour: string;
      };
      miss_distance: {
        astronomical: string;
        lunar: string;
        kilometers: string;
        miles: string;
      };
      orbiting_body: string;
    },
  ];
  is_sentry_object: boolean;
}
