import HeroSection from './Components/HeroSection';
import { useProductContext } from './Context/productcontex';
const About = () => {
const { myName }= useProductContext();
  const data = {
    name: "E-KART STORE",
  };
  return (
    <>
    { myName }
    <HeroSection myData={data}/>
    </>
  );
};

export default About;
