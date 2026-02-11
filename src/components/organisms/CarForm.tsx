import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { CreateCarSchema, type CreateCarData } from "../../models/car/model/carSchemas"
import { Input } from "../atoms/Input"

type CarFormProps = {
  onSubmit: (data: CreateCarData) => void
}

export const CarForm = ({ onSubmit }: CarFormProps) => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } =
    useForm<CreateCarData>({
      resolver: zodResolver(CreateCarSchema)
    })

  const handleCreateCar = (data: CreateCarData) => {
    onSubmit(data)    
    reset()          
  }

  return (
    <div className='min-h-screen flex items-center justify-center px-4'>
      <div className='w-full max-w-md'>
        <div className='card-purple rounded-2xl shadow-lg p-8'>
          <div className='text-center mb-8'>
            <h1 className='text-3xl font-semibold text-gray-800 mb-2'>
              Crear Auto
            </h1>
          </div>

          <form onSubmit={handleSubmit(handleCreateCar)} className='space-y-5'>
            <Input type='text' placeholder='Marca' {...register('brand')} error={errors.brand} />
            <Input type='text' placeholder='Modelo' {...register('model')} error={errors.model} />
            <Input type='text' placeholder='Color' {...register('color')} error={errors.color} />
            <Input type='number' placeholder='Año' {...register('year', { valueAsNumber: true })} error={errors.year} />

            <button type='submit' disabled={isSubmitting} className="input-purple">
              {isSubmitting ? "Enviando..." : "Crear Auto"}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

