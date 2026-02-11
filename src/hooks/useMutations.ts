import { useMutation, useQueryClient } from '@tanstack/react-query'
import { carService } from '../api/services/car.service'
import type { CreateCarPayload, UpdateCarPayload } from '../models/car/types/car'

export function useCarMutations() {
  const queryClient = useQueryClient()

  const create = useMutation({
    mutationFn: (data: CreateCarPayload) => carService.createCar(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cars'] })
    },
  })

  const update = useMutation({
    mutationFn: ({ id, data }: { id: number; data: UpdateCarPayload }) =>
      carService.updateCar(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cars'] })
    },
  })

  const remove = useMutation({
    mutationFn: (id: number) => carService.deleteCar(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cars'] })
    },
  })

  return { create, update, remove }
}
