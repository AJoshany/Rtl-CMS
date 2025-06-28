import React from "react";
import Errorbox from "../Errorbox/Errorbox";
import DeleteModal from "../DeleteModal/DeleteModal";

export default function Comments() {
  return (
    <div>
      Comments
      <Errorbox msg="هیچ کامنتی یافت نشد" />
      {/* <DeleteModal/> */}
    </div>
  );
}
