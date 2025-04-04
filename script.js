function jogar() {
    const idade = Number(prompt("Quantos anos você tem?"));

    if (idade < 18) {
        alert("Você não pode jogar");
    } else {
        const escolhas = ["Pedra", "Papel", "Tesoura"];
        const escolhaJogador = Number(prompt("Escolha 1 - Pedra, 2 - Papel ou 3 - Tesoura?"));
        const escolhaComputador = Math.floor(Math.random() * 3) + 1;

        if (escolhaJogador === escolhaComputador) {
            alert("Empate");
        } else {
            const resultado = (escolhaJogador - escolhaComputador + 3) % 3;
            const vencedor = resultado === 1 ? "Jogador vence" : "Computador venceu";
            alert(`${vencedor} - ${escolhas[escolhaComputador - 1]}`);
        }
    }
}
console.log("Eu amo a julia")
