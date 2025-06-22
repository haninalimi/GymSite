import HText from "@/shared/HText"
import type { BenefitType } from "@/shared/types";
import Benefit from "@/scenes/benefits/Benefit";

import { SelectedPage } from "@/shared/types";
import {
     HomeModernIcon , 
     UserGroupIcon, 
     AcademicCapIcon} from "@heroicons/react/24/solid"
import { motion } from "framer-motion"
import { section } from "framer-motion/client"


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
                <div className="md:my-5 md:w-3/5">
                    <h1 className="basis-3/5 font-montserrar text-3xl font-bold"></h1>
                    <HText>MORE THAN JUST GYM .</HText>
                    <p className="my-5 text-sm">
                         Our gym is not just a place to work out — it's a supportive community where people come together to grow stronger, both physically and mentally. With state-of-the-art equipment, expert coaches, and motivating group classes, we help you achieve your fitness goals while having fun. Whether you're a beginner or a pro, you're welcome here.
 
                    </p>
                </div>


                {/* BENEFITS */}
                <div className="md:flex items-center justify-between gap-8 md:flex">
                    {benefits.map((benefit: BenefitType)=> (
                        <Benefit
                        key={benefit.title}
                        icon={benefit.icon}
                        title={benefit.title}
                        description={benefit.description}
                        setSelectedPage={setSelectedPage}
                        />
                    ))}
                </div>


        </motion.div>
        



    </section>
  )
    
  
}

export default Benefits