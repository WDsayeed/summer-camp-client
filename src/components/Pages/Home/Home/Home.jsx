import useTitle from "../../../../hooks/useTitle";
import Banner from "../Banner/Banner";
import YouLearnSection from "../YouLearn/YouLearnSection";
import Category from "../category/Category";
import ClassSection from "../classSection/ClassSection";
import PopularInstructor from "../popularInstructor/PopularInstructor";

const Home = () => {
        useTitle('Home')
        return (
                <div>
                     <Banner></Banner> 
                     <div className="max-w-screen-xl mx-auto">
                     <Category></Category>
                     <ClassSection></ClassSection>
                     <PopularInstructor></PopularInstructor>
                     <YouLearnSection></YouLearnSection>
                     </div>
                </div>
        );
};

export default Home;