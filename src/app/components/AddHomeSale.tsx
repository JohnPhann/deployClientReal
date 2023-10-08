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
import FormControlLabel from '@mui/material/FormControlLabel';
import MenuItem from '@mui/material/MenuItem';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useEffect } from 'react';
import { Dropbox } from 'dropbox';
import CloseIcon from '@mui/icons-material/Close';
import useUtilities from '../store/store';
import axios from 'axios';


const AddHomeSale = () => {

  const urlDeploy = useUtilities((state) => state.urlDeploy);
  

  interface ListOrientation {
    id:number;
    name:string;
  }

  interface ListCategories {
    id:number;
    name:string;
  }

  interface ListCustomer {
    id:number;
    makh: any;
    name: string;
    phone: string;
    email: string;
    create_date:string;
    adress:string;
    street:string;
    ward:string;
    district:string;
    city:string;
    typeCustomer:string;
    sale:string;
    representativeName:string;
    phoneNDD:string;
  }  

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

interface ListHost {
  id:number,
  mahost:string,
  name:string,
  phone:number,
  create_date:string,
  email:string,
  adress:string,
  ward:string,
  district:string,
  city:string,
  typeHost:string,
  sale:number
}

interface ListSale  {
  id : number,
  name : string,
  avatar: string,
  phone: number,
  city: string,
}

interface ListStaff {
  id: number,
  name:string,
  avatar:string,
  phone:number,
  email:string,
  city:string,
  role:string,
}

interface ListStateSale {
  id:number,
  name:string,
}

interface ListStateHire {
  id:number,
  name:string,
}

  const handleAddHome = useUtilities(state => state.setModalAddHome);
  const openModalAddHome = useUtilities(state => state.openModalAddHome);

  const [listStateSale, setListStateSale] = useState<ListStateSale[]>([]);

  const [ListStateHire, setListStateHire] = useState<ListStateHire[]>([]);

  const [listOrientation, setlistOrientation] = useState<ListOrientation[]>([]);

  const [listCustomer, setListCustomer] = useState<ListCustomer[]>([]);

  const [listCategories, setListCategories] = useState<ListCategories[]>([]);

  const [listCity, setListCity] = React.useState<ListCity[]>([]);

  const [listDictrist, setListDictrist] = React.useState<ListDictrist[]>([]);

  const [listWard, setListWard] = React.useState<ListWard[]>([]);

  const [listSale, setListSale] = React.useState<ListSale[]>([]);

  const [listHost, setListHost] = React.useState<ListHost[]>([]);

  const [listStaff, setListStaff] = React.useState<ListStaff[]>([]);

  const [createDateHome, setCreatedDateHome] = React.useState<Date | null>(null);

  const [updateDateHome, setUpdateDateHome] = React.useState<Date | null>(null);

  const [files, setFiles] = React.useState<File[]>([]);

  const [cityName, setCityName] = React.useState<string>('');

  const [wardName, setWardName] = React.useState<string>('');

  const [districtName, setDictrictName] = React.useState<string>('');

  const [note, setNote] = React.useState<string>('');

  const [city, setCity] = React.useState<string>('');

  const [ward, setWard] = React.useState<string>('');

  const [dictrict, setDictrict] = React.useState<string>('');

  const [name, setName] = React.useState<string>('');

  const [customer, setCustomer] = React.useState<string>('');

  const [categories , setCategories] = React.useState<string>('');

  const [orientation , setOrientation] = React.useState<string>('');

  const [stateSale , setStateSale] = React.useState<string>('');

  const [stateHire , setSateHire] = React.useState<string>('');

  const [bedroom, setBedroom] = React.useState<string>('');

  const [margin, setMargin] = React.useState<string>('');

  const [price, setPrice] = React.useState<string>('');

  const [commission, setCommission] = React.useState<string>('');

  const [propose, setPropose] = React.useState<string>('');

  const [wc, setWC] = React.useState<string>('');

  const [floor, setFloor] = React.useState<string>('');

  const [adress, setAdress] = React.useState<string>('');

  const [street, setStreet] = React.useState<string>('');

  const [saleablearea, setSaleAbleArea] = React.useState<string>('');

  const [sale, setSale] = React.useState<string>('');

  const [host, setHost] = React.useState<string>('');

  const [area, setArea] = React.useState<string>('');

  const [horizontal, setHorizontal] = React.useState<string>('');

  const [lagreRoad, setLagreRoad] = React.useState<string>('');

  const [productOf, setProductOf] = React.useState<string>('');

  const [staff , setStaff] = React.useState<string>('');

  const [altar , setAltar] = React.useState<boolean>(false);

  const [garden , setGarden] = React.useState<boolean>(false);

  const [packArea , setPackArea] = React.useState<boolean>(false);
  
  const [pool , setPool] = React.useState<boolean>(false);
  
  const [twoFace , setTwoFace] = React.useState<boolean>(false);

  useEffect(() => {
    const fetchOrientation = async ():Promise<void> => {
        const res = await axios.get(`${urlDeploy}/orientation/`)
        setlistOrientation(res.data)
       
    };
    fetchOrientation()
}, []);


  useEffect(() => {
    const fetchCategories = async ():Promise<void> => {
        const res = await axios.get(`${urlDeploy}0/categories/`)
        setListCategories(res.data)
       
    };
    fetchCategories()
}, []);

  useEffect(() => {
    const fetchCustomer = async ():Promise<void> => {
        const res = await axios.get(`${urlDeploy}/customer/`)
        setListCustomer(res.data)
       
    };
    fetchCustomer()
}, []);


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

useEffect(() => {
  const fetchListStateSale = async ():Promise<void> => {
      const res = await axios.get(`${urlDeploy}/stateSale/`)
      .then(response => {
        // Handle successful response
        console.log(response.data);
        setListStateSale(response.data);
      })
      .catch(error => {
        console.log(error.response);
      });
  };
  fetchListStateSale()
}, []);

useEffect(() => {
  const fetchListStateHire = async ():Promise<void> => {
      const res = await axios.get(`${urlDeploy}/stateHire/`)
      .then(response => {
        // Handle successful response
        console.log(response.data);
        setListStateHire(response.data);
      })
      .catch(error => {
        console.log(error.response);
      });
  };
  fetchListStateHire()
}, []);


useEffect(() => {
  const fetchListHost = async ():Promise<void> => {
      const res = await axios.get(`${urlDeploy}/host/`)
      .then(response => {
        // Handle successful response
        console.log(response.data);
        setListHost(response.data);
      })
      .catch(error => {
        console.log(error.response);
      });
  };
  fetchListHost()
}, []);


useEffect(() => {
  const fetchListStaff = async ():Promise<void> => {
      const res = await axios.get(`${urlDeploy}/staff/`)
      .then(response => {
        // Handle successful response
        console.log(response.data);
        setListStaff(response.data);
      })
      .catch(error => {
        console.log(error.response);
      });
  };
  fetchListStaff()
}, []);


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
  const handleChangeWard = async (event:SelectChangeEvent<string>) => {
    setWard(event.target.value);
    const resWard = await axios.get(`https://provinces.open-api.vn/api/w/${event.target.value}`)
    .then(response => {
      // Handle successful response
      setWardName((response.data).name);
    })
    .catch(error => {
      console.log(error)
    })
  };

  const handleImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(Array.from(event.target.files || []));
    setFiles(Array.from(event.target.files || []));
  }

  const handleChangeName = (event:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setName(event.target.value);
  };

  const handleChangeCategories = (event:SelectChangeEvent<unknown>) => {
    const value = event.target.value as YourEnumType;
    setCategories(value);
  };


  const handleChangeSale = (event:SelectChangeEvent<unknown>) => {
    const value = event.target.value as YourEnumType;
    setSale(value);
  };

  const handleChangeHost = (event:SelectChangeEvent<unknown>) => {
      const value = event.target.value as YourEnumType;
      setHost(value);
  };


  const handleChangeBedroom = (event:ChangeEvent<HTMLInputElement>) => {
    setBedroom(event.target.value);
  };

  const handleChangeWC = (event:ChangeEvent<HTMLInputElement>) => {
    setWC(event.target.value);
  };

  const handleChangeStaff = (event:SelectChangeEvent<unknown>) => {
    const value = event.target.value as YourEnumType;
    setStaff(value);
  };

  const handleChangeCommission = (event:ChangeEvent<HTMLInputElement>) => {
    setCommission(event.target.value);
  };

  const handleChangePrice = (event:ChangeEvent<HTMLInputElement>) => {
    setPrice(event.target.value);
  };

  const handleChangeFloor = (event:ChangeEvent<HTMLInputElement>) => {
    setFloor(event.target.value);
  };

  const handleChangeStateSale = (event:SelectChangeEvent<unknown>) => {
    const value = event.target.value as YourEnumType;
    setStateSale(value);
  };

  const handleChangeStateHire = (event:SelectChangeEvent<unknown>) => {
    const value = event.target.value as YourEnumType;
    setSateHire(value);
  };

  const handleChangeMargin = (event:ChangeEvent<HTMLInputElement>) => {
    setMargin(event.target.value);
  };

    const handleChangeLagreRoad = (event:ChangeEvent<HTMLInputElement>) => {
    setLagreRoad(event.target.value);
  };

    const handleChangeCustomer = (event:SelectChangeEvent<unknown>) => {
    const value = event.target.value as YourEnumType;
    setCustomer(value);
  };

  const handleChangeOrientation = (event:SelectChangeEvent<unknown>) => {
    const value = event.target.value as YourEnumType;
    setOrientation(value);
  };

  const handleCreateDateHome = (newDate : Date | null) => {
    setCreatedDateHome(newDate);
  };

  const handleUpdateDateHome = (newDate : Date | null) => {
    setUpdateDateHome(newDate);
  };

  const handleSaleAbleArea = (event:ChangeEvent<HTMLInputElement>) => {
    setSaleAbleArea(event.target.value);
  };

  const handleAdress = (event:ChangeEvent<HTMLInputElement>) => {
    setAdress(event.target.value);
  };

  const handleChangeProductOf = (event:ChangeEvent<HTMLInputElement>) => {
    setProductOf(event.target.value);
  };

  const handleChangeNote = (event:ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value);
  };

  const handleStreet = (event:ChangeEvent<HTMLInputElement>) => {
    setStreet(event.target.value);
  };
  
  const handleChangeHorizontal = (event:ChangeEvent<HTMLInputElement>) => {
    setHorizontal(event.target.value);
  };
  
  const handleChangeArea = (event:ChangeEvent<HTMLInputElement>) => {
    setArea(event.target.value);
  };

  const handleChangePropose = (event:ChangeEvent<HTMLInputElement>) => {
    setPropose(event.target.value);
  };

  const handleChangeAltar = () => {
      setAltar(!altar);
  };  

  const handleChangeGarden = () => {
    setGarden(!garden);
  };  

  const handleChangePackArea = () => {
    setPackArea(!packArea);
  };  
  
  const handleChangePool = () => {
    setPool(!pool);
  };   
  
  const handleChangeTwoFace = () => {
    setAltar(!twoFace);
};  
  const handleClickDeleteImage = (itemToDelete:any) => {
    const newfiles = files.filter(item => item !== itemToDelete);
    setFiles(newfiles);
  };
 
  

const formData = new FormData();
    files.forEach((file, index) => {
      formData.append(`upload_images[${index}]`, file);
    });
    formData.append('adress', adress);
    formData.append('street', street);
    formData.append('ward',wardName);
    formData.append('district', districtName);
    formData.append('city', cityName);
    formData.append('area', area);
    formData.append('saleablearea', saleablearea);   
    formData.append('floor', floor);
    formData.append('wc', wc);
    formData.append('horizontal', horizontal);
    formData.append('lagreRoad', lagreRoad);
    formData.append('margin', margin);
    formData.append('price', price);
    formData.append('commission', commission);
    formData.append('note', note);
    formData.append('propose', propose);
    formData.append('categories', categories);
    formData.append('customer', customer);
    formData.append('host', host);
    formData.append('orientation', orientation);
    formData.append('sale', sale);
    formData.append('staff', staff);
    formData.append('bedroom', bedroom);
    formData.append('stateHire', stateHire);
    formData.append('stateSale', stateSale);
    formData.append('altar', String(altar));
    formData.append('garden', String(garden));
    formData.append('packArea', String(packArea));
    formData.append('pool', String(pool));
    formData.append('productOf', productOf);
    formData.append('twoFace', String(twoFace));
    if (createDateHome !== null) {
      const formattedDate: string = createDateHome.toISOString();
      const formatterYearAndMonth : string = formattedDate.slice(0,8);
      const formatterDateNumber : number = parseInt(formattedDate.slice(8,10)) + 1;
      const formatterDateNumberTypeString : string = String(formatterDateNumber);
      formData.append('post_create_date', formatterYearAndMonth + formatterDateNumberTypeString);
    }
    if (updateDateHome !== null) {
      const formattedDate: string = updateDateHome.toISOString();
      const formatterYearAndMonth : string = formattedDate.slice(0,8);
      const formatterDateNumber : number = parseInt(formattedDate.slice(8,10)) + 1;
      const formatterDateNumberTypeString : string = String(formatterDateNumber);
      formData.append('post_update_date', formatterYearAndMonth + formatterDateNumberTypeString);
    }


const postData = async () => {
  const res = await axios.post(`${urlDeploy}/homeSale/`, formData ,  {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    } )
  .then(response => {
    // Handle successful response
    console.log(response)
    alert("Da them thanh cong");
    setNote('');
    setCity('');
    setWard('');
    setDictrict('');
    setName('');
    setAdress('');
    setStreet('');
    setSale('');
    setPropose('');
    setBedroom('');
    setCategories('');
    setWC('');
    setCommission('');
    setFloor('');
    setMargin('');
    setLagreRoad('');
    setCreatedDateHome(null);
    setUpdateDateHome(null);
    setPrice('');
    setStateSale('');
    setProductOf('');
  })
  .catch(error => {
    alert("Loi , Khong them duoc Khach Hang")
    console.log(error.response);
  });
}

  return (
    <Modal
    open={openModalAddHome}
    onClose={handleAddHome}>
   
    <div className='w-5/6 absolute rounded-lg top-12 p-6 left-32 h-[80%]  bg-white items-center'>
      <h3 className='font-bold text-xl'>Thêm mới Bất Động Sản </h3>
      <br></br>
        <div className='h-[80%] overflow-y-scroll'>
        <form>
        <FormControl  className="mb-2">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']} >
            <DatePicker 
                className='w-full' 
                label="Ngày đăng Bất Động Sản"
                onChange={handleCreateDateHome}
                value={createDateHome}
                />
            </DemoContainer>
            </LocalizationProvider>
        </FormControl>
        <FormControl  className="mb-2 ml-2">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']} >
            <DatePicker 
                className='w-full' 
                label="Ngày cập nhật Bất Động Sản"
                onChange={handleUpdateDateHome}
                value={updateDateHome}
                />
            </DemoContainer>
            </LocalizationProvider>
        </FormControl>
        <FormControl fullWidth className="mb-2">
          <InputLabel htmlFor="amount">Tên bất động sản</InputLabel>
          <OutlinedInput
            id="amount"
            endAdornment={<InputAdornment position="end"><PeopleOutlineOutlinedIcon/></InputAdornment>}
            label="Tên Bất Động Sản"
            onChange={handleChangeName}
            value={name}
          />
        </FormControl>
        <FormControl fullWidth className="mb-2">
  <InputLabel id="demo-simple-select-label">Tên khách hàng*</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={customer}
    onChange={handleChangeCustomer}
    label="Tên khách hàng"
    
  >
      {listCustomer.map(element=>(
        <MenuItem key={element.id} value={element.id}>{element.name}</MenuItem>
      ))}
  </Select>
</FormControl>
<FormControl fullWidth className="mb-2">
  <InputLabel id="demo-simple-select-label">Loại Bất Động Sản</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={categories}
    label="Loại Bất Động Sản"
    onChange={handleChangeCategories}
  >
      {listCategories.map(element=>(
        <MenuItem key={element.id} value={element.id}>{element.name}</MenuItem>
      ))}
  </Select>
</FormControl>
<FormControl fullWidth className="mb-2">
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
<FormControl fullWidth className="mb-2">
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
<FormControl fullWidth className="mb-2">
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
        <FormControl fullWidth className="mb-2">
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
        <FormControl fullWidth className="mb-2">
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
        <p className="p-2">Đặc tính bất động sản</p>
        <FormControl fullWidth className="mb-2">
          <InputLabel htmlFor="amount">Diện tích đất</InputLabel>
          <OutlinedInput
            id="amount"
            endAdornment={<InputAdornment position="end"><PeopleOutlineOutlinedIcon/></InputAdornment>}
            label="Diện tích đất"
            onChange={handleChangeArea}
            value={area}
          />
        </FormControl>
        <FormControl fullWidth className="mb-2">
          <InputLabel htmlFor="amount">Chiều ngang đất*</InputLabel>
          <OutlinedInput
            id="amount"
            endAdornment={<InputAdornment position="end"><PeopleOutlineOutlinedIcon/></InputAdornment>}
            label="Chiều ngang đất*"
            onChange={handleChangeHorizontal}
            value={horizontal}
          />
        </FormControl>
        <FormControl fullWidth className="mb-2">
          <InputLabel htmlFor="amount">Diện tích sàn</InputLabel>
          <OutlinedInput
            id="amount"
            endAdornment={<InputAdornment position="end"><PeopleOutlineOutlinedIcon/></InputAdornment>}
            label="Diện tích sàn"
            onChange={handleSaleAbleArea}
            value={saleablearea}
          />
          </FormControl> 
        <FormControl fullWidth className="mb-2">
          <InputLabel htmlFor="amount">Đường rộng*</InputLabel>
          <OutlinedInput
            id="amount"
            endAdornment={<InputAdornment position="end"><PeopleOutlineOutlinedIcon/></InputAdornment>}
            label="Đường rộng*"
            onChange={handleChangeLagreRoad}
            value={lagreRoad}
          />
        </FormControl>
        <FormControl fullWidth className="mb-2">
          <InputLabel htmlFor="amount">Lề đường</InputLabel>
          <OutlinedInput
            id="amount"
            endAdornment={<InputAdornment position="end"><PeopleOutlineOutlinedIcon/></InputAdornment>}
            label="Lề đường"
            onChange={handleChangeMargin}
            value={margin}
          />
        </FormControl>
        <FormControl fullWidth className="mb-2">
          <InputLabel htmlFor="amount">Số tầng</InputLabel>
          <OutlinedInput
            id="amount"
            endAdornment={<InputAdornment position="end"><PeopleOutlineOutlinedIcon/></InputAdornment>}
            label="Số tầng"
            onChange={handleChangeFloor}
            value={floor}
          />
        </FormControl>
        <FormControl fullWidth className="mb-2">
          <InputLabel htmlFor="amount">Số phòng ngủ</InputLabel>
          <OutlinedInput
            id="amount"
            endAdornment={<InputAdornment position="end"><PeopleOutlineOutlinedIcon/></InputAdornment>}
            label="Số phòng ngủ"
            onChange={handleChangeBedroom}
            value={bedroom}
          />
        </FormControl>
        <FormControl fullWidth className="mb-2">
          <InputLabel htmlFor="amount">Số toilet</InputLabel>
          <OutlinedInput
            id="amount"
            endAdornment={<InputAdornment position="end"><PeopleOutlineOutlinedIcon/></InputAdornment>}
            label="Số toilet"
            onChange={handleChangeWC}
            value={wc}
          />
        </FormControl>
        <FormControl fullWidth className="mb-2">
  <InputLabel id="demo-simple-select-label">Hướng</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={orientation}
    label="Hướng"
    onChange={handleChangeOrientation}
  >
      {listOrientation.map(element=>(
        <MenuItem key={element.id} value={element.id}>{element.name}</MenuItem>
      ))}
  </Select>
  </FormControl>
  <FormControl fullWidth className="mb-2">
          <InputLabel htmlFor="amount">Hoa Hồng</InputLabel>
          <OutlinedInput
            id="amount"
            endAdornment={<InputAdornment position="end"><PeopleOutlineOutlinedIcon/></InputAdornment>}
            label="Số toilet"
            onChange={handleChangeCommission}
            value={commission}
          />
        </FormControl>
        <FormControl fullWidth className="mb-2">
          <InputLabel htmlFor="amount">Giá bán*</InputLabel>
          <OutlinedInput
            id="amount"
            endAdornment={<InputAdornment position="end"><PeopleOutlineOutlinedIcon/></InputAdornment>}
            label="Số toilet"
            onChange={handleChangePrice}
            value={price}
          />
        </FormControl>
        <FormControl fullWidth className="mb-2">
  <InputLabel id="demo-simple-select-label">Trạng thái*</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={stateSale}
    label="Trạng thái*"
    onChange={handleChangeStateSale}
  >
      {listStateSale.map(element=>(
        <MenuItem key={element.id} value={element.id}>{element.name}</MenuItem>
      ))}
  </Select>
  </FormControl>
  <FormControl fullWidth className="mb-2">
          <InputLabel htmlFor="amount">Nguồn từ</InputLabel>
          <OutlinedInput
            id="amount"
            endAdornment={<InputAdornment position="end"><PeopleOutlineOutlinedIcon/></InputAdornment>}
            label="Nguồn từ"
            onChange={handleChangeProductOf}
            value={productOf}
          />
        </FormControl>
        <div className='flex w-full p-2'>
        
        <FormControlLabel control={<Checkbox onChange={handleChangeAltar} checked={altar} />} label="Phòng thờ" />
        <FormControlLabel control={<Checkbox onChange={handleChangeGarden} checked={garden} />} label="Sân vườn" />
        <FormControlLabel control={<Checkbox onChange={handleChangePackArea} checked={packArea} />} label="Bãi đổ xe" />
        <FormControlLabel control={<Checkbox onChange={handleChangePool} checked={pool} />} label="Bể bơi" />
        <FormControlLabel control={<Checkbox onChange={handleChangeTwoFace} checked={twoFace} />} label="Hai mặt tiền" />

      </div>
      <p className="p-2">Thông tin BĐS thuê liên quan</p>
      <FormControl fullWidth className="mb-2">
        <InputLabel id="demo-simple-select-label">Trạng thái*</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={stateHire}
            label="Trạng thái*"
            onChange={handleChangeStateHire}
        >
            {ListStateHire.map(element=>(
                <MenuItem key={element.id} value={element.id}>{element.name}</MenuItem>
            ))}
  </Select>
  </FormControl>
  <p className="p-2">Thông tin bất động sản</p>
  <FormControl fullWidth className="mb-2">
        <InputLabel id="demo-simple-select-label">Chủ Nhà</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={host}
            label="Chủ Nhà"
            onChange={handleChangeHost}
        >
            {listHost.map(element=>(
                <MenuItem key={element.id} value={element.id}>{element.name}</MenuItem>
            ))}
  </Select>
  </FormControl>
  <FormControl fullWidth className="mb-2">
        <InputLabel id="demo-simple-select-label">Nhân Viên Quản Lý</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={staff}
            label="Nhân Viên Quản Lý"
            onChange={handleChangeStaff}
        >
            {listStaff.map(element=>(
                <MenuItem key={element.id} value={element.id}>{element.name}</MenuItem>
            ))}
  </Select>
  </FormControl>
  <FormControl fullWidth className="mb-2">
        <InputLabel id="demo-simple-select-label">Nhân Viên Kinh Doanh</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sale}
            label="Nhân Viên Kinh Doanh"
            onChange={handleChangeSale}
        >
            {listSale.map(element=>(
                <MenuItem key={element.id} value={element.id}>{element.name}</MenuItem>
            ))}
  </Select>
  </FormControl>
  <FormControl fullWidth className="mb-2">
        <TextField
      label="Ghi Chú"
      multiline
      minRows={5}
      maxRows={10}
      value={note}
      onChange={handleChangeNote}
      inputProps={{
          as:TextareaAutosize,
      }}
    >
      
    </TextField>
        </FormControl>
        <FormControl fullWidth className="mb-2">
        <TextField
      label="Mô tả bất động sản"
      multiline
      minRows={5}
      maxRows={10}
      value={propose}
      onChange={handleChangePropose}
      inputProps={{
          as:TextareaAutosize,
      }}
    >
      
    </TextField>
        </FormControl>
        <p className="p-2">Hình ảnh bất động sản</p>
        <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
                Upload file
                <input
                type="file"
                 hidden
                 multiple
                 onChange={handleImage}
                />
        </Button>
        {files.map((element ,key)=>(
              <p key={key}>{element.name} <CloseIcon onClick={()=>handleClickDeleteImage(element)} className="ml-3 hover:cursor-pointer text-red-400 hover:shadow-md"/></p>
             
            ))}
       
        </form>

        </div>
        <Button onClick={handleAddHome} className="p-2 m-2 bg-red-700 text-white font-thin">Thoát</Button>
        <Button onClick={postData} className="p-2 m-2 bg-blue-700 text-white font-thin">Thêm</Button>
    </div>
   
  </Modal>  
    ) 
}

export default AddHomeSale