import InstructorPromote from "../components/Instructor/InstructorPromote"
import Layout from "../components/Layout"
import {SearchCourseProvider} from "./Category"
const Instructor = () => {
  return (
    <SearchCourseProvider>
      <Layout>
        <InstructorPromote />
      </Layout>
    </SearchCourseProvider>
  )
}

export default Instructor
