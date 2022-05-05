import Edit from "../../../components/profile/Edit"
const EditProfile = (props) => {
  console.log(props)
  return (
      <Edit />
  )
}

export default EditProfile

export async function getServerSideProps(context) {
  const res = await fetch(`http://localhost:3000/api/test`)
  const post = await res.json() 
  return {
    props: {post
      // props ที่จะส่งไปยังหน้าอื่น
    },
  }
}