import LayoutProfile from "../../../components/LayoutProfile"
import Home from "../../../components/profile/Home"
import About from "../../../components/profile/Edit"
import {useRouter} from "next/router"

import {DataContext} from "../../../store/GlobalState"
import {toast} from "react-toastify"
import {useEffect, useState, useContext, Fragment} from "react"
import Edit from "../../../components/profile/Edit"
import {Tab} from "@headlessui/react"
import EditCard from "../../../components/profile/EditCard"
import AddCourse from "../../../components/profile/AddCourse"
import Link from "next/link"
import {dash} from "../../../utils/dash"
const profile = () => {
  const {searchCourse, setSearchCourse, state, dispatch} = useContext(DataContext)
  const {auth} = state
  console.log(auth)
  const router = useRouter()
  useEffect(() => {
    const token = localStorage.getItem("token")
    if (Object.keys(auth).length == 0) router.prefetch("/")
  }, [auth])
  return (
    <>
  
     
     
      <LayoutProfile>
        {/* <Home /> */}
        {/* <Edit /> */}
      </LayoutProfile> 
    </>
  )
}

export default profile

// export async function getServerSideProps(context) {
//   const id = context.params.id
//   console.log(id)
//   const res = await fetch(`user-data/${id}`)
//   // console.log(res)
//   // const post = await res.json()
//   return{
//     props:{

//     }
//   }
//   // return {
//   //   props: {
//   //     post,
//   //     // props ที่จะส่งไปยังหน้าอื่น
//   //   },
//   // }
// }
