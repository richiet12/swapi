import searchCharacters from "./";
import sampleData from "./sampleData";
import getFilmTitle from "../getFilmTitle";

getFilmTitle.getFilmTitle = jest.fn().mockReturnValue("mock value");

describe("searchCharacters", () => {
  const searchUrl = "luke";
  const mockSuccessResponse = { results: [sampleData] };
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
    const responseJson = searchCharacters(searchUrl);
    const data = await responseJson;

    // Assess
    expect(window.fetch).toHaveBeenCalledTimes(1);
    expect(window.fetch).toHaveBeenCalledWith(
      "https://swapi.co/api/people/?search=luke"
    );

    const expectedTransformedResult = [
      {
        name: "Luke Skywalker",
        traits: {
          birth_year: "19BBY",
          eye_color: "blue",
          films: "mock value, mock value, mock value, mock value, mock value",
          gender: "male",
          hair_color: "blond",
          height: "172",
          mass: "77",
          skin_color: "fair"
        }
      }
    ];
    expect(data).toEqual(expectedTransformedResult);
  });

  it("when the fetch call fails an error should be thrown", async () => {
    // Arrange
    window.fetch = jest.fn().mockImplementation(() => mockFailureFetchPromise);
    // mock console
    let outputData = "";
    console["log"] = jest.fn(inputs => (outputData += inputs));

    // Act
    const responseJson = searchCharacters(searchUrl);
    const data = await responseJson;

    // Assess
    expect(outputData).toBe("error with fetch: 404");
    expect(data).toEqual([
      {
        name: "Sorry something has gone wrong"
      }
    ]);
  });
});
