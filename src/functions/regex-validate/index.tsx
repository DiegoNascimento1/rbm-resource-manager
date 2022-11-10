//  letras maiusculas
export  function fxRegexValidateUppercase (texto:string){
    return /[A-Z]/g.test(texto)
};

//  letras minusculas
export  function fxRegexValidateLowercase (texto:string){
    return /[a-z]/g.test(texto)
};

//  caracteres especiais
export  function fxRegexValidateSpecialCharacters (texto:string){
    return /[!@#$%"&*]/g.test(texto)
};

//  numeros
export  function fxRegexValidateNumber (texto:string){
    return /[0-9]/g.test(texto)
};

// valida email
export  function fxRegexValidateEmail (email:string){
    return /\S+@\S+\.\S+/.test(email)
    // return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)   //deu certo tambem
};

// valida email corporativo
export  function fxRegexValidateEmailRBM (email:string){
    return /\S+@\/rbmweb.com/.test(email)
};