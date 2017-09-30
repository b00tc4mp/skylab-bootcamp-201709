function RockPaperScissors() {}

// RockPaperScissors.prototype.play = function(player1, player2) {
//     var hands = ["ROCK", "PAPER", "SCISSORS"];
    
//     var solutions = {
//         rock_paper: 'PAPER wins',
//         rock_rock: 'tie',
//         rock_scissors: 'ROCK wins',
//         paper_rock: 'PAPER wins',
//         paper_paper: 'tie',
//         paper_scissors: 'SCISSORS wins',
//         scissors_paper: 'SCISSORS wins',
//         scissors_scissors: 'tie',
//         scissors_rock: 'ROCK wins'
//     };

//     if (!player2)
//         player2 = hands[getRandomInt(0, 2)];

//     return player1 + ' vs ' + player2 + ' => ' + solutions[player1.toLowerCase() + '_' + player2.toLowerCase()] + '!';
// };

RockPaperScissors.prototype.play = function(hand1,hand2) {
    var player1 = hand1;
    var player2 = hand2;
    var handsPossible = ['PAPER','SCISSORS','ROCK'];
    var randomN = Math.floor(Math.random() * 3);

    if (!hand2)
        player2 = handsPossible[randomN];

    function vs(p1, p2, res) {
        return p1 + ' vs ' + p2 + ' => ' + res + '!';
    }

    if (player1 === player2) {
        return vs(player1, player2, 'tie');
    } else if ((player1 === 'ROCK' || player2 === 'ROCK') && (player1 === 'SCISSORS' || player2 === 'SCISSORS')) {
        return vs(player1, player2, 'ROCK wins');
    } else if ((player1 === 'PAPER' || player2 === 'PAPER') && (player1 === 'SCISSORS' || player2 === 'SCISSORS')) {
        return vs(player1, player2, 'SCISSORS wins');
    } else {
        return vs(player1, player2, 'PAPER wins');
    }
};
