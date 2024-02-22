import { useState, useEffect } from "react";
import { Input } from "../input";
import { Button } from "../button";
import SearchResults from "./SearchResults";

const SearchBar = () => {
  const [queryText, setQueryText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (e: any) => setQueryText(e.target.value);

  useEffect(() => {
    if (!queryText) {
      setSearchResults([]);
      return;
    }
  }, [queryText]);

  return (
    <div className="p-4">
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input
          className="flex-1"
          placeholder="Search..."
          type="search"
          value={queryText}
          onChange={handleChange}
        />

        <Button size="icon" type="submit" variant="ghost">
          <SearchIcon className="h-4 w-4" />
        </Button>

        {queryText && (
          <div className="max-h-70vh p-0 overflow-y-auto">
            <div className="px-4">
              <div className="border-t-2 pt-2 pb-4">
                <SearchResults searchResults={searchResults} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

export default SearchBar;
