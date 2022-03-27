const {Game, Biodata, History} = require('./models');

// Game.create({
//     username: 'Binar Academy',
//     password: 'binar',
// });

// Biodata.create({
//     name: 'Mae',
//     hobby: 'cook',
//     GameId: 2
// });

History.create({
    playedAt: Date.now(),
    score: 86,
    GameId: 6 
})

History.create({
    playedAt: Date.now(),
    score: 93,
    GameId: 5 
})