import { api } from "../client/axios.instance";
import type { Car, CreateCarPayload, UpdateCarPayload } from "../../models/car/types/car";
import { API_ENDPOINTS } from "../endpoints/car.endpoints";


export const carService = {

    getAllCars: async (): Promise<Car[]> => {
        const { data } = await api.get<Car[]>(API_ENDPOINTS.CAR.GET_ALL);
        return data;
    },

    createCar: async (payload: CreateCarPayload): Promise<Car> => {
        const { data } = await api.post<Car>(API_ENDPOINTS.CAR.CREATE, payload);
        return data;
    },
    
    updateCar: async (id: number, payload: UpdateCarPayload) => {
        const { data } = await api.put<Car>(API_ENDPOINTS.CAR.UPDATE(id), payload);
        return data;
    },
    
    deleteCar: async (id: number) => {
        const { data } = await api.delete(API_ENDPOINTS.CAR.DELETE(id));
        return data;
    },
};