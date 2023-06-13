import { FaBullhorn } from "react-icons/fa";

const YouLearnSection = () => {
  return (
    <>
    <h1 className="text-4xl text-center">What do you learn?</h1>
    <div className="md:flex gap-10 my-24">
      <div className="text-center">
        <span>
          {" "}
          <FaBullhorn className="text-center text-orange-600 w-20"></FaBullhorn>
        </span>
        <h2 className="text-2xl mb-4">Speak</h2>
        <p>
          Speak with native speakers on any topic you want (not just about the
          weather). Make friends in different parts of the Earth!
        </p>
      </div>
      <div className="text-center">
        <FaBullhorn></FaBullhorn>
        <h2 className="text-2xl mb-4">Read</h2>
        <p>
          Read literature in the original language. Grow your vocabulary, master
          the language's grammar, and broaden your horizons!
        </p>
      </div>
      <div className="text-center">
        <FaBullhorn></FaBullhorn>
        <h2 className="text-2xl mb-4">Understand</h2>
        <p>
          Understand new things about the foreign country, its culture and
          traditions. Feel yourself like a piece of something global!
        </p>
      </div>
      <div className="text-center">
        <FaBullhorn></FaBullhorn>
        <h2 className="text-2xl mb-4">Write</h2>
        <p>
          Write to your foreign friends or conduct business correspondence with
          people from other countries and even continents!
        </p>
      </div>
    </div>
    </>
  );
};

export default YouLearnSection;
