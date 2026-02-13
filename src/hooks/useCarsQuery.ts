import { useQuery } from "@tanstack/react-query";
import { carService } from "../api";

export function useCarsQuery( query?: string ) {
    return useQuery({
        queryKey: ['cars', query],
        queryFn: () => carService.getAllCars(query),
    })
}