import getFilmTitles from "./getFilmTitles";

const urlDomain = "https://swapi.co";
const urlPath = "/api/people/";

const transformData = async data => {
  // only include traits we want to display
  // and get film titles
  return await Promise.all(
    data.map(
      async ({
        name,
        height,
        mass,
        hair_color,
        skin_color,
        eye_color,
        birth_year,
        gender,
        films
      }) => ({
        name: name,
        traits: {
          height,
          mass,
          hair_color,
          skin_color,
          eye_color,
          birth_year,
          gender,
          films: await getFilmTitles(films)
        }
      })
    )
  );
};

export default async searchTerm => {
  try {
    const response = await fetch(`${urlDomain}${urlPath}?search=${searchTerm}`);
    const { results } = await response.json();
    if (results.length === 0) {
      return [{ name: `No results for: ${searchTerm}` }];
    }

    return await transformData(results);
  } catch (error) {
    // error handing - simply log error to console
    // and return simple error message
    console.log(`error with fetch :`);
    console.log(error);
    return [{ name: "Sorry something has gone wrong" }];
  }
};
