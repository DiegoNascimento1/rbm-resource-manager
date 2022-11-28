import { useAuth } from "contexts/auth-context";
import LogoSvg from "components/particles/logo-svg/logo-svg";
import Spacing from "components/particles/spacing-particles";
import Typography from "components/particles/typography-particles";
import { useReducer, useState } from "react";
import { DivContainer } from "./style";

const initializeValue:number = 0;

const initializeReducer: State = { counter: 0};

type FxActionType = "somar" | "diminuir" | "mutiplicar" | "Dividir" | "reset";

type State = {
  counter: number;
};

type ActionEvent = {
  type: "somar" | "diminuir" | "mutiplicar" | "Dividir" | "reset" ;
};

// type Action = { type: "somar" } | { type: "diminuir" }| { type: "mutiplicar" } | { type: "Dividir" } | { type:  "reset"};

function fxRecuder (state: State, action: ActionEvent){
  switch(action.type){
    case "somar":
      return { counter: state.counter + 1};
    case "diminuir":
      return { counter: state.counter - 1};
    case "mutiplicar":
      return { counter: state.counter * 2};
    case "Dividir":
      return { counter: state.counter / 2};
    case "reset":
      return initializeReducer;
    default:
      return state;
  }
};

export default function MateusTestPage() {

  const { logout } = useAuth();
  const [valor, setValor] = useState<number>(initializeValue);
  const [valorFx, setValorFx] = useState<number>(initializeValue);
  const [valorFxPersonalize, setValorFxPersonalize] = useState<number>(initializeValue);

  const [state, dispatch] = useReducer(fxRecuder, initializeReducer);

  function fxReducerSomar(){
    dispatch({ type: "somar"});
  };

  function fxReducerDiminuir(){
    dispatch({ type: "diminuir"});
  };

  function fxReducerMultiplicar(){
    dispatch({ type: "mutiplicar"});
  };

  function fxReducerDividir(){
    dispatch({ type: "Dividir"});
  };

  function fxReducerResetar(){
    dispatch({ type: "reset"});
  };

// function
function fxAcrescentar (){
  setValor((previ)=> previ + 1);
};

function fxDiminuir (){
  setValor((previ)=> previ - 1);
};

function fxMutiplicar (){
  setValor((previ)=> previ * 2);
};

function fxDividir (){
  setValor((previ)=> previ / 2);
};

function fxResetar (){
  setValor(initializeValue);
};

function fxActions(action: FxActionType){
  switch(action){
    case "somar":
      setValorFx((previ)=> previ + 1);
      break;
    case "diminuir":
      setValorFx((previ)=> previ - 1);
      break;
    case "mutiplicar":
      setValorFx((previ)=> previ * 2);
      break;
    case "Dividir":
      setValorFx((previ)=> previ / 2);
      break;
    case "reset":
      setValorFx(initializeValue);
      break;
  };
};

function fxActionsEspecial(action: FxActionType){
    action ==="somar" && setValorFxPersonalize((previ)=> previ + 1);
    action ==="diminuir" && setValorFxPersonalize((previ)=> previ - 1);
    action ==="mutiplicar" && setValorFxPersonalize((previ)=> previ * 2);
    action ==="Dividir" && setValorFxPersonalize((previ)=> previ / 2);
    action ==="reset" && setValorFxPersonalize(initializeValue);
};

  return (
    <DivContainer>
      <LogoSvg/>
      <Spacing marginTop={"60px"}/>
      <Typography tag="h1" margin="50px">Exemplos Function / Function Switch / Function && / Reducer</Typography> 
      <Spacing marginTop="30px"/>
      <hr/>
      <label>Valor incial.</label>
      <input type={"text"} placeholder="Digite aqui o valor inicial" onBlur={(e)=>parseInt(e.target.value) && setValor(parseInt(e.target.value))}/>
      <div>
        <input type={"button"} value={"   +1    "} onClick={()=> fxAcrescentar()}/>
        <input type={"button"} value={"   -1    "} onClick={()=> fxDiminuir()}/>
        <input type={"button"} value={"   x2    "} onClick={()=> fxMutiplicar()}/>
        <input type={"button"} value={"   /2    "} onClick={()=> fxDividir()}/>
        <input type={"button"} value={"   Reset    "} onClick={()=> fxResetar()}/>
      </div>
      <Typography tag="h1" children={'function Individual => O valor é de: '+valor }></Typography>
      <hr/>
      <label>Valor incial.</label>
      <input type={"text"} placeholder="Digite aqui o valor inicial" onBlur={(e)=>parseInt(e.target.value) && setValorFx(parseInt(e.target.value))}/>
      <div>
        <input type={"button"} value={"   +1    "} onClick={()=> fxActions("somar")}/>
        <input type={"button"} value={"   -1    "} onClick={()=> fxActions("diminuir")}/>
        <input type={"button"} value={"   x2    "} onClick={()=> fxActions("mutiplicar")}/>
        <input type={"button"} value={"   /2    "} onClick={()=> fxActions("Dividir")}/>
        <input type={"button"} value={"   Reset    "} onClick={()=> fxActions("reset")}/>
      </div>
      <Typography tag="h1"  children={'function Swith => O valor é de: '+valorFx }></Typography>
      <hr/>
      <label>Valor incial.</label>
      <input type={"text"} placeholder="Digite aqui o valor inicial" onBlur={(e)=>parseInt(e.target.value) && setValorFxPersonalize(parseInt(e.target.value))}/>
      <div>
        <input type={"button"} value={"   +1    "} onClick={()=> fxActionsEspecial("somar")}/>
        <input type={"button"} value={"   -1    "} onClick={()=> fxActionsEspecial("diminuir")}/>
        <input type={"button"} value={"   x2    "} onClick={()=> fxActionsEspecial("mutiplicar")}/>
        <input type={"button"} value={"   /2    "} onClick={()=> fxActionsEspecial("Dividir")}/>
        <input type={"button"} value={"   Reset    "} onClick={()=> fxActionsEspecial("reset")}/>
      </div>
      <Typography tag="h1" children={'function && => O valor é de: '+valorFxPersonalize }></Typography>

      <hr/>
      {/* <input type={"text"} placeholder="Digite aqui o valor inicial" onBlur={(e)=>parseInt(e.target.value) && setValorFxPersonalize(parseInt(e.target.value))}/> */}
      <div>
        <input type={"button"} value={"   +1    "} onClick={()=> fxReducerSomar()}/>
        <input type={"button"} value={"   -1    "} onClick={()=> fxReducerDiminuir()}/>
        <input type={"button"} value={"   x2    "} onClick={()=> fxReducerMultiplicar()}/>
        <input type={"button"} value={"   /2    "} onClick={()=> fxReducerDividir()}/>
        <input type={"button"} value={"   Reset    "} onClick={()=> fxReducerResetar()}/>
      </div>
      <Typography tag="h1" children={'function Reducer => O valor é de: '+state.counter }></Typography>
    </DivContainer>
  )

}
