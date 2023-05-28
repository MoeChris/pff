import banner from "../images/icons/banner.svg";
import { Link } from "react-router-dom";
import { Slider } from "../components/slider";
import { PersonSlider } from "../components/personSlider";

const Home = () => {
  return (
    <main>
      {/* md:flex md:justify-start md:items-center */}
      <div className="grid min-h-[30vh] max-h-[40vh] bg-gradient-to-bl from-[#C1E8FF] to-[#00266f]">
        <div className="md:absolute grid text-center justify-center">
          <h1 className="text-white text-4xl font-bold pt-5">Besoin d'aide?</h1>
          <p className="text-[#ffffff] pb-1">
            Trouver un bricoleur proche de chez vous!
          </p>
          <Link to="/book" className="flex justify-center h-14">
            <button className="text-white bg-[#1057E0] hover:bg-blue-800 outline-none rounded-3xl text-sm font-bold px-8 md:py-2.5 mb-5">
              Trouver un Bricoleur
            </button>
          </Link>
        </div>
      </div>

      <section className="mt-5 grid gap-5">
        <Slider />
        <PersonSlider />
      </section>
    </main>
  );
};

export default Home;
