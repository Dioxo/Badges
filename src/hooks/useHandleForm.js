import { useState, useCallback } from "react";

function useHandleForm(initVal) {
  const [badge, setBadge] = useState(initVal);

  const handleChangeBadgeForm = useCallback(
    (e) => {
      //event send by form
      if (e.hasOwnProperty("target")) {
        e.persist();
        setBadge((v) => {
          return { ...v, [e.target.name]: e.target.value };
        });
      } else {
        //object send to fill data in form
        setBadge(e);
      }
    },
    [setBadge]
  );

  return [badge, handleChangeBadgeForm];
}

export default useHandleForm;
