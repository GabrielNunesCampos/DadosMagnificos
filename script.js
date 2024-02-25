// Inicialização de dados
var dados = {
    'd4': Array.from({length: 4}, (_, i) => i + 1),
    'd6': Array.from({length: 6}, (_, i) => i + 1),
    'd8': Array.from({length: 8}, (_, i) => i + 1),
    'd10': Array.from({length: 10}, (_, i) => i + 1),
    'd12': Array.from({length: 12}, (_, i) => i + 1),
    'd20': Array.from({length: 20}, (_, i) => i + 1),
    'd100': Array.from({length: 100}, (_, i) => i + 1),
    'moeda': ['cara', 'coroa'],
    'emocao': ['medo', 'nojo', 'raiva', 'surpresa', 'felicidade', 'tristeza']
};

// Função para escolher um elemento aleatório de um array
function choice(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Função para simular a rolagem de dados
function rolarDados(numDados, tipoDado, soma) {
    var resultados = [];
    if (dados.hasOwnProperty(tipoDado)) {
        for (var i = 0; i < numDados; i++) {
            var resultado = choice(dados[tipoDado]);
            if (typeof resultado === 'number') {
                resultados.push(resultado + soma);
            } else {
                resultados.push(resultado);
            }
        }
    } else {
        resultados.push('Esse valor não é valido!');
    }
    return resultados;
}

// Exemplo de uso
console.log(rolarDados(2, 'd6', 1));

document.getElementById('formDados').addEventListener('submit', function(event) {
    // Previne o comportamento padrão do formulário
    event.preventDefault();

    // Obtém os valores dos campos do formulário
    var numDados = parseInt(document.getElementById('num_dados').value);
    var tipoDado = document.getElementById('tipo_dado').value;
    var soma = parseInt(document.getElementById('soma').value);

    // Processa os dados (exemplo: rolarDados(numDados, tipoDado, soma))
    var resultados = rolarDados(numDados, tipoDado, soma);

    // Atualiza a div de resultados
    var divResultados = document.getElementById('resultados');
    divResultados.innerHTML = '<h2>Resultados:</h2><ul>' + resultados.map(function(resultado) {
        return '<li>' + resultado + '</li>';
    }).join('') + '</ul>';
});
