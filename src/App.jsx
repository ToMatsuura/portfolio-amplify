import { useState } from "react";
import { motion } from "framer-motion";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import bottleImage from "./assets/bottle.png"; // ペットボトルの画像パス
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [co2Count, setCo2Count] = useState(0);

  const buttonClick = () => {
    setCount(count + 1);
    setIsAnimating(true);
    setCo2Count(co2Count + 119);

   
    // アニメーションが完了した後にリセット
    setTimeout(() => {
      setIsAnimating(false);
    }, 300); // アニメーションの持続時間に合わせて調整
  };

  const deleteClick = () => {
    count > 0 ?
    (setCount(count - 1),
    setCo2Count(co2Count - 119)): null
  };


  return (
    <>
      <div className="card">
        <button onClick={buttonClick}>マイボトルを使用</button>
      </div>
      <div>現在のカウント数 : m{count} 本</div>
      <div>co2削減量 : {co2Count} g</div>

      <div className="card2">
      <button onClick={deleteClick}>訂正</button>
      </div>

      {/* ペットボトルのアニメーション */}
      {isAnimating && (
        <motion.img
          src={bottleImage} // ペットボトルの画像
          alt="ペットボトル"
          initial={{ y: 0 }} // 初期位置
          animate={{ y: -200 }} // アニメーションの移動
          transition={{ duration: 0.5 }} // アニメーÏションの時間
          style={{ position: "absolute" }} // 位置を指定
        />
      )}
      <div class="bg-red-500 text-white p-4">  
    Hello, Tailwind CSS!  
    </div>
    <p className="m-0 text-gray-400">Tailwind CSSです</p>

    </>
  );
}

export default App;
