import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { CarForm } from '../components/organisms/CarForm'
import type { CreateCarData } from '../models/car/model/carSchemas'

describe('CarForm', () => {
  it('envía el formulario con los datos correctos', async () => {
    
    const user = userEvent.setup()
    const onSubmitMock = jest.fn()

    render(<CarForm onSubmit={onSubmitMock} />)

    await user.type(
      screen.getByPlaceholderText('Marca'),
      'Toyota'
    )

    await user.type(
      screen.getByPlaceholderText('Modelo'),
      'Corolla'
    )

    await user.type(
      screen.getByPlaceholderText('Color'),
      'Rojo'
    )

    await user.type(
      screen.getByPlaceholderText('Año'),
      '2024'
    )

    await user.click(
      screen.getByRole('button', { name: /crear auto/i })
    )

    expect(onSubmitMock).toHaveBeenCalledTimes(1)

    expect(onSubmitMock).toHaveBeenCalledWith({
      brand: 'Toyota',
      model: 'Corolla',
      color: 'Rojo',
      year: 2024,
    } satisfies CreateCarData)
  })
})
