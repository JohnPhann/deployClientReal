"use client"
import Image from "next/image";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import MeetingRoomOutlinedIcon from '@mui/icons-material/MeetingRoomOutlined';
import StoreMallDirectoryOutlinedIcon from '@mui/icons-material/StoreMallDirectoryOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import BallotOutlinedIcon from '@mui/icons-material/BallotOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';
import useUtilities from '../store/store';
import Link from 'next/link';
import React from "react";
import { usePathname} from 'next/navigation'



const Sidebar = () => {
  const pathname = usePathname();
  const handleSidebar = useUtilities(state => state.setOpenSidebar);
  
  return (
    <div className="fixed top-0 left-0 w-[25%] h-screen z-50 bg-gradient-to-b from-orange-900 to-yellow-900">
          <div className="w-full h-[10%] ">
          <Image className="float-left m-2" src="/logonew1.png" alt="My Image" width={50} height={50} />
          <div className="float-left h-[10%]">
          <h3 className="font-bold pt-2 text-white">John Phan Land</h3>
          <p className="text-sm text-white hover:cursor-pointer">Trang thông tin nội bộ </p>
          </div>
          <ArrowBackOutlinedIcon onClick={handleSidebar} className="hover:cursor-pointer m-5 float-right text-white"/>
          </div>
          <div className="w-full h-[30%] text-center">
            <p className="text-white text-md pt-3">John Phan</p>
            <div className="w-[37%] h-[48%] mx-auto mt-9 rounded-[100%] bg-gradient-to-r from-gray-500 to-black">
              <Image className="mx-auto" src="/logonew1.png" alt="My Image" width={180} height={180} />
            </div>
          </div>
          <div className="w-[90%] h-[60%] ">
            <ul className="pt-5">
            <Link onClick={handleSidebar} href={`/pages/welcome`}><li className={pathname == "/pages/welcome" ? "p-3  text-black text-sm rounded-tr-2xl rounded-br-2xl bg-orange-300" : "p-3  text-white text-sm hover:rounded-tr-2xl hover:rounded-br-2xl hover:bg-orange-800" }><MeetingRoomOutlinedIcon className="mr-3"/> Trang giới thiệu</li></Link>
            <Link onClick={handleSidebar} href={`/pages/for-sale`}><li className={pathname == "/pages/for-sale" ? "p-3  text-black text-sm rounded-tr-2xl rounded-br-2xl bg-yellow-300" : "p-3  text-white text-sm hover:rounded-tr-2xl hover:rounded-br-2xl hover:bg-orange-800" }><StoreMallDirectoryOutlinedIcon className="mr-3"/> Nhà Đất Bán</li></Link>
            <Link onClick={handleSidebar} href={`/pages/for-hire`}> <li className={pathname == "/pages/for-hire" ? "p-3  text-black text-sm rounded-tr-2xl rounded-br-2xl bg-yellow-300" : "p-3  text-white text-sm hover:rounded-tr-2xl hover:rounded-br-2xl hover:bg-orange-800" }><AccountBalanceOutlinedIcon className="mr-3"/> Nhà Đất Cho Thuê</li></Link>
            <Link onClick={handleSidebar} href={`/pages/demand`}><li className={pathname == "/pages/demand" ? "p-3  text-black text-sm rounded-tr-2xl rounded-br-2xl bg-yellow-300" : "p-3  text-white text-sm hover:rounded-tr-2xl hover:rounded-br-2xl hover:bg-orange-800" }><AssignmentIndOutlinedIcon className="mr-3"/> Nhu cầu khách hàng</li></Link>
            <Link onClick={handleSidebar} href={`/pages/after`}><li className={pathname == "/pages/after" ? "p-3  text-black text-sm rounded-tr-2xl rounded-br-2xl bg-yellow-300" : "p-3  text-white text-sm hover:rounded-tr-2xl hover:rounded-br-2xl hover:bg-orange-800" }><BallotOutlinedIcon className="mr-3"/> Sản phẩm đã bán</li></Link>
            <Link onClick={handleSidebar} href={`/pages/manage-customers`}><li className={pathname == "/pages/manage-customers" ? "p-3  text-black text-sm rounded-tr-2xl rounded-br-2xl bg-yellow-300" : "p-3  text-white text-sm hover:rounded-tr-2xl hover:rounded-br-2xl hover:bg-orange-800" }><PeopleOutlineOutlinedIcon className="mr-3"/> Quản lý khách hàng</li></Link>
            <Link onClick={handleSidebar} href={`/pages/history`}><li className={pathname == "/pages/history" ? "p-3  text-black text-sm rounded-tr-2xl rounded-br-2xl bg-yellow-300" : "p-3  text-white text-sm hover:rounded-tr-2xl hover:rounded-br-2xl hover:bg-orange-800" }><RestoreOutlinedIcon className="mr-3"/> Lịch sử thao tác</li></Link>
            </ul>
          </div>
    </div>
  )
}

export default Sidebar