const urlDomain = "https://swapi.co";
const urlPath = "/api/people/";

export default async searchTerm => {
  try {
    const response = await fetch(`${urlDomain}${urlPath}?search=${searchTerm}`);
    return await response.json();
  } catch (error) {
    // error handing - simply log error to console
    // and return empty array
    console.log(`error with fetch :${error}`);
    return [];
  }
};
