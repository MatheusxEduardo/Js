function greetCrew(message, ...names) {///COLOCAR SPRED COMO PARAMETRO NESSE CASO FAZ COM QUE NAME RECEBA TODO O RESTANTE DOS PARAMETROS DA FINÇÃO APOS A MESSAGE ----- DEVENDO SER DECLARADA NO FINAL DA FUNÇÃO.
    names.forEach(name => console.log(`${message}, ${name}`))
}

greetCrew("Seja bem vindo!", "Arthur", "jake", "Melissa")