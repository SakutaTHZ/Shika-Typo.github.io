/**
 * This is a documentation for the file KeyboardActions
 * @var letters 
*/

var letters = []
var current = 0;
var IsKeyBoardLocked = true;
var IsKeyBoardVisible = true;
var ZanMode = false;
var firstCharacterPressed = false;
var time = 0; // in seconds
var wpm = 0;
var count = 0;
var timerCounter = null;

const offlineTexts = [
    "he who fears being conquered is sure of defeat.",
    "without passion man is a mere latent force and possibility, like the flint which awaits the shock of the iron before it can give forth its spark.  ",
    "to avoid criticism, do nothing, say nothing, be nothing.",
    "remember that the most valuable antiques are dear old friends.",
    "we are wiser than we know.",
    "to hell with circumstances, i create opportunities.",
    "if you change the way you look at things, the things you look at change.",
    "we may encounter many defeats, but we must not be defeated.",
    "in the business world, everyone is paid in two coins: cash and experience. take the experience first; the cash will come later.",
    "to acquire knowledge, one must study; but to acquire wisdom, one must observe.",
]

const wpmrate = {
    belowAverage: ["You need to try harder", "A turtle can type faster than you", "I fell asleep while waiting for you to type"],
    average: ["You have average typing speed", "That was Okay", "Try better next time"],
    aboveAverage: ["Good Job! That was above average", "You are better than 60% of the people, I guess", "You are getting good"],
    fast: ["Oh! That was fast", "You suprised me", "Try getting 69 next time"],
    veryFast: ["Slow down. No ones following you", "Put some ice on your fingers", "Fast and furious baby"],
    expert: ["You better be a typist", "Try changing your profession to a typist", "Hmm, Are you Cheating?"],
}

const counts = {
    rightCount: {
        count: 0,
        divName: "rightCount"
    },
    wrongCount: {
        count: 0,
        divName: "wrongCount"
    },
    backspaceMistakes: {
        count: 0,
        divName: "mistakeCount"
    },
    sentenceCount: {
        count: 0,
        divName: "sentenceCount"
    }
}

const modes = [
    {
        name: "normal",
        init: () => {
            ZanMode = false;
            ChangeTitle("Shika-typo")
            fetchMovieLine()
        }
    },
    {
        name: "zan",
        init: () => {
            ZanMode = true;
            toggleOff(["exitButton", "zan"], "off")
            ChangeTitle("Shika-typo Zan")
            fetchMovieLine()
        }
    }
]
var CurrentMode = 0; 
// 0 === normal mode and 1 === zan mode

function ChangeMode(mode) {
    modes[mode]?.init()
}

const ChangeTitle = (changes) => document.querySelector(".shikaTypo").innerHTML = changes;

const ChangeCounts = () => {
    for (const countElement in counts) {
        document.querySelector(`.${counts[countElement].divName}`).innerHTML = counts[countElement].count;
    }
}

const ShakeKeyboard = () => {
    if(IsKeyBoardVisible){
        document.querySelector('.keyboard').classList.add('shake');
    
        setTimeout(() => {
            document.querySelector('.keyboard').classList.remove('shake');
        }, 500);
    }
}

function createKeyboard(keys) {
    const rows = {};

    // Group keys by rowNum
    for (const key in keys) {
        const keyData = keys[key];
        const rowNum = keyData.rowNum;

        if (!rows[rowNum]) {
            rows[rowNum] = [];
        }

        rows[rowNum].push(keyData);
    }

    // Create rows and keys
    const parent = document.querySelector('.keyboard');
    for (const rowNum in rows) {
        const keyArray = rows[rowNum];
        const keyrow = document.createElement('div');
        keyrow.classList.add('keyrow', `row-${rowNum}`);
        parent.append(keyrow);

        for (const key of keyArray) {
            const keyname = document.createElement('div');
            keyname.className = key.className;
            keyname.innerHTML = `
                <p>
                    <span>${key.value}</span>
                    <span>${key.secLabel}</span>
                </p>
                <span>${key.bottomLabel}</span>
            `;
            keyname.onclick = function () {
                handleClick(key.className.split(' ')[2]);
            };
            keyrow.append(keyname);
        }
    }
}

// this is for the end screen status generation
function endScreenStats({
    sentences = 1,
}= {}) {
    let result = "";
    if (wpm < 30) {
        result = "belowAverage";
    } else if (wpm >= 30 && wpm < 40) {
        result = "average";
    } else if (wpm >= 40 && wpm < 60) {
        result = "aboveAverage";
    } else if (wpm >= 60 && wpm < 80) {
        result = "fast";
    } else if (wpm >= 80 && wpm < 100) {
        result = "veryFast";
    } else if (wpm >= 100) {
        result = "expert";
    }
    const resultText = wpmrate[result][Math.floor(Math.random() * wpmrate[result].length)];
    document.querySelector(".roastText").innerText = resultText;

    document.querySelector(".timerFinal").innerText = time;
    document.querySelector(".rightCountFinal").innerText = counts.rightCount.count;
    document.querySelector(".wrongCountFinal").innerText = counts.wrongCount.count;
    document.querySelector(".mistakeCountFinal").innerText = counts.backspaceMistakes.count;
    document.querySelector(".sentenceCountFinal").innerText = sentences.count;
    document.querySelector(".wpmCount").innerText = wpm;
    clearInterval(timerCounter);
    timerCounter = null;
}

// Call the function to create the keyboard
createKeyboard(keys);

const lightUp = (className) => {
    let keyElement = document.querySelector(`.${className}`)
    if (keyElement) {
        keyElement.classList.add('highlight');

        setTimeout(() => {
            keyElement.classList.remove('highlight');
        }, 500);
    }
}

function timerToggle() {
    time++;
    wpm = Math.round((count / 5) / (time / 60))
    document.querySelector(".secondCount").innerHTML = time
}

function restart(){
    document.querySelector(".endScreen").classList.add("close")
    if(ZanMode){
        ChangeMode(1)
    }else{
        ChangeMode(0)
    }
}
function unPause(){
    document.querySelector(".pauseScreen").classList.add("close")
}

function checkIfEnded() {
    if (current >= letters.length && !ZanMode) {
        document.querySelector(".endScreen").classList.remove("close")
        IsKeyBoardLocked = true
        endScreenStats()
        return true;
    }else if (current >= letters.length && ZanMode) {
        current = 0;
        counts.sentenceCount.count++;
        ChangeCounts()
        fetchMovieLine()
        IsKeyBoardLocked = true;
        return true;
    }
    return false
}

function handleClick(key, opKey = null) {
    
    if(IsKeyBoardLocked) return
    if(!firstCharacterPressed) {
        timerCounter = setInterval(() => {
            timerToggle()
        }, 1000)
    }

    if(key == "Zan") {
        if(ZanMode){
            ChangeMode(0)
        }else{
            ChangeMode(1)
        }
        console.log(ZanMode)
    }else if(key == "Pause") {
        document.querySelector(".pauseScreen").classList.remove("close")
    } else if (opKey !== null && opKey.keyCode == 13) {
        console.log("Enter")
    } else if (opKey !== null && opKey.keyCode == 27) {
        console.log("Escape")
        //restart game
    } else if (opKey !== null && opKey.keyCode == 8 || key == "Backspace") { // BACKSPACE
        if (current < 1) return
        if (document.querySelector(`.typeBox>span:nth-child(${current})`).classList.contains("right")) {
            counts.rightCount.count--;
            document.querySelector(`.typeBox>span:nth-child(${current})`).classList.remove('right')
        } else {
            counts.wrongCount.count--;
            document.querySelector(`.typeBox>span:nth-child(${current})`).classList.remove('wrong')
        }
        counts.backspaceMistakes.count++;
        ChangeCounts()
        

        document.querySelector(`.typeBox>span:nth-child(${current + 1})`).classList.remove('current')
        if (current - 1 >= 0) current--;
    } else if (opKey !== null && opKey.keyCode == 9) {
        console.log("Tab")
    } else if (opKey !== null && opKey.keyCode !== 32 && opKey.keyCode < 47 || checkIfEnded()) {
        return
    } else {
        firstCharacterPressed = true;
        let typedKey = opKey == null ? keys[key] : keys[opKey.code]

        if (typedKey.value.toLowerCase() == letters[current]) {
            document.querySelector(`.typeBox>span:nth-child(${current + 1})`).classList.add('right')
            counts.rightCount.count++;
            ChangeCounts()
        } else {
            document.querySelector(`.typeBox>span:nth-child(${current + 1})`).classList.add('wrong')
            counts.wrongCount.count++;
            ShakeKeyboard()
            ChangeCounts()
        }
        document.querySelector(`.typeBox>span:nth-child(${current + 1})`).classList.remove('current')
        current++;
        count++;
    }
    checkIfEnded()
    if (current < letters.length && !IsKeyBoardLocked) document.querySelector(`.typeBox>span:nth-child(${current + 1})`).classList.add('current')
    opKey == null ? lightUp(key) : lightUp(opKey.code)
}

window.addEventListener("keydown", (e) => {
    if(e.target.tagName == "INPUT") return
    handleClick("", e)
})

async function displayLetters(sentence, animationSpeed) {
    var typeBox = document.querySelector('.typeBox');
    letters = []
    typeBox.innerHTML = ''; // Clear previous content

    for (let i = 0; i < sentence.length; i++) {
        let letter = sentence[i].replace(/\u2013|\u2014/g, "-")
        letters.push(letter)
        const span = document.createElement('span');
        span.textContent = letter

        if (letter == " ") {
            span.classList.add('space')
        }

        typeBox.appendChild(span);
        if (animationSpeed != 0) {
            // Delay for 200 milliseconds (adjust as needed)
            await new Promise(resolve => setTimeout(resolve, animationSpeed));
        }
    }


    document.querySelector('.typeBox>span:nth-child(1)').classList.add('current')
    IsKeyBoardLocked = false;
}

// displayLetters("Technology frightens me to death. It's designed by engineers to impress other engineers. And they always come with instruction booklets that are written by engineers for other engineers — which is why almost no technology ever works.", 10)

async function fetchMovieLine() {
    try {
        IsKeyBoardLocked = true;
        document.querySelector('.typeBox').innerHTML = "<span>GENERATING MORE...</span>"
        const response = await fetch('https://api.quotable.io/random');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const movieLine = await response.json();
        document.querySelector('.spacebar').innerHTML = movieLine.author
        displayLetters(movieLine.content.toLowerCase(), 10);
        typetrig = 0
        current = 0;
    } catch (error) {
        console.error('Error fetching movie line:', error);
        getOfflineText()
    }
}
fetchMovieLine()

function getOfflineText(){
    displayLetters(offlineTexts[Math.floor(Math.random()*offlineTexts.length)],10)
    typetrig = 0
    current = 0;  
}

function ChangeKeyboard(element, target) {
    document.documentElement.style.setProperty(`--${target}`, element.value)
    console.log(element.value)
}

function toggleOff(elements, classToAdd) {
    for (let i = 0; i < elements.length; i++) {
        let e = document.querySelector(`.${elements[i]}`);
        if(elements[i] == "keyboardTrigger"){
            IsKeyBoardVisible = !IsKeyBoardVisible
        }
        if(e.classList.contains(classToAdd)) e.classList.remove(classToAdd)
        else e.classList.add(classToAdd)
    }
}
