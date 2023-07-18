import { useEffect, useState } from "react";
import { db } from "../Firebase/Firebase";
import {collection,addDoc,query,onSnapshot,deleteDoc,doc,updateDoc} from 'firebase/firestore';
import { Space, Table, Tag } from 'antd';
import Column from "antd/es/table/Column";
import Customer from './Customer'
export default function ShowMaleCustmerEnd(){
    return<>
    <Customer
    gender="ذكر"/>
    </>
}
