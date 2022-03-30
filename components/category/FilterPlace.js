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
    zipcode,
    setZipcode,
    onSelect,
    setError,
    fullAddress,
    setFullAddress,
  } = props

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
      <div className="flex justify-start focus:outline-none ">
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
      </div>
      <div className="flex justify-start">
        <InputAddress
          style={{width: "100%", outlineStyle: "none", fontSize: "1rem", fontWeight: "900"}}
          placeholder="จังหวัด"
          address="province"
          value={province}
          onChange={(e) => {
            setProvince(e.target.value)
            setError("")
          }}
          onSelect={onSelect}
        />

        <InputAddress
          style={{width: "100%", outlineStyle: "none", fontSize: "1rem", fontWeight: "900"}}
          placeholder="เลขไปรษณีย์"
          address="zipcode"
          value={zipcode}
          onChange={(e) => {
            setZipcode(e.target.value)
            setError("")
          }}
          onSelect={onSelect}
        />
      </div>
    </div>
  )
}

export default FilterPlace
