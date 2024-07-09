"use client";

import React, { useEffect, useState } from "react";
import SearchBar from "@/components/SearchBar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import FilterInput from "@/components/FilterInput";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from 'lucide-react';

interface Language {
    name: string;
}

interface Country {
    alpha3Code: string;
    borders: string[];
    languages: Language[];
    topLevelDomain: string[];
    subregion: string;
    nativeName: string;
    name: string;
    population: number;
    region: string;
    capital: string;
    flag: string;
}

const Home: React.FC = () => {
    const [countries, setCountries] = useState<Country[]>([]);
    const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
    const [selectedRegion, setSelectedRegion] = useState<string>("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/data.json");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data: Country[] = await response.json();
                setCountries(data);
                setFilteredCountries(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        let filtered = countries;

        if (searchQuery) {
            filtered = filtered.filter((country) =>
                country.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        if (selectedRegion) {
            filtered = filtered.filter((country) => country.region === selectedRegion);
        }

        setFilteredCountries(filtered);
    }, [searchQuery, selectedRegion, countries]);

    const handleSearch = (query: string) => {
        setSearchQuery(query);
    };

    const handleCardClick = (country: Country) => {
        setSelectedCountry(country);
    };

    const handleRegionChange = (region: string) => {
        setSelectedRegion(region);
    };

    const handleBackClick = () => {
        setSelectedCountry(null);
        setSearchQuery("");
        setSelectedRegion("");
        setFilteredCountries(countries);
    };

    const handleBorderClick = (borderCode: string) => {
        const borderCountry = countries.find((country) => country.alpha3Code === borderCode);
        if (borderCountry) {
            setSelectedCountry(borderCountry);
        }
    };

    const getCountryNameByAlpha3Code = (alpha3Code: string) => {
        const country = countries.find((country) => country.alpha3Code === alpha3Code);
        return country ? country.name : alpha3Code;
    };

    return (
        <main className="min-h-screen p-4 md:px-[80px] md:py-12">
            {!selectedCountry ? (
                <div>
                    <div className="md:flex items-center justify-between">
                        <SearchBar onSearch={handleSearch} />
                        <FilterInput onRegionChange={handleRegionChange} />
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[75px]">
                        {filteredCountries.map((country) => (
                            <Card
                                key={country.name}
                                className="rounded-[5px] border-none shadow-custom-card dark:shadow-dark-custom-card cursor-pointer"
                                onClick={() => handleCardClick(country)}
                            >
                                <div className="w-full max-h-[160px] h-full rounded-t-[5px] overflow-hidden flex items-center justify-center">
                                    <Image src={country.flag} alt={country.name} width={350} height={160} className="h-full object-cover" />
                                </div>
                                <CardHeader>
                                    <CardTitle className="text-lg font-extrabold tracking-[.5px]">
                                        {country.name}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm font-semibold mb-2">
                                        Population:{" "}
                                        <span className="font-light">
                                            {country.population.toLocaleString()}
                                        </span>
                                    </p>
                                    <p className="text-sm font-semibold mb-2">
                                        Region: <span className="font-light">{country.region}</span>
                                    </p>
                                    <p className="text-sm font-semibold mb-2">
                                        Capital: <span className="font-light">{country.capital}</span>
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="w-full">
                    <div className="flex justify-between items-center mb-16 md:mb-20">
                        <Button
                            className="rounded-[6px] bg-card text-card-foreground shadow-button dark:shadow-dark-button"
                            onClick={handleBackClick}
                            title="Back"
                        >
                            <ArrowLeft className="h-5 w-5 mr-2" />
                            Back
                        </Button>
                    </div>
                    <div className="flex">
                        <div className="w-1/2">
                            <Image
                                src={selectedCountry.flag}
                                alt={selectedCountry.name}
                                width={560}
                                height={400}
                                className="rounded-[10px] shadow-flag dark:shadow-dark-flag"
                            />
                        </div>
                        <div className="w-1/2">
                            <h2 className="text-[22px] md:text-[32px] mb-4 md:md-[23px] font-extrabold">{selectedCountry.name}</h2>

                            <div className="flex mb-[34px] md:mb-[70px]">
                                <div className="w-1/2 mb-8 md:mb-0">
                                    <p className="text-sm font-semibold mb-2">
                                        Native Name:{" "}
                                        <span className="font-light">
                                            {selectedCountry.nativeName}
                                        </span>
                                    </p>
                                    <p className="text-sm font-semibold mb-2">
                                        Population:{" "}
                                        <span className="font-light">
                                            {selectedCountry.population.toLocaleString()}
                                        </span>
                                    </p>
                                    <p className="text-sm font-semibold mb-2">
                                        Region:{" "}
                                        <span className="font-light">{selectedCountry.region}</span>
                                    </p>
                                    <p className="text-sm font-semibold mb-2">
                                        Sub Region:{" "}
                                        <span className="font-light">{selectedCountry.subregion}</span>
                                    </p>
                                    <p className="text-sm font-semibold mb-2">
                                        Capital:{" "}
                                        <span className="font-light">{selectedCountry.capital}</span>
                                    </p>
                                </div>
                                <div className="w-1/2">
                                    <p className="text-sm font-semibold mb-2">
                                        Top Level Domain:{" "}
                                        {selectedCountry.topLevelDomain.map((domain) => (
                                            <span key={domain} className="font-light">{domain}</span>
                                        ))}
                                    </p>
                                    <p className="text-sm font-semibold mb-2">
                                        Currencies:{" "}
                                        <span className="font-light">{selectedCountry.capital}</span>
                                    </p>
                                    <p className="text-sm font-semibold mb-2">
                                        Languages:{" "}
                                        {selectedCountry.languages.map((lang, index) => (
                                            <span key={lang.name} className="font-light">
                                                {lang.name}
                                                {index < selectedCountry.languages.length - 1 ? ", " : ""}
                                            </span>
                                        ))}
                                    </p>
                                </div>
                            </div>
                            {selectedCountry.borders && (
                                <div className="flex flex-wrap items-center">
                                    <p className="text-base font-semibold mr-4 mb-2">
                                        Border Countries:
                                    </p>
                                    <div className="flex flex-wrap">
                                        {selectedCountry.borders.map((border) => (
                                            <Button key={border} onClick={() => handleBorderClick(border)} title={getCountryNameByAlpha3Code(border)} className="min-w-[96px] max-h-[28px] mr-[10px] rounded-[2px] mb-2 bg-card text-sm text-card-foreground shadow-button dark:shadow-dark-button">
                                                {getCountryNameByAlpha3Code(border)}
                                            </Button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
};

export default Home;
