import React, { FC } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface SearchBarProps {
    onSearch: (query: string) => void
}

const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onSearch(e.target.value);
    }
    return (
        <div className="relative mb-12">
            <Search className="absolute left-8 top-[19px] h-[18px] w-[18px] text-muted-foreground" />
            <Input
                type="search"
                placeholder="Search for a country..."
                className="pl-[74px] pr-4 py-[18px] w-[343px] md:w-[480px] h-[56px] rounded-[5px] bg-card border-none shadow-input dark:shadow-input-dark outline-none focus:outline-none focus:border-none focus-visible:outline-none focus-visible:ring-transparent"
                onChange={handleSearchChange}
            />
        </div>
    );
}

export default SearchBar;
