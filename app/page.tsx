"use client"

import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from "@/components"
import { fuels, yearsOfProduction } from "@/constants"
import { fetchCars } from "@/utils"
import { Fragment, useEffect, useState } from "react"
import Image from "next/image"
import { CarProps } from "@/types"

export default function Home() {
  const [allCars, setAllCars] = useState<CarProps[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  //Search states
  const [manufacturer, setManufacturer] = useState<string>("")
  const [model, setModel] = useState<string>("")

  //Filter states
  const [fuel, setFuel] =  useState<string | number>("")
  const [year, setYear] = useState<string | number>(2022)

  //Pagination states
  const [limit, setLimit] = useState<number>(10)

  const getCars = async () => {
    setLoading(true)

    try {
      const result = await fetchCars({
        manufacturer: manufacturer || "",
        year: typeof year === "number" ? year : parseInt(year) || 2022,
        fuel: typeof fuel === "number" ? fuel.toString() : fuel || "",
        limit: limit || 10,
        model: model || "",
      })

      setAllCars(result)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getCars()
  }, [fuel, year, limit, manufacturer, model])

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar setManufacturer={setManufacturer} setModel={setModel} />

          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} setFilter={setFuel} />
            <CustomFilter title="year" options={yearsOfProduction} setFilter={setYear} />
          </div>
        </div>

        {allCars.length > 0 ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <Fragment key={car.id}>
                  <CarCard car={car} />
                </Fragment>
              ))}
            </div>

            {loading &&
              <div className="mt-16 w-full flex-center">
                <Image
                  src="/loading.gif"
                  alt="loader"
                  width={50}
                  height={50}
                  className="object-contain"
                  unoptimized
                  style={{
                    width: '50px',
                    height: '50px'
                  }}
                />
              </div>
            }
            
            <ShowMore
              pageNumber={limit / 10}
              isNext={limit > allCars.length}
              setLimit={setLimit}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            {/* <p>{allCars?.message}</p> */}
          </div>
        )}
      </div>
    </main>
  )
}
