const filmTitlesCache = {};

export default async filmUrls => {
  // Get Film Titles
  // Before doing a fetch we check the cache
  const result = await Promise.all(
    filmUrls.map(async filmUrl => {
      const filmNumber = getFilmNumber(filmUrl);

      if (filmTitlesCache[filmNumber]) {
        return await filmTitlesCache[filmNumber];
      }

      const title = getFilmTitle(filmUrl);
      filmTitlesCache[filmNumber] = title;

      return await title;
    })
  );

  return result.join(", ");
};

const getFilmNumber = filmUrl => {
  return filmUrl.replace("https://swapi.co/api/films/").replace("/", "");
};

const getFilmTitle = async filmUrl => {
  try {
    const response = await fetch(filmUrl);
    const { title } = await response.json();

    return title;
  } catch (error) {
    // error handing - simply log error to console
    // and return empty array
    console.log(`error with fetch`);
    console.log(error);
    return [];
  }
};
