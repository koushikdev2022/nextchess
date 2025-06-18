"use client";

import React from 'react';
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle, Modal, ModalBody, ModalFooter, ModalHeader, Checkbox, Label, TextInput, Select } from "flowbite-react";
import Link from 'next/link';
import logo from '../assets/imagesource/logo.png';
import loginImg from "../assets/imagesource/login_img.png";
import registerStepone from "../assets/imagesource/register_stepone.png";
import registerSteptwo from "../assets/imagesource/register_steptwo.png";
import Image from 'next/image';

import { useState } from "react";
import Login from '../Auth/Login/Login';
import RegisterStepOne from '../Auth/Register/RegisterStepOne';
import RegisterStepTwo from '../Auth/Register/RegisterStepTwo';



const Header = () => {
  const finalRegisterHandler = () => {
    setOpenRegisterStepTwoModal(true);
    setOpenRegisterStepOneModal(false);
  }

  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openRegisterStepOneModal, setOpenRegisterStepOneModal] = useState(false);
  const [userRegid, setUserRegId] = useState()
  const [openRegisterStepTwoModal, setOpenRegisterStepTwoModal] = useState(false);


  // For mobile menu start here
  // Add state to manage navbar collapse
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  // Function to toggle navbar
  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  // Function to close navbar when menu item is clicked
  const closeNavbar = () => {
    setIsNavbarOpen(false);
  };
  // For mobile menu ends here


  return (
    <div>
      <div className="header_section w-full lg:pb-0 bg-white">
        <div className="max-w-6xl mx-auto pt-6 lg:py-4 px-4 lg:px-0">
          <div className="w-full">
            <div className="header_top lg:flex justify-between items-center">
              <div className="flex items-center justify-between">
                {/* Logo area start here */}
                <div className="mr-2">
                  <Link href="/" passHref>
                    <Image src={logo} alt='logo' />
                  </Link>
                </div>
                {/* Logo area ends here */}

              </div>
              {/* Main menu start here */}
              <div className="menu_section pb-0">
                <div className="main_menu">
                  <Navbar fluid rounded className="bg-transparent pt-0 pb-0">
                    <div className="flex md:order-2 text-black toggle_point">
                       <NavbarToggle onClick={toggleNavbar} />
                    </div>
                    <NavbarCollapse className={isNavbarOpen ? 'block' : 'hidden md:block'}>
                      <li onClick={closeNavbar}>
                        <Link href="/" passHref>
                          Home
                        </Link>
                      </li>
                      <li onClick={closeNavbar}>
                        <Link href="/about" passHref>
                          About
                        </Link>
                      </li>
                      <li onClick={closeNavbar}>
                        <Link href="/courses" passHref>
                          Courses
                        </Link>
                      </li>
                      <li onClick={closeNavbar}>
                        <Link href="/contact" passHref>
                          Contact
                        </Link>
                      </li>
                    </NavbarCollapse>
                  </Navbar>
                </div>
              </div>
              {/* Main menu ends here */}
              {/* Login section start here */}
              <div className="mr-0 lg:mr-0 flex items-center mt-6 lg:mt-0">
                <div className="flex gap-2">
                  <button onClick={() => setOpenLoginModal(true)} className="text-[#52B69A] cursor-pointer bg-white font-medium text-xs lg:text-base rounded-[2px] px-3 py-2 lg:px-8 lg:py-2.5 border-2 border-[#52B69A] hover:bg-[#52B69A] hover:text-white">
                    Log In
                  </button>
                  <button onClick={() => setOpenRegisterStepOneModal(true)} className="text-white bg-[#52B69A] cursor-pointer font-medium text-xs lg:text-base rounded-[2px] px-3 py-2 lg:px-8 lg:py-2.5 border-2 border-[#52B69A] hover:bg-white hover:text-[#52B69A]">
                    Book Demo
                  </button>
                </div>
              </div>
              {/* Login section ends here */}
            </div>
          </div>
          {/* Login popup start here */}
          <>
            {/* <Modal size="6xl" show={openLoginModal} onClose={() => setOpenLoginModal(false)}>
              <ModalHeader className='border-none pb-0 absolute right-10 top-12 bg-transparent'>&nbsp;</ModalHeader>
              <ModalBody className='bg-white p-0'>
                <div className="flex">
                   <div className='w-6/12 flex justify-center items-center'>
                     <div className='py-10 px-20'>
                       <h2 className='text-[#000000] text-[30px] leading-[35px] font-semibold pb-4'>Login at C4Chess</h2>
                       <p className='text-[#9D9898] text-sm pb-4'>Access your dashboard to manage cases, view reports, and stay connected — securely and efficiently.</p>
                       <div className='form_area'>
                          <form className="flex max-w-md flex-col gap-0">
                              <div className='mb-2'>
                                <div className="mb-1 block">
                                  <Label htmlFor="email1">Your Email</Label>
                                </div>
                                <TextInput id="email1" type="email" placeholder="name@flowbite.com" required />
                              </div>
                              <div className='mb-2'>
                                <div className="mb-1 block">
                                  <Label htmlFor="password1">Enter your Password</Label>
                                </div>
                                <TextInput id="password1" type="password" required />
                              </div>
                              <div className="flex items-center justify-between gap-0 mb-8">
                                <div className='flex gap-1 items-center'>
                                  <Checkbox id="remember" />
                                  <p htmlFor="remember" className='text-[#8E8E8E] text-sm'>Remember me</p>
                                </div>
                                <div>
                                  <Link className='text-[#8E8E8E] text-sm' href="" passHref>Forgot Passowrd ?</Link>
                                </div>
                              </div>
                              <Button type="submit">Submit</Button>
                          </form>
                       </div>
                     </div>
                   </div>
                   <div className='w-6/12'>
                     <Image src={loginImg} alt='loginImg' />
                   </div>
                </div>
              </ModalBody>
            </Modal> */}

            {
              openLoginModal && (
                <Login
                  openLoginModal={openLoginModal}
                  setOpenLoginModal={setOpenLoginModal}
                  openRegisterStepOneModal={openRegisterStepOneModal}
                  setOpenRegisterStepOneModal={setOpenRegisterStepOneModal}
                />
              )
            }
          </>
          {/* Login popup ends here */}


          {/* register step one popup start here */}
          <>
            {openRegisterStepOneModal && (
              <RegisterStepOne
                openRegisterStepOneModal={openRegisterStepOneModal}
                setOpenRegisterStepOneModal={setOpenRegisterStepOneModal}
                openRegisterStepTwoModal={openRegisterStepTwoModal}
                setOpenRegisterStepTwoModal={setOpenRegisterStepTwoModal}
                finalRegisterHandler={finalRegisterHandler}
                setUserRegId={setUserRegId}
              />
            )}
          </>
          {/* register step one popup ends here */}

          {/* register step Two popup start here */}
          <>
            {/* <Modal size="6xl" show={openRegisterStepTwoModal} onClose={() => setOpenRegisterStepTwoModal(false)}>
              <ModalHeader className='border-none pb-0 absolute right-10 top-12 bg-transparent'>&nbsp;</ModalHeader>
              <ModalBody className='bg-white p-0'>
                <div className="flex">
                  <div className='w-6/12 flex justify-center items-center'>
                    <div className='py-10 px-20'>
                      <h2 className='text-[#000000] text-[30px] leading-[35px] font-semibold pb-4'>Register with C4Chess</h2>
                      <p className='text-[#9D9898] text-sm pb-4'>Sign up to unlock expert-led chess lessons, track your progress, and elevate your game — one move at a time.</p>
                      <div className='form_area'>
                        <form className="flex max-w-md flex-col gap-0">
                          <div className='mb-2'>
                            <div className="mb-1 block">
                              <Label>Mobile Number</Label>
                            </div>
                            <TextInput type="text" placeholder="Enter  your Mobile Number" required />
                          </div>
                          <div className='mb-2'>
                            <div className="mb-1 block">
                              <Label>Country</Label>
                            </div>
                            <Select id="countries" required>
                              <option>Choose Your Country</option>
                              <option>India</option>
                              <option>Canada</option>
                              <option>France</option>
                              <option>Germany</option>
                            </Select>
                          </div>
                          <div className='flex gap-4'>
                            <div className='w-full mb-2'>
                              <div className="mb-1 block">
                                <Label>State</Label>
                              </div>
                              <Select id="countries" required>
                                <option>Choose Your State</option>
                                <option>West Bengal</option>
                              </Select>
                            </div>
                            <div className='w-full mb-2'>
                              <div className="mb-1 block">
                                <Label>Zip code</Label>
                              </div>
                              <TextInput id="email1" type="text" placeholder="Enter Zip code" required />
                            </div>
                          </div>
                          <div className='mb-2'>
                            <div className="mb-1 block">
                              <Label>Address</Label>
                            </div>
                            <TextInput type="text" placeholder='Enter Your Address' required />
                          </div>
                          <Button type="submit" className='mt-2'>Register</Button>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className='w-6/12'>
                    <Image src={registerSteptwo} alt='registerSteptwo' />
                  </div>
                </div>
              </ModalBody>
            </Modal> */}
            {
              openRegisterStepTwoModal && (
                <RegisterStepTwo
                  openRegisterStepTwoModal={openRegisterStepTwoModal}
                  setOpenRegisterStepTwoModal={setOpenRegisterStepTwoModal}
                  userRegid={userRegid}
                />
              )
            }
          </>
          {/* register step Two popup ends here */}


        </div>
      </div>
    </div>
  )
}

export default Header