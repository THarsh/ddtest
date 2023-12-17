/**
 * Fetching response from a provided API
 * @param {string} path
 */

export const fetchJsonResponse = async (path) => {
  try {
    const response = await fetch(path);
    return await response.json();
  } catch (error) {
    console.error(error);
    throw new Error(
      `Failed to fetch JSON response from path: ${path}. Error: ${error.message}`
    );
  }
};

export const fetchSearchResultList = async (query) => {
  if (!query) return [];

  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${query}`
    );
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching countries:", error);
    return [];
  }
};
