"use client"
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LogoutIcon from '@mui/icons-material/Logout';
import React from 'react';
import Sidebar from '@/app/components/Sidebar';
import useUtilities from '../store/store';
import { useRouter } from 'next/navigation'
const MenuBar = () => {
    const handleSidebar = useUtilities(state => state.setOpenSidebar);
    const isOpenSideBar = useUtilities(state => state.openSidebar);
    const [isOpenModal, setOpenModal] = React.useState(false);
    // const [isOpenSideBar, setOpenSideBar] = React.useState(false);
    const handleOpenModel = () => {
        setOpenModal(!isOpenModal);
    }

    const router = useRouter();

    const handleLogout = () => {
      router.push('/auth/sign-in');
    };
    
  return (
    <div className="h-[8vh] w-full border-b border-solid border-gray-300 shadow">
        <div className="w-ful h-[8vh]">
            <div className='p-3 w-11 h-[8vh] float-left'>
            <MenuIcon className='hover:cursor-pointer hover:shadow-lg'  onClick={handleSidebar} sx={{ fontSize: 30 }}
            />
            {isOpenSideBar && (<><Sidebar /></>)}
            
            </div>
            <div className='float-left p-5'>
                <p>JOHN PHAN LAND</p>
            </div>
            <div className="float-right h-[8vh] w-[25%]">
            <div className='float-left pt-2'>
            <Image src="/logonew1.png" alt="My Image" width={40} height={40} /> 
            </div>
            <p className='float-left text-sm p-5'>JOHN PHAN</p>
            <ExpandMoreIcon onClick={handleOpenModel} className="mt-4 hover:cursor-pointer"/>
            </div>
            {isOpenModal && (<div className='w-[15%] h-[20%] top-[9%] left-[80%] rounded-md bg-slate-100 absolute'>
                <ul className='underline-none p-4'>
                    <li className='mb-2 cursor-pointer hover:underline'><CoPresentIcon className='mr-2'/>Hồ sơ cá nhân</li>
                    <li className='mb-2 cursor-pointer hover:underline'><MailOutlineIcon className='mr-2'/>Tin nhắn</li>
                    <li onClick={handleLogout} className='mb-2 cursor-pointer hover:underline'><LogoutIcon className='mr-2'/>Đăng xuất</li>
                </ul>
            </div>)}
            
        </div>
    </div>
  )
}

export default MenuBar
