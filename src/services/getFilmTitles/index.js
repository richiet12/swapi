import { getFilmNumber } from "../../utils/getFilmNumber";
import getFilmTitleModule from "../getFilmTitle";

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

      const title = getFilmTitleModule.getFilmTitle(filmUrl);
      filmTitlesCache[filmNumber] = title;

      return await title;
    })
  );

  return result.join(", ");
};
