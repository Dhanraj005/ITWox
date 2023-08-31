import React from 'react'
import {motion} from 'framer-motion'
const SignImg = () => {
  return (
    <>
    <div className="rightSide mt-5" style={{ width: "100%" }}>
            <div className="SignImg">
              <motion.img initial={{y:"5rem",x:"3rem" , opacity:0}} transition={{duration:2,type:"spring"}} animate={{y:0,opacity:1}} src="./hand.jpg" style={{ maxWidth: 660 }} />
            </div>
          </div>
    
    </>
  )
}

export default SignImg