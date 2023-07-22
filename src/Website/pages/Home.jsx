import { useAuth } from "../../Auth/context/AuthContext";
export default function Home() {
    const { currentUser } = useAuth();
    return (
        <>
        <div style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
            <div className="form" >
                <h2 className="form-title">الحساب</h2>
                <div style={{padding:"50px 50px"}} className="err" >
                    <strong style={{fontSize:"15px"}}>البريد الالكتروني المستخدم</strong> 
                    <div style={{margin:"10px",fontSize:"x-large"}}>
                        {currentUser && currentUser.email}
                    </div>
                </div>
            </div>
        </div>
        </>
    );
    }