import { useState } from "react";
import { useEffect } from "react";
import "./Display_Bmi.css"
export default function Display_Bmi(props){
    const {bmi,cal_bmi,type,setType} = props;
    const [scolor,sColor] = useState();
    useEffect(
        ()=>{
            const c_type = check_type(bmi);
            if(c_type==="อ้วนมาก"){
               sColor('Red')
            }
            else if (c_type==="อ้วน"){
                sColor('Yellow')
            }
        },[bmi]);

console.log(scolor);
    function check_type(data){
        if(data>30){
            return ("อ้วนมาก");
        }
        else if(data>=25 && data<30){
           
            return "อ้วน"
           
        }
        else if(data>=23 && data<25){
          
            return "ท้วม"
            
        }
        else if (data>=18.5 && data<23){
            
            return "ปกติ"

        }
        else if (data<18.5){
            
            return "ผอมมาก"
        }
    }


    return(
        <div className="Display_Bmi_Container">
          <div>
          <h2>BMI ของคุณคือ</h2>
          </div>
        <div>
        <h2 className={"Bmi"}>{bmi}</h2>
        </div>

        <div>
        <h2 className={"Bmi "+scolor}>{check_type(bmi)}</h2>
        </div>
           
        </div>
    );
}