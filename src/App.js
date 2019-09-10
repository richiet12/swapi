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

  // const debounce = (callback, wait) => {
  //   let timeout;
  //   return (...args) => {
  //     const context = this;
  //     clearTimeout(timeout);
  //     timeout = setTimeout(() => callback.apply(context, args), wait);
  //   };
  // };

  const search = () => {
    console.log("search");
    // searchCharacters(newSearchTerm).then(data => {
    //   console.log(data);
    // }),
  };

  const handleSearchTermChange = event => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    // debounce(
    //   search,
    //   // fetch results
    //   // tidy results
    //   // set results

    //   1000
    // );
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
        searchCharacters(debouncedSearchTerm).then(({ results }) => {
          // Set back to false since request finished
          // setIsSearching(false);
          // Set results state
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
        <CharacterResults results={results} />
      </Page>
    </Fragment>
  );
}

export default App;
