"use client";

import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle, Modal, ModalBody, ModalFooter, ModalHeader, Checkbox, Label, TextInput, Select } from "flowbite-react";

import logo from '../assets/imagesource/logo.png';
import { CiLogout, CiPlay1 } from "react-icons/ci";

import registerStepone from "../assets/imagesource/register_stepone.png";
import child_register_img from "../assets/imagesource/child_register_img.png";

import { useState } from "react";

import { Poppins } from 'next/font/google';

import { BiSolidDashboard } from "react-icons/bi";
import { LuFolderArchive } from "react-icons/lu";
import { MdOutlineAssignment } from "react-icons/md";
import { logout } from '../Reducer/AuthSlice';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // specify desired weights
  display: 'swap',
});

const Sidebar = () => {
  const { pathname } = location;
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [openChildRegisterModal, setOpenChildRegisterModal] = useState(false);
  const dispatch = useDispatch()
  const router = useRouter();
  const handleLogout = () => {
    try {

      // Dispatch logout action
      dispatch(logout());

      // Navigate to home page
      router.push("/");

      // Force reload to ensure clean state
      // setTimeout(() => {
      //   window.location.reload();
      // }, 100);
    } catch (error) {
      console.error("Logout error:", error);
      // Fallback: still navigate to home
      router.push("/");
    }
  }

  return (
    <aside
      style={{ zIndex: 1 }}
      className={`absolute left-0 top-[50px] z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden rounded-[10px] bg-white duration-300 ease-linear lg:static lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="px-6 py-5 lg:py-6">
        <Link className='flex justify-center items-center' href="/" passHref>
          <Image src={logo} alt="logo" />
        </Link>

        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="sidebar_menu no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear overscroll-none relative h-full">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-2">
          {/* <!-- Menu Group --> */}
          <div>
            <h3 className="mb-2 ml-4 text-sm font-medium text-[#B7B7B7]">
              MAIN MENU
            </h3>

            <ul className="mb-6 flex flex-col gap-1.5 mx-4">
              {/* <!-- Menu Item Dashboard --> */}
              <li>
                <Link href="/dashboard"
                  className={`group relative flex items-center gap-2 rounded-sm py-3 px-4 font-normal text-sm text-gray-600 duration-300 ease-in-out hover:bg-graydark ${pathname.includes('dashboard') &&
                    'bg-graydark dark:bg-meta-4'
                    }`}
                  passHref>
                  <BiSolidDashboard className='text-xl' />
                  Dashboard
                </Link>
              </li>
              {/* <!-- Menu Item Dashboard --> */}

              {/* <!-- Menu Item Calendar --> */}
              <li>
                <Link href="/my-courses"
                  className={`group relative flex items-center gap-2 rounded-sm py-3 px-4 font-normal text-sm text-gray-600 duration-300 ease-in-out hover:bg-graydark ${pathname.includes('my-courses') &&
                    'bg-graydark dark:bg-meta-4'
                    }`}
                  passHref>
                  <LuFolderArchive className='text-xl' />
                  My Courses
                </Link>
              </li>
              {/* <!-- Menu Item Calendar --> */}

              {/* <!-- Menu Item Offer Request --> */}
              <li>
                <Link href="/assignment"
                  className={`group relative flex items-center gap-2 rounded-sm py-3 px-4 font-normal text-sm text-gray-600 duration-300 ease-in-out hover:bg-graydark ${pathname.includes('assignment') && 'bg-graydark dark:bg-meta-4'
                    }`}
                  passHref>
                  <MdOutlineAssignment className='text-xl' />
                  Assignment
                </Link>
              </li>
              <li>
                <Link href="/play"
                  className={`group relative flex items-center gap-2 rounded-sm py-3 px-4 font-normal text-sm text-gray-600 duration-300 ease-in-out hover:bg-graydark ${pathname.includes('play') && 'bg-graydark dark:bg-meta-4'
                    }`}
                  passHref>
                  <CiPlay1 className='text-xl' />
                  Play
                </Link>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className={`group relative flex items-center gap-2 rounded-sm py-3 px-4 font-normal text-sm text-gray-600 duration-300 ease-in-out hover:bg-graydark  bg-graydark dark:bg-meta-4
                    }`}
                >
                  <CiLogout className='text-xl' />
                  Logout
                </button>
              </li>
              {/* <!-- Menu Item Offer Request --> */}


            </ul>
          </div>

        </nav>
        {/* <!-- Sidebar Menu --> */}

        <div className='absolute left-[47px] bottom-[40px]'>
          <button onClick={() => setOpenChildRegisterModal(true)} className='border border-[#34A0A4] rounded-[5px] bg-white hover:bg-[#34A0A4] text-[#34A0A4] hover:text-white text-[14px] leading-[20px] font-medium text-center py-3 px-6 cursor-pointer'>Create Child Account</button>
        </div>
      </div>
      {/* Child registration form start here */}
      <>
        <Modal size="6xl" show={openChildRegisterModal} onClose={() => setOpenChildRegisterModal(false)}>
          <ModalHeader className='border-none pb-0 absolute right-10 top-12 bg-transparent'>&nbsp;</ModalHeader>
          <ModalBody className='bg-white p-0'>
            <div className="flex">
              <div className='w-6/12 flex justify-center items-center'>
                <div className='py-10 px-16'>
                  <h2 className='text-[#000000] text-[30px] leading-[35px] font-semibold pb-4'>Register child with C4Chess</h2>
                  <p className='text-[#9D9898] text-sm pb-4'>Sign up to unlock expert-led chess lessons, track your progress, and elevate your game — one move at a time.</p>
                  <div className='form_area'>
                    <form className="flex max-w-md flex-col gap-0">
                      <div className='flex gap-4'>
                        <div className='w-full mb-2'>
                          <div className="mb-1 block">
                            <Label>First Name</Label>
                          </div>
                          <TextInput type="text" placeholder="Enter First Name" required />
                        </div>
                        <div className='w-full mb-2'>
                          <div className="mb-1 block">
                            <Label>Last Name</Label>
                          </div>
                          <TextInput type="text" placeholder="Enter Last Name" required />
                        </div>
                      </div>
                      <div className='mb-2'>
                        <div className="mb-1 block">
                          <Label>Email Address</Label>
                        </div>
                        <TextInput type="email" placeholder="Enter your Email Id" required />
                      </div>
                      <div className='mb-2'>
                        <div className="mb-1 block">
                          <Label>Username</Label>
                        </div>
                        <TextInput type="text" placeholder="Enter your Username" required />
                      </div>
                      <div className='mb-2'>
                        <div className="mb-1 block">
                          <Label>Enter your Password</Label>
                        </div>
                        <TextInput type="password" placeholder='Type your password' required />
                      </div>
                      <div className='mb-2'>
                        <div className="mb-1 block">
                          <Label>Confirm your Password</Label>
                        </div>
                        <TextInput type="password" placeholder='Type your password' required />
                      </div>
                      <Button type="submit" className='mt-2'>Register</Button>
                    </form>
                  </div>
                </div>
              </div>
              <div className='w-6/12'>
                <Image src={child_register_img} alt='child_register_img' />
              </div>
            </div>
          </ModalBody>
        </Modal>
      </>
      {/* Child registration form ends here */}
    </aside>
  )
}

export default Sidebar