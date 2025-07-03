"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "@/Styles/Gallery.module.css";
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
    <div className={styles.gallery}>
      <h1 className={styles.title}>Screenshots of the world</h1>

      <div className={styles.imagecon}>
        {currentImage ? (
          <>
            <Image
              src={currentImage.img_var}
              alt={currentImage.img_alt}
              height={1080}
              width={1920}
              placeholder="blur"
              className={styles.image}
            />
            <p className={styles.desc}>{currentImage.img_alt}</p>
          </>
        ) : (
          <div className={styles.noImagePlaceholder}>
            <p>No Preview Available</p>
          </div>
        )}
        <button className={styles.buttonleft} onClick={handlePrev}>
          ←
        </button>
        <button className={styles.buttonright} onClick={handleNext}>
          →
        </button>
      </div>
    </div>
  );
}
