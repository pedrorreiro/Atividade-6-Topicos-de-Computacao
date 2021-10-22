const {
	funcionarios
} = require("./funcionarios.json");

// Recuperar apenas Gerentes

gerentes = [];
gerentes = funcionarios.filter(func =>(func.categoria === "gerente"));

// console.log(gerentes);