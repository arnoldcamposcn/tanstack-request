import type { Car } from "../../models/car/types/car"

type Props = {
    cars: Car[]
    onEdit: (car: Car) => void
  }
  
  export const CarTable = ({ cars, onEdit }: Props) => {
    return (
        <>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th>Brand</th>
            <th>Model</th>
            <th>Color</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {cars.map(car => (
            <tr key={car.id}>
              <td>{car.brand}</td>
              <td>{car.model}</td>
              <td>{car.color}</td>
              <td>{car.year}</td>
              <td>
                <button onClick={() => onEdit(car)}>Editar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </>
    )
  }
  