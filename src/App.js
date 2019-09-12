import React, { Fragment, useState, useEffect } from "react";

import Header from "./components/Header";
import Page from "./components/Page";
import CharacterSearch from "./components/CharacterSearch";
import CharacterResults from "./components/CharacterResults";

import searchCharacters from "./services/searchCharacters";

import debounce from "./utils/hooks/debounce";

function App() {
  const [results, setResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTermChange = event => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
  };

  const debouncedSearchTerm = debounce(searchTerm, 500);

  useEffect(
    () => {
      console.log(debouncedSearchTerm);
      // Make sure we have a value (user has entered something in input)
      if (debouncedSearchTerm) {
        // Set isSearching state
        // setIsSearching(true);
        // Fire off our API call
        searchCharacters(debouncedSearchTerm).then(results => {
          console.log({ results });
          setResults(results);
        });
      } else {
        setResults([]);
      }
    },
    // This is the useEffect input array
    // Our useEffect function will only execute if this value changes ...
    // ... and thanks to our hook it will only change if the original ...
    // value (searchTerm) hasn't changed for more than 500ms.
    [debouncedSearchTerm]
  );

  return (
    <Fragment>
      <Header>Star wars character search</Header>
      <Page>
        <CharacterSearch
          handleSearchTermChange={handleSearchTermChange}
          searchTerm={searchTerm}
        />
        <CharacterResults results={results} searchTerm={searchTerm} />
      </Page>
    </Fragment>
  );
}

export default App;
