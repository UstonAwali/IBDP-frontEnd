import React from 'react'
import CardStory from '../components/Fragments/CardStory'
import stok from '../assets/img/stok.jpg'
import Layout from '../components/Layouts/Layout'
import note from '../assets/img/note.png'

const StokPage = () => {
  return (
    <Layout>
      <div className="mt-20 bg-red-200 m-10 rounded-2xl p-10">
        <div className="container mx-auto grid grid-cols-12 gap-10 w-full py-10">
          <div className="col-span-4 hidden md:flex flex-col justify-center items-center">
            <img src={stok} alt="donor" />
          </div>
          <div className="col-span-12 md:col-span-8 md:p-15 p-10 justify-center w-full h-full align-middle">
            <h1 className="text-justify text-black text-3xl font-bold mt-5" >Stok Darah Siap Pakai</h1>
            <p className="text-justify text-black text-lg mt-5">
            IBDP memiliki berbagai golongan darah dan komponen darah untuk memenuhi kebutuhan transfusi beragam pasien. Setiap sumbangan memiliki potensi untuk menyelamatkan nyawa. Stok darah siap pakai IBDP memastikan respons cepat dalam situasi darurat. IBDP siap mendukung prosedur medis, perawatan trauma, dan keadaan mendesak lainnya.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-12 gap-10 w-max py-20">
        <div className="col-span-12 border border-solid border-gray-300 rounded-2xl p-10">
          <div className="flex gap-52">
            <div className="flex flex-col justify-start gap-3">
              <h3 className="font-bold text-xl">Golongan Darah A+</h3>
              <p className="text-lg font-normal">
                Jumlah kantong darah yang tersedia untuk golongan darah A+
              </p>
            </div>
            <div className="flex flex-col justify-end">
								<div className="h-32 w-24 rounded-lg border border-gray-300 border-solid flex flex-col justify-center items-center gap-2">
									<span className="font-bold text-3xl align-top">5</span>
                  <img src={note} width={40} height={30} alt="cara-1" />
								</div>
							</div>
          </div>
        </div>
        <div className="col-span-12 border border-solid border-gray-300 rounded-2xl p-10">
          <div className="flex gap-52">
            <div className="flex flex-col justify-start gap-3">
              <h3 className="font-bold text-xl">Golongan Darah A+</h3>
              <p className="text-lg font-normal">
                Jumlah kantong darah yang tersedia untuk golongan darah A+
              </p>
            </div>
            <div className="flex flex-col justify-end">
								<div className="h-32 w-24 rounded-lg border border-gray-300 border-solid flex flex-col justify-center items-center gap-2">
									<span className="font-bold text-3xl align-top">5</span>
                  <img src={note} width={40} height={30} alt="cara-1" />
								</div>
							</div>
          </div>
        </div>
        <div className="col-span-12 border border-solid border-gray-300 rounded-2xl p-10">
          <div className="flex gap-52">
            <div className="flex flex-col justify-start gap-3">
              <h3 className="font-bold text-xl">Golongan Darah A+</h3>
              <p className="text-lg font-normal">
                Jumlah kantong darah yang tersedia untuk golongan darah A+
              </p>
            </div>
            <div className="flex flex-col justify-end">
								<div className="h-32 w-24 rounded-lg border border-gray-300 border-solid flex flex-col justify-center items-center gap-2">
									<span className="font-bold text-3xl align-top">5</span>
                  <img src={note} width={40} height={30} alt="cara-1" />
								</div>
							</div>
          </div>
        </div>
        </div>
    </Layout>
  )
}

export default StokPage