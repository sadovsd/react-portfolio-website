import React, { Component } from "react";
import midjourney from "../../assets/midjourney.png";
import { motion } from "framer-motion";


class Home extends Component {
  render() {
    return (
      <div className="container">
      {/* <div className="container min-h-screen flex flex-col justify-between"> */}


        <div className="flex flex-col md:flex-row m-auto md:m-8 md:mr-0 ssm:mt-0">
          <motion.div
            className="md:w-[42%] xl:ml-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1.5 } }}
            exit={{ opacity: 0, transition: { duration: 1.5 } }}
          >
            <div className="mt-60 xs:mt-28">
              <div>
                <h1 className="whitespace-nowrap ssm:px-1 xxs:!text-[8vw] xs:text-[40px] sm:text-[60px] md:text-[30px] lg:text-[35px] xl:text-[42px] 2xl:text-[5rem] md:mb-0 ssm:text-center md:text-left">
                  DAVYD SADOVSKYY
                </h1>
                <h3 className="heading-with-line ml-2 font-semibold py-[10px] text-[21px]">
                  Data Scientist
                </h3>
              </div>

              <p className="ml-2 text-justify mt-7 ssm:mb-5 text-[19px]">
                I am an MS statistics candidate with a strong foundation in math,
                machine learning, computer science, and biology. I am involved in computational
                genomics research and am particularly interested in studying difficult
                problems in human aging. My diverse educational and project experience makes
                me well prepared for a wide range of real world data science problems.
              </p>
            </div>
            <div className="flex xxs:flex-wrap justify-between pt-[10px] text-[19px]">
              <div className="mt-2">
                <div className="font-normal ml-2">ua.sadovskyy@gmail.com</div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="md:w-[58%] mt-24 flex justify-center mr-40 xs:mx-20"
            initial={{ opacity: 0, x: 140 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1.5 } }}
            exit={{ opacity: 0, x: -100 }}
          >
            <img
              src={midjourney}
              className="max-w-[90%] ssm:mr-0 md:mr-[-100px] object-contain"
              alt="Midjourney Generated Illustration"
            />
          </motion.div>
        </div>
      </div>
    );
  }
}

export default Home;
