"use client"

import React from 'react';
import MenuBar from '@/app/components/MenuBar';
import Image from 'next/image';
import AddBusinessOutlinedIcon from '@mui/icons-material/AddBusinessOutlined';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import RoomPreferencesOutlinedIcon from '@mui/icons-material/RoomPreferencesOutlined';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';

const Page = () => {
  
  return (
    <>
    <MenuBar />
    <div className="w-full h-[160vh] ">
      <div className="w-[92%] h-[160vh] mx-auto">
          <div className='w-3/4 h-[30%] mx-auto text-center'>
            <p className='pt-20 text-4xl text-orange-500'>JOHN PHAN LAND</p>
            <p className='mt-1'>Cam kết mang tới các gói giải pháp dịch vụ Môi giới bất động sản chuyên nghiệp, đồng bộ và hiệu quả.</p>
            <br></br>
            <div className="mx-auto mt-5 h-[1%] w-[15%] bg-orange-600"></div>
          </div>
          <div className=" w-full flex h-[35%] space-x-6">
            <div className="w-[32%] h-[70%] mt-2 rounded-lg bg-white shadow text-center">
                  <div>
                    <AddBusinessOutlinedIcon sx={{ fontSize: 80}} className="text-orange-300" />
                  </div>
                <p className='text-xl font-bold p-2'>ĐỐI VỚI NGƯỜI MUA, THUÊ</p>
                <p className='text-sm'>Cung cấp nguồn bất động sản đa dạng, cam kết pháp lý đầy đủ. Được thẩm định và xác thực trước khi đăng tải.</p>
            </div>
            <div className="w-[32%] h-[70%] mt-2 rounded-lg bg-white shadow text-center">
                  <div>
                    <HomeWorkOutlinedIcon sx={{ fontSize: 80}} className="text-orange-300" />
                  </div>
                <p className='text-xl font-bold p-2'>ĐỐI VỚI NGƯỜI BÁN, CHỦ NHÀ</p>
                <p className='text-sm'>Cung cấp công cụ đăng tin dễ sử dụng, miễn phí. Quy trình chuyên nghiệp và giao dịch rõ ràng, minh bạch, tiếp cận nhiều khách hàng tiềm năng.</p>
            </div>
            <div className="w-[32%] h-[70%] mt-2 rounded-lg bg-white shadow text-center">
                  <div>
                    <RoomPreferencesOutlinedIcon sx={{ fontSize: 80}} className="text-orange-300" />
                  </div>
                <p className='text-xl font-bold p-1'>ĐÀO TẠO MÔI GIỚI CHUYÊN NGHIỆP</p>
                <p className='text-sm p-2'>Học viên được đào tạo kỹ năng bán hàng chuyên nghiệp và được cung cấp nền tảng kiến thức vũng chắc.</p>
            </div>
          </div>
          <div className='w-full h-[36%] space-x-5 flex'>
            <div className="w-[25%] h-[90%] mt-2">
                 <div className=''>
                  <p className="text-2xl text-orange-400">DỰ ÁN NỔI BẬT</p>
                  <p className='pt-2 text-sm text-gray-800'>Liên tục cập nhật các dự án mới nhất của những chủ đầu tư uy tín trên thị trường Bất Động Sản trong nước</p>
                  <br/>
                  <div className=" h-[3px] w-[50%] bg-orange-200"></div>
                 </div>
                 <div className="w-full h-[61%] brightness-90 hover:brightness-100 mt-3 rounded-lg bg-the-tropicana bg-cover bg-center">
                    <p className='p-3 text-white text-xs'>Alantic Asia</p>
                    <p className='p-3 text-white text-2xl'>THE Sun Lands</p>
                    <p className='pl-3 text-white text-xs mt-[35%]'>XEM CHI TIẾT <NavigateNextRoundedIcon className='float-right'/></p> 
                 </div>
            </div>
            <div className="w-[25%] h-[90%] mt-2 brightness-75 hover:brightness-100 rounded-lg bg-long-insland bg-cover bg-center">
                  <p className='p-3 text-white text-xs'>Melia Ocean</p>
                    <p className='p-3 text-white text-2xl'>Rent for Home</p>
                    <p className='pl-3 text-white text-xs mt-[80%]'>XEM CHI TIẾT <NavigateNextRoundedIcon className='float-right'/></p>
            </div>
            <div className="w-[25%] h-[90%] mt-2 brightness-75 hover:brightness-100 rounded-lg bg-lavida bg-cover bg-center">    
                    <p className='pl-3 pt-3 text-white text-2xl'>Trinh House </p>
                    <p className='pl-3 text-white text-2xl'>DaNang Resident</p>
                     <p className='pl-3 text-white text-2xl'>Nolen</p>
                    <p className='pl-3 text-white text-xs mt-[75%]'>XEM CHI TIẾT <NavigateNextRoundedIcon className='float-right'/></p>
            </div>
            <div className="w-[25%] h-[90%] mt-2 brightness-75 hover:brightness-100 rounded-lg bg-chilinh-center bg-cover bg-center">
                    <p className='p-3 text-white text-2xl'>Duplex House Super</p>
                    <p className='pl-3 text-white text-xs mt-[80%]'>XEM CHI TIẾT <NavigateNextRoundedIcon className='float-right'/></p>
            </div>
          </div>
      </div>
    </div>
    </>
  )
}

export default Page
