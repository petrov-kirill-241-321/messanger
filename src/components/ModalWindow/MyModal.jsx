import React, { useState } from "react";
import s from "./MyModal.module.css";
import { profileApi } from "../../api";

export function MyModal({
  visible,
  setVisible,
  status,
  saveStatus,
  setStatusUserInfo,
}) {
  // debugger;
  const [statusUser, setStatusUser] = useState(status);

  let rootClasses = [s.my_modal];
  if (visible) {
    rootClasses.push(s.active);
  }
  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div className={s.my_content} onClick={(e) => e.stopPropagation()}>
        <input
          type="text"
          value={statusUser}
          onChange={(e) => setStatusUser(e.target.value)}
        />
        <button
          onClick={() => {
            saveStatus(statusUser);
            setStatusUserInfo(statusUser);
            setVisible(false);
          }}
        >
          сохранить
        </button>
      </div>
    </div>
  );
}
