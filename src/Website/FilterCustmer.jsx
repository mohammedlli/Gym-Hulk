import { useEffect, useState } from "react";
import { db } from "../Firebase/Firebase";
import {collection,addDoc,query,onSnapshot,deleteDoc,doc,updateDoc} from 'firebase/firestore';
import { Space, Table, Tag } from 'antd';
import Column from "antd/es/table/Column";
export default function  FilterCustmer({gender}){



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
    if(de.getDate()===Number(d.day_2)&& de.getMonth()+1===Number(d.mounth_2)&&d.gender === gender)
    return townewReviewrs;
})

return<> <Table 

columns={[
    {title: 'الاسم',dataIndex: 'name',key: 'name',},
    {title: 'رقم الهاتف',dataIndex: 'numberphone',key: 'numberphone'},
    ]} 
dataSource={y}>
</Table>
    </>
}
