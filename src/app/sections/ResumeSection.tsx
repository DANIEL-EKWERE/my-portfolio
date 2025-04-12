import Link from "next/link"

const ResumeSection = () => {
    return <section id="resume-section" className="container-wrapper flex justify-between items-center py-20 flex-col gap-2">

        <h1 className="font-freeman text-6xl">Resume</h1>
        <p className="text-greyColor text-lg text-center lg:text-justify">Embrace the journey, cherish the moments, and create your own path.</p>
        <div className="flex w-full flex-wrap justify-center gap-2 flex-col lg:flex-row">
            <div className="lg:w-[45%] bg-shade p-10">
                <span className="text-primary text-3xl font-freeman font-bold">2024-Date</span>
                <h2 className="text-3xl font-roboto">Flutter Developer</h2>
                <span className="position">NetServe Innovation</span>
                <p className="mt-4">Lead flutter Developer on NS Vendor, and innovative E-commerce app for your online purchases.</p>
            </div>
            <div className="lg:w-[45%] bg-shade p-10">
                <span className="text-primary text-3xl font-freeman font-bold">2024-2025</span>
                <h2 className="text-3xl font-roboto">Software Developer</h2>
                <span className="position">JEROPAY</span>
                <p className="mt-4">Designed, implemented, built, and deployed a vtu mobile/web/telegram app from start to finish</p>
            </div>
            <div className="lg:w-[45%] bg-shade p-10">
                <span className="text-primary text-3xl font-freeman font-bold">2023-2024</span>
                <h2 className="text-3xl font-roboto">IT internt <span className="text-sm">(Part-time)</span> </h2>
                <span className="position">mymedicalcarelife</span>
                <p className="mt-4">Collaborated with a dedicated team to innovate and designed a cutting-edge medical assistant application, driving forward user experience and technological advancement in the medical industry.</p>
            </div>
            <div className="lg:w-[45%] bg-shade p-10">
                <span className="text-primary text-3xl font-freeman font-bold">2023-2024</span>
                <h2 className="text-3xl font-roboto">Backend Developer<span className="text-sm">(Part-time)</span></h2>
                <span className="position">vgslogistics</span>
                <p className="mt-4">Collaborated in the development of a logistics management system, enhancing operational efficiency and streamlining processes through innovative backend solutions.</p>
            </div>
        </div>
        {/* https://drive.google.com/file/d/1x_6XfDBoeRIkUlGGuVyZGrDo1_tuZmzG/view?usp=sharing */}
        
        <Link href={"https://drive.google.com/file/d/1st5MeqXIEbGWqhI7DiE1VUkBhjhXH-IA/view?usp=sharing"} className="uppercase py-3 px-5 bg-shade hover:bg-primary/70 transition-all ease-in font-freeman rounded-full" >Download CV</Link>
    </section>
}

export default ResumeSection