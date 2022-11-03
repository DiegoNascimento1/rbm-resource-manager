import Typography from "../../particles/typography-particles";
import { StyledDivInputDate, StyledInputDate } from "./input-date-style";

type InputDateProps = {
  labelName: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
};

export default function InputDateContainer(props: InputDateProps) {
  return (
    <StyledDivInputDate>
      <Typography fontWeight="500" tag="p" margin="0" size="14px">
        {props.labelName}
      </Typography>
      <StyledInputDate type="date" />
    </StyledDivInputDate>
  );
}
