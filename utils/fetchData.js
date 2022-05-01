import axios from "axios";

const BaseUrl = "http://localhost:3000"

export const getData = async (url, token) => {
  const response = await axios(`${BaseUrl}/api/${url}`, {
    method: "GET",
    headers: {
      // "Content-Type": "application/json",
      'Authorization': "Bearer " + token,
    },
  });
  return response;
};

export const postData = async (url,post, token) => {
  const response = await axios.post(`${BaseUrl}/api/${url}`, post);
  return response;
};

export const putData = async (url,put, token) => {
  const response = await axios.put(`${BaseUrl}/api/${url}`, put, {
    headers: {
      // "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  })
  return response;
};

