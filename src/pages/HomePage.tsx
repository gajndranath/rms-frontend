import React from "react";
import langinfImage from "../assets/landing.png";
import appDownload from "../assets/appDownload.png";
import chies from "../assets/cheeseburger.png";
import chips from "../assets/chips.png";
import drink from "../assets/drink.png";
import { Button } from "@/components/ui/button";

// Define the props interface for the MenuItem component
interface MenuItemProps {
  imageSrc: string;
  title: string;
  description: string;
  buttonText: string;
}

// MenuItem component displays a menu item with image, title, description, and a button
const MenuItem: React.FC<MenuItemProps> = ({
  imageSrc,
  title,
  description,
  buttonText,
}) => {
  return (
    <div className="flex-1 bg-black p-4 rounded-lg">
      <div className="flex justify-center items-center gap-4">
        <div className="w-40 h-40">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col text-white items-start justify-center gap-2">
          <h3 className="font-bold text-lg md:text-xl">{title}</h3>
          <span className="text-sm md:text-base">{description}</span>
          <Button>{buttonText}</Button>
        </div>
      </div>
    </div>
  );
};

// HomePage component renders the main landing page content
const HomePage: React.FC = () => {
  return (
    <section className="flex flex-col items-center gap-12">
      <div className="bg-white rounded-lg shadow-md py-8 text-center -mt-16">
        <h2 className="text-5xl font-bold tracking-tight text-rose-600">
          Tuck into a take today
        </h2>
        <span className="text-xl">Food is just a click away!</span>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8 px-4">
          <MenuItem
            imageSrc={chies}
            title="FOOD"
            description="Lorem ipsum dolor sit"
            buttonText="Order Now"
          />
          <MenuItem
            imageSrc={chips}
            title="SNACKS"
            description="Lorem ipsum dolor sit"
            buttonText="Order Now"
          />
          <MenuItem
            imageSrc={drink}
            title="BEVERAGE"
            description="Lorem ipsum dolor sit"
            buttonText="Order Now"
          />
        </div>
      </div>

      <section className="grid md:grid-cols-2 gap-5">
        <img src={langinfImage} alt="Landing" />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Order takeaway even faster!
          </span>
          <span>
            Download the DineNight App for faster ordering and personalised
            recommendations
          </span>
          <img src={appDownload} alt="App Download" />
        </div>
      </section>
    </section>
  );
};

export default HomePage;
