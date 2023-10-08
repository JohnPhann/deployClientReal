"use client"

import React, { ChangeEvent } from 'react';
import MenuBar from '@/app/components/MenuBar';
import { Button, Checkbox , TextField , InputAdornment} from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import RefreshIcon from '@mui/icons-material/Refresh';
import Tooltip from '@mui/material/Tooltip';
import { useState, useEffect } from 'react';
import axios from 'axios';
import RegisterCustomer from '@/app/components/RegisterCustomer';
import useUtilities from '../../store/store';
import { orange, pink } from '@mui/material/colors';
const page = () => {
  const handleModalRegisterCustomer = useUtilities(state => state.setModalRegisterCustomer);
  const urlDeploy = useUtilities(state => state.urlDeploy);
  interface ListItem {
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

  const [list, setList] = useState<ListItem[]>([]);
  let rows:any[] = [];
  useEffect(() => {
    const fetchCustomer = async ():Promise<void> => {
        const res = await axios.get(`${urlDeploy}/customer/`)
        setList(res.data)
       
    };
    fetchCustomer()
}, []);

function createData(
  makh: string,
  ten: string,
  phone: string,
  email: string,
  nvkd: string,
  ngayTaoTaiKhoan:string,
  adressCity: {
    soNha: string;
    tenDuong: string;
    phuong: string;
    quan:string;
    tinhThanhPho: string;
  },
  kh:string,
  tenNguoiDaiDien:string,
  soDienThoaiNDD:string,
): Data {
  return {
    makh,
    ten,
    phone,
    email,
    nvkd,
    ngayTaoTaiKhoan,
    adressCity,
    kh,
    tenNguoiDaiDien,
    soDienThoaiNDD, 
  };
}

list.map(item => (
      rows.push(createData(item.makh,item.name,item.phone,item.email,item.sale,item.create_date,{ soNha:item.adress, tenDuong:item.street, phuong:item.ward,quan:item.district, tinhThanhPho: item.city },item.typeCustomer, item.representativeName, item.phoneNDD))
))


  interface Column {
  id: 'makh' | 'ten' | 'phone' | 'email' | 'nvkd' | 'ngayTaoTaiKhoan' | 'adressCity'| 'kh' | "tenNguoiDaiDien" | 'soDienThoaiNDD';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
  }

  const columns: readonly Column[] = [
  { id: 'makh', label: 'Mã KH', minWidth: 170 },
  { id: 'ten', label: 'Tên', minWidth: 200 },
  { id: 'phone', label: 'Số Điện Thoại', minWidth: 200 },
  { id: 'email', label: 'Email', minWidth: 150 },
  { id: 'nvkd', label: 'NVKD', minWidth: 150 },
  { id: 'ngayTaoTaiKhoan', label: 'Ngày Tạo Tài Khoản', minWidth: 200 },
  { id: 'adressCity', label: 'Số Nhà - Tên Đường - Phường/Xã - Quận/Huyện - Tỉnh/Thành Phố', minWidth: 250 },
  { id: 'kh', label: 'Nhóm khách hàng', minWidth: 100 },
  { id: 'tenNguoiDaiDien', label: 'Tên người đại diện', minWidth: 150 },
  { id: 'soDienThoaiNDD', label: 'Số điện thoại NDD', minWidth: 200 },
  
];

interface Data {
  makh: string;
  ten: string;
  phone: string;
  email: string;
  nvkd: string;
  ngayTaoTaiKhoan:string;
  adressCity: {
    soNha: string;
    tenDuong: string;
    phuong: string;
    quan:string;
    tinhThanhPho: string;
  };
  kh:string;
  tenNguoiDaiDien:string;
  soDienThoaiNDD:string;
}




  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);


  const [search, setSearch] = React.useState('');

  

  const handleSearch = (event:ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };


  const searchCustomer = async ():Promise<void> => {
      const res = await axios.get(`${urlDeploy}/customer/?search=${search}`)
      .then(response => {
      // Handle successful response
        setList(response.data)
      })
       .catch(error => {
           console.log(error.response);
        });
     };
    
  
  const handleReset = () => {
      setSearch('');
  };



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




interface TableCellProps {
  value: string | number | undefined |{
    chieuNgang: number;
    duongRong: number;
    le: number;
  } | {
    soNha: number;
    tenDuong: string;
    phuong: string;
    quan:string;
    tinhThanhPho: string;
  } | {
    avatar:string;
    city:string;
    email:string;
    id:number;
    name:string;
    phone:number;
  }
 
}



const Cell = ({ value }: TableCellProps)  => {
  let renderedValue: JSX.Element | string | number | null | undefined = undefined;
  console.log("Cell",value);
  if (typeof value === "string" || typeof value === "number" || value === null) {
    renderedValue = <>{value}</>;
   
  } else if (typeof value === "object"  && value !== null) {
    if ("soNha" in value  && value !== null) {
      // Handle object with properties soNha, tenDuong, phuongQuan, and tinhThanhPho
      renderedValue = <>{value.soNha}, {value.tenDuong}, {value.phuong} , {value.quan}, {value.tinhThanhPho}</>;    
    } else if("name" in value && value != null) {
      renderedValue = <>{value.name}</>;
    } else {
      renderedValue = "......"
    }
  }
  return renderedValue;
}
  return (
    <>
    <MenuBar />
<div className='w-full h-auto pt-10'>
    <div className='w-[95%] shadow-xl h-auto mx-auto p-4'>
          <p className="text-2xl">JOHN PHAN LAND</p>
          <p className='text-2xl'>Quản lý khách hàng</p>
          <br></br>

     <p>Danh sách khách hàng</p>
    
     <Button onClick={handleModalRegisterCustomer} className="p-2 mt-2 ml-2"><Tooltip title="Thêm khách hàng mới"><AddCircleOutlinedIcon sx={{ fontSize: 50 , color: orange[700] }}/></Tooltip></Button>
     <Button onClick={handleReset} className="p-2 mt-2 "><Tooltip title="Refresh"><RefreshIcon sx={{ fontSize: 50 ,color: orange[700] }} /></Tooltip></Button>
     <TextField
                    label='Nhập Tên/Sđt'
                    type="text"
                    variant="outlined"
                    className='m-5'
                    size="small"
                    onChange={handleSearch}
                    value={search}
                  />
    <Button onClick={searchCustomer} className="p-2 mt-2 bg-orange-700 text-white">Tìm</Button> 
     <Paper className="mt-3" sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 700 }}>
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
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.makh}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      console.log("ddd",value)
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
    <RegisterCustomer />
</div>
    </>
  )
}

export default page
