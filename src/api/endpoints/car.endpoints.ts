const CAR_BASE = '/cards';

export const API_ENDPOINTS = {
  CAR: {
    BASE: CAR_BASE,
    GET_ALL: `${CAR_BASE}`,
    CREATE: `${CAR_BASE}`,
    UPDATE: (id: number) => `${CAR_BASE}/${id}`,
    DELETE: (id: number) => `${CAR_BASE}/${id}`,
  },
} as const;