import React, { Fragment } from "react";

import Header from "./components/Header";
import Page from "./components/Page";
import CharacterSearch from "./components/CharacterSearch";
import CharacterResults from "./components/CharacterResults";

function App() {
  return (
    <Fragment>
      <Header>Star wars character search</Header>
      <Page>
        <CharacterSearch />
        <CharacterResults />
      </Page>
    </Fragment>
  );
}

export default App;
