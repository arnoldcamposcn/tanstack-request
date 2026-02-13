import type { Car } from "../../models/car/types/car"

type Props = {
  cars: Car[]
  // onEdit?: (car: Car) => void
}

export const CarTable = ({ cars }: Props) => {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center items-center">
          <h1 className="text-2xl font-bold">CarTable</h1>
        </div>
        <div className="mt-4 rounded-lg overflow-hidden shadow-md">
          <table className="table-auto w-full text-center">
            <thead className="bg-gray-100">
              <tr>
                <th>Brand</th>
                <th>Model</th>
                <th>Color</th>
                <th>Year</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {cars.map(car => (
                <tr key={car.id}>
                  <td>{car.brand}</td>
                  <td>{car.model}</td>
                  <td>{car.color}</td>
                  <td>{car.year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
