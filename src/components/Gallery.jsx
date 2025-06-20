"use client";

import Image from "next/image";
import { useState } from "react";
//gallery image imports
import imgGallery from "@/utils/gallery";

export default function Gallery(props) {
  const worldId = props.selectedWorld;

  // filtering the images from the gallery
  const filterImg = imgGallery.filter((image) => image.worldId === worldId);

  const [selectedImage, setSelectedImage] = useState(0);

  // functions handling the prev and next buttons for the gallery

  function handlePrev() {
    setSelectedImage((currentIndex) => {
      if (currentIndex === 0) {
        return filterImg.length - 1;
      } else {
        return currentIndex - 1;
      }
    });
  }

  function handleNext() {
    setSelectedImage((currentIndex) => {
      if (currentIndex === filterImg.length - 1) {
        return 0;
      } else {
        return currentIndex + 1;
      }
    });
  }

  const currentImage = filterImg[selectedImage];

  return (
    <>
      <h1>Gallery</h1>

      <div>
        <Image
          src={currentImage.img_var}
          alt={currentImage.img_alt}
          width={100}
          height={100}
          placeholder="blur"
        />
        <p>{currentImage.img_alt}</p> <button onClick={handlePrev}>Back</button>
        <button onClick={handleNext}>Forwards</button>
      </div>
    </>
  );
}
