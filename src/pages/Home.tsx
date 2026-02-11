import { useCarsQuery } from '../hooks/useCarsQuery'
import { useCarMutations } from '../hooks/useMutations'
import { CarTable } from '../components/organisms/CarTable'
import { CarForm } from '../components/organisms/CarForm'

export const HomePage = () => {
  const { data: cars, isLoading, error } = useCarsQuery()
  const { create } = useCarMutations()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error</div>

  return (
    <div className="space-y-10 p-6">
      <h1 className="text-3xl font-bold">Home</h1>

      <CarTable cars={cars || []} />

      <CarForm onSubmit={(data) => {
        create.mutate(data)
      }} />
    </div>
  )
}
