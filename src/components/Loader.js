import React from "react";
import { motion } from "framer-motion";

function Loader() {
  return (
    <motion.div
      className="h-screen flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="loader" />
    </motion.div>
  );
}

export default Loader;
