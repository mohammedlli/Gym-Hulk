import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { DeleteOutlined,RetweetOutlined,CloseOutlined,SearchOutlined} from '@ant-design/icons';
import { Input, Result } from 'antd';
import { useEffect, useState } from "react";
import { db } from "../../../Firebase/Firebase";
import {collection,query,onSnapshot} from 'firebase/firestore';
import UpdateCustmer from '../../Addition/UpdateCustmer';
import DeleteCusmer from '../../Addition/DeleteCusmer';

export default function Costmer({gender}){
    const [townewReviewrs, setTowNewReviewrs] = useState([]);
    const [notFond , setNotFond] = useState(true);
    const [update,setUpdate] = useState(false);
    const [d,setD] = useState('');
    const [updatename,setUpdateName] = useState('');
    const [delet , setDelte] = useState(false);
    const [deleteName , setDelteName] = useState(false);
    const [deleteID,setDeleteID] = useState('');
    const [search , setSearch] = useState('');

    function handelDelete(idd,nd){
        setDelteName(nd);
        setDeleteID(idd);
        setDelte(!delet);

    }
    function handelUpdate(id,n){
        setD(id);
        setUpdateName(n)
        setUpdate(!update)
    }
    useEffect(() => {
        setNotFond(true);
        const s = query(collection(db, 'costemer'));
        onSnapshot(s, (querySnapshot) => {
        console.log(querySnapshot);
        setTowNewReviewrs(
            querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
            }))
        );
        });
        setNotFond(false);
    }, []);

const y=townewReviewrs.filter((d)=>{
    if(d.gender === gender)
    return townewReviewrs;
})
const mainRev = y.filter((user)=>
user.name.toLowerCase().includes(search) || user.numberphone.toLowerCase().includes(search))
return<> 
<div className='search'>
<Input className="input-search" value={search}
            onChange={(e)=>setSearch(e.target.value)}
            size="large" placeholder="البحث" prefix={<SearchOutlined />} /></div>
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650}} aria-label="simple table">
            <TableHead>
            <TableRow sx={{backgroundColor:"#efeeee",boxShadow:"0 0 5px -1px"}}>
                <TableCell sx={{fontFamily: "'Noto Sans Arabic', sans-serif",fontWeight:"600"}}align="center">N.</TableCell>
                <TableCell sx={{fontFamily: "'Noto Sans Arabic', sans-serif",fontWeight:"600"}}align="center">الاسم</TableCell>
                <TableCell sx={{fontFamily: "'Noto Sans Arabic', sans-serif",fontWeight:"600"}} align="center">رقم الهاتف</TableCell>
                <TableCell sx={{fontFamily: "'Noto Sans Arabic', sans-serif",fontWeight:"600"}}align="center">تاريخ البدأ</TableCell>
                <TableCell sx={{fontFamily: "'Noto Sans Arabic', sans-serif",fontWeight:"600"}}align="center">تاريخ الانتهاء</TableCell>
                <TableCell sx={{fontFamily: "'Noto Sans Arabic', sans-serif",fontWeight:"600"}}align="center">الاجرائات</TableCell>

            </TableRow>
            </TableHead>
            <TableBody>
            {mainRev.map((row,index) => (
                <>
                <TableRow key={row.index}>
                <TableCell sx={{fontFamily: "'Noto Sans Arabic', sans-serif"}}align="center">{index+1}</TableCell>
                <TableCell sx={{fontFamily: "'Noto Sans Arabic', sans-serif"}}align="center">{row.name}</TableCell>
                <TableCell sx={{fontFamily: "'Noto Sans Arabic', sans-serif"}}align="center">{row.numberphone}</TableCell>
                <TableCell sx={{fontFamily: "'Noto Sans Arabic', sans-serif"}}align="center">{row.mounth_1}/{row.day_1}/{row.year_1}</TableCell>
                <TableCell sx={{fontFamily: "'Noto Sans Arabic', sans-serif"}}align="center">{row.mounth_2}/{row.day_2}/{row.year_2}</TableCell>
                <TableCell sx={{fontFamily: "'Noto Sans Arabic', sans-serif",display:"flex",justifyContent:"space-around"}}align="center">
                <div onClick={()=>{handelUpdate(row.id,row.name)}} className='icon-action custom-color-update'><RetweetOutlined /></div>
                    <div onClick={()=>{handelDelete(row.id,row.name)}} className='icon-action custom-color-delete'><DeleteOutlined /></div>
                    </TableCell>
                </TableRow>
                </>
            ))}
            {update&&
            <div className='spinner-container-submit'>
                <div className='close' >
                <CloseOutlined style={{fontSize:"large"}} onClick={handelUpdate} />
                <div className='update-form'>
                <UpdateCustmer nameu={updatename} idr={d}/>
                </div>
                </div>
                </div>}

                {delet&&
                <div className='spinner-container-submit'>
                    <div className='close' >
                        <CloseOutlined style={{fontSize:"large"}} onClick={handelDelete} />
                        <DeleteCusmer nameu={deleteName} idr={deleteID}/>
                    </div>
                </div>}
        </TableBody>
        </Table>
    </TableContainer>
    {notFond&&<div style={{backgroundColor:"white"}}>
    <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
        />
        </div>}
    </>
}
