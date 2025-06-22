import Logo from "@/assets/Logo (1).png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="mx-auto w-5/6 flex flex-col gap-16 md:flex-row md:justify-between">
        
        {/* LOGO + DESCRIPTION */}
        <div className="md:basis-1/2">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Elevate your fitness journey with us. We're not just a gym, we're a
            community committed to helping you grow stronger — physically and mentally.
          </p>
          <p>© {new Date().getFullYear()} Evogym. All Rights Reserved.</p>
        </div>

        {/* USEFUL LINKS */}
        <div className="md:basis-1/4">
          <h4 className="font-bold">Useful Links</h4>
          <p className="my-2 hover:text-primary-500 transition">Home</p>
          <p className="my-2 hover:text-primary-500 transition">Classes</p>
          <p className="my-2 hover:text-primary-500 transition">Benefits</p>
          <p className="my-2 hover:text-primary-500 transition">Contact</p>
        </div>

        {/* CONTACT */}
        <div className="md:basis-1/4">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-2">Email: contact@evogym.com</p>
          <p className="my-2">Phone: +216 99 999 999</p>
          <p className="my-2">Location: 123 Fitness St, Tunis</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
