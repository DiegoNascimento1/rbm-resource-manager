import { StyledLabel, StyledInputContainer, StyledEyeButton } from "./style";
import Input from "components/particles/input";
import { useState } from "react";

type InputContainerProps = {
  eyeButton?: boolean;
  labelName?: string;
};

export default function InputContainer(props: InputContainerProps) {
  const [displayContent, setDisplayContent] = useState<boolean>(true);
  const [eyeImg, setEyeImg] = useState(
    "url('https://api.iconify.design/fa-regular/eye-slash.svg?color=%23b1b2b3') no-repeat center center / contain;"
  );

  function handleEyeClick() {
    setDisplayContent(!displayContent);
    setEyeImg(
      displayContent
        ? "url('https://api.iconify.design/fa-regular/eye-slash.svg?color=%23b1b2b3') no-repeat center center / contain;"
        : "url('https://api.iconify.design/fa-regular/eye.svg?color=%23b1b2b3') no-repeat center center / contain;"
    );
  }

  return (
    <StyledInputContainer>
      <StyledLabel>{props.labelName}</StyledLabel>
      <Input display={displayContent} />
      {props.eyeButton && (
        <StyledEyeButton background={eyeImg} onClick={() => handleEyeClick()} />
      )}
    </StyledInputContainer>
  );
}
