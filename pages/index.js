import Head from "next/head";
import Layout from "../components/Layout";
import Main from "../components/mainpage/Main";
import styles from "../styles/Home.module.css";
import {SearchCourseProvider} from './Category'
import {useRouter} from 'next/router'
export default function Home() {

  return (
    <>
      <SearchCourseProvider>
        <Layout>
        
            <Main />

        </Layout>
      </SearchCourseProvider>
    </>
  )
}
