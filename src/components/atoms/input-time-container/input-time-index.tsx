import { ReactFragment } from "react";
import Typography from "../../particles/typography-particles";
import { StyledDivInputTime, StyledDivTime, StyledInputTime } from "./input-time-style";

type InputTimeProps = {
  labelName: string;
  setTimeStart: React.Dispatch<React.SetStateAction<string>>
  timeStart : ReactFragment;
  setTimeEnd: React.Dispatch<React.SetStateAction<string>>
  timeEnd : ReactFragment;

};

export default function InputTimeContainer(props: InputTimeProps) {
  return (
    <StyledDivInputTime>
      <Typography fontWeight="500" tag="p" margin="0" size="14px">
        {props.labelName}
      </Typography>
      <StyledDivTime>
        <StyledInputTime type="Time" value={props.timeStart as string} onChange={(e)=>props.setTimeStart(e.target.value)}/>
        <StyledInputTime type="Time" value={props.timeEnd as string} onChange={(e)=>props.setTimeEnd(e.target.value)}/>
      </StyledDivTime>
    </StyledDivInputTime>
  );
}
