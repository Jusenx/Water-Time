
let totalPorcentagem = 0;

function ajustarAgua() {
    inputValor = Number(prompt('Quantos kg você tem?'))

    totalPorcentagem = inputValor * 35; //Calculo para saber quanto de agua é necessario pelo seu peso
    total = totalPorcentagem; //Criei essa variavel para usar global e conseguir resolver o problema da água que não estava descendo corretamente

    document.getElementById('resultado').innerHTML = `Média de água por dia é: ${totalPorcentagem}ml`;

    // Ajusta a altura da água de acordo com a porcentagem
    let alturaAgua = (totalPorcentagem / totalPorcentagem) * 450; // 450px é a altura máxima
    document.getElementById('agua').style.height = `${alturaAgua}px`;

    // Atualiza o texto da porcentagem
    document.getElementById('porcentagem').innerHTML = `${totalPorcentagem} ml`;
}

//****           botões           *****//
function btt100() {
    totalPorcentagem = Math.max(0, totalPorcentagem - 100); //para não ultrapassar 0

    // Ajusta a altura da água de acordo com a porcentagem atualizada
    let alturaAgua = (totalPorcentagem / total) * 450; // 400px é a altura máxima
    document.getElementById('agua').style.height = `${alturaAgua}px`;

    // Atualiza o texto da quantidade de água
    document.getElementById('porcentagem').innerHTML = `${totalPorcentagem} ml`;


}

function btt150() {
    totalPorcentagem = Math.max(0, totalPorcentagem - 150);

    let alturaAgua = (totalPorcentagem / total) * 450;
    document.getElementById('agua').style.height = `${alturaAgua}px`;

    document.getElementById('porcentagem').innerHTML = `${totalPorcentagem} ml`;

}

function btt200() {
    totalPorcentagem = Math.max(0, totalPorcentagem - 200);

    let alturaAgua = (totalPorcentagem / total) * 450;
    document.getElementById('agua').style.height = `${alturaAgua}px`;

    document.getElementById('porcentagem').innerHTML = `${totalPorcentagem} ml`;

}

function btt250() {
    totalPorcentagem = Math.max(0, totalPorcentagem - 250);

    let alturaAgua = (totalPorcentagem / total) * 450;
    document.getElementById('agua').style.height = `${alturaAgua}px`;

    document.getElementById('porcentagem').innerHTML = `${totalPorcentagem} ml`;

}

function btt500() {
    totalPorcentagem = Math.max(0, totalPorcentagem - 500);

    let alturaAgua = (totalPorcentagem / total) * 450;
    document.getElementById('agua').style.height = `${alturaAgua}px`;

    document.getElementById('porcentagem').innerHTML = `${totalPorcentagem} ml`;

}

function btt1000() {
    totalPorcentagem = Math.max(0, totalPorcentagem - 1000);

    let alturaAgua = (totalPorcentagem / total) * 450;
    document.getElementById('agua').style.height = `${alturaAgua}px`;

    document.getElementById('porcentagem').innerHTML = `${totalPorcentagem} ml`;

}
