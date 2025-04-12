import { FaFacebook, FaWhatsapp, FaGithub, FaLinkedinIn, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa"

const SocialsSection = () => {
    const openLink = (link: string) => {
        window.open(link, "_blank");
      };
    return <div className=" fixed p-5 bg-shade/25 backdrop-blur-md lg:bg-shade w-full lg:w-auto lg:top-1/2 bottom-0 lg:bottom-auto left-0 lg:left-11 transform lg:-translate-x-1/2 lg:-translate-y-1/2 z-50 lg:rounded-xl">
    <div className="flex flex-row lg:flex-col justify-around lg:justify-center items-center gap-5">

      <FaFacebook
        className="text-2xl text-white cursor-pointer hover:text-primary transition-all"
        onClick={() =>
          openLink("https://www.facebook.com/dany.wizzy.7")
        }
      />
      <FaWhatsapp
        className="text-2xl text-white cursor-pointer hover:text-primary transition-all"

        onClick={() =>
          openLink("https://wa.me/07043194111")
        }
      />
      <FaGithub
        className="text-2xl text-white cursor-pointer hover:text-primary transition-all"
        onClick={() =>
          openLink("https://github.com/DANIEL-EKWERE")
        }
      />
      <FaLinkedinIn
        className="text-2xl text-white cursor-pointer hover:text-primary transition-all"
        onClick={() =>
          openLink("https://www.linkedin.com/in/danielekwere/")
        }
      />
      <FaTwitter
        className="text-2xl text-white cursor-pointer hover:text-primary transition-all"
        onClick={() => openLink("https://x.com/hisdaniel_")}
      />
      <FaYoutube
        className="text-2xl text-white cursor-pointer hover:text-primary transition-all"
        onClick={() =>
          openLink("https://www.youtube.com/@daniel_ekwere")
        }
      />
      <FaInstagram
        className="text-2xl text-white cursor-pointer hover:text-primary transition-all"
        onClick={() =>
          openLink("https://www.instagram.com/ekweredaniel31/")
        }
      />
    </div>
  </div>
}

export default SocialsSection
