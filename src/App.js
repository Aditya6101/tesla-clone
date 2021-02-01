import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

import Accessories from "./assets/Desktop-Accessories.jpg";
import ModelS from "./assets/Desktop-ModelS.jpeg";
import Model3 from "./assets/Desktop-Model3.jpeg";
import ModelX from "./assets/Desktop-ModelX.jpeg";
import ModelY from "./assets/Desktop-ModelY.jpeg";
import SolarPanels from "./assets/Desktop-SolarPanels.jpeg";
import SolarRoof from "./assets/Desktop-SolarRoof.jpeg";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <MainContent
          title="Model 3"
          desc="Order Online For Touchless delivery"
          bgImg={Model3}
          leftBtnTxt="Custom Order"
          rightBtnTxt="Existing Inventory"
          leftBtnLink=""
          rightBtnLink=""
          isTwoBtns={true}
          first
        />

        <MainContent
          title="Model Y"
          desc="Order Online For Touchless delivery"
          bgImg={ModelY}
          leftBtnTxt="Custom Order"
          rightBtnTxt="Learn More"
          leftBtnLink=""
          rightBtnLink=""
          isTwoBtns={true}
        />
        <MainContent
          title="Model S"
          desc="Order Online For Touchless delivery"
          bgImg={ModelS}
          leftBtnTxt="Custom Order"
          rightBtnTxt="Existing Inventory"
          leftBtnLink=""
          rightBtnLink=""
          isTwoBtns={true}
        />
        <MainContent
          title="Model X"
          desc="Order Online For Touchless delivery"
          bgImg={ModelX}
          leftBtnTxt="Custom Order"
          rightBtnTxt="Existing Inventory"
          leftBtnLink=""
          rightBtnLink=""
          isTwoBtns={true}
        />
        <MainContent
          title="Lowest Cost Solar Panels in America"
          desc="Money-back guarantee"
          bgImg={SolarPanels}
          leftBtnTxt="Order Now"
          rightBtnTxt="Learn More"
          leftBtnLink=""
          rightBtnLink=""
          isTwoBtns={true}
        />
        <MainContent
          title="Solar for New Roofs"
          desc="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
          bgImg={SolarRoof}
          leftBtnTxt="Order Now"
          rightBtnTxt="Learn More"
          leftBtnLink=""
          rightBtnLink=""
          isTwoBtns={true}
        />
        <MainContent
          title="Accessories"
          bgImg={Accessories}
          leftBtnTxt="Shop Now"
          leftBtnLink=""
          isTwoBtns={false}
        />
      </div>
    </div>
  );
}

export default App;
