import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo (1).png";
import Link from "./link";

type Props = {
    selectedPage: string;
    setSelectedPage: (value: string) => void;
};

const Navbar = ({selectedPage,setSelectedPage}: Props) => {
  const flexBetween = "flex items-center justify-between";

  return (
    <nav>
      {/* Wrapper principal de la navbar */}
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>

            {/* ✅ LEFT SIDE OF THE NAVBAR */}
            <img src={Logo} alt="logo" />

            {/* ✅ RIGHT SIDE OF THE NAVBAR */}
            <div className={`${flexBetween} w-full`}>

              {/* 🔗 contient les liens */}
              <div className={`${flexBetween} gap-8 text-sm`}>
                <Link 
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                />
                <Link page="Benefits"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}/>
                <Link page="Our Classes"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                />
                <Link page="Contact Us"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                />
              </div>

              {/* 🔐 contient Sign In et Become a Member */}
              <div className={`${flexBetween} gap-8`}>
                <p>Sign In</p>
                <button>Become a Member</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
