const {
	funcionarios
} = require("./funcionarios.json");

// Recuperar apenas Gerentes

gerentes = [];
gerentes = funcionarios.filter(func =>(func.categoria === "gerente"));

// console.log(gerentes);

// Funcionario com menor id

let func = funcionarios.reduce((anterior, atual) => {

	console.log("Anterior: " + anterior.id);
	console.log("Atual: " + atual.id);

	if (atual.id < anterior.id)
		return atual;
	else
		return anterior;

}, {
	id: 999999999999
});

//console.log(func);
