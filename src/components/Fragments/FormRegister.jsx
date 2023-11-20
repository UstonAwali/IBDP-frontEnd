import React from 'react'
import InputForm from '../Elements/Input'
import CustomButton from '../Elements/Button/CostumButton'

const FormRegister = () => {
    return (
        <form action="">
            <InputForm
                label='Nama'
                type='name'
                title='Nama'
            />
            <InputForm
                label='Email'
                type='email'
                title='Email'
            />
            <InputForm
                label='Nomor Telepon'
                type='number'
                title='Nomor Telepon'
            />
            <InputForm
                label='Nama Pengguna'
                type='name'
                title='Nama Pengguna'
            />
            <InputForm
                label='Kata Sandi'
                type='password'
                title='Kata Sandi'
            />
            <CustomButton type="filled" title="Register" size="sm"/>
        </form>

    )
}

export default FormRegister