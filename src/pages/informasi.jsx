import React, { useState } from 'react'
import Layout from '../components/Layouts/Layout'
import informasi from '../assets/img/informasi.svg'
import informasi1 from '../assets/img/informasi1.svg'
import informasi2 from '../assets/img/informasi2.svg'
import informasi3 from '../assets/img/informasi3.svg'
import informasi4 from '../assets/img/informasi4.svg'
import CardStory from '../components/Fragments/CardStory'
import garis from '../assets/img/line.png'
import SearchBar from '../components/Elements/Search/search'
import { Link } from 'react-router-dom'
import CustomButton from '../components/Elements/Button/CostumButton'

const storyList = [{
    id: 1,
    title: 'Keterbatasan Informasi Jadi Hambatan Orang untuk Donor Darah',
    image: informasi1,
    alt: 'informasi',
    desc: 'Keterbatasan informasi membuat jumlah orang yang mendonorkan darah semakin minim. Padahal, kebutuhan pasokan darah untuk menyelamatkan nyawa orang lain sangat tinggi.'
},
{
    id: 2,
    title: 'Donor darah: membantu sesama dan menyehatkan diri',
    image: informasi2,
    alt: 'informasi',
    desc: 'Donor darah adalah kegiatan yang positif dan mulia dan kita bisa menolong sesama. Donor darah bisa membantu mereka yang membutuhkan darah dalam situasi mendesak. Karena seringkali saat pasien dalam kondisi kritis, pihak PMI atau rumah sakit tak memiliki stok darah yang cukup.'
},
{

    id: 3,
    title: 'Donor Darah - Risiko Penyakit Jantung',
    image: informasi3,
    alt: 'informasi',
    desc: 'Dengan mendonorkan darah secara rutin, dikatakan bahwa banyak manfaat yang didapat dari segi kesehatan. Salah satunya adalah dalam hal menurunkan risiko terkena penyakit jantung.'
},
{

    id: 4,
    title: 'Donor Darah | Apakah Habis Donor Darah Boleh Lari?',
    image: informasi4,
    alt: 'informasi',
    desc: 'Setelah donor darah, disarankan untuk menghindari aktivitas fisik yang berlebihan atau terlalu intens, termasuk lari. Untuk menjaga kesehatan dan memastikan pemulihan yang optimal, disarankan untuk memberikan tubuh waktu untuk beristirahat setelah donor darah.'
},
]

const PageInformasi = () => {
    const [filteredStories, setFilteredStories] = useState(storyList);

    const handleSearch = (searchTerm) => {
        const filtered = storyList.filter((story) =>
          story.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredStories(filtered);
      };
  return (
    <Layout>
      <div className="mt-20 bg-red-200 m-10 rounded-2xl p-10">
        <div className="container mx-auto grid grid-cols-12 gap-10 w-full py-10">
          <div className="col-span-4 hidden md:flex flex-col justify-center ">
            <h1 className="text-justify text-black text-3xl font-bold mt-5" >Artikel Terpopuler</h1>
            <img src={informasi} alt="donor" className="items-center mt-4" />
          </div>
          <div className="col-span-12 md:col-span-8 md:p-15 p-10 justify-center w-full h-full align-middle">
            <p className="text-justify text-black text-lg mt-5">
            Bukan hanya bisa membantu menyelamatkan hidup orang lain, manfaat donor darah juga dapat dirasakan langsung oleh pendonornya. Ingin tahu apa saja manfaatnya? Yuk, simak artikel berikut!
            </p>
          </div>
        </div>
        
      </div>
      <div className=" rounded-2xl mx-10 flex">
        <h3 className="text-justify text-black text-xl font-bold mt-5 mx-5" >Artikel Terbaru</h3>
        <SearchBar onSearch={handleSearch} /> 
      </div>
      <div className="mb-2">            
            <div className="container mx-auto grid grid-cols-12 gap-10 w-full py-20">

                {storyList.map((story) => (
                    <div key={story.id}  className="col-span-4 flex justify-center gap-6 ">
                        <CardStory>
                           <CardStory.Header image={story.image} alt="gambar1" />
                            <CardStory.Body title={story.title} gambar={garis} desc={story.desc} />
                                </CardStory>
                    </div>
                ))}
            </div>
        </div>
    </Layout>
  )
}

export default PageInformasi