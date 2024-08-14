console.log("Hello World")

function getComputerChoice() {
	const Escolhas = ["Papel","Tesoura","Pedra"];
	const x = Escolhas[Math.floor(Math.random()* 3)];
	return x
}

function getHumanChoise(){
	const Escolha_Humano = window.prompt("Escolha sua jogada:")
	return Escolha_Humano
}

console.log(getComputerChoice())
console.log(getHumanChoise())

