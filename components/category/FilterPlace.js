import {useState} from "react"
import InputAddress from "react-thailand-address-autocomplete"

function FilterPlace(props) {
  //AddressForm state
  const {
    houseNumber,
    setHouseNumber,
    subdistrict,
    setSubDistrict,
    district,
    setDistrict,  
    province,
    setProvince,
    // zipcode,
    // setZipcode,
    onSelect,
    setError,
    fullAddress,
    setFullAddress,
  } = props
  
 function handleSubmit(e) {
   e.preventDefault()
 }
  //   const [subdistrict, setSubDistrict] = useState("")
  //   const [district, setDistrict] = useState("")
  //   const [province, setProvince] = useState("")
  //   const [zipcode, setZipcode] = useState("")
  //   const [fullAddress, setFullAddress] = useState({})
  //   const [error, setError] = useState({})

  //   function onSelect(fulladdress) {
  //     const {subdistrict, district, province, zipcode} = fulladdress
  //     setSubDistrict(subdistrict)
  //     setDistrict(district)
  //     setProvince(province)
  //     setZipcode(zipcode)
  //     setFullAddress([subdistrict, district, province, zipcode])
  //     setError("")
  //     console.log("some fulladdress: ", fullAddress)
  //   }
  // const [subdistrict, setSubDistrict] = useState("");
  // const [district, setDistrict] = useState("");
  // const [province, setProvince] = useState("");
  // const [zipcode, setZipcode] = useState("");
  // const [fullAddress, setFullAddress] = useState({});

  // function onSelect(fulladdress) {
  //   const { subdistrict, district, province, zipcode } = fulladdress;
  //   setSubDistrict(subdistrict);
  //   setDistrict(district);
  //   setProvince(province);
  //   setZipcode(zipcode);
  //   setFullAddress(fulladdress);
  // }

  // console.log(district)
  return (
    <div className="address flex flex-col space-y-1 ">
      {/* <div className="flex justify-start focus:outline-none ">
        <InputAddress
          style={{width: "100%", outlineStyle: "none", fontSize: "1rem", fontWeight: "900"}}
          placeholder="แขวง / ตำบล"
          address="subdistrict"
          value={subdistrict}
          onChange={(e) => {
           setSubDistrict(e.target.value)
            setError("")
          }}
          onSelect={onSelect}
        />

        <InputAddress
          style={{width: "100%", outlineStyle: "none", fontSize: "1rem", fontWeight: "900"}}
          placeholder="เขต / อำเภอ"
          address="district"
          value={district}
          onChange={(e) => {
            setDistrict(e.target.value)
            setError("")
          }}
          onSelect={onSelect}
        />
      </div> */}
      <div className="flex justify-start">
        <form className="flex">
          <input
            className="rounded-l-lg p-1 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
            placeholder="กรอกที่อยู่ที่ต้องการค้นหา"
            address="province"
            value={province}
            onChange={(e) => {
              setProvince(e.target.value)
              setError("")
            }}
          />
          <button
            onClick={handleSubmit}
            className="px-8 rounded-r-lg bg-yellow-400  text-gray-800 hover:text-blue-700 duration-500 font-bold p-2 uppercase border-yellow-500 border-t border-b border-r">
            ค้นหา
          </button>
        </form>

        {/* <InputAddress
          style={{width: "100%", outlineStyle: "none", fontSize: "1rem", fontWeight: "900"}}
          placeholder="กรอกที่อยู่ที่ต้องการค้นหา"
          address="province"
          value={province}
          onChange={(e) => {
            setProvince(e.target.value)
            setError("")
          }}
          onSelect={onSelect}
        /> */}

        {/* <InputAddress
          style={{width: "100%", outlineStyle: "none", fontSize: "1rem", fontWeight: "900"}}
          placeholder="เลขไปรษณีย์"
          address="zipcode"
          value={zipcode}
          onChange={(e) => {
            setZipcode(e.target.value)
            setError("")
          }}
          onSelect={onSelect}
        /> */}
      </div>
    </div>
  )
}

export default FilterPlace
