import { CarProps } from '@/types'
import { calculateCarRent } from '@/utils'
import Image from 'next/image'
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

      <p className="flex mt-6 text-[32px]
      font-extrabold">
        <span className="self-start text-[14px]
        font-semibold">
          $
        </span>
        {carRent}
        <span className="self-end text-[14px]
        font-medium">
          /day
        </span>
      </p>

      <div className="relative w-full h-40 my-3
      object-contain">
        <Image
          src="/hero.png"
          alt="car model"
          sizes='100%'
          fill
          priority
          className="object-contain"
        />
      </div>
    </div>
  )
}

export default CarCard