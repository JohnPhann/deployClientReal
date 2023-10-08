"use client"

import axios from 'axios';
import MenuBar from '@/app/components/MenuBar';
import { Button, Checkbox , TextField , InputAdornment} from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import UnfoldMoreOutlinedIcon from '@mui/icons-material/UnfoldMoreOutlined';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import Chip from '@mui/material/Chip';
import { Theme, useTheme } from '@mui/material/styles';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import CloseIcon from '@mui/icons-material/Close';
import CancelIcon from '@mui/icons-material/Cancel';
import ListItemText from '@mui/material/ListItemText';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { ChangeEvent } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import React,{ useState, useEffect } from 'react';
import AddHomeSale from '@/app/components/AddHomeSale';
import AddHomeOutlinedIcon from '@mui/icons-material/AddHomeOutlined';
import ExitsItem from '@/app/components/ExitsItem';
import NotExitsItem from '@/app/components/NotExitsItem';
import useUtilities from '../../store/store';
const page = () => {
  const urlDeploy = useUtilities((state: { urlDeploy: any; }) => state.urlDeploy);
  const handleAddHome = useUtilities((state: { setModalAddHome: any; }) => state.setModalAddHome);
  const handleExitsItem = useUtilities((state: { setExitsItem: any; }) => state.setExitsItem);
  const handleNotExitsItem = useUtilities((state: { setNotExitsItem: any; }) => state.setNotExitsItem);
  interface ImageItem {
    id: number;
    picture: string;
  }
  
  interface ListItem {
    maBDS: string;
    images: ImageItem[];
    adress: string;
    street: string;
    ward:string;
    district:string;
    city:string;
    area:number;
    saleablearea:string;
    floor:string;
    bedroom:string;
    wc:string;
    horizontal:string;
    largreRoad:string;
    margin:string;
    price:number;
    commission:string;
    note:string;
    propose:string;
    categories:string;
    customer:string;
    host:string;
    orientation:string;
    sale:string;
    staff:string;
    stateHire:string;
    stateSale:string;
    altar:boolean;
    garden:boolean;
    packArea:boolean;
    pool:boolean;
    post_create_date:string;
    post_update_date:string;
    productOf:boolean;
    twoFace:boolean;
  }

  interface ListDictrist  {
    name : string,
    code : number,
    division_type: string,
    codename: string,
    province_code: number,
}

// type YourEnumType = /*unresolved*/ any

interface ListWard  {
  name : string,
  code : number,
  division_type: string,
  codename: string,
  district_code: number
}



  const [list, setList] = useState<ListItem[]>([]);
  const [city ,setCity] = useState<string>('Thành phố Đà Nẵng');
  const [categories ,setCategories] = useState<string>('');
  const [adress ,setAdress] = useState<string>('');
  const [street,setStreet] = useState<string>('');
  let rows:any[] = [];
  let stateHires:any[] = [];

  useEffect(() => {
    const fetchHomeSale = async ():Promise<void> => {
        const res = await axios.get(`${urlDeploy}/homeSale/`)
        .then(response => {
          console.log("HomeSale ===",response.data);
          setList(response.data);
        })
        .catch(error => {
            console.log(error);
        }) 
    };
    fetchHomeSale()
}, []);



  interface Column {
  id: 'maBDS' | 'hinhDaiDien' | 'phanLoaiBDS' | 'adressCity' | 'dientich' | 'numberRoom' | 'line' | 'price'| 'date' | "state" | 'hoaHong' | 'nv' | 'phone' | 'note' | 'dexuat';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
  }

  const columns: readonly Column[] = [
  { id: 'maBDS', label: 'Mã BĐS', minWidth: 170 },
  { id: 'hinhDaiDien', label: 'Hình đại diện', minWidth: 100 },
  { id: 'phanLoaiBDS', label: 'Phân Loại BĐS', minWidth: 100 },
  { id: 'adressCity', label: 'Số Nhà Tên đường - Phường/Xã Quận/Huyện - Tỉnh/Thành Phố', minWidth: 100 },
  { id: 'dientich', label: 'Diện Tích Đất Diện Tích Sàn', minWidth: 100 },
  { id: 'numberRoom', label: 'Số Tầng Số Phòng Ngủ Số WC', minWidth: 100 },
  { id: 'line', label: 'Chiều ngang Đường rộng Lề', minWidth: 100 },
  { id: 'price', label: 'Giá Giá/m2', minWidth: 100 },
  { id: 'date', label: 'Ngày đăng Ngày cập nhật', minWidth: 100 },
  { id: 'state', label: 'Trạng thái Trạng thái BĐS liên quan Giá BĐS liên quan', minWidth: 170 },
  { id: 'hoaHong', label: 'Hoa Hồng', minWidth: 170 },
  { id: 'nv', label: 'NVKD Người chụp ảnh', minWidth: 170 },
  { id: 'phone', label: 'Tên Khách Hàng Số Điện Thoại', minWidth: 170 },
  { id: 'note', label: 'Ghi chú', minWidth: 170 },
  { id: 'dexuat', label: 'Đề xuất', minWidth: 170 },

];

interface Data {
  maBDS: string;
  hinhDaiDien: {
    id: number;
    picture: string;
  };
  phanLoaiBDS: string;
  adressCity: {
    soNha: string;
    tenDuong: string;
    phuongQuan: string;
    tinhThanhPho: string;
  };
  dientich: {
    dienTichDat: number;
    dienTichSan: string;
  };
  numberRoom: {
    soTang: string;
    phongNgu: string;
    wc: string;
  };
  line: {
    chieuNgang: string;
    duongRong: string;
    le: string;
  };
  price: {
    gia: number;
    giaM2: number;
  };
  date: {
    ngayDang: string;
    ngayCapNhat: string;
  };
  state: {
    trangThai: string;
    trangThaiBDSLienQuan: string;
    giaBDSLienQuan: number;
  };
  hoaHong: string;
  nv: {
    nvkd: string;
    nguoichupAnh: string;
  };
  phone: {
    tenKH: string;
    soDienThoai: string;
  };
  note: string;
  dexuat: string;
}

function createData(
  maBDS: string,
  hinhDaiDien: {
    id: number;
    picture: string;
  },
  phanLoaiBDS: string,
  adressCity: {
    soNha: string;
    tenDuong: string;
    phuongQuan: string;
    tinhThanhPho: string;
  },
  dientich: {
    dienTichDat: number;
    dienTichSan: string;
  },
  numberRoom: {
    soTang: string;
    phongNgu: string;
    wc: string;
  },
  line: {
    chieuNgang: string;
    duongRong: string;
    le: string;
  },
  price: {
    gia: number;
    giaM2: number;
  },
  date: {
    ngayDang: string;
    ngayCapNhat: string;
  },
  state: {
    trangThai: string;
    trangThaiBDSLienQuan: string;
    giaBDSLienQuan: number;
  },
  hoaHong: string,
  nv: {
    nvkd: string;
    nguoichupAnh: string;
  },
  phone: {
    tenKH: string;
    soDienThoai: string;
  },
  note: string,
  dexuat: string,
): Data {
  return {
    maBDS,
    hinhDaiDien,
    phanLoaiBDS,
    adressCity,
    dientich,
    numberRoom,
    line,
    price,
    date,
    state,
    hoaHong,
    nv,
    phone,
    note,
    dexuat,
  };
}


list.map(item => (
  rows.push(createData(item.maBDS,{id:item.images[0].id , picture:item.images[0].picture},item.categories,{soNha:item.adress, tenDuong:item.street, phuongQuan:item.ward+"-"+item.district, tinhThanhPho:item.city }, { dienTichDat:item.area, dienTichSan:item.saleablearea }, { soTang: item.floor, phongNgu:item.bedroom, wc:item.wc }, { chieuNgang:item.horizontal, duongRong:item.largreRoad, le:item.margin }, { gia:item.price, giaM2:(item.price/item.area) }, { ngayDang:item.post_create_date, ngayCapNhat:item.post_update_date }, { trangThai:item.stateSale, trangThaiBDSLienQuan:item.stateHire, giaBDSLienQuan:(item.price/12)}, item.commission, { nvkd: item.sale, nguoichupAnh:item.staff }, { tenKH:item.customer, soDienThoai: '090242213' }, item.note, item.propose))
))



  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };




  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
      
    },
  },
};

interface ListCity  {
  name : string,
  code : number,
  division_type: string,
  codename: string,
  phone_code: number,
}

interface ListCategories {
  id:number,
  name:string,
}

interface ListStateHire {
  id:number,
  name:string,
}

interface ListOrientation {
  id:number;
  name:string;
}

interface ListSale  {
  id:number,
  name:string,
  avatar:string,
  phone:string,
  email:string,
  city:string
}

const [listOrientation, setListOrientation] = React.useState<ListOrientation[]>([]);
const [listOrientationSreach, setListOrientationSreach] = React.useState<string[]>([]);
const [listStateHire, setListStateHire] = React.useState<ListStateHire[]>([]);
const [listSale, setListSale] = React.useState<ListSale[]>([]);
const [listCategories, setListCategories] = React.useState<ListCategories[]>([]);
const [listCity, setListCity] = React.useState<ListCity[]>([]);
const [listDictrist, setListDictrist] = React.useState<ListDictrist[]>([]);
const [listWard, setListWard] = React.useState<ListWard[]>([]);
const [listcitySreach, setCitySearch] = React.useState(['Thành phố Đà Nẵng',]);
const [listwardSreach, setWardSreach] = React.useState([]);
const [listDistrictSreach, setDistrictSreach] = React.useState([]);
const [listCategoriesSreach, setCategoriesSreacn] = React.useState([]);
const [listStateHireSreach , setStateHire] = React.useState<string[]>([]);
const [listSaleSreach , setSaleSreach] = React.useState<string[]>([]);



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

useEffect(()=>{
  const fetchDiscit = async ():Promise<void> => {
    const res = await axios.get(`https://provinces.open-api.vn/api/p/48?depth=2`)
    .then(response => {
      // Handle successful response
      setListDictrist((response.data).districts);
    })
    .catch(error => {
      console.log(error.response);
    });
  };
  fetchDiscit();
},[])


useEffect(()=>{ 
    const fetchListSale = async ():Promise<void> => {
        try {
          const response = await axios.get(`${urlDeploy}/sale/`)
          setListSale(response.data);
        } catch (error) {
          console.log(error);
        }   
      }
      fetchListSale();
},[])

useEffect(()=>{ 
  const fetchListStateHire = async ():Promise<void> => {
      try {
        const response = await axios.get(`${urlDeploy}/stateHire/`)
        setListStateHire(response.data);
      } catch (error) {
        console.log(error);
      }   
    }
    fetchListStateHire();
},[])

useEffect(()=>{ 
  const fetchListOrientation = async ():Promise<void> => {
      try {
        const response = await axios.get(`${urlDeploy}/orientation/`)
        setListOrientation(response.data);
      } catch (error) {
        console.log(error);
      }   
    }
    fetchListOrientation();
},[])



// useEffect(()=>{
//   const additemListStateHire = () => {
//     listStateHire.map((item)=>{
//       stateHires.push(item.name);
//     })
//   };
//   additemListStateHire();
// },[listStateHire])

// console.log('stateHires',stateHires);

useEffect(()=>{
    const fetchWard = async ():Promise<void> => {    
      try {
        const response = await axios.get(`https://provinces.open-api.vn/api/p/48?depth=3`)
        const wards:any[] = [];
        const listDisctrict = (response.data).districts;
           for(let i = 0 ; i < listDisctrict.length ; i++){
                for(let j = 0 ; j < listDisctrict[i].wards.length ; j++){
                    if(listDisctrict[i].wards[j] != undefined) {
                      wards.push(listDisctrict[i].wards[j]);
                      
                    }  
                }
           }
           setListWard(wards);
          } catch (error) {
          console.log(error);
      }
    };  
     fetchWard();
  },[])

useEffect(() => {
  const fetchCategories = async ():Promise<void> => {
      try {
      const res = await axios.get(`${urlDeploy}/categories/`)
      setListCategories(res.data);
      }
       catch (error) {
          console.log(error)
       }
    };
    fetchCategories();
}, []);
 

  
  const [personName, setPersonName] = React.useState<string[]>([]);
  const [isShowUpForm , setShowUpForm] = React.useState<boolean>(true);

  const handleShowForm = () => {
    setShowUpForm(!isShowUpForm);
  }

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  }

  type YourEnumType = any;

  const handleChangeCategories = (event: ChangeEvent<HTMLInputElement>) => {
    setCategories(event.target.value);
  };

  const handleChangeStreet = (event: ChangeEvent<HTMLInputElement>) => {
    setStreet(event.target.value);
  };

  

  const handleChangeAdress = (event: ChangeEvent<HTMLInputElement>) => {
    setAdress(event.target.value);
  };
  

  const handleDelete = (event: SelectChangeEvent<typeof personName>,value:string) => {
      event.preventDefault();
      console.log(value);
      const newValue = personName.filter(item => item !== value);
      setPersonName(newValue);
                
};

const handleChangeCategoriesSreach = (event:SelectChangeEvent<unknown>) => {
  const value = event.target.value as YourEnumType;
  setCategoriesSreacn(value);
};




const handleSateHire = (event: SelectChangeEvent<typeof listStateHireSreach>) => {
  const {
    target: { value },
  } = event;
  setStateHire(
    // On autofill we get a stringified value.
    typeof value === 'string' ? value.split(',') : value,
  );
};


const handleChangeOrientation = (event: SelectChangeEvent<typeof listOrientationSreach>) => {
  const {
    target: { value },
  } = event;
  setListOrientationSreach(
    // On autofill we get a stringified value.
    typeof value === 'string' ? value.split(',') : value,
  );
};

const handleSaleSreach = (event: SelectChangeEvent<typeof listSaleSreach>) => {
  const {
    target: { value },
  } = event;
  setSaleSreach(
    // On autofill we get a stringified value.
    typeof value === 'string' ? value.split(',') : value,
  );
};



// const handleSale = (event:SelectChangeEvent<unknown>) => {
//   const value = event.target.value as YourEnumType;
//   setSale(value);
// };

const handleChangeDistrictSreach = (event:SelectChangeEvent<unknown>) => {
  const value = event.target.value as YourEnumType;
  setDistrictSreach(value);
};

const handleChangeWardsSreach = (event:SelectChangeEvent<unknown>) => {
  const value = event.target.value as YourEnumType;
  setWardSreach(value);
};

 const handleResultCheckHomeSale = async () => {
    try {
      const res = await axios.get(`${urlDeploy}/homeSale/?adress=${adress}+&street=${street}&city=${city}&categories=${categories}`).then(response => {
            const result = response.data;
            if(result.length >= 1){
                handleExitsItem();
                console.log("Da co");
            }else {
                handleNotExitsItem();
                console.log("Chua co");
            }
      });
    } catch (error) {
      console.error(error);
    }
  };

interface TableCellProps {
  value: string | number | undefined |{
    chieuNgang: number;
    duongRong: number;
    le: number;
  } | {
    soNha: number;
    tenDuong: string;
    phuongQuan: string;
    tinhThanhPho: string;
  } | {
    dienTichDat: number;
    dienTichSan: number;
  } | {
    soTang: number;
    phongNgu: number;
    wc: number;
  } | {
    gia: number;
    giaM2: number;
  } | {
    ngayDang: string;
    ngayCapNhat: string;
  } | {
    trangThai: {
      id:number,
      name:string,
    };
    trangThaiBDSLienQuan: {
      id:number,
      name:string,
    };
    giaBDSLienQuan: number;
  } | {
    nvkd: {
        id:number,
        name:string,
        avatar:string,
        phone:number,
        email:string,
        city:string,
        role:number,
    };
    nguoichupAnh:{
      id:number,
      name:string,
      avatar:string,
      phone:number,
      email:string,
      city:number,
    }
  } | {
    tenKH:{
      makh: string,
      name: string,
      phone: string,
      email:string,
      adress: string,
      street: string,
      ward:string,
      district:string,
      city:string,
      create_date:string,
      typeCustomer:string,
      sale: {
          id: number,
          name:string,
          avatar:string,
          phone:number,
          email:string,
          city:string,
      },
      representativeName:string,
      phoneNDD:string,
    };
    soDienThoai: string;
  } | {
    id: number;
    picture: string;
  } | {
    id:number;
    name:string;
  };

}



const Cell = ({ value }: TableCellProps)  => {
  console.log("cell-sale",value);
  let renderedValue: JSX.Element | string | number ;
  if (typeof value === "string" || typeof value === "number") {
    return <>{value}</>;    
  } else if (typeof value === "object") {
    if ("chieuNgang" in value) {
      // Handle object with properties chieuNgang, duongRong, and le
      renderedValue = <>{value.chieuNgang}-{value.duongRong}-{value.le}</>;
    } else if ("soNha" in value) {
      // Handle object with properties soNha, tenDuong, phuongQuan, and tinhThanhPho
      renderedValue = <>{value.soNha}, {value.tenDuong}, {value.phuongQuan}, {value.tinhThanhPho}</>;
    } else if ("dienTichDat" in value) {
      // Handle object with properties dienTichDat and dienTichSan
      renderedValue = <>{value.dienTichDat}-{value.dienTichSan}</>;
    } else if ("soTang" in value) {
      // Handle object with properties soTang, phongNgu, and wc
      renderedValue = <>{value.soTang}-{value.phongNgu}-{value.wc}</>;
    } else if ("gia" in value) {
      // Handle object with properties gia and giaM2
      renderedValue = <>{value.gia}-{value.giaM2}</>;
    } else if ("ngayDang" in value) {
      // Handle object with properties ngayDang and ngayCapNhat
      renderedValue = <>{value.ngayDang}-{value.ngayCapNhat}</>;
    } else if ("trangThai" in value) {
      // Handle object with properties trangThai, trangThaiBDSLienQuan, and giaBDSLienQuan
      renderedValue = <>{value.trangThai.name}-{value.trangThaiBDSLienQuan.name}-{value.giaBDSLienQuan}</>;
    } else if ("nvkd" in value) {
      // Handle object with properties nvkd and nguoichupAnh
      renderedValue = <>{value.nvkd.name}-{value.nguoichupAnh.name}</>;
    } else if ("tenKH" in value) {
      // Handle object with properties tenKH and soDienThoai
      renderedValue = <>{value.tenKH.name}-{value.soDienThoai}</>;      
    } else if ("picture" in value) {
      renderedValue = <><img src={value.picture} alt="" /></>; 
    } else if("name" in value) {
      renderedValue = <>{value.name}</>;
    } else {
      renderedValue = "....";
    }
   
  return renderedValue;
  }
}
  return (
    <>
    <MenuBar />
<div className='w-full h-auto pt-10'>
    <div className='w-[95%] shadow-xl h-auto mx-auto p-4'>
          <p className="text-2xl">Nhà Đất Bán</p>
          <p>Kiểm tra trùng lặp bất động sản</p>
          <br></br>
        <div className='w-full h-auto flex'>
          <form>      
          <TextField
                    label='*Số nhà, kiệt, hẻm....'
                    type="text"
                    variant="outlined"
                    className='w-[15%] h-[1%] mr-2'
                    value={adress}
                    onChange={handleChangeAdress}
                    
                  />         
          <TextField
                    label='*Tên đường'
                    type="text"
                    variant="outlined"
                    className=' mr-2'
                    value={street}
                    onChange={handleChangeStreet}
                  /> 
          <TextField
                    label='*Tỉnh Thành Phố'
                    select
                    variant="outlined"
                    className=' mr-2'
                    defaultValue={city}
                  >
                    {listCity.map((option) => (
                      <MenuItem key={option.code} value={option.name}>
                        {option.name}
                      </MenuItem>
                    ))}  
         </TextField>
         <TextField
                    style={{ width: '300px' }}
                    label='Loại BĐS'
                    select
                    variant="outlined"
                    className=' mr-2'
                    value={categories}
                    onChange={handleChangeCategories}
                  >
                    {listCategories.map((option) => (
                      <MenuItem key={option.id} value={option.id}>
                        {option.name}
                      </MenuItem>
                    ))}  
         </TextField>
         <Button onClick={handleResultCheckHomeSale} className="p-2 mt-2 bg-blue-700 hover:bg-blue-500  text-white">Kiểm tra <GraphicEqIcon/></Button>
          </form>
      </div>
          <div className='w-full h-auto  flex'>
            <p className='p-4'>Lọc bất động sản</p>
            <Button onClick={handleShowForm} className="p-2 mt-2 bg-blue-700 hover:bg-blue-500 text-white">Nhập thông tin lọc<UnfoldMoreOutlinedIcon/></Button>
            <Button className="p-2 mt-2 ml-3 bg-blue-700 hover:bg-blue-500 text-white"><RefreshOutlinedIcon/></Button>
          </div>
        {isShowUpForm ? (<form>
        <div className='w-full h-auto  flex'>
        <FormControl sx={{ m: 1, width: 220 }}>
        <InputLabel id="demo-multiple-chip-label">Loại BĐS</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={listCategoriesSreach}
          onChange={handleChangeCategoriesSreach}
          input={<OutlinedInput id="select-multiple-chip" label="Loại BĐS" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip  
                deleteIcon={
                    <CancelIcon onMouseDown={(e)=>e.stopPropagation()} />
                      }
                    onDelete={(e)=>handleDelete(e,value)}
                     key={value} label={value} clickable /> 
                      ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
         {listCategories.map((option) => (
                      <MenuItem key={option.id} value={option.name}>
                        {option.name}
                      </MenuItem>
                    ))}  
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, width: 220 }}>
        <InputLabel id="demo-multiple-chip-label">Tỉnh thành phố</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          label="Tỉnh thành phố"
          value={listcitySreach}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Tỉnh thành phố" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip  
                deleteIcon={
                    <CancelIcon onMouseDown={(e)=>e.stopPropagation()} />
                      }
                    onDelete={(e)=>handleDelete(e,value)}
                     key={value} label={value} clickable /> 
                      ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
         {listCity.map((option) => (
                      <MenuItem key={option.code} value={option.name}>
                        {option.name}
                      </MenuItem>
                    ))}  
        </Select>
      </FormControl>
      
      <FormControl sx={{ m: 1, width: 220 }}>
        <InputLabel id="demo-multiple-chip-label">Quận</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={listDistrictSreach}
          onChange={handleChangeDistrictSreach}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip  
                deleteIcon={
                    <CancelIcon onMouseDown={(e)=>e.stopPropagation()} />
                      }
                    onDelete={(e)=>handleDelete(e,value)}
                     key={value} label={value} clickable /> 
                      ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
         {listDictrist?.map((option) => (
                      <MenuItem key={option.code} value={option.name}>
                        {option.name}
                      </MenuItem>
                    ))}  
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, width: 220 }}>
        <InputLabel id="demo-multiple-chip-label">Phường</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={listwardSreach}
          onChange={handleChangeWardsSreach}
          input={<OutlinedInput id="select-multiple-chip" label="Phường" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip  
                deleteIcon={
                    <CancelIcon onMouseDown={(e)=>e.stopPropagation()} />
                      }
                    onDelete={(e)=>handleDelete(e,value)}
                     key={value} label={value} clickable /> 
                      ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
         {listWard?.map((option) => (
                      <MenuItem key={option.code} value={option.name}>
                        {option.name}
                      </MenuItem>
                    ))}  
        </Select>
      </FormControl>

      <TextField sx={{ m: 1, width: 220 }}
                    label='Tên đường'
                    type="text"
                    variant="outlined"
                    className=' mt-2'
                    
                  />
      </div>

      <div className='w-full h-auto  flex'>
        <TextField sx={{ m: 1, width: 110 }}
                    label='Diện tích (từ)'
                    type="text"
                    variant="outlined"
                    className=' mt-2'
                    
                  />
        <TextField sx={{ m: 1, width: 110 }}
                    label='(Đến)'
                    type="text"
                    variant="outlined"
                    className=' mt-2'
                    
                  />
        <TextField sx={{ m: 1, width: 110 }}
                    label='Chiều ngang'
                    type="text"
                    variant="outlined"
                    className=' mt-2'
                    
                  />
        <TextField sx={{ m: 1, width: 110 }}
                    label='(Đến)'
                    type="text"
                    variant="outlined"
                    className=' mt-2'
                    
                  />
        <TextField sx={{ m: 1, width: 110 }}
                    label='Giá (từ)'
                    type="text"
                    variant="outlined"
                    className=' mt-2'
                  
                  />
        <TextField sx={{ m: 1, width: 110 }}
                    label='(Đến)'
                    type="text"
                    variant="outlined"
                    className=' mt-2'
                    
                  />

<FormControl sx={{ m: 1, width: 220 }}>
        <InputLabel id="demo-multiple-chip-label">Hướng</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={listOrientationSreach}
          onChange={handleChangeOrientation}
          input={<OutlinedInput id="select-multiple-chip" label="Hướng" />}
          renderValue={(selected) => selected.join(', ')}
        >
         {listOrientation.map((option) => (
                         <MenuItem key={option.id} value={option.name}>
                         {/* <Checkbox checked={personName.indexOf(option.name) > -1} /> */}
                         <ListItemText primary={option.name} />
                          </MenuItem>
                    ))}  
        </Select>
      </FormControl>
        

        <TextField sx={{ m: 1, width: 110 }}
                    label='Số tầng (từ)'
                    type="text"
                    variant="outlined"
                    className=' mt-2'
                    
                  />
        <TextField sx={{ m: 1, width: 110 }}
                    label='(Đến)'
                    type="text"
                    variant="outlined"
                    className=' mt-2'
                    
                  />           
      </div>

      <div className='w-full h-auto  flex'>
        <TextField sx={{ m: 1, width: 110 }}
                    label='Số phòng khách (từ)'
                    type="text"
                    variant="outlined"
                    className=' mt-2'
                    
                  />
        <TextField sx={{ m: 1, width: 110 }}
                    label='(Đến)'
                    type="text"
                    variant="outlined"
                    className=' mt-2'
                    
                  />
        <TextField sx={{ m: 1, width: 110 }}
                    label='Số phòng ngủ'
                    type="text"
                    variant="outlined"
                    className=' mt-2'
                    
                  />
        <TextField sx={{ m: 1, width: 110 }}
                    label='(Đến)'
                    type="text"
                    variant="outlined"
                    className=' mt-2'
                    
                  />
        <TextField sx={{ m: 1, width: 110 }}
                    label='Toilet (từ)'
                    type="text"
                    variant="outlined"
                    className=' mt-2'
                  
                  />
        <TextField sx={{ m: 1, width: 110 }}
                    label='(Đến)'
                    type="text"
                    variant="outlined"
                    className=' mt-2'
                    
                  />


    <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker sx={{ m: 1, width: 110 }}
              label="Ngày đăng"     
            />
  </LocalizationProvider> 

  <LocalizationProvider dateAdapter={AdapterDayjs}>     
            <DatePicker sx={{ m: 1, width: 110 }}
              label="(Đến)"
               
            />
  </LocalizationProvider> 

  <LocalizationProvider dateAdapter={AdapterDayjs}>     
            <DatePicker sx={{ m: 1, width: 110 }}
              label="Ngày cập nhật"
                   
            />
  </LocalizationProvider> 

  <LocalizationProvider dateAdapter={AdapterDayjs}>    
            <DatePicker sx={{ m: 1, width: 110 }}
              label="(Đến)"
              
            />
  </LocalizationProvider>                               
        </div>

        <div className='w-full h-auto flex'>
       

      <FormControl sx={{ m: 1, width: 220 }}>
        <InputLabel id="demo-multiple-chip-label">Trạng thái</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={listStateHireSreach}
          onChange={handleSateHire}
          input={<OutlinedInput id="select-multiple-chip" label="Trạng thái" />}
          renderValue={(selected) => selected.join(', ')}
        >
         {listStateHire.map((option) => (
                         <MenuItem key={option.id} value={option.name}>
                         {/* <Checkbox checked={personName.indexOf(option.name) > -1} /> */}
                         <ListItemText primary={option.name} />
                          </MenuItem>
                    ))}  
        </Select>
      </FormControl>

      <TextField sx={{ m: 1, width: 220 }}
                    label='Từ khoá'
                    type="text"
                    variant="outlined"
                    className=' mt-2'
                    
                  />
        <TextField sx={{ m: 1, width: 220 }}
                    label='Số điện thoại người bán'
                    type="text"
                    variant="outlined"
                    className=' mt-2'
                    
                  /> 

<FormControl sx={{ m: 1, width: 220 }}>
        <InputLabel id="demo-multiple-chip-label">Nhân Viên</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={listSaleSreach}
          onChange={handleSaleSreach}
          input={<OutlinedInput id="select-multiple-chip" label="Nhân Viên" />}
          renderValue={(selected) => selected.join(', ')}
        >
         {listSale.map((option) => (
                         <MenuItem key={option.id} value={option.name}>
                         {/* <Checkbox checked={personName.indexOf(option.name) > -1} /> */}
                         <ListItemText primary={option.name} />
                          </MenuItem>
                    ))}  
        </Select>
      </FormControl>

           <FormControl sx={{  width: 220 }}>
           <TextField sx={{ m: 1, width: 220 }}
                    label='Phòng ban'
                    type="text"
                    variant="outlined"
                    className=' mt-2'
                    
                  />
            </FormControl>
        
        </div>
        <div className='flex w-full'>
        
          <FormControlLabel control={<Checkbox />} label="Phòng thờ" />
          <FormControlLabel control={<Checkbox />} label="Sân vườn" />
          <FormControlLabel control={<Checkbox />} label="Sân thượng" />
          <FormControlLabel control={<Checkbox />} label="Bãi đổ xe" />
          <FormControlLabel control={<Checkbox />} label="Bể bơi" />
          <FormControlLabel control={<Checkbox />} label="Hai mặt tiền" />
  
        </div>
         <Button className="p-2 m-2 bg-blue-700 hover:bg-blue-500 text-white font-thin">Lọc <GraphicEqIcon/></Button>
          <Button className="p-2 m-2 bg-blue-700 hover:bg-blue-500 text-white font-thin">Clear số liệu nhập</Button>
      </form>) : (" ")}
     <p>Danh sách bất động sản</p>
     <Paper className="mt-3" sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 1200 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.maBDS}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                                 {Cell({value})}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </div>
    <Button onClick={handleAddHome} className="fixed top-[85%] rounded-full left-[94%] z-50 p-5 bg-blue-700 hover:bg-blue-500  text-white"><AddHomeOutlinedIcon /></Button>
   
</div>
  <AddHomeSale />
  <ExitsItem />
  <NotExitsItem />
    </>
  )
}

export default page
