import { useEffect, useState } from "react";
import { db } from "../../../Firebase/Firebase";
import {collection,query,onSnapshot,deleteDoc,doc} from 'firebase/firestore';
import { SmileOutlined } from '@ant-design/icons';
import { Result } from 'antd';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom";
export default function  FilterCustmer({gender}){
    const [townewReviewrs, setTowNewReviewrs] = useState([]);
    const [notFond , setNotFond] = useState(true);
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
    async function deleteTask(id) { 
        try {
        await deleteDoc(doc(db, 'costemer', id));
        } catch (err) {
        alert(err);
        }
    }
let de=new Date();
const y=townewReviewrs.filter((d)=>{
    console.log(de.getDate(),Number(d.day_2), de.getMonth()+1,Number(d.mounth_2));
    if((de.getDate()===Number(d.day_2)||de.getDate()>Number(d.day_2))&& de.getMonth()+1===Number(d.mounth_2)&&d.gender === gender)
    return townewReviewrs;
})

return<>    <TableContainer component={Paper}>
<Table sx={{ minWidth: 650 , backgroundColor:"#f8d7dad0"}} aria-label="simple table">
    <TableHead>
    <TableRow sx={{backgroundColor:"#efeeee",boxShadow:"0 0 5px -1px"}}>
        <TableCell style={{fontFamily: "'Noto Sans Arabic', sans-serif",fontWeight:"600"}}align="center">N.</TableCell>
        <TableCell style={{fontFamily: "'Noto Sans Arabic', sans-serif",fontWeight:"600"}}align="center">الاسم</TableCell>
        <TableCell style={{fontFamily: "'Noto Sans Arabic', sans-serif",fontWeight:"600"}} align="center">رقم الهاتف</TableCell>
        <TableCell style={{fontFamily: "'Noto Sans Arabic', sans-serif",fontWeight:"600"}}align="center">تاريخ البدأ</TableCell>
        <TableCell style={{fontFamily: "'Noto Sans Arabic', sans-serif",fontWeight:"600"}}align="center">تاريخ الانتهاء</TableCell>
    </TableRow>
    </TableHead>
    <TableBody>
    {y.map((row,index) => (
        
        <TableRow key={row.index}>
            
        <Link to={`${row.id}`}><TableCell style={{fontFamily: "'Noto Sans Arabic', sans-serif"}}align="center">{index+1}</TableCell></Link>
        <TableCell style={{fontFamily: "'Noto Sans Arabic', sans-serif"}}align="center">{row.name}</TableCell>
        <TableCell style={{fontFamily: "'Noto Sans Arabic', sans-serif"}}align="center">{row.numberphone}</TableCell>
        <TableCell style={{fontFamily: "'Noto Sans Arabic', sans-serif"}}align="center">{row.mounth_1}/{row.day_1}/{row.year_1}</TableCell>
        <TableCell style={{fontFamily: "'Noto Sans Arabic', sans-serif"}}align="center">{row.mounth_2}/{row.day_2}/{row.year_2}</TableCell>
        
        </TableRow>
    ))}
</TableBody>
</Table>
</TableContainer>

{notFond  && <div style={{backgroundColor:"white"}} >  <Result
    icon={<SmileOutlined />}
    title="لايوجد"
    /></div>}
    </>
}
