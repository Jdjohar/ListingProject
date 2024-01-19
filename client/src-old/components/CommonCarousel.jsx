import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import  '../css/style.css'

const CommonCarousel = () => {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef();

  useEffect(()=>{
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
  }, [])

  return (
    <div className="outer">
      <motion.div ref={carouselRef} className="caroussel" whileTap={{cursor: 'grabbing'}}>
        <motion.div drag='x' dragConstraints={{right: 0, left: -width}} className="inner-caroussel">
          <motion.div className="caroussel-item">
            <motion.div className="card">
              <div className="img-wrapper">
                <img
                  src="https://codingyaar.com/wp-content/uploads/headshot-2-scaled.jpg"
                  className="d-block w-100"
                  alt="..."
                />{" "}
              </div>
              <div className="card-body">
                <h5 className="card-title">Card title 2</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </motion.div>
            </motion.div>
            <motion.div className="caroussel-item">
            <motion.div className="card">
              <div className="img-wrapper">
                <img
                  src="https://codingyaar.com/wp-content/uploads/headshot-2-scaled.jpg"
                  className="d-block w-100"
                  alt="..."
                />{" "}
              </div>
              <div className="card-body">
                <h5 className="card-title">Card title 2</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </motion.div>
            </motion.div>
            <motion.div className="caroussel-item">
            <motion.div className="card">
              <div className="img-wrapper">
                <img
                  src="https://codingyaar.com/wp-content/uploads/headshot-2-scaled.jpg"
                  className="d-block w-100"
                  alt="..."
                />{" "}
              </div>
              <div className="card-body">
                <h5 className="card-title">Card title 2</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </motion.div>
            </motion.div>
            <motion.div className="caroussel-item">
            <motion.div className="card">
              <div className="img-wrapper">
                <img
                  src="https://codingyaar.com/wp-content/uploads/headshot-2-scaled.jpg"
                  className="d-block w-100"
                  alt="..."
                />{" "}
              </div>
              <div className="card-body">
                <h5 className="card-title">Card title 2</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
    </div>
  );
};

export default CommonCarousel;
