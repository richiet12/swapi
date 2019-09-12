import { getFilmTitle } from "./";

describe("getFilmTitle", () => {
  const filmUrl = "https://swapi.co/api/films/1/";
  const mockSuccessResponse = { title: "Film 1" };
  const mockFailResponse = "404";
  let mockSuccessFetchPromise;
  let mockFailureFetchPromise;

  afterEach(() => {
    jest.clearAllMocks();
  });

  beforeAll(() => {
    mockSuccessFetchPromise = Promise.resolve({
      json: () => Promise.resolve(mockSuccessResponse)
    });
    mockFailureFetchPromise = Promise.resolve({
      json: () => Promise.reject(mockFailResponse)
    });
  });

  it("should call fetch and return a successful response", async () => {
    // Arrange
    window.fetch = jest.fn().mockImplementation(() => mockSuccessFetchPromise);

    // Act
    const responseJson = getFilmTitle(filmUrl);
    const data = await responseJson;

    // Assess
    expect(window.fetch).toHaveBeenCalledTimes(1);
    expect(window.fetch).toHaveBeenCalledWith(filmUrl);
    expect(data).toEqual("Film 1");
  });

  it("when the fetch call fails an error should be thrown", async () => {
    // Arrange
    window.fetch = jest.fn().mockImplementation(() => mockFailureFetchPromise);
    // mock console
    let outputData = "";
    console["log"] = jest.fn(inputs => (outputData += inputs));

    // Act
    const responseJson = getFilmTitle(filmUrl);
    const data = await responseJson;

    // Assess
    expect(outputData).toBe("error with fetch: 404");
    expect(data).toEqual([]);
  });
});
