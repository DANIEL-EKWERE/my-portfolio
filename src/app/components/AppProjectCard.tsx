
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaGithub, FaShare } from "react-icons/fa";
interface AppProjectCardProps {
    id: string,
    image: string,
    title: string,
    description: string,
    stack: string[],
    github: string | null,
    liveLink: string | null,
    isTop: boolean,
}
const AppProjectCard = ({ id, image, title, description, stack, github, isTop, liveLink }: AppProjectCardProps) => {
    const openLink = (link: string) => {
        window.open(link, "_blank");
    };
    return <motion.div

        initial={{ opacity: 0, scale: .8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.25 }}
        transition={{ duration: 0.5 }}
        className="lg:w-[20%] mb-4 lg:mb-0 w-full flex justify-between  flex-col items-center cursor-pointer transition-all hover:shadow-lg p-2 rounded-xl"
    >
        <Image
            src={image}
            width={500}
            height={500}
            alt="Onboarding screens Application"
            className="cursor-default w-full md:h-[70vh] h-[50vh] lg:h-[45vh] object-contain"
        />
        <div className="w-full flex flex-col py-2  px-2 justify-center items-start gap-y-2" >
            <h3 className="text-xl lg:text-2xl font-freeman text-primary">
                {title}
            </h3>

            <div className="flex justify-between w-full items-center">
                <div className="flex gap-2 flex-wrap">
                    {stack.map((tech, index) => (
                        <div key={index} className="bg-shade py-1 px-3 rounded-full cursor-pointer hover:bg-primary/70 text-sm">{tech}</div>
                    ))}
                </div>
                <div className="flex gap-4">
                    {github && (
                        <FaGithub
                            className="text-xl cursor-pointer hover:text-primary"
                            onClick={() =>
                                openLink(
                                    github
                                )
                            }
                        />
                    )}

                    {liveLink && (
                        <FaShare
                            className="text-xl cursor-pointer hover:text-primary"
                            onClick={() =>
                                openLink(
                                    liveLink
                                )
                            }
                        />
                    )}

                </div>
            </div>
        </div>
        {(<Link href={`/portfolio/project/${id}`} className="w-full text-center py-3 px-5 bg-shade hover:bg-primary/70 transition-all ease-in font-freeman rounded-lg"
        
        >Read More </Link>)}
    </motion.div>
}
export default AppProjectCard