// FUNCTION for generating a random number (used for selecting a random word for an array by index)
function generateRandomNumber (num) {
    return Math.floor(Math.random() * num);
}

// OBJECT where all the possible words are stored
const mixedMessages = {
    gym: ['American Top Ten', 'American Kickboxing Academy', 'Kill Cliff FC', 'City Kickboxing'],
    martialArt: ['Boxing', 'Grappling', 'Kickboxing', 'Muay Thai', 'Sambo', 'Wrestling', 'Karate', 'Taekwando', 'Capoeira'],
    favoriteFighter: ['Jon Jones', 'Conor Mcgregor', 'Khabib Nurmagomedov', 'Mike Tyson', 'Muhammad Ali', 'Khamzat Chimaev']
}

// VARIABLE that stores an empty array in which the strings will be placed
let message = []

// LOOP that loop through all the mixedMessages objects properties
for(prop in mixedMessages) {
    // generating a random number
    let rndNum = generateRandomNumber(mixedMessages[prop].length);
    // SWITCH CASE used for formating the outputs based on the property
    switch(prop) {
        case 'gym':
            message.push(`You train at the ${mixedMessages[prop][rndNum]} gym.`);
            break;
        case 'martialArt':
            message.push(`Your favorite martial art to train is ${mixedMessages[prop][rndNum]}.`);
            break;
        case 'favoriteFighter':
            message.push(`Your favorite fighter to watch is ${mixedMessages[prop][rndNum]}.`);
            break;
        default:
            message.push('There is no info!');
            break;
    }
}

// FUNCTION for formating the output
function formatOutput(arr) {
    const formatedMessage = message.join('\n');
    console.log(formatedMessage);
} 

formatOutput(message);