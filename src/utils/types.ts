export type DistanceUnits = 'km' | 'lunar';
export type AstroDistance = Record<DistanceUnits, string>;

export interface ApiOptions {
  baseUrl: string;
  apiKey: string;
}

export interface CloseApproachInfo {
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
}

export interface DiameterInfo {
  estimated_diameter_min: number;
  estimated_diameter_max: number;
}

export interface EstimatedDiameter {
  kilometers: DiameterInfo;
  meters: DiameterInfo;
  miles: DiameterInfo;
  feet: DiameterInfo;
}

export interface OrbitalInfo {
  orbit_id: string;
  orbit_determination_date: string;
  first_observation_date: string;
  last_observation_date: string;
  data_arc_in_days: number;
  observations_used: number;
  orbit_uncertainty: string;
  minimum_orbit_intersection: string;
  jupiter_tisserand_invariant: string;
  epoch_osculation: string;
  eccentricity: string;
  semi_major_axis: string;
  inclination: string;
  ascending_node_longitude: string;
  orbital_period: string;
  perihelion_distance: string;
  perihelion_argument: string;
  aphelion_distance: string;
  perihelion_time: string;
  mean_anomaly: string;
  mean_motion: string;
  equinox: string;
  orbit_class: {
    orbit_class_type: string;
    orbit_class_description: string;
    orbit_class_range: string;
  };
}

export interface PaginationData {
  prev: string;
  self: string;
  next: string;
}

export interface AsteroidsData {
  element_count: number;
  links: PaginationData;
  near_earth_objects: Record<string, AsteroidsDataItem[]>;
}

export interface AsteroidsDataItem {
  absolute_magnitude_h: number;
  id: string;
  is_potentially_hazardous_asteroid: boolean;
  links: {
    self: string;
  };
  neo_reference_id: number;
  name: string;
  nasa_jpl_url: string;
  estimated_diameter: EstimatedDiameter;
  close_approach_data: CloseApproachInfo[];
  is_sentry_object: boolean;
}

export interface AsteroidDetails extends AsteroidsDataItem {
  orbital_data: OrbitalInfo;
  designation: string;
}

export interface DateParams {
  startDate: string;
  endDate: string;
}

export interface InfiniteQueryPaginationData {
  prev: DateParams;
  self: DateParams;
  next: DateParams;
}

export interface InfiniteAsteroidsData {
  data: AsteroidsDataItem[];
  pageParams: InfiniteQueryPaginationData;
}
