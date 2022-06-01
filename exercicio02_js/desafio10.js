/** 
 * Escreva uma função que receberá como parâmetro um array de objetos como o abaixo:

    [
        {Time1: "Costa Rica", P1: 0, Time2: "Sérvia",     P2: 1},
        {Time1: "Brasil",     P1: 1, Time2: "Suíça",      P2: 1},
        {Time1: "Brasil",     P1: 2, Time2: "Costa Rica", P2: 0},
        {Time1: "Sérvia",     P1: 1, Time2: "Suíça",      P2: 2},
        {Time1: "Sérvia",     P1: 0, Time2: "Brasil",     P2: 2},
        {Time1: "Suíça",      P1: 2, Time2: "Costa Rica", P2: 2},
    ];
A função deverá retornar outro array de objetos conforme o exemplo abaixo:

    [
        { Time: 'Brasil',     P: 7, J: 3, V: 2, E: 1, D: 0, GP: 5, GC: 1, SG:  4 },
        { Time: 'Suíça',      P: 5, J: 3, V: 1, E: 2, D: 0, GP: 5, GC: 4, SG:  1 },
        { Time: 'Sérvia',     P: 3, J: 3, V: 1, E: 0, D: 2, GP: 2, GC: 4, SG: -2 },
        { Time: 'Costa Rica', P: 1, J: 3, V: 0, E: 1, D: 2, GP: 2, GC: 5, SG: -3 }
    ]
Observação: Em casos de empate nos pontos seguir os seguintes critérios de desempate: Mais vitórias (V), Maior saldo de gols (SG) e Mais gols marcados (GP).

Nome da função: ranking

Paramêtros: [{}, {}, ...]

Retorno: [{}, {}, ...]
 */