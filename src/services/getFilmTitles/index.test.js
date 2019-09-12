import getFilmTitles from "./index";
import getFilmTitle from "../getFilmTitle";

describe("getFilmTitles", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should call getFilmTitle once for each film", async () => {
    // Arrange

    getFilmTitle.getFilmTitle = jest.fn().mockReturnValue("mock value");

    // Act
    const results = await getFilmTitles([
      "https://swapi.co/api/films/1/",
      "https://swapi.co/api/films/2/"
    ]);

    // Assess
    expect(getFilmTitle.getFilmTitle).toHaveBeenCalledTimes(2);
    expect(results).toEqual("mock value, mock value");
  });

  it("should only call getFilmTitle when filmTitle is not cached", async () => {
    // Arrange

    getFilmTitle.getFilmTitle = jest.fn().mockReturnValue("mock value");

    const filmUrls = [
      "https://swapi.co/api/films/3/",
      "https://swapi.co/api/films/4/"
    ];
    // Act
    const results = await getFilmTitles(filmUrls);
    const results2 = await getFilmTitles(filmUrls);

    // Assess
    // getFilmTitle should only be called twice because after the first call
    // the result should be cached
    expect(getFilmTitle.getFilmTitle).toHaveBeenCalledTimes(2);
    expect(results).toEqual("mock value, mock value");
    expect(results2).toEqual("mock value, mock value");
  });
});
