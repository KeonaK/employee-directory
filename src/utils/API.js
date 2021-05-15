import axios from "axios";
//search results filtered for only the needed information
const BASEURL =
  "https://randomuser.me/api/?inc=picture,name,phone,email,dob&nat=us&results=100";

// api object to grab the search function
const API = {
  find: function () {
    return axios.get(BASEURL);
  },
};
export default API;
