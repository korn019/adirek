import {Children, createContext, useReducer, useState, useEffect} from "react"
import reducers from "./Reducers"
import axios from "axios"
import {getData} from "../utils/fetchData"
import {useRouter} from "next/router"
export const DataContext = createContext()

export const DataProvider = ({children}) => {
  const initialState = {
    notify: {},
    auth: {},
    courseData: [],
    searchCourseNav: "",
    isLoading: null,
    edit: {},
  }
  const [state, dispatch] = useReducer(reducers, initialState)
  // const [course, dispatch] = useReducer(course, initialState)
  const {auth, courseData} = state
  const [data, setData] = useState([])
  const [searchCourse, setSearchCourse] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [userLogin, setUserLogin] = useState([])
  const [firstLogin2, setFirstLogin2] = useState(true)
  const router = useRouter()
  useEffect(() => {
    const firstLogin = localStorage.getItem("firstLogin")
    dispatch({
      type: "EDITPROFILE",
      payload: {
        token: auth.token,
      },
    })
    if (firstLogin) {
      getData("auth/accesstoken").then((res) => {
        if (res.err) return localStorage.removeItem("firstLogin")
        dispatch({
          type: "AUTH",
          payload: {
            token: res.access_token,
            user: res.user,
          },
        })
      })
    }
    getData("instructor")
      .then((res) => {
        setData(res.Instructor)
        setIsLoading(true)
        dispatch({type: "COURSE", payload: res.Instructor})
      })
      .catch((err) => {
        console.log(err)
      })
  }, [router.pathname])

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
