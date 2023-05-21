import { useRef, useState } from "react";
import { useEffect } from "react";
import "./Display_Bmi.css";
import html2canvas from 'html2canvas';
import Share from "./Share";

export default function Display_Bmi(props) {
  const { bmi, cal_bmi, type, setType, uname
  ,uheight,uweight,uage,ugender } = props;
  const [display,setDisplay] = useState();
  const [userimg,setUserimg] = useState();
  const [scolor, sColor] = useState();
  const [isInitialLoad, setIsInitialLoad] = useState(true);
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
     
  }, [bmi]);

  useEffect(()=>{
    if (isInitialLoad) {
      setIsInitialLoad(false); // ตั้งค่าให้ไม่ใช่โหลดครั้งแรกอีกต่อไป
      return; // ออกจาก useEffect โดยไม่ทำอะไรเพิ่มเติม
    }

    if(uname&&uheight&&uweight&&uage&&ugender){
      setDisplay("Show")
      console.log(uname&&uheight&&uweight&&uage&&ugender);
    }
    else{
      alert("กรุณากรอกข้อมูลให้ครบถ้วน")
    }
  },[ uname, uheight, uweight, uage, ugender])

  useEffect(()=>{
    if(ugender==="ชาย"){
      setUserimg("Man")
    }
    else if(ugender==="หญิง"){
      setUserimg("Woman")
    }
    else{
      setUserimg("No-IMG")
    }
  },[ugender])



  
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

  const componentRef = useRef(null);
  const [imgUrl,setImgUrl] = useState('');

  const convertComponentToImage = async (componentRef) =>{
    const canvas = await html2canvas(componentRef);
    return canvas.toDataURL('image/png');
  }

  const handleShareImage = async () => {
    const image = await convertComponentToImage(componentRef.current);
    console.log(image);
    setImgUrl(image);
  };



  return (
  <>
    <div className={"Display_Bmi_Container "+display} ref={componentRef}>
      <div className="Bmi-Container-Left">
        <div alt="" className={"User_IMG "+userimg} />
      </div>
      <div className="Bmi-Container-Right">
        <div className="container-item">
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
    {imgUrl && <img src={imgUrl} alt="Converted Image" />}
    <button onClick={handleShareImage}>แปลงเป็นรูปภาพและแชร์</button>
    <Share imgUrl={imgUrl}/>
    </>
  );
}
