import { useContext } from "react";
import { DataContext } from "../store/GlobalState";
import Toast from "./Toast";
import {toast} from "react-toastify"

const Notify = () => {
  const { state, dispatch } = useContext(DataContext);
  const  {notify}  = state;
  return <>{notify && <Toast t={toast.message} />}</>
};

export default Notify;
