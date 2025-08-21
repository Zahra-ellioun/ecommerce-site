import {
  Hero,
  Navbar,
  Category,
  Services,
  Banner,
  Products,
} from "./components";
import headphone from "./assets/Hero/headphone.png";

const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 Jan to 28 Jan",
  img: headphone,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in suscipit lorem",
  bgColor: "#f42c37",
};
const App = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar />
      <Hero />
      <Category />
      <Services />
      <Banner data={BannerData} />
      <Products />
    </div>
  );
};

export default App;
