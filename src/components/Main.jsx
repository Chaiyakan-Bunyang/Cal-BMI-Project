import { useState } from "react";
import Display_Bmi from "./Display_Bmi";
import "./Main.css";

export default function Main() {
  const [height,setHeight] = useState("");
  const [weight,setWeight] = useState("");
  const [age,setAge] = useState("");
  const [bmi,setBmi]=useState("");
  const [type,setType] = useState("");
  const [name,setName] = useState("");
  const [gender,setGender] = useState("");

  const [uname,setUname] = useState();
  const [uheight,setUheight] = useState();
  const [uweight,setUweight] = useState();
  const [uage,setUage] = useState();
  const [ugender,setUgender] = useState();

  function cal_bmi (e){
    e.preventDefault();
    setBmi(((weight)/((height/100)**2)).toFixed(2));      
    /*setAge(userage.value);
    setHeight(userheiht.value);
    setWeight(userweight.value); */
    setUname(name);
    setUheight(height);
    setUweight(weight);
    setUage(age);
    setUgender(gender);
  }
  return (
    <div className="Main">
      <div className="Main-container">
      <div className="title">
        <h2>โปรแกรมคำนวณการเผาผลาญพลังงาน</h2>
      </div>
      <div className="form-container">
        <form action="" className="form-action" onSubmit={cal_bmi}>
        <div className="form-item">
            <label>ชื่อ:</label>
            <div>
                <input type="text" id="user_name" className="input_text" value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>
          </div>
          <div className="form-item">
            <label>เพศ:</label>
            <div>
                <input type="radio" className="radio-btn" name="gender" checked value={"ชาย"} onChange={(e)=>setGender(e.target.value)}/>
                <span>ชาย</span>
                <input type="radio" className="radio-btn" name="gender" value={"หญิง"} onChange={(e)=>setGender(e.target.value)}/>
                <span>หญิง</span>
            </div>
          </div>
          <div className="form-item">
            <label>ส่วนสูง(เซนติเมตร):</label>
            <input type="number" id="user_height" className="input_text" min={0} onChange={(e)=>setHeight(e.target.value)} />
          </div>
          <div className="form-item">
            <label>น้ำหนัก(กิโลกรัม):</label>
            <input type="number" id="user_weight" className="input_text" min={0} onChange={(e)=>setWeight(e.target.value)}/>
          </div>
          <div className="form-item">
            <label>อายุ(ปี):</label>
            <input type="number" id="user_age" className="input_text" max={100} min={1} onChange={(e)=>setAge(e.target.value)}/>
          </div>
          <div className="form-item">
            <label>กิจกรรม:</label>
            <select>
                <option value="">ไม่ออกกำลังกาย</option>
                <option value="">ออกกำลังกาย1-3วัน/สัปดาห์</option>
                <option value="">ออกกำลังกาย3-5วัน/สัปดาห์</option>
                <option value="">ออกกำลังกาย6-7วัน/สัปดาห์</option>
                <option value="">ออกกำลังกายแบบนักกีฬา</option>
              </select>
          </div>
         
            <button type="submit" className="btn cal" id="btn_cal" onClick={cal_bmi}>คำนวณ</button>
      
        </form>
      </div>
      </div>

    <Display_Bmi 
    bmi={bmi} cal_bmi={cal_bmi} type={type} setType={setType} 
    setBmi={setBmi} uname={uname} uheight={uheight} uweight={uweight} uage={uage} ugender={ugender} /> 
    </div>

    
  );
}
