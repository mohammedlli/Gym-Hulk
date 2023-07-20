import {deleteDoc,doc} from 'firebase/firestore';
import { db } from "../Firebase/Firebase";
import { Button , message } from 'antd';

export default function DeleteCusmer({idr,nameu}){
    const [messageApi, contextHolder] = message.useMessage();
    async function deleteTask(id) { 
        try {
        await deleteDoc(doc(db, 'costemer', id));
        messageApi.open({
            type: 'error',
            content: 'تم حذف المشترك بنجاح',
            className: 'custom-class',
        });
        } catch (err) {
        alert(err);
        }

    }

    return<>
        {contextHolder}
        <div  style={{padding:"0px 80px"}}>
        <h3  style={{color:"#ff2424"}}>هل انت متاكد من حذف</h3>
        <p className='update-form' style={{fontSize:"large"}}>{nameu}</p>
        <div className='delete-form'>
        <Button onClick={()=>{deleteTask(idr)}} style={{backgroundColor:'#ff2424'}} type="primary" >
            حذف
        </Button>
        </div>
        </div>
    
    </>
}