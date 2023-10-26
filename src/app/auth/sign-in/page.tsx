'use client'
import React from 'react';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button,Checkbox , TextField , InputAdornment} from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
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
  const [isChecked, setChecked] = React.useState(false);


  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

 const handleCheckboxChange = () => {
    setChecked(!isChecked);
  }

  const handleInputEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
    const handleInputPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
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
            <FormControl className="w-3/4" variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Tên</InputLabel>
              <OutlinedInput
            id="outlined-adornment-text"
            type="text"
            endAdornment={
              <InputAdornment position="end">
                <MailOutlineIcon />
              </InputAdornment>
            }
            label="Tên"
            onChange={handleInputEmailChange}
          />
        </FormControl>
            </div>
            <br/>
            <div className='w-full'>
            <FormControl className="w-3/4" variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Mật Khẩu</InputLabel>
              <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Mật Khẩu"
            onChange={handleInputPasswordChange}
          />
        </FormControl>
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
