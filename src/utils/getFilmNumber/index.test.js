import getFilmNumber from "./";

describe("getFilmNumber", () => {
  it("should return the film number for the url", () => {
    expect(getFilmNumber("https://swapi.co/api/films/1/")).toBe("1");
  });
});
