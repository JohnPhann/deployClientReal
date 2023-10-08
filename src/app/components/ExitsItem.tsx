import Modal from '@mui/material/Modal';
import React, { useState, ChangeEvent ,useRef } from 'react';
import useUtilities from '../store/store';
const ExitsItem = () => {
    const handleExitsItem = useUtilities(state => state.setExitsItem);
    const openExitsItem = useUtilities(state => state.openExitsItem);
    
  return (
    <Modal
    open={openExitsItem}
    onClose={handleExitsItem}>
    <div className='w-[40%] text-center h-[20%] absolute top-32 left-96 rounded-3xl bg-white'>
            <br></br>
            <p className='text-2xl'>Sản phẩm đã tồn tại trong hệ thống</p>
            <br></br>
            <button className='bg-red-500 text-white p-2' onClick={handleExitsItem}>Thoát</button>
    </div>
    
    </Modal>
  )
}

export default ExitsItem
