import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=100";

const API = function (query) {
  return axios.get(BASEURL + query);
};

export default API;
