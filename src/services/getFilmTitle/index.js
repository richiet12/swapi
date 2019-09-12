export const getFilmTitle = async filmUrl => {
  try {
    const response = await fetch(filmUrl);
    const { title } = await response.json();

    return title;
  } catch (error) {
    // error handing - simply log error to console
    // and return empty array
    console.log(`error with fetch: `);
    console.log(error);
    return [];
  }
};

export default {
  getFilmTitle
};
