export const fetchCars = async () => {
    const rapidAPIKey = String(process.env.X_RAPID_API_KEY)
    const rapidAPIHost = String(process.env.X_RAPID_API_HOST)

    const headers = new Headers()

    headers.append('X-RapidAPI-Key',rapidAPIKey)
    headers.append('X-RapidAPI-Host',rapidAPIHost)
    
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: headers,
    })

    const result = await response.json()

    return result
}