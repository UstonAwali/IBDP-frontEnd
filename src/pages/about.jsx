import Layout from "../components/Layouts/Layout";
import teamData from "./TeamData";
import AboutCard from "../components/Elements/Card/AboutCard"

const AboutUs = () => {
    return (
        <Layout>
            <div className="flex flex-col justify-center items-center max-w-screen-md mx-auto px-8 mt-8">
            <p className="font-bold text-2xl">Tentang Kami</p>
            <div className="mx-auto text-center">
                <p>
                Integrated Blood Donation Platfrom (IBDP) adalah sebuah wadah inovatif yang didedikasikan untuk mempermudah masyarakat dalam berkontribusi pada kegiatan donor darah. Kami menyediakan platform yang komprehensif untuk membantu Anda mengetahui jadwal, lokasi, dan syarat-syarat donor darah dengan mudah, sembari memberikan pengalaman berharga melalui beragam konten edukasi. IBDP percaya bahwa setiap tetes darah memiliki kekuatan untuk menyelamatkan hidup. Serta bertujuan menciptakan pengalaman donor darah yang positif dan berdaya guna. Dengan akses mudah ke informasi, formulir donor yang praktis, dan konten edukatif yang bermakna, kami berharap dapat membangun kesadaran masyarakat tentang urgensi dan dampak positif dari donor darah. Bergabunglah dengan kami di IBDP dan jadilah bagian dari gerakan yang memberikan kehidupan melalui cinta dan kepedulian.
                </p>
            </div>
            </div>
            <div className="flex flex-col justify-center items-center mx-auto px-8 mt-8">
                <p className="font-bold text-2xl ">Tentang Pengembang </p>
                <div className="flex flex-wrap gap-8">
                {teamData.map((member) => (
                <AboutCard
                    key={member.id}
                    image={member.image}
                    name={member.name}
                    position={member.position}
                    facebookLink={member.facebookLink}
                    instagramLink={member.instagramLink}
                    whatsappLink={member.whatsappLink}
                />
                ))}
                </div>
            </div>
            <div className="flex flex-col justify-center items-center mx-auto p-8 mt-8">
            <p className="font-bold text-2xl ">Mitra Kerja</p>
            <div className="flex">
                <img src="" alt="" className="pt-5" />
                <img src="" alt="" className="pt-5 h-40 w-40" />
            </div>
            
            </div>
        </Layout>
    );
};

export default AboutUs;
