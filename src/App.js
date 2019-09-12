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

  useEffect(() => {
    if (debouncedSearchTerm) {
      searchCharacters(debouncedSearchTerm).then(results => {
        setResults(results);
      });
    } else {
      setResults([]);
    }
  }, [debouncedSearchTerm]);

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
