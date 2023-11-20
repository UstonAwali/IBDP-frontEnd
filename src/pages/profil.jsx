import React, { useState } from 'react';
import Layout from '../components/Layouts/Layout';
import defaultimg from '../assets/img/imgDefault.svg';
import { Link, Route, Switch, useHistory } from 'react-router-dom';

const ProfilPage = () => {
  const history = useHistory();
  const [activeMenu, setActiveMenu] = useState(null);

  const userProfile = {
    username: 'JohnDoe',
    email: 'johndoe@example.com',
    phoneNumber: '123-456-7890',
    gender: 'Male',
    nik: '1234567890123456',
    address: '123 Main Street, City',
  };

  const menu = [
    {
      id: 1,
      title: 'Akun Saya',
      link: 'akunsaya',
    },
    {
      id: 2,
      title: 'Ganti Password',
      link: 'gantipassword',
    },
    {
      id: 3,
      title: 'Logout',
      link: 'logout',
    },
  ];

  const handleMenuClick = (item) => {
    setActiveMenu(item);
    history.push(`/${item.link}`);
  };

  return (
    <Layout>
      <div className="mt-20 m-10 rounded-2xl">
        <div className="container mx-auto grid grid-cols-12  w-full py-10">
          <div className="col-span-6 hidden md:flex flex-col justify-center items-center">
            <img src={defaultimg} alt="" className="object-cover  h-60" />
          </div>
          <div className="col-span-12 md:col-span-6 md:p-15 p-10 justify-center w-full h-full align-middle">
            <p className="text-justify text-black text-lg font-bold mt-5">
              “Setiap tetes darah yang kamu berikan adalah tanda cinta dan kepedulianmu terhadap sesama. Mari berbagi kebaikan dengan donor darah dan berbagi pengalaman mu”
            </p>
          </div>
        </div>
      </div>

      <div className="mt-20 m-10 bg-red-100 rounded-2xl">
        <div className="container mx-auto grid grid-cols-12  w-full py-10">
          <div className="col-span-3 hidden md:flex flex-col mx-8">
            {menu.map((item) => (
              <div key={item.id}>
                <button
                  className={`font-bold hover:underline focus:outline-none ${
                    activeMenu === item ? 'text-blue-500' : ''
                  }`}
                  onClick={() => handleMenuClick(item)}
                >
                  {item.title}
                </button>
                <hr className="my-2" />
              </div>
            ))}
          </div>
          <div className="col-span-12 md:col-span-6 md:p-15 w-full h-full ">
            <Switch>
              <Route path="/akunsaya">
                <div className="flex flex-col">
                  <div className="mb-2">
                    <h2 className="text-2xl font-bold mb-4">{userProfile.username}</h2>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex justify-between">
                      <p>Email:</p>
                      <p>{userProfile.email}</p>
                    </div>
                    <hr className="my-2" />

                    <div className="flex justify-between">
                      <p>No HP:</p>
                      <p>{userProfile.phoneNumber}</p>
                    </div>
                    <hr className="my-2" />

                    <div className="flex justify-between">
                      <p>Jenis Kelamin:</p>
                      <p>{userProfile.gender}</p>
                    </div>
                    <hr className="my-2" />

                    <div className="flex justify-between">
                      <p>NIK:</p>
                      <p>{userProfile.nik}</p>
                    </div>
                    <hr className="my-2" />

                    <div className="flex justify-between">
                      <p>Alamat:</p>
                      <p>{userProfile.address}</p>
                    </div>
                    <hr className="my-2" />
                  </div>
                </div>
              </Route>
              <Route path="/gantipassword">
                <p>This is the change password form.</p>
              </Route>
              <Route path="/logout">
                {() => {
                  history.push('/login');
                  return null;
                }}
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProfilPage;
