import { createContext } from 'react';
import { DistanceUnits } from '../utils/types.ts';

export const DistanceUnitsContext = createContext<DistanceUnits>('km');
