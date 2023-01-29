import React, { useEffect, useRef, useState } from "react";
import { CustomButton } from "../../../../components/Button/CustomButton";
import galaxy from "../../../../assests/galaxy.png";
import { motion, startOptimizedAppearAnimation } from "framer-motion";
import { useNavigate } from 'react-router-dom';
const Body = (props) => {
    
  const navigate = useNavigate();

    
  const [animation, setAnimation] = useState(false);
  return (
    <div>
      {/* <Content  title="Get Started" navigate={navigate('/website')} /> */}

      {/* {animation ? (
        <motion.div
          animate={{ y: 10, scale: 1 }}
          initial={{ scale: 0 }}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
    <h2 style={{color:'#fff'}}>
       About Techflix
    </h2>
    <p style={{color:'#fff'}}>
        Techflix is an fast growing company in technology industry 
    </p>
    <p style={{color:'#fff'}}>
        we provide services with best quality 
    </p>
          </div>
          <img src={galaxy} className="rotateIcon" />
        </motion.div>
      ) : null} */}
    </div>
  );
};

export default Body;
