import { StyledInput, StyledEyeButton } from "./index-style";
import { useEffect, useState } from "react";

type InputProps = {
  password?: boolean;
};

export default function Input({ password }: InputProps) {
  const [displayContent, setDisplayContent] = useState<boolean>(
    password ? false : true
  );
  const [eyeImg, setEyeImg] = useState(
    "url('https://api.iconify.design/fa-regular/eye-slash.svg?color=%23b1b2b3') no-repeat center center / contain;"
  );

  function handleEyeClick() {
    setDisplayContent(!displayContent);
  }

  useEffect(() => {
    setEyeImg(
      displayContent
        ? "url('https://api.iconify.design/fa-regular/eye.svg?color=%23b1b2b3') no-repeat center center / contain;"
        : "url('https://api.iconify.design/fa-regular/eye-slash.svg?color=%23b1b2b3') no-repeat center center / contain;"
    );
  }, [displayContent]);

  return (
    <>
      <StyledInput type={displayContent ? "text" : "password"} />
      {password && (
        <StyledEyeButton background={eyeImg} onClick={() => handleEyeClick()} />
      )}
    </>
  );
}
