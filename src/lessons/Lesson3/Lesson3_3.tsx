import { useRef, useState } from "react";

const Lesson3_3 = () => {

  // const [inputText,setText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    // alert(inputText);
    alert(inputRef.current?.value);
  };

  return (
    <div>
      <input 
      type="text" 
      className="border-b" 
      // onChange={(e) => setText(e.target.value)}
      ref={inputRef}
      />
      <button onClick={handleClick}>input入力値を見る</button>
    </div>
  );
};

export default Lesson3_3;
