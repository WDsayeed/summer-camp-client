// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
// import img1 from '../../../../assets/images/banner1.jpg'
// import img2 from '../../../../assets/images/banner2.jpg'
// import img3 from '../../../../assets/images/banner3.jpg'
import bannerImg from '../../../../assets/images/banner.jpg'

const Banner = () => {
  return (

    <div>
      <img src={bannerImg} alt="" />
    </div>
    // <Carousel>
    //   <div>
    //     <img src={img1} />
    //     <p className="legend">Legend 1</p>
    //   </div>
    //   <div>
    //     <img src={img2} />
    //     <p className="legend">Legend 2</p>
    //   </div>
    //   <div>
    //     <img src={img3} />
    //     <p className="legend">Legend 3</p>
    //   </div>
    // </Carousel>
  );
};

export default Banner;
