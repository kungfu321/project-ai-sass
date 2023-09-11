import Logo from "../logo";

const Footer = () => {
  return (
    <footer className="border-t w-full p-4">
      <div className="max-w-5xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between">
        <Logo />
        <div className="text-sm mt-4 lg:mt-0">
          © Copyright 2023, Brainfast
        </div>
      </div>
    </footer>
  )
}

export default Footer;
