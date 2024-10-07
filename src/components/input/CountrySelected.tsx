"use client";

import { useCountries } from "@/hook";
import Select from "react-select";

export type CountrySelectValue = {
    flag: string;
    label: string;
    latlng: number[];
    region: string;
    value: string;
};

interface CountrySelectProps {
    value?: CountrySelectValue;
    onChange: (e: CountrySelectValue) => void;
}

export const CountrySelected = ({ value, onChange }: CountrySelectProps) => {
    const { getAll } = useCountries();

    return (
        <div className="relative z-10">
            <Select
                placeholder='Seleccione un país'
                isClearable
                options={getAll}
                value={value}
                onChange={(value) => onChange(value as CountrySelectValue)}
                formatOptionLabel={(option: CountrySelectValue) => (
                    <div className="flex flex-row items-center gap-2">
                        <div>{option.flag}</div>
                        <div>{option.label},
                            <span className="text-neutral-500 ml-1">{option.region}</span>
                        </div>
                    </div>
                )}
                theme={(theme) => ({
                    ...theme,
                    borderRadius: 6,
                    colors: {
                        ...theme.colors,
                        primary: 'black',
                        primary25: '#ffe4e6',
                    },
                })}
            />
        </div>
    );
};