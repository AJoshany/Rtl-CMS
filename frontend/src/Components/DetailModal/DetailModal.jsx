import React, { useEffect } from "react";
import "./DetailModal.css";

export default function DetailModal({onHide}) {

    useEffect(()=>{
        const checkKey = (event) =>{
            if(event.keyCode == 27){
                onHide()
            }
        }

        window.addEventListener('keydown',checkKey)

        return ()=> window.removeEventListener('keydown', checkKey)
    })

  return (
    <div className="modal-parent active">
      <div className="details-modal">
        <table className="cms-table">
          <thead>
            <tr>
              <th>اسم</th>
              <th>اسم</th>
              <th>محبوبیت</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>لبتاپ</td>
              <td>12,000,000</td>
              <td>91</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
