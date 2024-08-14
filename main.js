console.log("Hello World")

function getComputerChoice() {
	const Escolhas = ["Papel","Tesoura","Pedra"];
	const x = Escolhas[Math.floor(Math.random()* 3)];
	return x
}

function getHumanChoice(){
	const Escolha_Humano = window.prompt("Escolha sua jogada:")
	return Escolha_Humano
}

var humanScore = 0
var computerScore = 0

function playround(humanChoice,computerChoice){
	if (humanChoice == computerChoice) {
		console.log("Draw")
	}

	if (humanChoice == "Pedra") {
		if (computerChoice == "Papel") {
			// console.log("Computador venceu!")
			computerScore+=1
		}
		else {
			// console.log("Humano venceu!")
			humanScore+=1
		}
	}
		if (humanChoice == "Papel") {
		if (computerChoice == "Tesoura") {
			// console.log("Computador venceu!")
			computerScore+=1
		}
		else {
			// console.log("Humano venceu!")
			humanScore+=1
		}
	}
		if (humanChoice == "Tesoura") {
		if (computerChoice == "Pedra") {
			// console.log("Computador venceu!")
			computerScore+=1
		}
		else {
			// console.log("Humano venceu!")
			humanScore+=1
		}

	}

}

function playGame(){
	for (var i = 0; i < 5; i++) 
	{
		playround(getHumanChoice(),getComputerChoice())
	}

	if (humanScore > computerScore) {
		console.log("Humano venceu!")
		return humanScore
	}
	else if (computerScore > humanScore) {
		console.log("Computador venceu!")
		return computerScore
	}
	else {
		console.log("Draw")
		return 0
	}
}
	


console.log(playGame())


