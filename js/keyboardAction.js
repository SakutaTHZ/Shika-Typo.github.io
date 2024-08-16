/**
 * This is a documentation for the file KeyboardActions
 * @var letters 
*/

var letters = []
var current = 0;
var IsKeyBoardLocked = true;
var IsKeyBoardVisible = true;
var ZanMode = false;

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
    }
}

const modes = [
    {
        name: "normal",
        init: () => {
            ZanMode = false;
            ChangeTitle("Shika-typo")
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

function checkIfEnded() {
    if (current >= letters.length && !ZanMode) {
        alert("done")
        return true;
    }else if (current >= letters.length && ZanMode) {
        current = 0;
        fetchMovieLine()
        IsKeyBoardLocked = true;
        return true;
    }
    return false
}

function handleClick(key, opKey = null) {
    if(IsKeyBoardLocked) return

    if(key == "Zan") {
        ChangeMode(1)
    }else if(key == "Pause") {
        alert("Pause")
    } else if (opKey !== null && opKey.keyCode == 13) {
        console.log("Enter")
    } else if (opKey !== null && opKey.keyCode == 27) {
        console.log("Escape")
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
        // console.error('Error fetching movie line:', error);
        fetchMovieLine()
    }
}
fetchMovieLine()

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