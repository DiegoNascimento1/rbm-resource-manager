import { createContext, ReactNode, useCallback, useState } from "react";

type ContextLoginProps = {
    funcoes?: LoginDadosObjetoType
};

type ChildrenPros = {
    children: ReactNode;
};

type LoginDadosObjetoType = {
    dados: {
        usuario: string,
        recoverPassword:boolean,
        recoverToken:boolean,
        newPassword:boolean,
        finalizedPassword:boolean,
        activeAccount:boolean,
        email: string,
    },
    setState:{
        // alterarNome: React.Dispatch<React.SetStateAction<string>>,
        setChangeNome: React.Dispatch<React.SetStateAction<string>>,
        setChangeRecoverPassword: React.Dispatch<React.SetStateAction<boolean>>,
        setChangeRecoverToken: React.Dispatch<React.SetStateAction<boolean>>,
        setChangeNewPassword: React.Dispatch<React.SetStateAction<boolean>>,
        setChangeFinalizedPassword: React.Dispatch<React.SetStateAction<boolean>>,
        setChangeActiveAccount: React.Dispatch<React.SetStateAction<boolean>>,
        setChangeEmail: React.Dispatch<React.SetStateAction<string>>,
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

    // const HandlePrint = useCallback(() =>{
    //     console.log('logout: função de imprimir no console exemplo');
    // },[]);

    // const trocarNome = (novoNome: string) =>{
    //     setNome(novoNome);
    // };

    // const trocarRecuperarSenha=(novoEstado: boolean)=>{
    //     alert(novoEstado)
    //     setRecuperarSenha(novoEstado);
    //     alert("entrou")
    //     alert(recuperarSenha)
    // };

    // // const trocarRecuperarToken=(novoEstado: boolean)=>{
    // //     setRecuperarToken(novoEstado);
    // // };
    // const trocarRecuperarToken = useCallback((novoEstado: boolean) =>{
    //     setRecuperarToken(novoEstado);
    // },[]);


    // const trocarNovaSenha=(novoEstado: boolean)=>{
    //     setNovaSenha(novoEstado);
    // };

    // const trocarFinalizarSenha=(novoEstado: boolean)=>{
    //     setFinalizarSenha(novoEstado);
    // };

    // const trocarAtivarConta=(novoEstado: boolean)=>{
    //     setAtivarConta(novoEstado);
    // };

    // const trocarEmail = (novoEmail: string) =>{
    //     setEmail(novoEmail);
    // };

    const loginDadosObjeto: LoginDadosObjetoType = {
        dados: {
            usuario: nome,
            recoverPassword: recuperarSenha,
            recoverToken: recuperarToken,
            newPassword: novaSenha,
            finalizedPassword: finalizarSenha,
            activeAccount: ativarConta,
            email: email,
        },
        setState:{
            // alterarNome: setNome,
            setChangeNome: setNome,
            setChangeRecoverPassword: setRecuperarSenha,
            setChangeRecoverToken: setRecuperarToken,
            setChangeNewPassword: setNovaSenha,
            setChangeFinalizedPassword: setFinalizarSenha,
            setChangeActiveAccount: setAtivarConta,
            setChangeEmail: setEmail,
        }
    };

    return <>
        <contextLogin.Provider value={{
                funcoes: loginDadosObjeto
            }}>{children}</contextLogin.Provider>
    </>
};

//  *************************

// import { createContext, ReactNode, useCallback, useState } from "react";

// type ContextLoginProps = {
//     funcoes?: LoginDadosObjetoType
// };

// type ChildrenPros = {
//     children: ReactNode;
// };

// type LoginDadosObjetoType = {
//     dados: {
//         usuario: string,
//         recoverPassword:boolean,
//         recoverToken:boolean,
//         newPassword:boolean,
//         finalizedPassword:boolean,
//         activeAccount:boolean,
//         email: string,
//     },
//     fx: {
//         alterarNome: React.Dispatch<React.SetStateAction<string>>,
//         fxChangeNome: (novoNome: string) => void,
//         fxChangeRecoverPassword: (novoEstado: boolean)=> void,
//         fxChangeRecoverToken: (novoEstado: boolean)=> void,
//         fxChangeNewPassword: (novoEstado: boolean)=> void,
//         fxChangeFinalizedPassword: (novoEstado: boolean)=> void,
//         fxChangeActiveAccount: (novoEstado: boolean)=> void,
//         fxChangeEmail: (novoEmail: string) => void,
//     },
//     setState:{
//         alterarNome: React.Dispatch<React.SetStateAction<string>>,
//         setChangeNome: React.Dispatch<React.SetStateAction<string>>,
//         setChangeRecoverPassword: React.Dispatch<React.SetStateAction<boolean>>,
//         setChangeRecoverToken: React.Dispatch<React.SetStateAction<boolean>>,
//         setChangeNewPassword: React.Dispatch<React.SetStateAction<boolean>>,
//         setChangeFinalizedPassword: React.Dispatch<React.SetStateAction<boolean>>,
//         setChangeActiveAccount: React.Dispatch<React.SetStateAction<boolean>>,
//         setChangeEmail: React.Dispatch<React.SetStateAction<string>>,
//     },
//     imprimir:{
//         impressao: () => void
//     }
// };

// export const contextLogin = createContext<ContextLoginProps>({} as ContextLoginProps);

// export default function LoginProvider ({children}:ChildrenPros){

//     const [nome, setNome] = useState<string>('Nome vindo do login contexto');

//     //  criando os states do login container
//     const[recuperarSenha, setRecuperarSenha]= useState<boolean>(false);
//     const[recuperarToken, setRecuperarToken]= useState<boolean>(false);
//     const[novaSenha, setNovaSenha]= useState<boolean>(false);
//     const[finalizarSenha, setFinalizarSenha]= useState<boolean>(false);
//     const[ativarConta, setAtivarConta] =useState<boolean>(false);
//     const[email, setEmail] = useState<string>("");

//     const HandlePrint = useCallback(() =>{
//         console.log('logout: função de imprimir no console exemplo');
//     },[]);

//     const trocarNome = (novoNome: string) =>{
//         setNome(novoNome);
//     };

//     // const trocarRecuperarSenha=(novoEstado: boolean)=>{
//     //     alert(novoEstado)
//     //     setRecuperarSenha(novoEstado);
//     //     alert("entrou")
//     //     alert(recuperarSenha)
//     // };

//     function trocarRecuperarSenha(novoEstado: boolean){
//         alert(novoEstado)
//         setRecuperarSenha(true);
//         alert("entrou")
//         alert(recuperarSenha)
//     };

//     const trocarRecuperarToken=(novoEstado: boolean)=>{
//         setRecuperarToken(novoEstado);
//     };

//     const trocarNovaSenha=(novoEstado: boolean)=>{
//         setNovaSenha(novoEstado);
//     };

//     const trocarFinalizarSenha=(novoEstado: boolean)=>{
//         setFinalizarSenha(novoEstado);
//     };

//     const trocarAtivarConta=(novoEstado: boolean)=>{
//         setAtivarConta(novoEstado);
//     };

//     const trocarEmail = (novoEmail: string) =>{
//         setEmail(novoEmail);
//     };

//     const loginDadosObjeto: LoginDadosObjetoType = {
//         dados: {
//             usuario: nome,
//             recoverPassword: recuperarSenha,
//             recoverToken: recuperarToken,
//             newPassword: novaSenha,
//             finalizedPassword: finalizarSenha,
//             activeAccount: ativarConta,
//             email: email,
//         },
//         fx: {
//             alterarNome: setNome,
//             fxChangeNome: trocarNome,
//             fxChangeRecoverPassword: trocarRecuperarSenha,
//             fxChangeRecoverToken: trocarRecuperarToken,
//             fxChangeNewPassword: trocarNovaSenha,
//             fxChangeFinalizedPassword: trocarFinalizarSenha,
//             fxChangeActiveAccount: trocarAtivarConta,
//             fxChangeEmail: trocarEmail,
//         },
//         setState:{
//             alterarNome: setNome,
//             setChangeNome: setNome,
//             setChangeRecoverPassword: setRecuperarSenha,
//             setChangeRecoverToken: setRecuperarToken,
//             setChangeNewPassword: setNovaSenha,
//             setChangeFinalizedPassword: setFinalizarSenha,
//             setChangeActiveAccount: setAtivarConta,
//             setChangeEmail: setEmail,
//         },
//         imprimir:{
//             impressao: HandlePrint,
//         }
//     };

//     return <>
//         <contextLogin.Provider value={{
//                 funcoes: loginDadosObjeto
//             }}>{children}</contextLogin.Provider>
//     </>
// };