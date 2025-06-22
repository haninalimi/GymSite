import HText from "@/shared/HText"
import type { BenefitType } from "@/shared/types";
import Benefit from "@/scenes/benefits/Benefit";
import { SelectedPage } from "@/shared/types";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"
import {
     HomeModernIcon , 
     UserGroupIcon, 
     AcademicCapIcon} from "@heroicons/react/24/solid"
import { motion } from "framer-motion"
import { section } from "framer-motion/client"
import ActionButton from "@/shared/ActionButton";


const benefits : Array <BenefitType>= [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description: "Modern equipment and clean, spacious workout areas.",
  },

  {
  icon: <UserGroupIcon className="h-6 w-6" />,
  title: "100's of Diverse Classes",
  description: "Join a variety of fun and effective classes for all levels.",
}, 
{
  icon: <AcademicCapIcon className="h-6 w-6" />,
  title: "Expert and Pro Trainers",
  description: "Train with certified professionals who guide and motivate you.",
}



];

const container={
    hidden :{},
    visible:{
        transition :{ staggerChildren : 0.2}
    }
}

type Props = {
    setSelectedPage : (value: SelectedPage)=> void 

}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section
    id="benefits"
    className="mx-auto min-h-full w-5/6 py-20">
        <motion.div
            onViewportEnter={()=> setSelectedPage(SelectedPage.Benefits)} >



                {/* HEADER */}
                <motion.div className="md:my-5 md:w-3/5"
                initial="hidden"
            whileInView="visible"
            viewport={{once:true ,amount: 0.5}}
            transition={{delay:0.2,duration:0.5}}
            variants={{hidden : { opacity : 0, x:-50}, 
            visible:{opacity: 1, x:0}
            }}
                >
                    <h1 className="basis-3/5 font-montserrar text-3xl font-bold"></h1>
                    <HText>MORE THAN JUST GYM .</HText>
                    <p className="my-5 text-sm">
                         Our gym is not just a place to work out — it's a supportive community where people come together to grow stronger, both physically and mentally. With state-of-the-art equipment, expert coaches, and motivating group classes, we help you achieve your fitness goals while having fun. Whether you're a beginner or a pro, you're welcome here.
 
                    </p>
                </motion.div>


                {/* BENEFITS */}
                <motion.div className="md:flex items-center justify-between gap-8 md:flex"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                variants={container}
                >
                    {benefits.map((benefit: BenefitType)=> (
                        <Benefit
                        key={benefit.title}
                        icon={benefit.icon}
                        title={benefit.title}
                        description={benefit.description}
                        setSelectedPage={setSelectedPage}
                        />
                    ))}
                </motion.div>

                    {/*  GRAPHICS AND DESCRIPTION */}
                    <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                        { /*GRAPHICS */}
                        <img 
                        className="mx-auto"
                        alt="benefifits-page-graphic"
                        src={BenefitsPageGraphic}
                         />

                        { /* DESCRIPTION  */}
                        <div>
                            { /*  TITLE */}
                            <div className="relative">
                                <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                                    <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{once:true ,amount: 0.5}}
                                    transition={{duration:0.5}}
                                    variants={{hidden : { opacity : 0, x:50}, 
                                    visible:{opacity: 1, x:0}
                                    }}>
                                        <HText>
                                            MILLIONS OF HAPPY MEMBERS GETTING {" "}
                                            <span className="text-primary-500">FIT </span>
                                        </HText>
                                    </motion.div>

                                </div>

                            </div>



                            { /*  DESCRIPT */}
                            <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once:true ,amount: 0.5}}
                            transition={{delay:0.2,duration:0.5}}
                            variants={{hidden : { opacity : 0, x:-50}, 
                            visible:{opacity: 1, x:0}
                            }}>
                                <p className="my-5">
                                      Every day, our members transform their lives by staying consistent and enjoying every workout. We provide an environment where motivation and community thrive together.

                                </p>
                                <p className="mb-5">
                                      From weight training to yoga, we offer a wide range of activities that suit every fitness goal. Join the movement and be part of something powerful.

                                </p>

                            </motion.div>


                            { /*  BUTTON*/}
                            <div className="relative mt-16">
                                <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                                    <ActionButton setSelectedPage={setSelectedPage}>

                                        Join Now
                                    </ActionButton>

                                </div>

                            </div>

                        </div>
                    </div>
        </motion.div>
        



    </section>
  )
    
  
}

export default Benefits