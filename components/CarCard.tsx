import { CarProps } from '@/types'
import { calculateCarRent } from '@/utils'
import React from 'react'

interface CarCardProps {
  car: CarProps
}

const CarCard = ({ car }: CarCardProps) => {
  // const { city_mpg, year, make, model, transmission, drive } = car
  //delete the above code when necessary, remove this comment
  const { city_mpg, year, make, model } = car

  const carRent = calculateCarRent(city_mpg, year)

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>

      <p>
        <span>
          {carRent}
        </span>
      </p>
    </div>
  )
}

export default CarCard