import InputContainer from "components/atoms/input-container";
import InputDateContainer from "components/atoms/input-date-container/input-date-index";
import InputTimeContainer from "components/atoms/input-time-container/input-time-index";
import ButtonParticle from "components/particles/button-primary/button-primaty-index";
import Input from "components/particles/input-field";
import Spacing from "components/particles/spacing-particles";
import Typography from "components/particles/typography-particles";
import { time } from "console";
import { useState } from "react";
import { useTheme } from "styled-components";
import { ScheduleDiv, ScheduleSubDivButton } from "./schedule-container-style";

export default function ScheduleContainer() {
	const theme = useTheme();

	const [item, setItem] = useState("Sala de Reunião 02");
	const [data, setData] = useState("28/10");
	const [timeStart, setTimeStart] = useState("--:--");
	const [timeEnd, setTimeEnd] = useState("--:--");


	return (
		<ScheduleDiv>
			<Typography margin="0px" tag="p" size="18px" fontWeight="500">Reservar</Typography>
			<Spacing marginTop="12px"/>
			<Typography margin="0px" color="#8B8D97" tag="p">Selecione o dia e a hora</Typography>
			<InputContainer labelName="Item" setInput={setItem} value={item}/>
			<InputDateContainer labelName="Data" setInput={setData}/>
			<InputTimeContainer labelName="Time" 
			setTimeStart={setTimeStart}  timeStart = {timeStart}
			setTimeEnd={setTimeEnd}		timeEnd = {timeEnd}
			/>
			<Spacing marginTop="30px"/>
			<ScheduleSubDivButton>
				<ButtonParticle gray tamanho="40%" text="CANCELAR"/>
				<ButtonParticle light tamanho="40%" text="RESERVAR"/>
			</ScheduleSubDivButton>
		</ScheduleDiv>
	);
}
