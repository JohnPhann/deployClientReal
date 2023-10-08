'use client'
import Image from 'next/image';
import React from 'react';
import { Button,Checkbox , TextField , InputAdornment} from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Page = () => {
 
  const [email, setEmail] = React.useState('');
 
  
  const [isFocusedEmail, setIsFocusedEmail] = React.useState(false);
  
  const handleLabelEmailClick = () => {
    setIsFocusedEmail(true);
  };
  
 
  const handleInputEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  
  const handleInputBlur = () => {
    if (email === '') {
      setIsFocusedEmail(false);
    }
  };


  return (
    <div className="h-screen w-full bg-apg bg-cover bg-center pt-10">
      <div className="h-[80vh] text-center mx-auto w-2/6 bg-white">
        <div className="w-2/4 mx-auto pt-10">
            <Image src="/logonew1.png" alt="MyImage" width={200} height={120} />
        </div>
        <p className='text-2xl'>RESET PASSWORD</p>
        <br></br>
        <form action="">
            <div className='w-full'>
                    <TextField
                    label='Email'
                    onClick={handleLabelEmailClick}
                    type="password"
                    
                    variant="outlined"
                    onChange={handleInputEmailChange}
                    onBlur={handleInputBlur}
                    className='w-3/4'
                    InputProps={{
          startAdornment: ( 
            <MailOutlineIcon color="action" sx={{
              position: 'absolute',
              right: 8,
              top: '50%',
              transform: 'translateY(-50%)',
            }}/>
          ),
          
        }}
        InputLabelProps={{
          shrink:isFocusedEmail,
        }}
    
                  />
            </div> 
            <br />
          <div>
          <Button className="w-3/4 bg-orange-700 text-white">Gửi mã xác nhận</Button>
          </div>
            </form>
            <br></br>
            <p className="text-sm cursor-pointer hover:underline text-yellow-500">Quay lại đăng nhập</p>
            <p className='text-sm cursor-pointer hover:underline text-yellow-500'>Nhập mã xác nhận</p>
      </div>

       
    </div>
  )
}

export default Page
