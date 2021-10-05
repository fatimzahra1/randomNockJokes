let message = {};
message.head = "Knock knock!";
message.content = ["Who's there? Says. Says who? Says me, that's who!",
    "Who's there? Europe. Europe who? No, YOU'RE a poo!",
    "Who's there? Ruff ruff. Ruff ruff who? Who let the dogs out? I heard barking!",
    "Who's there? Weekend. Weekend who? Weekend do anything we want!",
    " Who's there? Hawaii. Hawaii who? I'm fine, Hawaii you?", " Who's there? Nanna Nanna who? Nanna your business",
    "Who's there? Adore. Adore who? Adore is between us. Open up!"
]

function displayRandom() {
    const myArray = message.content
    const item = myArray[Math.floor(Math.random() * myArray.length)];
    console.log(item)
}
displayRandom();