import { useEffect, useState } from "react";
import { db } from "../Firebase/Firebase";
import {collection,addDoc,query,onSnapshot,deleteDoc,doc,updateDoc} from 'firebase/firestore';

export default function ShowCostmer(){



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
    if(de.getDate()===Number(d.day_2)&& de.getMonth()+1===Number(d.mounth_2))
    return townewReviewrs;
})


        return (
        <div>
            {y.map((d)=>(
                <h2>{d.day_2}//{d.mounth_2}<span onClick={()=>deleteTask(d.id)}>//delete//</span></h2>
                
            ))}
            {townewReviewrs.map((d)=>(
                <h2>{d.day_2}//{d.mounth_2}<span onClick={()=>deleteTask(d.id)}>//delete//</span></h2>
                
            ))}
        </div>
        );
    }
    


















// let de=new Date();
// const y=newReviewers.filter((d)=>{
//     console.log(Number(d.mounth),"mounth",de.getMonth()+1,de.getDate(),Number(d.day));

//     if(de.getFullYear()===Number(d.year) && 
//     (Number(d.mounth)<de.getMonth()+1 && de.getDate()===Number(d.day)))
//     return newReviewers
// })