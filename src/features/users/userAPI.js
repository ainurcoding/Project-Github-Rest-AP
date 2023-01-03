import axios from "axios";

export const fetchUsersAPI = async (params) => {
  const response = await axios.get(`https://api.github.com/users/${params.username}/repos`)

  return response.data;
};


