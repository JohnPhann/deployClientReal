import Modal from '@mui/material/Modal';
import React, { useState, ChangeEvent ,useRef } from 'react';
import useUtilities from '../store/store';
const NotExitsItem = () => {
    const handleNotExitsItem = useUtilities(state => state.setNotExitsItem);
    const openNotExitsItem = useUtilities(state => state.openNotExitsItem);
  return (
    <Modal
    open={openNotExitsItem}
    onClose={handleNotExitsItem}>
  <div className='w-[40%] text-center h-[20%] absolute top-32 left-96 rounded-3xl bg-white'>
            <br></br>
            <p className='text-2xl'>Sản phẩm chưa có trong hệ thống</p>
            <br></br>
            <button className='bg-red-500 text-white p-2' onClick={handleNotExitsItem}>Thoát</button>
    </div>
    </Modal>
  )
}

export default NotExitsItem