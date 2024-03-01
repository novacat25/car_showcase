import { CarProps } from "@/types"

export const fetchCars = async () => {
    const rapidAPIKey = String(process.env.X_RAPID_API_KEY)
    const rapidAPIHost = String(process.env.X_RAPID_API_HOST)

    const headers = new Headers()

    headers.append('X-RapidAPI-Key',rapidAPIKey)
    headers.append('X-RapidAPI-Host',rapidAPIHost)
    
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=q3', {
        headers: headers,
    })

    const result = await response.json()

    return result
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50 // Base rental price per day in dollars
    const mileageFactor = 0.1 // Additional rate per mile driven
    const ageFactor = 0.05 // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor
    const ageRate = (new Date().getFullYear() - year) * ageFactor
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate
  
    return rentalRatePerDay.toFixed(0)
}

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
    const url = new URL('https://cdn.imagin.studio/getimage')
    const KEY = String(process.env.CAR_IMAGE_API_KEY)

    const { make, year, model } = car

    url.searchParams.append('customer',KEY)
    url.searchParams.append('make',make)
    url.searchParams.append('modelFamily',model.split(' ')[0])
    url.searchParams.append('zoomType','fullscreen')
    url.searchParams.append('modelYear',`${year}`)
    url.searchParams.append('angle',`${angle}`)

    return `${url}`
}