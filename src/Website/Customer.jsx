import { useEffect, useState } from "react";
import { db } from "../Firebase/Firebase";
import {collection,addDoc,query,onSnapshot,deleteDoc,doc,updateDoc} from 'firebase/firestore';
import { Space, Table, Tag } from 'antd';
export default function Costmer({gender}){



    const [townewReviewrs, setTowNewReviewrs] = useState([]);
    useEffect(() => {
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
    }, []);
    async function deleteTask(id) { 
        try {
        await deleteDoc(doc(db, 'costemer', id));
        } catch (err) {
        alert(err);
        }
    }

    const handleSubmit = async (id) => {
        try {
        await updateDoc(doc(db, 'costemer', id), {
            
        });
        } catch (err) {
        alert(err);
        }
        
    };
let de=new Date();
const y=townewReviewrs.filter((d)=>{
    console.log(de.getDate(),Number(d.day_2), de.getMonth()+1,Number(d.mounth_2));
    if(d.gender === gender)
    return townewReviewrs;
})

return<> <Table 
columns={[
    {title: 'الاسم',dataIndex: 'name',key: 'name',},
    {title: 'رقم الهاتف',dataIndex: 'numberphone',key: 'numberphone'},
    {title: 'تاريخ البدأ',dataIndex: 'dateStart',key: 'mounth_2'},
    {title: 'يوم الانتهاء',dataIndex: 'day_2',key: 'mounth_2'},
    {title: 'شهر الانتهاء',dataIndex: 'mounth_2',key: 'mounth_2'},
    ]} 
dataSource={y}/>
    </>
}
