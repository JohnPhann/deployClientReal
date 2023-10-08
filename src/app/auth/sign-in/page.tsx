'use client'
import React from 'react';
import { Button,Checkbox , TextField , InputAdornment} from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import axios from 'axios';
import { useRouter } from 'next/navigation'
import Alert from '@mui/material/Alert';
import useUtilities from '../../store/store';
const Page = () => {
  
  // const updateBearToken = useUtilities((state) => state.updateBearToken);

  const urlDeploy = useUtilities((state) => state.urlDeploy);
  const [notSucess, setNotSucess] = React.useState(false);
  const [sucess, setSucess] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isFocusedEmail, setIsFocusedEmail] = React.useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = React.useState(false);
  let isEye = true;
  const [isChecked, setChecked] = React.useState(false);



  const changeEye = () => {
      isEye = false;
  }
  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  }

  const handleLabelEmailClick = () => {
    setIsFocusedEmail(true);
  };
  const handleLabelPasswordClick = () => {
    setIsFocusedPassword(true);
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
  };
  const formData = new FormData();
  formData.append('username',email);
  formData.append('password',password);

  const router = useRouter();

  const handleLogin = async () => {
    try {
      const res = await axios.post(`${urlDeploy}/user-authentication/` , formData ,{
        headers: {
          'Content-Type': 'multipart/form-data'
        }});
      if(res.data.login == true){
          setSucess(true);
          console.log(res.data.access_token);
          // updateBearToken(res.data.access_token);
          router.push('/pages/welcome');
      }
    } catch (error) {
      console.error(error);
    }
  };

  
  return (
    <div className="h-screen bg-orange-300 mx-auto flex">
       
        <div className="h-screen bg-yellow-200 w-3/5 bg-apg bg-cover bg-center" >
            <div className='h-screen w-4/5 mx-auto pt-[15%]'>
                <div className='w-full'>
                  <img src="/logonew1.png" width="250"alt="" />
                </div>
                <h1 className='text-2xl text-white'>Chào mừng đến với hệ thống nội bộ của </h1>
                <h1 className='text-2xl text-white'>John Phan Land</h1>
                <br />
                <p className='text-sm text-white'>Mang đến cho khách hàng phong cách làm việc chuyên nghiệp, nhanh chóng NHẤT trong lĩnh vực Mua – Bán Bất Động Sản. Sự hài lòng của khách hàng là thành công của chúng tôi!</p>
            </div>
        </div>
        <div className="h-screen bg-white w-2/5 text-center pt-40">
            {sucess &&  <Alert className='fixed top-0' severity="success">Đăng Nhập Thành công!</Alert>}
            {notSucess &&  <Alert className='fixed top-0' severity="error">Tài Khoản Hoặc Mật Khẩu Không Chính Xác!</Alert>}
            <h3 className="text-2xl">ĐĂNG NHẬP VÀO HỆ THỐNG</h3>
           
            <br />
            <form action="">
            <div className='w-full'>
                    <TextField
                    label='Tên'
                    onClick={handleLabelEmailClick}
                    type="email"
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
                    label='Mật khẩu'
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
            
            <div className='w-3/4 flex mx-auto'>
            <Checkbox
            checked={isChecked}
            onClick={handleCheckboxChange}
            color="primary"
            className='pt-4'
            
            
          />
          <p className='pt-4 '>Ghi nhớ</p>
          <p className='pt-4 ml-20 cursor-pointer hover:underline text-yellow-300'>Bạn quên mật khẩu ?</p>
            </div>
            <br />
          <div>
          <Button onClick={handleLogin} className="w-3/4 bg-orange-700 text-white">Đăng Nhập</Button>
          </div>
            </form>
            <br />
          <div className='w-full mb-1'> <span className="before:h-4 before:relative before:z-50 before:w-4 before:bg-red-500">Hoặc</span></div>
         
          <Button className="w-3/5 bg-red-500  text-white mb-3">Đăng Nhập Bằng Google</Button>
          <Button className="w-3/5 bg-blue-700 text-white">Đăng Nhập Bằng Facebook</Button>
          <div className='w-full mt-4'> <span className="text-yellow-500 cusor-pointer hover:underline ">Tạo Account mới</span></div>
        </div>
      
    </div>
  )
}

export default Page
