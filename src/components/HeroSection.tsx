import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Droplet, Leaf, Utensils } from "lucide-react";
import { useAuth0 } from "@auth0/auth0-react";

// Define the props interface for the TextSection component
interface TextSectionProps {
  title: string;
  subtitle: string;
}

// TextSection component displays the textual content of the hero section
const TextSection: React.FC<TextSectionProps> = ({ title, subtitle }) => {
  const updatedTitle = title.split(" ").map((word, index) =>
    word.toLowerCase() === "first" ? (
      <span key={index} className="text-rose-500">
        {word}
      </span>
    ) : (
      word
    )
  );

  return (
    <div className="lg:w-3/5">
      <div className="flex flex-col lg:w-3/4">
        <h1 className="text-5xl lg:text-7xl font-bold mb-4">
          {updatedTitle.map((word, index) => (
            <React.Fragment key={index}>{word} </React.Fragment>
          ))}
        </h1>

        <p className="text-base lg:text-base text-accent-slate-500 mb-4">
          {subtitle}
        </p>

        <div className="flex justify-center items-start mb-6 space-x-2 sm:space-x-0 ">
          <div className="flex-1 flex flex-col justify-center gap-2  py-5">
            <Utensils className="text-rose-500" />
            <span className="text-base font-medium">Delicious</span>
          </div>

          <div className="flex-1 flex flex-col justify-center gap-2 py-5">
            <Droplet className="text-rose-500" />
            <span className="text-base font-medium">Fresh</span>
          </div>

          <div className="flex-1 flex flex-col justify-center gap-2  py-5">
            <Leaf className="text-rose-500" />
            <span className="text-base font-medium">Organic</span>
          </div>
        </div>

        <OrderNowButton />
      </div>
    </div>
  );
};

// OrderNowButton component renders the button for ordering
const OrderNowButton: React.FC = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  // Handler for clicking the Order Now button
  const handleOrderNowClick = () => {
    if (isAuthenticated) {
      // Redirect logic can be handled here if needed
    } else {
      loginWithRedirect();
    }
  };

  return (
    <div className="flex gap-2">
      <Button
        className="bg-rose-500 text-white py-2 px-4 rounded-lg transition duration-500 ease-in-out transform hover:scale-110 mr-4"
        onClick={handleOrderNowClick}
      >
        Order Now
      </Button>

      <Link to="/book-table">
        <Button className="bg-transparent text-rose-500 py-2 px-4 border-2 border-rose-500 rounded-lg transition duration-500 ease-in-out transform hover:scale-110 hover:text-white">
          Book a Table
        </Button>
      </Link>
    </div>
  );
};

// Define the props interface for the ImageSection component
interface ImageSectionProps {
  imageUrl: string;
  alt: string;
}

// ImageSection component renders the image of the hero section
const ImageSection: React.FC<ImageSectionProps> = ({ imageUrl, alt }) => {
  return (
    <div className="lg:w-2/5">
      <img
        src={imageUrl}
        alt={alt}
        className="object-cover w-full max-h-[660px]"
        style={{ zIndex: 1 }}
      />
    </div>
  );
};

// Define the props interface for the HeroSection component
interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  imageUrl?: string;
  alt?: string;
}

// HeroSection component represents the hero section of the landing page
const HeroSection: React.FC<HeroSectionProps> = ({
  title = "Be The First Delivery & Easy Pick UP",
  subtitle = "Experience culinary excellence with our diverse menu, online ordering, and personalized table reservations. Join us for unparalleled dining satisfaction.",
  imageUrl = "./src/assets/N2HMMGN-2.png",
  alt = "Default description of your image",
}) => {
  return (
    <section className="container mx-auto px-10 py-12">
      <div className="flex flex-col lg:flex-row sm:space-y-8 justify-between items-center">
        <TextSection title={title} subtitle={subtitle} />

        <ImageSection imageUrl={imageUrl} alt={alt} />
      </div>
    </section>
  );
};

export default HeroSection;
