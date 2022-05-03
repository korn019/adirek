import {
  FacebookIcon,
  FacebookShareButton,
  LineIcon,
  LineShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
import { formatNumber } from "../../utils/formatNum";
const CoursePrice = ({ item, shareUrl }) => {
  return (
    <>
      <h2 className="price d-inline-block mb-0 text-Athiti !font-semibold !text-f2xl">
        {formatNumber(item.price_course)} THB
      </h2>
      <a className="btn btn-primary ms-auto hover:text-white" href="#">
        Add to Cart
      </a>
      <a className="btn  btn-primary ms-3 hover:text-white" href="#">
        Buy Now
      </a>
      <div className="ms-auto d-425-none flex items-center justify-center">
        <a href="#">
          <i className="far fa-heart"></i>
        </a>
        <FacebookShareButton
          url={shareUrl}
          className="Demo__some-network__share-button"
        >
          <FacebookIcon size={20} round className="ml-2" />
        </FacebookShareButton>
        <TwitterShareButton url={shareUrl} className="">
          <TwitterIcon size={20} round className="ml-2" />
        </TwitterShareButton>
        <LineShareButton url={shareUrl} className="">
          <LineIcon size={20} round className="ml-2" />
        </LineShareButton>
      </div>
    </>
  );
};

export default CoursePrice;
