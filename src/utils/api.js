import axios from "axios";
const base_url = "https://api.themoviedb.org/3";

const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYWRjNzE3YzZhNTg2ZDE2ZjEzNTQzMWFhNmQ4ZDI2MSIsInN1YiI6IjY1YjM5MzQ3NWUxNGU1MDE4MzBjNThkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZgN8hkeH_rjK8HO6HbVE6Gf15PqWtiKIga0gfdD5W_Q";

const headers = {
  Authorization: "Bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(base_url + url, {
      headers: headers,
      params: params,
    });

    return data;
  } catch (err) {
    console.error("Error:", err);
    return err;
  }
};


  
