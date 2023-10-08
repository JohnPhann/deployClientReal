'use client'
import Image from 'next/image';
import React from 'react';
import { Button,Checkbox , TextField , InputAdornment} from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';

const Page = () => {
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordConfirm, setPasswordConfirm] = React.useState('');
  const [isFocusedName, setIsFocusedName] = React.useState(false);
  const [isFocusedPhone, setIsFocusedPhone] = React.useState(false);
  const [isFocusedEmail, setIsFocusedEmail] = React.useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = React.useState(false);
  const [isFocusedPasswordConfirm, setIsFocusedPasswordConfirm] = React.useState(false);
  const [isChecked, setChecked] = React.useState(false);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  }

  const handleLabelNameClick = () => {
    setIsFocusedName(true);
  };
  const handleLabelPhoneClick = () => {
    setIsFocusedPhone(true);
  };
  const handleLabelPasswordConfirmClick = () => {
    setIsFocusedPasswordConfirm(true);
  };


  const handleLabelEmailClick = () => {
    setIsFocusedEmail(true);
  };
  const handleLabelPasswordClick = () => {
    setIsFocusedPassword(true);
  };
  const handleInputNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleInputPhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };
  const handleInputPasswordConfirmChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordConfirm(event.target.value);
  };
  const handleInputEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
    const handleInputPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const handleInputBlur = () => {
    if (email === '') {
      setIsFocusedEmail(false);
    }
    if (password === '') {
      setIsFocusedPassword(false);
    }
    if (name === '') {
      setIsFocusedName(false);
    }
    if (phone === '') {
      setIsFocusedPhone(false);
    }
    if (passwordConfirm === '') {
      setIsFocusedPasswordConfirm(false);
    }
  };


  return (
    <div className="h-[140vh] w-full bg-apg bg-cover bg-center pt-10">
      <div className="custom-h-120vh text-center mx-auto w-2/6 bg-white">
        <div className="w-2/4 mx-auto">
            <Image src="/logonew1.png" alt="My Image" width={180} height={100} />
        </div>
        <p className='text-2xl pb-3'>ĐĂNG KÝ</p>
        <form action="">
            <div className='w-full'>
                    <TextField
                    label='Tên'
                    onClick={handleLabelNameClick}
                    type="email"
                    variant="outlined"
                    onChange={handleInputNameChange}
                    onBlur={handleInputBlur}
                    className='w-3/4'
                    InputProps={{
                      startAdornment: (
                        <AccountCircleOutlinedIcon color="action" sx={{
                          position: 'absolute',
                          right: 8,
                          top: '50%',
                          transform: 'translateY(-50%)',
                          }}/>
                        ),
                        }}
                    InputLabelProps={{
                        shrink:isFocusedName,
                        }}
    
                      />
            </div>
            <br/>
            <div className='w-full'>
                    <TextField
                    label='Số điện thoại'
                    onClick={handleLabelPhoneClick}
                    type="password"
                    
                    variant="outlined"
                    onChange={handleInputPhoneChange}
                    onBlur={handleInputBlur}
                    className='w-3/4'
                    InputProps={{
          startAdornment: ( 
            <EditOutlinedIcon color="action" sx={{
              position: 'absolute',
              right: 8,
              top: '50%',
              transform: 'translateY(-50%)',
            }}/>
          ),
          
        }}
        InputLabelProps={{
          shrink:isFocusedPhone,
        }}
    
                  />
            </div>
            <br/>
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
            <br/>
            <div className='w-full'>
                    <TextField
                    label='Password'
                    onClick={handleLabelPasswordClick}
                    type="password"
                    
                    variant="outlined"
                    onChange={handleInputPasswordChange}
                    onBlur={handleInputBlur}
                    className='w-3/4'
                    InputProps={{
          startAdornment: ( 
            <RemoveRedEyeIcon color="action" sx={{
              position: 'absolute',
              right: 8,
              top: '50%',
              transform: 'translateY(-50%)',
            }}/>
          ),
          
        }}
        InputLabelProps={{
          shrink:isFocusedPassword,
        }}
    
                  />
            </div>
            <br/>
            <div className='w-full'>
                    <TextField
                    label='Password (Confirm)'
                    onClick={handleLabelPasswordConfirmClick}
                    type="password"
                    
                    variant="outlined"
                    onChange={handleInputPasswordConfirmChange}
                    onBlur={handleInputBlur}
                    className='w-3/4'
                    InputProps={{
          startAdornment: ( 
            <VpnKeyOutlinedIcon color="action" sx={{
              position: 'absolute',
              right: 8,
              top: '50%',
              transform: 'translateY(-50%)',
            }}/>
          ),
          
        }}
        InputLabelProps={{
          shrink:isFocusedPasswordConfirm,
        }}
    
                  />
            </div>
            
            <div className='w-3/4 flex mx-auto'>
            <Checkbox
            checked={isChecked}
            onClick={handleCheckboxChange}
            color="primary"
            className='pt-4'
            
            
          />
          <p className='pt-4 '>Tôi đọc và chấp nhận <span className='text-yellow-500 cusor-point hover:underline'>Điều khoản</span></p>
         
            </div>
            <br />
          <div>
          <Button className="w-3/4 bg-orange-700 text-white">Tạo Tài Khoản</Button>
          </div>
            </form>
            <br></br>
            <p>Bạn đã có tài khoản ?</p>
            <p className='text-sm cursor-pointer hover:underline text-yellow-500'>Đăng Nhập</p>
      </div>


       
    </div>
  )
}

export default Page
