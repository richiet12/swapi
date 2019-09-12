export const getFilmNumber = filmUrl => {
  // https://swapi.co/api/films/1/ => 1
  return filmUrl.replace("https://swapi.co/api/films/", "").replace("/", "");
};

export default getFilmNumber;
