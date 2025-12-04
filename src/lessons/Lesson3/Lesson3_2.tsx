import { RefObject, useRef } from "react";

const Lesson3_2 = () => {
  const listRef: RefObject<HTMLUListElement | null> = useRef<HTMLUListElement>(null);

  const scrollToIndex = (index: number) => {
    const listNode = listRef.current;
    const imgNode = listNode?.querySelectorAll("li > img")[index];

    imgNode?.scrollIntoView({ 
      behavior: "smooth", 
      inline: "center",
      // block: "nearest"
    });
  };

  return (
    <div>
      <nav>
        <button onClick={() => scrollToIndex(0)}>Cat1</button>
        <button onClick={() => scrollToIndex(1)}>Cat2</button>
        <button onClick={() => scrollToIndex(2)}>Cat3</button>
      </nav>
      <div style={{ overflowX: "auto", maxWidth: "700px", margin: "auto" }}>
        <ul
          className="flex items-center justify-between"
          style={{ minWidth: "1300px" }} // コンテナより大きいサイズを指定
          ref={listRef}
        >
       <ul>
  <li>
    <img src="https://tgs.jp.net/wp-content/uploads/2025/07/50646312cd098b5927c19c6d17e697f5.jpg" alt="Cat 1" width="200" height="200" />
  </li>
  <li>
    <img src="https://tgs.jp.net/wp-content/uploads/2025/07/20230612124023_IMG_0583-01-01.jpg" alt="Cat 2" width="300" height="200" />
  </li>
  <li>
    <img src="https://tgs.jp.net/wp-content/uploads/2025/07/neko1-1-scaled.jpg" alt="Cat 3" width="250" height="200" />
  </li>
</ul>
        </ul>
      </div>
    </div>
  );
};

export default Lesson3_2;
