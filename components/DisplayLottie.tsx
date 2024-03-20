import React from "react";
// import Lottie from "react-lottie";
import dynamic from 'next/dynamic'
 
const DynamicLottie = dynamic(() => import('react-lottie'), {
  ssr: false,
})

type Props = {
  animationPath: string;
};

const GreetingLottie = ({ animationPath }: Props) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    path: animationPath,
  };

  return (
    <div onClick={() => null}>
      {/* @ts-ignore */}
      <DynamicLottie options={defaultOptions} />
    </div>
  );
};

export default GreetingLottie;
