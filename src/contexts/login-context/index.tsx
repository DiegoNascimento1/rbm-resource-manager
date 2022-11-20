import { createContext, ReactNode, useCallback, useState } from "react";

type ContextLoginProps = {
    dadosData?: LoginDadosObjetoType
};

type ChildrenPros = {
    children: ReactNode;
};

type LoginDadosObjetoType = {
    dados: {
        usuario: string,
        stateRecuperarSenha:boolean,
        stateRecuperarToken:boolean,
        stateNovaSenha:boolean,
        stateFinalizaSenha:boolean,
        stateAtivarConta:boolean,
        email: string,
    },
    fx: {
        alterarNome: React.Dispatch<React.SetStateAction<string>>,
        fxTrocarNome: (novoNome: string) => void,
        fxTrocarRecuperarSenha: ()=> void,
        fxTrocarRecuperarToken: ()=> void,
        fxTrocarNovaSenha: ()=> void,
        fxTrocarFinalizaSenha: ()=> void,
        fxTrocarAtivarConta: ()=> void,
        fxTrocarEmail: (novoEmail: string) => void,
    },
    imprimir:{
        impressao: () => void
    }
};

export const contextLogin = createContext<ContextLoginProps>({} as ContextLoginProps);

export default function LoginProvider ({children}:ChildrenPros){

    const [nome, setNome] = useState<string>('Nome vindo do login contexto');

    //  criando os states do login container
    const[recuperarSenha, setRecuperarSenha]= useState<boolean>(false);
    const[recuperarToken, setRecuperarToken]= useState<boolean>(false);
    const[novaSenha, setNovaSenha]= useState<boolean>(false);
    const[finalizarSenha, setFinalizarSenha]= useState<boolean>(false);
    const[ativarConta, setAtivarConta] =useState<boolean>(false);
    const[email, setEmail] = useState<string>("");

    const HandlePrint = useCallback(() =>{
        console.log('logout: função de imprimir no console exemplo');
    },[]);

    const trocarNome = (novoNome: string) =>{
        setNome(novoNome);
    };

    const trocarRecuperarSenha=()=>{
        setRecuperarSenha(!recuperarSenha);
    };

    const trocarRecuperarToken=()=>{
        setRecuperarToken(!recuperarToken);
    };

    const trocarNovaSenha=()=>{
        setNovaSenha(!novaSenha);
    };

    const trocarFinalizarSenha=()=>{
        setFinalizarSenha(!finalizarSenha);
    };

    const trocarAtivarConta=()=>{
        setAtivarConta(!ativarConta);
    };

    const trocarEmail = (novoEmail: string) =>{
        setEmail(novoEmail);
    };

    const loginDadosObjeto: LoginDadosObjetoType = {
        dados: {
            usuario: nome,
            stateRecuperarSenha: recuperarSenha,
            stateRecuperarToken: recuperarToken,
            stateNovaSenha: novaSenha,
            stateFinalizaSenha: finalizarSenha,
            stateAtivarConta: ativarConta,
            email: email,
        },
        fx: {
            alterarNome: setNome,
            fxTrocarNome: trocarNome,
            fxTrocarRecuperarSenha: trocarRecuperarSenha,
            fxTrocarRecuperarToken: trocarRecuperarToken,
            fxTrocarNovaSenha: trocarNovaSenha,
            fxTrocarFinalizaSenha: trocarFinalizarSenha,
            fxTrocarAtivarConta: trocarAtivarConta,
            fxTrocarEmail: trocarEmail,
        },
        imprimir:{
            impressao: HandlePrint,
        }
    };

    return <>
        <contextLogin.Provider value={{
                dadosData: loginDadosObjeto
            }}>{children}</contextLogin.Provider>
    </>
};