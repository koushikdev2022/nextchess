import React from 'react'

import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import Link from 'next/link';

import { BiSolidChess } from "react-icons/bi";
import { BsFileEarmarkPdfFill } from "react-icons/bs";
import { CgMenuLeft } from "react-icons/cg";

const page = () => {
  return (
    <div className='bg-[#FFFFFF] rounded-[10px] py-8 px-6'>
        <h3 className='${Poppins.className} text-black text-2xl font-semibold mb-8'>Assignment Board</h3>
        <div>
            <div className="overflow-x-auto shadow-md">
                <Table hoverable>
                    <TableHead>
                        <TableRow>
                            <TableHeadCell>CHAPTER TITLE</TableHeadCell>
                            <TableHeadCell>DEADLINE</TableHeadCell>
                            <TableHeadCell>COMPLETION DATE</TableHeadCell>
                            <TableHeadCell>ASSIGNMENT ID</TableHeadCell>
                            <TableHeadCell>STATUS</TableHeadCell>
                            <TableHeadCell>ACTION</TableHeadCell>
                        </TableRow>
                    </TableHead>
                    <TableBody className="divide-y">
                        <TableRow className="bg-white">
                            <TableCell className='bg-white text-[#000231] text-[13px] leading-[41px] font-medium flex items-center gap-2'><CgMenuLeft className='text-[#B5E48C] text-2xl' /> Attacking opening Types</TableCell>
                            <TableCell className='bg-white text-[#000231] text-[13px] leading-[41px] font-medium'>10 March, 2025</TableCell>
                            <TableCell className='bg-white text-[#000231] text-[13px] leading-[41px] font-medium'>07 March, 2025</TableCell>
                            <TableCell className='bg-white text-[#000231] text-[13px] leading-[41px] font-medium'>Asssignment#1</TableCell>
                            <TableCell className='bg-white text-[#000231] text-[13px] leading-[41px] font-medium'>
                                <div className='border border-[#00b448] rounded-[5px] bg-[#f2fff7] text-[#00b448] text-[13px] leading-[20px] font-medium text-center py-1.5 px-3'>Success</div>
                            </TableCell>
                            <TableCell className='bg-white text-[#000231] text-[13px] leading-[41px] font-medium'>
                                <div className='flex gap-5'>
                                    <Link className='text-[#34A0A4] hover:text-[#000231] text-[13px] leading-[20px] font-medium flex items-center gap-2' href="/assignment" passHref><BiSolidChess /> Open PGN</Link>
                                    <Link className='text-[#E24242] hover:text-[#000231] text-[13px] leading-[20px] font-medium flex items-center gap-2' href="/assignment" passHref><BsFileEarmarkPdfFill /> Download Pdf</Link>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow className="bg-white">
                            <TableCell className='bg-white text-[#000231] text-[13px] leading-[41px] font-medium flex items-center gap-2'><CgMenuLeft className='text-[#B5E48C] text-2xl' /> Attacking opening Types</TableCell>
                            <TableCell className='bg-white text-[#000231] text-[13px] leading-[41px] font-medium'>10 March, 2025</TableCell>
                            <TableCell className='bg-white text-[#000231] text-[13px] leading-[41px] font-medium'>07 March, 2025</TableCell>
                            <TableCell className='bg-white text-[#000231] text-[13px] leading-[41px] font-medium'>Asssignment#1</TableCell>
                            <TableCell className='bg-white text-[#000231] text-[13px] leading-[41px] font-medium'>
                                <div className='border border-[#00b448] rounded-[5px] bg-[#f2fff7] text-[#00b448] text-[13px] leading-[20px] font-medium text-center py-1.5 px-3'>Success</div>
                            </TableCell>
                            <TableCell className='bg-white text-[#000231] text-[13px] leading-[41px] font-medium'>
                                <div className='flex gap-5'>
                                    <Link className='text-[#34A0A4] hover:text-[#000231] text-[13px] leading-[20px] font-medium flex items-center gap-2' href="/assignment" passHref><BiSolidChess /> Open PGN</Link>
                                    <Link className='text-[#E24242] hover:text-[#000231] text-[13px] leading-[20px] font-medium flex items-center gap-2' href="/assignment" passHref><BsFileEarmarkPdfFill /> Download Pdf</Link>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow className="bg-white">
                            <TableCell className='bg-white text-[#000231] text-[13px] leading-[41px] font-medium flex items-center gap-2'><CgMenuLeft className='text-[#B5E48C] text-2xl' /> Attacking opening Types</TableCell>
                            <TableCell className='bg-white text-[#000231] text-[13px] leading-[41px] font-medium'>10 March, 2025</TableCell>
                            <TableCell className='bg-white text-[#000231] text-[13px] leading-[41px] font-medium'>07 March, 2025</TableCell>
                            <TableCell className='bg-white text-[#000231] text-[13px] leading-[41px] font-medium'>Asssignment#1</TableCell>
                            <TableCell className='bg-white text-[#000231] text-[13px] leading-[41px] font-medium'>
                                <div className='border border-[#00b448] rounded-[5px] bg-[#f2fff7] text-[#00b448] text-[13px] leading-[20px] font-medium text-center py-1.5 px-3'>Success</div>
                            </TableCell>
                            <TableCell className='bg-white text-[#000231] text-[13px] leading-[41px] font-medium'>
                                <div className='flex gap-5'>
                                    <Link className='text-[#34A0A4] hover:text-[#000231] text-[13px] leading-[20px] font-medium flex items-center gap-2' href="/assignment" passHref><BiSolidChess /> Open PGN</Link>
                                    <Link className='text-[#E24242] hover:text-[#000231] text-[13px] leading-[20px] font-medium flex items-center gap-2' href="/assignment" passHref><BsFileEarmarkPdfFill /> Download Pdf</Link>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow className="bg-white">
                            <TableCell className='bg-white text-[#000231] text-[13px] leading-[41px] font-medium flex items-center gap-2'><CgMenuLeft className='text-[#B5E48C] text-2xl' /> Attacking opening Types</TableCell>
                            <TableCell className='bg-white text-[#000231] text-[13px] leading-[41px] font-medium'>10 March, 2025</TableCell>
                            <TableCell className='bg-white text-[#000231] text-[13px] leading-[41px] font-medium'>07 March, 2025</TableCell>
                            <TableCell className='bg-white text-[#000231] text-[13px] leading-[41px] font-medium'>Asssignment#1</TableCell>
                            <TableCell className='bg-white text-[#000231] text-[13px] leading-[41px] font-medium'>
                                <div className='border border-[#ffcc81] rounded-[5px] bg-[#fff6e8] text-[#ed9b22] text-[13px] leading-[20px] font-medium text-center py-1.5 px-3'>In Progress</div>
                            </TableCell>
                            <TableCell className='bg-white text-[#000231] text-[13px] leading-[41px] font-medium'>
                                <div className='flex gap-5'>
                                    <Link className='text-[#34A0A4] hover:text-[#000231] text-[13px] leading-[20px] font-medium flex items-center gap-2' href="/assignment" passHref><BiSolidChess /> Open PGN</Link>
                                    <Link className='text-[#E24242] hover:text-[#000231] text-[13px] leading-[20px] font-medium flex items-center gap-2' href="/assignment" passHref><BsFileEarmarkPdfFill /> Download Pdf</Link>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow className="bg-white">
                            <TableCell className='bg-white text-[#000231] text-[13px] leading-[41px] font-medium flex items-center gap-2'><CgMenuLeft className='text-[#B5E48C] text-2xl' /> Attacking opening Types</TableCell>
                            <TableCell className='bg-white text-[#000231] text-[13px] leading-[41px] font-medium'>10 March, 2025</TableCell>
                            <TableCell className='bg-white text-[#000231] text-[13px] leading-[41px] font-medium'>07 March, 2025</TableCell>
                            <TableCell className='bg-white text-[#000231] text-[13px] leading-[41px] font-medium'>Asssignment#1</TableCell>
                            <TableCell className='bg-white text-[#000231] text-[13px] leading-[41px] font-medium'>
                                <div className='border border-[#ffcc81] rounded-[5px] bg-[#fff6e8] text-[#ed9b22] text-[13px] leading-[20px] font-medium text-center py-1.5 px-3'>In Progress</div>
                            </TableCell>
                            <TableCell className='bg-white text-[#000231] text-[13px] leading-[41px] font-medium'>
                                <div className='flex gap-5'>
                                    <Link className='text-[#34A0A4] hover:text-[#000231] text-[13px] leading-[20px] font-medium flex items-center gap-2' href="/assignment" passHref><BiSolidChess /> Open PGN</Link>
                                    <Link className='text-[#E24242] hover:text-[#000231] text-[13px] leading-[20px] font-medium flex items-center gap-2' href="/assignment" passHref><BsFileEarmarkPdfFill /> Download Pdf</Link>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow className="bg-white">
                            <TableCell className='bg-white text-[#000231] text-[13px] leading-[41px] font-medium flex items-center gap-2'><CgMenuLeft className='text-[#B5E48C] text-2xl' /> Attacking opening Types</TableCell>
                            <TableCell className='bg-white text-[#000231] text-[13px] leading-[41px] font-medium'>10 March, 2025</TableCell>
                            <TableCell className='bg-white text-[#000231] text-[13px] leading-[41px] font-medium'>07 March, 2025</TableCell>
                            <TableCell className='bg-white text-[#000231] text-[13px] leading-[41px] font-medium'>Asssignment#1</TableCell>
                            <TableCell className='bg-white text-[#000231] text-[13px] leading-[41px] font-medium'>
                                <div className='border border-[#ffcc81] rounded-[5px] bg-[#fff6e8] text-[#ed9b22] text-[13px] leading-[20px] font-medium text-center py-1.5 px-3'>In Progress</div>
                            </TableCell>
                            <TableCell className='bg-white text-[#000231] text-[13px] leading-[41px] font-medium'>
                                <div className='flex gap-5'>
                                    <Link className='text-[#34A0A4] hover:text-[#000231] text-[13px] leading-[20px] font-medium flex items-center gap-2' href="/assignment" passHref><BiSolidChess /> Open PGN</Link>
                                    <Link className='text-[#E24242] hover:text-[#000231] text-[13px] leading-[20px] font-medium flex items-center gap-2' href="/assignment" passHref><BsFileEarmarkPdfFill /> Download Pdf</Link>
                                </div>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
    </div>
  )
}

export default page