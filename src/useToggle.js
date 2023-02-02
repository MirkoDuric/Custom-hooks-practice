import { useState } from "react";
export default function useToggle(toggleDefault = false) {
  const [toggle, setToggle] = useState(toggleDefault);
  function changeToggle() {
    setToggle(!toggle);
    console.log(toggle);
  }
  return { toggle, changeToggle };
}
