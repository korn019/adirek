import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import Link from "next/link";
import BannerAds from "../BannerAds";
import { useState, Fragment } from "react";
import axios from "axios";
import { Dialog, Transition } from "@headlessui/react";
import { css } from "@emotion/react";
import SyncLoader from "react-spinners/SyncLoader";
import ReactStars from "react-stars";
import AdirekisInstructor from "../mainpage/AdirekisInstructor";
import HowToBePartner from "./HowTobePartner";
import TestimonialInstructor from "./TestimonialInstructor";
import PartnerInstructor from "./PartnerInstructor";
import LandingScreenInstructor from "./LandingScreenInstructor";

const InstructorPromote = () => {
  const [instructor, setInstructor] = useState({
    firstName: "",
    lastName: "",
    email: "",
    tel: "",
  });
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  let [loading, setLoading] = useState(false);
  const [warning, setWarning] = useState(false);
  const [warnText, setWarnText] = useState();
  const handleChange = (event) => {
    setInstructor({ ...instructor, [event.target.name]: event.target.value });
  };
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("http://localhost:3000/api/instructors/contact", instructor)
      .then(function (response) {
        setWarnText(false);
        setIsOpen(true);
        if (response.status === 200) {
          setLoading(false);
        }
      })
      .catch(function (error) {
        let err = error.response.data.error;
        setWarning(true);
        setWarnText(`***${err}***`);
        if (error.response.status === 400) {
          setLoading(false);
        }
      });
  };

  return (
    <>
      <LandingScreenInstructor />

      <PartnerInstructor />

      {/* <AdirekisInstructor /> */}

      <HowToBePartner />

      {/* <TestimonialInstructor/> */}

      <div className="pt-12">
        <BannerAds />
      </div>
    </>
  );
};

export default InstructorPromote;
