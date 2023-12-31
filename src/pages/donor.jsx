import React from 'react'
import Layout from '../components/Layouts/Layout'
import gambar from '../assets/img/formdonor.jpg'
import FormDonor from '../components/Fragments/FormDonor'

const DonorPage = () => {
    return (
        <>
            <Layout>
                <div className="mt-20 bg-red-200 m-10 rounded-2xl p-10">
                    <div className="container mx-auto grid grid-cols-12 gap-10 w-full py-10">
                        <div className="col-span-4 hidden md:flex flex-col justify-center items-center">
                            <img src={gambar} alt="donor" />
                        </div>
                        <div className="col-span-12 md:col-span-8 md:p-15 p-10 justify-center w-full h-full align-middle">
                            <h1 className="text-justify text-black text-3xl font-bold mt-5" >Form Donor Darah</h1>
                            <p className="text-justify text-black text-lg mt-5">
                            Selamat datang di halaman Form Donor Darah IBDP, di mana setiap entri menjadi langkah penting dalam menyelamatkan nyawa. Mengisi formulir donor darah adalah cara cepat dan sederhana untuk bergabung dalam misi kemanusiaan ini. IBDP memberikan perhatian khusus untuk memastikan pengalaman donor Anda nyaman dan efisien.
                            
                            </p>
                        </div>
                    </div>
                </div>
                        <div className='flex justify-center items-center align-middle m-10'>
                            <div className='flex justify-center p-10 w-full max-w-2xl border-solid border border-red-500 rounded-lg'>
                                <FormDonor />
                            </div>
                        </div>
            </Layout>
        </>
    )
}

export default DonorPage