import React from 'react'
import { Button } from 'react-bootstrap'
import Cards from '../../../../components/Cards'
import{ Data} from '../../../../components/Data'
import { CustomButton } from '../../../../components/Button/CustomButton'
import { motion, startOptimizedAppearAnimation } from "framer-motion";
const Services = () => {
  return (
       <motion.div
          animate={{ y: 10, scale: 1 }}
          initial={{ scale: 0 }}
          className='servicesSection'
        >
      {

Data.map((item,index)=>{
return <div className="cardSection"> <Cards key={index} icon={item.icon} />
<CustomButton title={item.text}/>  
</div>
        })

       
      }
  </motion.div>
     
  )
}

export default Services