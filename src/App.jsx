import React, { useEffect, useState } from "react";
import PreviewCard from "./components/PreviewCard/PreviewCard";
import { Style } from "./theme/Style";

const App = () => {
  const [image, setImage] = useState(
    require("./images/image-product-desktop.jpg"),
  );

  useEffect(() => {
    if (window.innerWidth <= 727) {
      setImage(require("./images/image-product-mobile.jpg"));
    }
  }, []);

  return (
    <>
      <Style />
      <PreviewCard
        image={image}
        catgeory="prefume"
        title="Gabrielle Essence Eau De Parfum"
        description="A floral, solar and voluptuous interpretation composed by Olivier Polge,Perfumer-Creator for the House of CHANEL."
        price="$149.99"
        oldPrice="$169.99"
      />
    </>
  );
};

export default App;
