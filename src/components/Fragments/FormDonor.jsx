import React from 'react'
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Select,
  Option,
} from "@material-tailwind/react";
import InputForm from '../Elements/Input';
import { Link } from 'react-router-dom';
import CustomButton from '../Elements/Button/CostumButton';
const FormDonor = () => {
  return (
    <Card color="transparent" shadow={false} >
      <div className='flex justify-center'>
        <Typography variant="h4" color="blue-gray">
          DATA PENDONOR
        </Typography>
      </div>
      <form className="mt-8 mb-2 w-80 max-w-screen-2xl sm:w-96">
        <div className="flex flex-col gap-2">
          <InputForm label="Nama Pengguna" variant="outlined" type="email" />
          <InputForm label="Kata Sandi" variant="outlined" type="password" />
          <InputForm label="Nama Pengguna" variant="outlined" type="email" />
          <InputForm label="Kata Sandi" variant="outlined" type="password" />
          <div className="flex flex-row gap-2">
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-start font-normal"
                >
                  Laki-Laki
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  Perempuan
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
          </div>
          <InputForm label="Kata Sandi" variant="outlined" type="password" />
          <InputForm variant="outlined" type="date" />
          <div className='mb-4'>
            <Select label="Select Version">
              <Option>Material Tailwind HTML</Option>
              <Option>Material Tailwind React</Option>
              <Option>Material Tailwind Vue</Option>
              <Option>Material Tailwind Angular</Option>
              <Option>Material Tailwind Svelte</Option>
            </Select>
          </div>
          <InputForm label="Kata Sandi" variant="outlined" type="password" />
          <div className="flex flex-row gap-2">
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-start font-normal"
                >
                  Laki-Laki
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  Perempuan
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
          </div>
          <div className='mb-4'>
            <Select label="Select Version">
              <Option>Material Tailwind HTML</Option>
              <Option>Material Tailwind React</Option>
              <Option>Material Tailwind Vue</Option>
              <Option>Material Tailwind Angular</Option>
              <Option>Material Tailwind Svelte</Option>
            </Select>
          </div>
          <div className='mb-4'>
            <Select label="Select Version">
              <Option>Material Tailwind HTML</Option>
              <Option>Material Tailwind React</Option>
              <Option>Material Tailwind Vue</Option>
              <Option>Material Tailwind Angular</Option>
              <Option>Material Tailwind Svelte</Option>
            </Select>
          </div>
          <InputForm label="Kata Sandi" variant="outlined" type="password" />
        </div>

        <Link to="/login" >
          <CustomButton variant="filled" title="Kirim Fomulir" type="lg" />
        </Link>
        <Checkbox
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-start font-normal"
            >
              Valid
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />
      </form>
    </Card>
  );
}

export default FormDonor