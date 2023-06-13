// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
// import img1 from '../../../../assets/images/banner1.jpg'
// import img2 from '../../../../assets/images/banner2.jpg'
// import img3 from '../../../../assets/images/banner3.jpg'
import bannerImg from "../../../../assets/images/banner.jpg";

const Banner = () => {
  return (
    <div className="">
      <img src={bannerImg} alt="" />
      <div className="-mt-72 mb-96 text-white  text-center">
        <h1 className="text-5xl">Learn a Language</h1>
        <p className="my-5">
          Learn a language right here with hundreds of free language-learning
          lessons. <br />  Join us and have some fun.
        </p>
        <button className="btn btn-accent">Start learning now</button>
      </div>
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
