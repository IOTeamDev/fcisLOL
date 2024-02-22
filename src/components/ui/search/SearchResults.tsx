const SearchResults = ({ searchResults }: { searchResults: any }) => {
  return (
    <div className="grid" style={{ gridRowGap: "1rem" }}>
      {searchResults.map(({ item: { first_name, last_name, email } }) => (
        <div
          className="hover:bg-teal-500 hover:text-white hover:cursor-pointer p-2"
          key={first_name + email}
        >
          <div className="vstack-container">
            <div className="text-container">
              <p>
                {first_name} {last_name}
              </p>
              <p>{email}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
