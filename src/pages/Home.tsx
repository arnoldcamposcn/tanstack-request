import { useCarsQuery } from '../hooks/useCarsQuery'
import { useDebounce } from 'use-debounce'
import { useCarMutations } from '../hooks/useMutations'
import { CarTable } from '../components/organisms/CarTable'
import { CarForm } from '../components/organisms/CarForm'
import { SearchInput } from '../components/atoms/SearchInput'
import { useState } from 'react'

export const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [debouncedQuery] = useDebounce(searchQuery, 500) // Espera 500ms después de que el usuario deje de escribir
  const { data: cars, isLoading, error } = useCarsQuery(debouncedQuery || undefined)
  const { create } = useCarMutations()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error</div>

  return (
    <div className="space-y-10 p-6">
      <h1 className="text-3xl font-bold">Home</h1>

      <div className="">
        <div className="max-w-md">
          <SearchInput
            value={searchQuery}
            onSearch={setSearchQuery}
          />
        </div>

        <CarTable cars={cars || []} />

      </div>
      <CarForm onSubmit={(data) => {
        create.mutate(data)
      }} />
    </div>
  )
}
