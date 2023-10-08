import { Button,Checkbox , TextField , InputAdornment} from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import React, { useState, ChangeEvent ,useRef } from 'react';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import WrapTextIcon from '@mui/icons-material/WrapText';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { IconButton, TextareaAutosize } from '@mui/material';
import { DragHandle as DragHandleIcon } from '@mui/icons-material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useEffect } from 'react';
import axios from 'axios';
import useUtilities from '../store/store';
const RegisterCustomer = () => {
  const handleModalRegisterCustomer = useUtilities(state => state.setModalRegisterCustomer);
  const openModalRegisterCustomer = useUtilities(state => state.openModalRegisterCustomer);
  const urlDeploy = useUtilities((state) => state.urlDeploy);

  interface ListCity  {
      name : string,
      code : number,
      division_type: string,
      codename: string,
      phone_code: number,
  }

  interface ListDictrist  {
    name : string,
    code : number,
    division_type: string,
    codename: string,
    province_code: number,
}

type YourEnumType = /*unresolved*/ any

interface ListWard  {
  name : string,
  code : number,
  division_type: string,
  codename: string,
  district_code: number
}

interface ListSale  {
  id : number,
  name : string,
  avatar: string,
  phone: number,
  city: string,
}

  const [listCity, setListCity] = React.useState<ListCity[]>([]);

  const [listDictrist, setListDictrist] = React.useState<ListDictrist[]>([]);

  const [listWard, setListWard] = React.useState<ListWard[]>([]);

  const [listSale, setListSale] = React.useState<ListSale[]>([]);

  useEffect(() => {
    const fetchProvincVietNam = async ():Promise<void> => {
        const res = await axios.get(`https://provinces.open-api.vn/api/`)
        .then(response => {
          // Handle successful response
          console.log(response.data);
          setListCity(response.data);
        })
        .catch(error => {
          console.log(error.response);
        });
    };
    fetchProvincVietNam()
}, []);

  useEffect(() => {
    const fetchListSale = async ():Promise<void> => {
        const res = await axios.get(`${urlDeploy}/sale/`)
        .then(response => {
          // Handle successful response
          console.log(response.data);
          setListSale(response.data);
        })
        .catch(error => {
          console.log(error.response);
        });
    };
    fetchListSale()
}, []);

  const [cityName, setCityName] = React.useState<string>('');

  const [wardName, setWardName] = React.useState<string>('');

  const [districtName, setDictrictName] = React.useState<string>('');


  const [valueNote, setValueNote] = React.useState<string>('');

  const [city, setCity] = React.useState<string>('');

  const [ward, setWard] = React.useState<string>('');

  const [dictrict, setDictrict] = React.useState<string>('');

  const [name, setName] = React.useState<string>('');

  const [phone, setPhone] = React.useState<string>('');

  const [email, setEmail] = React.useState<string>('');

  const [adress, setAdress] = React.useState<string>('');

  const [street, setStreet] = React.useState<string>('');

  const [typeCustomer, setTypeCustomer] = React.useState<string>('');

  const [sale, setSale] = React.useState<string>('');

  const [representativeName, setRepresentativeName] = React.useState<string>('');

  const [phoneNDD, setPhoneNDD] = React.useState<string>('');

  const [birthDate, setBirthDate] = React.useState<Date | null>(null);

  const [cmnd, setCmnd] = React.useState<string>('');

  const [cmndDate, setCmndDate] = React.useState<Date | null>(null);

  const [placeCmnd, setPlaceCmnd] = React.useState<string>('');


  useEffect(()=>{
  const fetchDiscit = async ():Promise<void> => {
    const res = await axios.get(`https://provinces.open-api.vn/api/p/${city}?depth=2`)
    .then(response => {
      // Handle successful response
      console.log("aaaa",(response.data).districts);
      setListDictrist((response.data).districts);
    })
    .catch(error => {
      console.log(error.response);
    });
  };
  fetchDiscit();
},[city])


useEffect(()=>{
    const fetchWard = async ():Promise<void> => {
      const res = await axios.get(`https://provinces.open-api.vn/api/d/${dictrict}?depth=2`)
      .then(response => {
      // Handle successful response
       setListWard((response.data).wards);
      })
       .catch(error => {
           console.log(error.response);
        });
     };
     fetchWard();
  },[dictrict])

  const handleChangeName = (event:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setName(event.target.value);
  };

  const handleTypeCustomer = (event:ChangeEvent<HTMLInputElement>) => {
    setTypeCustomer(event.target.value);
  };

    const handlePhone = (event:ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };

  const handleChangeNote = (event:ChangeEvent<HTMLTextAreaElement>) => {
    setValueNote(event.target.value);
  };

  const handleChangeSale = (event:SelectChangeEvent<unknown>) => {
    const value = event.target.value as YourEnumType;
    setSale(value);
  };

    const handleEmail = (event:ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

    const handleCMND = (event:ChangeEvent<HTMLInputElement>) => {
    setCmnd(event.target.value);
  };

  const handleDateCMND = (newDate : Date | null) => {
    setCmndDate(newDate);
  };

  const handlePlaceCMND = (event:ChangeEvent<HTMLInputElement>) => {
    setPlaceCmnd(event.target.value);
  };

  const handleBirthDate = (newDate : Date | null) => {
    setBirthDate(newDate);
  };

  const handleChangeCity = (event:SelectChangeEvent<string>) => {
    setCity(event.target.value);
    const resCity = axios.get(`https://provinces.open-api.vn/api/p/${event.target.value}`)
    .then(response => {
      // Handle successful response
      setCityName((response.data).name);
    })
    .catch(error => {
      console.log(error)
    })
  };

  const handleChangeDistrict = (event:SelectChangeEvent<string>) => {
    setDictrict(event.target.value);
    const resDis = axios.get(`https://provinces.open-api.vn/api/d/${event.target.value}`)
    .then(response => {
      // Handle successful response
      setDictrictName((response.data).name);
    })
    .catch(error => {
      console.log(error)
    })
  };
  const handleChangeWard = (event:SelectChangeEvent<string>) => {
    setWard(event.target.value);
    const resWard = axios.get(`https://provinces.open-api.vn/api/w/${event.target.value}`)
    .then(response => {
      // Handle successful response
      setWardName((response.data).name);
    })
    .catch(error => {
      console.log(error)
    })
  };
  
  const handleAdress = (event:ChangeEvent<HTMLInputElement>) => {
    setAdress(event.target.value);
  };

  const handleStreet = (event:ChangeEvent<HTMLInputElement>) => {
    setStreet(event.target.value);
  };
  
  const handleRepresentativeName = (event:ChangeEvent<HTMLInputElement>) => {
    setRepresentativeName(event.target.value);
  };
  
  const handlePhoneNDD = (event:ChangeEvent<HTMLInputElement>) => {
    setPhoneNDD(event.target.value);
  };
  

const formData = new FormData();
    formData.append('name', name);
    formData.append('phone', phone);
    formData.append('email', email);
    formData.append('adress', adress);
    formData.append('street', street);
    formData.append('ward', wardName);
    formData.append('district', districtName);
    formData.append('city', cityName);
    formData.append('typeCustomer', typeCustomer);
    formData.append('sale', sale);
    formData.append('representativeName', representativeName);
    formData.append('phoneNDD', phoneNDD);
    if (birthDate !== null) {
      const formattedDate: string = birthDate.toISOString();
      const formatterYearAndMonth : string = formattedDate.slice(0,8);
      const formatterDateNumber : number = parseInt(formattedDate.slice(8,10)) + 1;
      const formatterDateNumberTypeString : string = String(formatterDateNumber);
      formData.append('birthDate',formatterYearAndMonth + formatterDateNumberTypeString );
    }
    formData.append('cmnd', cmnd);
    if (cmndDate !== null) {
      const formattedDate: string = cmndDate.toISOString();
      const formatterYearAndMonth : string = formattedDate.slice(0,8);
      const formatterDateNumber : number = parseInt(formattedDate.slice(8,10)) + 1;
      const formatterDateNumberTypeString : string = String(formatterDateNumber);
      formData.append('cmndDate', formatterYearAndMonth + formatterDateNumberTypeString);
    }
    formData.append('note', valueNote);
    formData.append('placeCmnd', placeCmnd);


const postData = async () => {
  const res = await axios.post(`${urlDeploy}/customer/`, formData ,  {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    } )
  .then(response => {
    // Handle successful response
    console.log(response)
    alert("Da them thanh cong");
    setValueNote('');
    setCity('');
    setWard('');
    setDictrict('');
    setName('');
    setPhone('');
    setEmail('');
    setAdress('');
    setStreet('');
    setTypeCustomer('');
    setSale('');
    setRepresentativeName('');
    setPhoneNDD('');
    setBirthDate(null);
    setCmnd('');
    setCmndDate(null);
    setPlaceCmnd('');
  })
  .catch(error => {
    alert("Loi , Khong them duoc Khach Hang")
    console.log(error.response);
  });
}

  return (
    <Modal
    open={openModalRegisterCustomer}
    onClose={handleModalRegisterCustomer}>
   
    <div className='w-4/6 absolute rounded-lg top-12 p-6 left-52 h-[80%]  bg-white items-center'>
      <h3 className='font-bold text-xl'>Thêm Khách Hàng Mới</h3>
      <br></br>
        <div className='h-[80%] overflow-y-scroll'>
        <form>
        <FormControl fullWidth  className="mb-2">
          <InputLabel htmlFor="amount">Tên khách hàng</InputLabel>
          <OutlinedInput
            id="amount"
            endAdornment={<InputAdornment position="end"><PeopleOutlineOutlinedIcon/></InputAdornment>}
            label="Tên khách hàng"
            onChange={handleChangeName}
            value={name}
          />
        </FormControl>
        <FormControl fullWidth className="mb-2">
          <InputLabel htmlFor="amount">Nhóm khách hàng</InputLabel>
          <OutlinedInput
            id="amount"
            endAdornment={<InputAdornment position="end"><WrapTextIcon/></InputAdornment>}
            label="Nhóm khách hàng"
            onChange={handleTypeCustomer}
            value={typeCustomer}
          />
        </FormControl>
        <FormControl fullWidth  className="mb-2">
          <InputLabel htmlFor="amount">Số điện thoại</InputLabel>
          <OutlinedInput
            id="amount"
            endAdornment={<InputAdornment position="end"><LocalPhoneIcon/></InputAdornment>}
            label="Số điện thoại"
            placeholder="Vd:0902312141"
            onChange={handlePhone}
            value={phone}
          />
        </FormControl>
        <FormControl fullWidth  className="mb-2">
        <TextField
      label="Ghi Chú"
      multiline
      minRows={5}
      maxRows={10}
      value={valueNote}
      onChange={handleChangeNote}
      inputProps={{
          as:TextareaAutosize,
      }}
    >
      
    </TextField>
        </FormControl>
  <FormControl fullWidth  className="mb-2">
  <InputLabel id="demo-simple-select-label">Nhân viên kinh doanh</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={sale}
    label="Nhân viên kinh doanh"
    onChange={handleChangeSale}
  >
      {listSale.map(element=>(
        <MenuItem key={element.id} value={element.id}>{element.name}</MenuItem>
      ))}
  </Select>
</FormControl>   
           <p className="p-2">Thông Tin Thêm</p>
        <FormControl fullWidth  className="mb-2">
          <InputLabel htmlFor="amount">Email</InputLabel>
          <OutlinedInput
            id="amount"
            endAdornment={<InputAdornment position="end"><LocalPhoneIcon/></InputAdornment>}
            label="Số điện thoại"
            placeholder="Vd:abc@gmail.cpom"
            onChange={handleEmail}
            value={email}
          />
        </FormControl>
        <FormControl fullWidth  className="mb-2">
          <InputLabel htmlFor="amount">CMND</InputLabel>
          <OutlinedInput
            id="amount"
            endAdornment={<InputAdornment position="end"><PeopleOutlineOutlinedIcon/></InputAdornment>}
            label="Số điện thoại"
            placeholder="Vd:02202312141"
            onChange={handleCMND}
            value={cmnd}
          />
        </FormControl>
        <FormControl fullWidth  className="mb-2">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
            <DatePicker 
               className='w-full'
               label="Ngày cấp CMND"
               onChange={handleDateCMND}
               value={cmndDate} />
            </DemoContainer>
            </LocalizationProvider>
        </FormControl>
        <FormControl fullWidth  className="mb-2">
          <InputLabel htmlFor="amount">Nơi Cấp</InputLabel>
          <OutlinedInput
            id="amount"
            endAdornment={<InputAdornment position="end"></InputAdornment>}
            label="Nơi cấp"
            placeholder="Vd:CA Đà Nẵng"
            onChange={handlePlaceCMND}
            value={placeCmnd}
          />
        </FormControl>
        <FormControl fullWidth  className="mb-2">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
            <DatePicker 
                className='w-full' 
                label="Ngày sinh"
                onChange={handleBirthDate}
                value={birthDate}
                />
            </DemoContainer>
            </LocalizationProvider>
        </FormControl>
        <p className="p-2">Địa chỉ</p>
        <FormControl fullWidth  className="mb-2">
  <InputLabel id="demo-simple-select-label">Tỉnh/Thành Phố</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={city}
    label="Thanh Pho"
    onChange={handleChangeCity}
  >
      {listCity.map(element=>(
        <MenuItem key={element.code} value={element.code}>{element.name}</MenuItem>
      ))}
  </Select>
</FormControl>
<FormControl fullWidth  className="mb-2">
  <InputLabel id="demo-simple-select-label">Quận</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={dictrict}
    label="Quan"
    onChange={handleChangeDistrict}
  >
      {listDictrist?.map(element=>(
        <MenuItem key={element.code} value={element.code}>{element.name}</MenuItem>
      ))}
  </Select>
</FormControl>
<FormControl fullWidth  className="mb-2">
  <InputLabel id="demo-simple-select-label">Phường</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={ward}
    label="Phuong"
    onChange={handleChangeWard}
  >
      {listWard?.map(element=>(
        <MenuItem key={element.code} value={element.code}>{element.name}</MenuItem>
      ))}
  </Select>
</FormControl>
        <FormControl fullWidth  className="mb-2">
          <InputLabel htmlFor="amount">Tên đường</InputLabel>
          <OutlinedInput
            id="amount"
            endAdornment={<InputAdornment position="end"></InputAdornment>}
            label="Tên đường"
            placeholder="An Trung Hoà"
            onChange={handleStreet}
            value={street}
          />
        </FormControl>
        <FormControl fullWidth  className="mb-2">
          <InputLabel htmlFor="amount">Nhập số nhà</InputLabel>
          <OutlinedInput
            id="amount"
            endAdornment={<InputAdornment position="end"></InputAdornment>}
            label="Nhập số nhà"
            placeholder="27"
            onChange={handleAdress}
            value={adress}
          />
        </FormControl>
        <p className="p-2">Thông tin Người đại diện</p>
        <FormControl fullWidth  className="mb-2">
          <InputLabel htmlFor="amount">Tên người đại diện</InputLabel>
          <OutlinedInput
            id="amount"
            endAdornment={<InputAdornment position="end"><PeopleOutlineOutlinedIcon/></InputAdornment>}
            label="Tên người đại diện"
            onChange={handleRepresentativeName}
            value={representativeName}
          />
        </FormControl>
        <FormControl fullWidth  className="mb-2">
          <InputLabel htmlFor="amount">Số diện thoại</InputLabel>
          <OutlinedInput
            id="amount"
            endAdornment={<InputAdornment position="end"><LocalPhoneIcon/></InputAdornment>}
            label="Số điện thoại"
            onChange={handlePhoneNDD}
            value={phoneNDD}
          />
        </FormControl>  
       
        </form> 
        </div>
        <Button onClick={handleModalRegisterCustomer} className="p-2 m-2 bg-red-700 text-white font-thin">Thoát</Button>
        <Button onClick={postData} className="p-2 m-2 bg-blue-700 text-white font-thin">Thêm</Button>
    </div>
   
  </Modal>  
    ) 
}

export default RegisterCustomer