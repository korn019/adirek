import axios from "axios"

const BaseUrl = "http://localhost:8000"

export const getData = async (url, token) => {
  const res = await fetch(`${BaseUrl}/api/${url}`, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
    },
  })
  const data = await res.json()
  return data
}

export const postData = async (url, post, token) => {
  const res = await fetch(`${BaseUrl}/api/${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(post),
  })

  const data = await res.json()
  return data
}

export const putData = async (url, put, token) => {
  const res = await fetch(`${BaseUrl}/api/${url}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(put),
  })
  const data = await res.json()
  return data
}

// export const getData = async (url, token) => {
//   const response = await axios(`${BaseUrl}/api/${url}`, {
//     method: "GET",
//     headers: {
//       // "Content-Type": "application/json",
//       Authorization: "Bearer " + token,
//     },
//   })
//   return response
// }
// export const getDataNoToken = (url) => {
//   const response = axios.get(`${BaseUrl}/api/${url}`)
//   return response
// }

// export const postData = async (url, post, token) => {
//   const response = await axios.post(`${BaseUrl}/api/${url}`, post)
//   return response
// }

// export const putData = async (url, put, token) => {
//   const response = await axios.put(`${BaseUrl}/api/${url}`, put, {
//     headers: {
//       // "Content-Type": "application/json",
//       Authorization: "Bearer " + token,
//     },
//   })
//   return response
// }

// export const getData = async (url, token) => {
//   const res = await fetch(`${BaseUrl}/api/${url}`, {
//     method: "GET",
//     headers: {
//       Authorization: "Bearer " + token,
//     },
//   })
//   const data = await res.json()
//   return data
// }

// export const postData = async (url,post, token) => {
//   const res = await fetch(`${BaseUrl}/api/${url}`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Authorization": token,
//     },
//     body: JSON.stringify(post),
//   })
//   const data = await res.json()
//   return data
// }

// export const putData = async (url,put, token) => {
//   const res = await fetch(`${BaseUrl}/api/${url}`, {
//     method: "PUT",
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': "Bearer " + token,
//     },
//     body: JSON.stringify(put),
//   })
//   const data = await res.json()
//   return data
// }
