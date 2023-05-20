import { useState } from "react";
import { useEffect } from "react";
import "./Display_Bmi.css";
export default function Display_Bmi(props) {
  const { bmi, cal_bmi, type, setType, uname
  ,uheight,uweight,uage,ugender } = props;
  const [display,setDisplay] = useState();
  const [scolor, sColor] = useState();
  useEffect(() => {
    const c_type = check_type(bmi);
    if (c_type === "อ้วนมาก") {
      sColor("Red");
    } else if (c_type === "อ้วน") {
      sColor("Orange");
    } else if (c_type === "ท้วม") {
      sColor("Yellow");
    } else if (c_type === "ปกติ") {
      sColor("Green");
    } else if (c_type === "ผอมมาก") {
      sColor("LightGreen");
    }
      if(bmi){
        setDisplay("Show")
      }

  }, [bmi]);



  
  function check_type(data) {
    if (data > 30) {
      return "อ้วนมาก";
    } else if (data >= 25 && data < 30) {
      return "อ้วน";
    } else if (data >= 23 && data < 25) {
      return "ท้วม";
    } else if (data >= 18.5 && data < 23) {
      return "ปกติ";
    } else if (data < 18.5) {
      return "ผอมมาก";
    }
  }


  return (
    <div className={"Display_Bmi_Container "+display}>
      <div className="Bmi-Container-Left">
        <img src="./IMG/man.png" alt="" className="User_IMG" />
      </div>
      <div className="Bmi-Container-Right">
        <div>
          <h2 className="username">{uname}</h2>
          <h2>เพศ {ugender} </h2>
          <h2>อายุ {uage} ปี </h2>
          <h2>น้ำหนัก {uweight} กิโลกรัม </h2>
          <h2>ส่วนสูง {uheight} เซนติเมตร </h2>
          <h2 className={"Bmi"}>ค่า BMI {bmi}</h2>
          <h2 className={"Bmi " + scolor}>ภาวะโภชนาการ {check_type(bmi)}</h2>
        </div>
    
      </div>
    </div>
  );
}
