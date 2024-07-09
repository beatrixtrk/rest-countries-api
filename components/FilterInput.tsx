"use client"

import React, { FC, useEffect, useState } from 'react';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface Country {
    id: number;
    name: string;
    population: number;
    region: string;
    capital: string;
    flag: string;
}

interface FilterInputProps {
    onRegionChange: (region: string) => void;
}

const FilterInput: FC<FilterInputProps> = ({ onRegionChange }) => {
    const [regions, setRegions] = useState<string[]>([]);

    useEffect(() => {
        const fetchRegions = async () => {
            try {
                const response = await fetch('/data.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data: Country[] = await response.json();
                const uniqueRegions = Array.from(new Set(data.map(country => country.region)));
                setRegions(uniqueRegions);
            } catch (error) {
                console.error('Error fetching regions:', error);
            }
        };
        fetchRegions();
    }, []);

    return (
        <Select onValueChange={onRegionChange}>
            <SelectTrigger className="p-[18px] pl-6  w-[200px] h-[56px] rounded-[5px] mb-12 bg-card border-none shadow-input dark:shadow-input-dark outline-none focus:outline-none focus:border-none focus-visible:outline-none focus-visible:ring-transparent focus:ring-transparent">
                <SelectValue placeholder="Filter by Region" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {regions.map(regionOption => (
                        <SelectItem key={regionOption} value={regionOption}>
                            {regionOption}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};

export default FilterInput;
