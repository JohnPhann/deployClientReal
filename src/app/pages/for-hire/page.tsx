"use client"

import React from 'react';
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

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { ConstructionOutlined } from '@mui/icons-material';



const page = () => {


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
  { id: 'adressCity', label: 'Số Nhà - Tên đường - Phường/Xã Quận/Huyện - Tỉnh/Thành Phố', minWidth: 250 },
  { id: 'dientich', label: 'Diện Tích - Đất Diện Tích Sàn', minWidth: 200 },
  { id: 'numberRoom', label: 'Số Tầng - Số Phòng Ngủ - Số WC', minWidth: 200 },
  { id: 'line', label: 'Chiều ngang - Đường rộng - Lề', minWidth: 200 },
  { id: 'price', label: 'Giá - Giá/m2', minWidth: 100 },
  { id: 'date', label: 'Ngày đăng - Ngày cập nhật', minWidth: 200 },
  { id: 'state', label: 'Trạng thái - Trạng thái BĐS liên quan Giá BĐS liên quan', minWidth: 250 },
  { id: 'hoaHong', label: 'Hoa Hồng', minWidth: 100 },
  { id: 'nv', label: 'NVKD - Người chụp ảnh', minWidth: 250 },
  { id: 'phone', label: 'Tên Khách Hàng - Số Điện Thoại', minWidth: 250 },
  { id: 'note', label: 'Ghi chú', minWidth: 100 },
  { id: 'dexuat', label: 'Đề xuất', minWidth: 100 },

];

interface Data {
  maBDS: string;
  hinhDaiDien: string;
  phanLoaiBDS: string;
  adressCity: {
    soNha: number;
    tenDuong: string;
    phuongQuan: string;
    tinhThanhPho: string;
  };
  dientich: {
    dienTichDat: number;
    dienTichSan: number;
  };
  numberRoom: {
    soTang: number;
    phongNgu: number;
    wc: number;
  };
  line: {
    chieuNgang: number;
    duongRong: number;
    le: number;
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
  hoaHong: number;
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
  hinhDaiDien: string,
  phanLoaiBDS: string,
  adressCity: {
    soNha: number;
    tenDuong: string;
    phuongQuan: string;
    tinhThanhPho: string;
  },
  dientich: {
    dienTichDat: number;
    dienTichSan: number;
  },
  numberRoom: {
    soTang: number;
    phongNgu: number;
    wc: number;
  },
  line: {
    chieuNgang: number;
    duongRong: number;
    le: number;
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
  hoaHong: number,
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

const rows = [
  createData('BDS-SALE-00341', 'Hinh', 'dang ban', { soNha: 23, tenDuong: 'Le Duan', phuongQuan: 'Tan Chinh - Thanh Khe', tinhThanhPho: 'Tp Da Nang' }, { dienTichDat: 120, dienTichSan: 300 }, { soTang: 3, phongNgu: 3, wc: 2 }, { chieuNgang: 5, duongRong: 10, le: 4 }, { gia: 5000000000, giaM2: 100000 }, { ngayDang: '12/02/2020', ngayCapNhat: '2/08/2023' }, { trangThai: 'Dang Ban', trangThaiBDSLienQuan: 'Da Huy', giaBDSLienQuan: 120000 }, 100000, { nvkd: 'Tran Van A', nguoichupAnh: 'Tran van Anh' }, { tenKH: 'Huynh Van A', soDienThoai: '090242213' }, 'Goi k nge may', 'ABC'),
  createData('BDS-SALE-00342', 'Hinh', 'dang ban', { soNha: 23, tenDuong: 'Le Duan', phuongQuan: 'Tan Chinh - Thanh Khe', tinhThanhPho: 'Tp Da Nang' }, { dienTichDat: 120, dienTichSan: 300 }, { soTang: 3, phongNgu: 3, wc: 2 }, { chieuNgang: 5, duongRong: 10, le: 4 }, { gia: 5000000000, giaM2: 100000 }, { ngayDang: '12/02/2020', ngayCapNhat: '2/08/2023' }, { trangThai: 'Dang Ban', trangThaiBDSLienQuan: 'Da Huy', giaBDSLienQuan: 120000 }, 100000, { nvkd: 'Tran Van A', nguoichupAnh: 'Tran van Anh' }, { tenKH: 'Huynh Van A', soDienThoai: '090242213' }, 'Goi k nge may', 'ABC'),
  createData('BDS-SALE-00343', 'Hinh', 'dang ban', { soNha: 23, tenDuong: 'Le Duan', phuongQuan: 'Tan Chinh - Thanh Khe', tinhThanhPho: 'Tp Da Nang' }, { dienTichDat: 120, dienTichSan: 300 }, { soTang: 3, phongNgu: 3, wc: 2 }, { chieuNgang: 5, duongRong: 10, le: 4 }, { gia: 5000000000, giaM2: 100000 }, { ngayDang: '12/02/2020', ngayCapNhat: '2/08/2023' }, { trangThai: 'Dang Ban', trangThaiBDSLienQuan: 'Da Huy', giaBDSLienQuan: 120000 }, 100000, { nvkd: 'Tran Van A', nguoichupAnh: 'Tran van Anh' }, { tenKH: 'Huynh Van A', soDienThoai: '090242213' }, 'Goi k nge may', 'ABC'),
];


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


    
  const currencies = [
    {
      value: 'TP. Đà Nẵng',
      label: 'TP. Đà Nẵng',
    },
    {
      value: 'TP. Hội An',
      label: 'TP. Hội An',
    },
    {
      value: 'TP. HCM',
      label: 'TP. HCM',
    },
    {
      value: 'TP. Quy Nhơn',
      label: 'TP. Quy Nhơn',
    },
  ];

  
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

  const handleDelete = (event: SelectChangeEvent<typeof personName>,value:string) => {
      event.preventDefault();
      console.log(value);
      const newValue = personName.filter(item => item !== value);
      setPersonName(newValue);
                
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
    trangThai: string;
    trangThaiBDSLienQuan: string;
    giaBDSLienQuan: number;
  } | {
    nvkd: string;
    nguoichupAnh: string;
  } | {
    tenKH: string;
    soDienThoai: string;
  };

}



const Cell = ({ value }: TableCellProps)  => {
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
      renderedValue = <>{value.trangThai}-{value.trangThaiBDSLienQuan}-{value.giaBDSLienQuan}</>;
    } else if ("nvkd" in value) {
      // Handle object with properties nvkd and nguoichupAnh
      renderedValue = <>{value.nvkd}-{value.nguoichupAnh}</>;
    } else if ("tenKH" in value) {
      // Handle object with properties tenKH and soDienThoai
      renderedValue = <>{value.tenKH}-{value.soDienThoai}</>;      
    } else {
      renderedValue = ".....";
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
                   
                    
                  />         
          <TextField
                    label='*Tên đường'
                    type="text"
                    variant="outlined"
                    className=' mr-2'
                    
                  /> 
          <TextField
                    label='*Tỉnh Thành Phố'
                    select
                    variant="outlined"
                    className=' mr-2'
                    defaultValue="TP. Đà Nẵng"
                  >
                    {currencies.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}  
         </TextField>
         <TextField
                    style={{ width: '300px' }}
                    label='Loại BĐS'
                    select
                    variant="outlined"
                    className=' mr-2'
                  >
                    {currencies.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}  
         </TextField>
         <Button className="p-2 mt-2  text-white">Kiểm tra <GraphicEqIcon/></Button>
          </form>
      </div>
          <div className='w-full h-auto  flex'>
            <p className='p-4'>Lọc bất động sản</p>
            <Button onClick={handleShowForm} className="p-2 mt-2 bg-blue-700 text-white">Nhập thông tin lọc<UnfoldMoreOutlinedIcon/></Button>
            <Button className="p-2 mt-2 ml-3 bg-blue-700 text-white"><RefreshOutlinedIcon/></Button>
          </div>
        {isShowUpForm ? (<form>
        <div className='w-full h-auto  flex'>
        <FormControl sx={{ m: 1, width: 220 }}>
        <InputLabel id="demo-multiple-chip-label">Loại BĐS</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={personName}
          onChange={handleChange}
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
         {currencies.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
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
          value={personName}
          onChange={handleChange}
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
         {currencies.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
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
          value={personName}
          onChange={handleChange}
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
         {currencies.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
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
          value={personName}
          onChange={handleChange}
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
         {currencies.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
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
          value={personName}
          onChange={handleChange}
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
         {currencies.map((option) => (
                         <MenuItem key={option.label} value={option.value}>
                         <Checkbox checked={personName.indexOf(option.label) > -1} />
                         <ListItemText primary={option.value} />
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
          value={personName}
          onChange={handleChange}
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
         {currencies.map((option) => (
                         <MenuItem key={option.label} value={option.value}>
                         <Checkbox checked={personName.indexOf(option.label) > -1} />
                         <ListItemText primary={option.value} />
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
        <InputLabel id="demo-multiple-chip-label">Nhân viên</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={personName}
          onChange={handleChange}
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
         {currencies.map((option) => (
                         <MenuItem key={option.label} value={option.value}>
                         <Checkbox checked={personName.indexOf(option.label) > -1} />
                         <ListItemText primary={option.value} />
                          </MenuItem>
                    ))}  
        </Select>
        </FormControl>

           <FormControl sx={{ m: 1, width: 220 }}>
        <InputLabel id="demo-multiple-chip-label">Phòng ban</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={personName}
          onChange={handleChange}
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
         {currencies.map((option) => (
                         <MenuItem key={option.label} value={option.value}>
                         <Checkbox checked={personName.indexOf(option.label) > -1} />
                         <ListItemText primary={option.value} />
                          </MenuItem>
                    ))}  
        </Select>
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
         <Button className="p-2 m-2 bg-blue-700 text-white font-thin">Lọc <GraphicEqIcon/></Button>
          <Button className="p-2 m-2 bg-blue-700 text-white font-thin">Clear số liệu nhập</Button>
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
</div>
    </>
  )
}

export default page
