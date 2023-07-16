import { useEffect, useState } from "react";
import { db } from "../Firebase/Firebase";
import {collection,addDoc,query,onSnapshot} from 'firebase/firestore';

export default function AddCostmer(){
    const [name,setName] = useState('');
    const [numberphone,setNumberphone] = useState('');
    const [day_1,setDay_1] = useState('');
    const [mounth_1,setMounth_1] = useState('');
    const [year_1,setYear_1] = useState('');

    const [day_2,setDay_2] = useState('');
    const [mounth_2,setMounth_2] = useState('');
    const [year_2,setYear_2] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        await addDoc(collection(db,'costemer'), {
            name,
            numberphone,
            day_1,
            mounth_1,
            year_1,
            day_2,
            mounth_2,
            year_2,
        });
        } catch (err) {
        console.log(err);
        }
    };



    return(
        <>
        <div className="container">
            <form onSubmit={handleSubmit}>
            <div>
            <input 
            type="text"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            />
                        <input 
            type="text"
            value={numberphone}
            onChange={(e)=>setNumberphone(e.target.value)}
            />
                        <input 
            type="text"
            value={day_1}
            onChange={(e)=>setDay_1(e.target.value)}
            />
                        <input 
            type="text"
            value={mounth_1}
            onChange={(e)=>setMounth_1(e.target.value)}
            />
                        <input 
            type="text"
            value={year_1}
            onChange={(e)=>setYear_1(e.target.value)}
            />
            <div>after</div>
            <input 
            type="text"
            value={day_2}
            onChange={(e)=>setDay_2(e.target.value)}
            />
                        <input 
            type="text"
            value={mounth_2}
            onChange={(e)=>setMounth_2(e.target.value)}
            />
                        <input 
            type="text"
            value={year_2}
            onChange={(e)=>setYear_2(e.target.value)}
            />
            </div>
            <button>submit</button>
            </form>
        </div>
        </>
    )
}