// import axios from "axios";

const baseUrl = "http://universities.hipolabs.com/search?country=";

export default {
  fethSearch(query) {
    return fetch(baseUrl + query)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data;
      });
  },
};
