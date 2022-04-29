import {Children, createContext, useReducer, useState, useEffect} from "react"
import reducers from "./Reducers"
import axios from "axios"
import {getData} from "../utils/fetchData"
export const DataContext = createContext()

export const DataProvider = ({children}) => {
  const initialState = {notify: {}, auth: {}, courseData: {}, searchCourseNav: "", isLoading: null}
  const [state, dispatch] = useReducer(reducers, initialState)
  // const [course, dispatch] = useReducer(course, initialState)
  const {auth} = state
  const [data, setData] = useState([])
  const [searchCourse, setSearchCourse] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [userLogin, setUserLogin] = useState([])

  useEffect(() => {
    const token = localStorage.getItem("token")
    const firstLogin = localStorage.getItem("firstLogin")
    if (firstLogin) {
      getData("users/auth", token)
        .then((res) => {
          // console.log(res)
          dispatch({
            type: "AUTH",
            payload: {

              user:res.data.user,
              token: token
            }
          })
          // localStorage.setItem("user", JSON.stringify(res.data.user));
          // let keepUser =  JSON.parse(localStorage.getItem("user"))
          // setUserLogin(keepUser);
        })
        .catch((err) => {
          localStorage.removeItem("firstLogin")
          console.log(err.response)
        })
    }

    getData("instructor-course", token)
      .then((res) => {
        setData(res.data)
        setIsLoading(true)
        dispatch({type: "COURSE", payload: res.data})
      })
      .catch((err) => {
        console.log(err)
      })
  }, [setUserLogin, userLogin, data])

  return (
    <DataContext.Provider
      value={{
        state,
        dispatch,
        data,
        isLoading,
        searchCourse,
        setSearchCourse,
        userLogin,
      }}>
      {children}
    </DataContext.Provider>
  )
}
