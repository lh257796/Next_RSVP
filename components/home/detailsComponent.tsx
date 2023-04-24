import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const DetailsComponent = () => {
  return (
    <>
      <div className="absolute">
      {/* <motion.svg
        className="absolute inset-0 m-auto"
        viewBox="0 0 100 100"
        width={140}
        height={140}
      > */}
        <Image
        src="/../public/venue.webp"
        alt="venue logo"
        width="670"
        height="500"
        // fill
        className="bg-blue"
        />
      {/* </motion.svg> */}
    </div>
    </>
  );
};

export default DetailsComponent;
