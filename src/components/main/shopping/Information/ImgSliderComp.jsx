import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./imgSliderComp.css";

export default function ImgSliderComp(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const item = props.item.info;

  return (
    <div>
      <Slider {...settings}> 
        {
          item && item.map((i)=>(
            <div>
              <img src={i} className="Img" />
            </div>
          ))
        }

        { /**
          <div>
            <img src={require("./InfoImg/001.png")} className="Img" />
          </div>
          <div>
            <img src={require("./InfoImg/002.png")} className="Img" />
          </div>
          <div>
            <img src={require("./InfoImg/003.png")} className="Img" />
          </div>
          <div>
            <img src={require("./InfoImg/004.png")} className="Img" />
          </div>
          <div>
            <img src={require("./InfoImg/006.png")} className="Img" />
          </div>
         * 
         */
        }
      </Slider>
    </div>
  );
}
