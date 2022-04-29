import {
  Children,
  createContext,
  useReducer,
  useState,
  useEffect,
} from "react";
import reducers from "./Reducers";
import axios from "axios";
import { getData } from "../utils/fetchData";
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const initialState = { notify: {}, auth: {} };
  const [state, dispatch] = useReducer(reducers, initialState);
  const { auth } = state;

  const [searchCourse, setSearchCourse] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [userLogin, setUserLogin] = useState([]);
  // const getData = () => {
  //   axios
  //     .get("https://www.api-adirek.online/api/instructor-course")
  //     .then((res) => {
  //       setData(res.data);
  //       setIsLoading(true);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // };
  // const userLogin = JSON.parse(localStorage.getItem("user"))

  useEffect(() => {
    const token = localStorage.getItem("token");
    const firstLogin = localStorage.getItem("firstLogin");

    if (firstLogin) {
      getData("users/auth", token)
        .then((res) => {
          localStorage.setItem("user", JSON.stringify(res.data.user));
          let keepUser =  JSON.parse(localStorage.getItem("user"))
          setUserLogin(keepUser);
        })
        .catch((err) => {
          console.log(err.response);
        });
    }

    getData("instructor-course", token)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setUserLogin,userLogin]);

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
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
