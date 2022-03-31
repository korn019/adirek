import ContactUs from "../components/ContactUs";
import Layout from "../components/Layout";
import {SearchCourseProvider} from "./Category"
const Contact = () => {
    return (
      <SearchCourseProvider>
        <Layout>
          <ContactUs />
        </Layout>
      </SearchCourseProvider>
    )
}

export default Contact;