import countries from "world-countries";

const formttedCountries = countries.map((country) => ({
    value: country.cca2,
    label: country.name.common,
    flag: country.flag,
    latlng: country.latlng,
    region: country.region
}))

export const useCountries = () => {
    const getAll = formttedCountries;

    const getValues = (value: string) => {
        return formttedCountries.find((item) => item.value === value)
    }

    return {
        getAll, 
        getValues
    }
}

