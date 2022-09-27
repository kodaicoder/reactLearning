import React from "react";
import classes from "./input.module.css";

export const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes["input"]}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} ref={ref}/>
    </div>
  );

  // การใช้ (...props.input)
  // เป็นการ spread ค่าข้อมูลใน object ที่ผ่านมาทาง props
  // (ในที่นี้มี nest เป็น input object อยู่ด้วย)
  // และตัว JSX จะจับ key ใน object ไปจับคู่กับ Attribute ของ DOM เองอัติโนมัติ
  // เช่น ใน props.input มี {id="test1"} การทำ {...props.input}
  // จะนำ key ที่ชื่อ id ไปจับกับ Attribute ชื่อ id และให้ค่าตาม value ของ object นั้น
  // ในที่นนี้ถ้าสมมติให้เป็น input DOM จะได้ input ที่มี attribute id ="test1" ให้เลย
  // ซึ่งระบบจะจับคุ่ได้ทั้งหมด ถ้าส่งมา 5 key และ attribute ที่สามารถจับคู่ได้มี 5 ตัวก็จะจับให้ 5 ตัวเลย
});
