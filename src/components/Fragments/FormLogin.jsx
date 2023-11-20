import React from 'react'
import InputForm from '../Elements/Input'
import CustomButton from '../Elements/Button/CostumButton'
import { Link } from 'react-router-dom'


const FormLogin = () => {
  return (
    <form action="">
      <InputForm label="Nama Pengguna" variant="outlined" title="Nama Pengguna" type="email" />
      <InputForm label="Kata Sandi" variant="outlined" title="Kata Sandi" type="password" />
      <div className='flex justify-center'>
        <Link to="/" className='w-full'>
          <CustomButton variant="filled" size="sm" title="Login" />
        </Link>
      </div>
    </form>
  )
}

export default FormLogin