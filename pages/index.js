import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import Main from "../components/mainpage/Main";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Layout>
        <Main />
      </Layout>
    </>
  );
}
