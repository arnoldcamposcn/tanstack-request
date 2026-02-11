import { useQuery } from "@tanstack/react-query";
import { carService } from "../api";

export function useCarsQuery() {
    return useQuery({
        queryKey: ['cars'],
        queryFn: carService.getAllCars
    })
}