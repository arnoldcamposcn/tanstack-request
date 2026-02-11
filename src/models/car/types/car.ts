export interface Car {
    id: number;
    brand: string;
    model: string;
    color: string;
    year: number;
}

export type CreateCarPayload = Omit<Car, 'id'>;
export type UpdateCarPayload = Partial<Car> & { id: number };