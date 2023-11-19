import "./Gallery.css";
import { images } from "../../Data";
import SubHeading from "../../components/SubHeading/SubHeading";
import { FaInstagram } from "react-icons/fa";
import { FaArrowLeft, FaArrowRightLong } from "react-icons/fa6";
import { useRef } from "react";

const Gallery = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  const gallery = [
    images.gallery01,
    images.gallery02,
    images.gallery03,
    images.gallery04,
  ];

  return (
    <section className="gallery-section">
      <div className="gallery-container">
        {/* left side */}
        <div className="gallery-info">
          <div className="gallery-heading">
            <SubHeading title="instagram" />
            <h2>photo gallery</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit nobis odio
            voluptatum adipisicing voluptatum adipisicing voluptatum adipisicing
          </p>
          <button>View more</button>
        </div>
        {/* right side */}

        <div className="gallery-img" ref={scrollRef}>
          {gallery.map((image, index) => {
            return (
              <div className="card" key={`gallery_image-${index + 1}`}>
                <img src={image} alt="gallery image" />
                <FaInstagram className="instagram" />
              </div>
            );
          })}
          <div className="gallery-btns">
            <FaArrowLeft onClick={() => scroll("left")} className="arrow" />
            <FaArrowRightLong
              onClick={() => scroll("right")}
              className="arrow"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
