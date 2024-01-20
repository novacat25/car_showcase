export const fetchCars = async () => {
    const headers = new Headers()
    headers.append('X-RapidAPI-Key',String(process.env.X_RAPID_API_KEY))
    headers.append('X-RapidAPI-Host',String(process.env.X_RAPID_API_HOST))
    
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars', {
        headers: headers,
    })

    const result = await response.json()

    return result
}