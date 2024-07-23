var keys = {
    row1: [
        { mainLabel: "Esc", secLabel: "", bottomLabel: ``, className: "key Esc" },
        { mainLabel: "1", secLabel: "!", bottomLabel: "F1", className: "key one" },
        { mainLabel: "2", secLabel: "@", bottomLabel: "F2", className: "key two" },
        { mainLabel: "3", secLabel: "#", bottomLabel: "F3", className: "key three" },
        { mainLabel: "4", secLabel: "$", bottomLabel: "F4", className: "key four" },
        { mainLabel: "5", secLabel: "%", bottomLabel: "F5", className: "key five" },
        { mainLabel: "6", secLabel: "^", bottomLabel: "F6", className: "key six" },
        { mainLabel: "7", secLabel: "&", bottomLabel: "F7", className: "key seven" },
        { mainLabel: "8", secLabel: "*", bottomLabel: "F8", className: "key eight" },
        { mainLabel: "9", secLabel: "(", bottomLabel: "F9", className: "key nine" },
        { mainLabel: "0", secLabel: ")", bottomLabel: "F10", className: "key zero" },
        { mainLabel: "-", secLabel: "_", bottomLabel: "F11", className: "key minus" },
        { mainLabel: "=", secLabel: "+", bottomLabel: "F12", className: "key equal" },
        { mainLabel: "Backspace", secLabel: "", bottomLabel: "", className: "key backspace" }
    ],
    row2: [
        { mainLabel: "Tab", secLabel: "", bottomLabel: "", className: "key tab" },
        { mainLabel: "Q", secLabel: "", bottomLabel: "", className: "key Q" },
        { mainLabel: "W", secLabel: "", bottomLabel: "", className: "key W" },
        { mainLabel: "E", secLabel: "", bottomLabel: "", className: "key E" },
        { mainLabel: "R", secLabel: "", bottomLabel: "", className: "key R" },
        { mainLabel: "T", secLabel: "", bottomLabel: "", className: "key T" },
        { mainLabel: "Y", secLabel: "", bottomLabel: "PrtSc", className: "key Y" },
        { mainLabel: "U", secLabel: "", bottomLabel: "ScrLk", className: "key U" },
        { mainLabel: "I", secLabel: "", bottomLabel: "Pause", className: "key I" },
        { mainLabel: "O", secLabel: "", bottomLabel: "", className: "key O" },
        { mainLabel: "P", secLabel: "", bottomLabel: "", className: "key P" },
        { mainLabel: "[", secLabel: "{", bottomLabel: "", className: "key leftBracket" },
        { mainLabel: "]", secLabel: "}", bottomLabel: "", className: "key rightBracket" },
        { mainLabel: "\\", secLabel: "|", bottomLabel: "", className: "key backslash" }
    ],
    row3: [
        { mainLabel: "CapsLock", secLabel: "", bottomLabel: "", className: "key capslock" },
        { mainLabel: "A", secLabel: "", bottomLabel: "", className: "key A" },
        { mainLabel: "S", secLabel: "", bottomLabel: "", className: "key S" },
        { mainLabel: "D", secLabel: "", bottomLabel: "", className: "key D" },
        { mainLabel: "F", secLabel: "", bottomLabel: "", className: "key F" },
        { mainLabel: "G", secLabel: "", bottomLabel: "", className: "key G" },
        { mainLabel: "H", secLabel: "", bottomLabel: "Insert", className: "key H" },
        { mainLabel: "J", secLabel: "", bottomLabel: "Home", className: "key J" },
        { mainLabel: "K", secLabel: "", bottomLabel: "PgUp", className: "key K" },
        { mainLabel: "L", secLabel: "", bottomLabel: "", className: "key L" },
        { mainLabel: ";", secLabel: ":", bottomLabel: "", className: "key semicolon" },
        { mainLabel: "'", secLabel: "\"", bottomLabel: "", className: "key quote" },
        { mainLabel: "Enter", secLabel: "", bottomLabel: "", className: "key enter" }
    ],
    row4: [
        { mainLabel: "Shift", secLabel: "", bottomLabel: "", className: "key leftShift" },
        { mainLabel: "Z", secLabel: "", bottomLabel: "", className: "key Z" },
        { mainLabel: "X", secLabel: "", bottomLabel: "", className: "key X" },
        { mainLabel: "C", secLabel: "", bottomLabel: "", className: "key C" },
        { mainLabel: "V", secLabel: "", bottomLabel: "", className: "key V" },
        { mainLabel: "B", secLabel: "", bottomLabel: "", className: "key B" },
        { mainLabel: "N", secLabel: "", bottomLabel: "Del", className: "key N" },
        { mainLabel: "M", secLabel: "", bottomLabel: "End", className: "key M" },
        { mainLabel: ",", secLabel: "<", bottomLabel: "PgDn", className: "key comma" },
        { mainLabel: ".", secLabel: ">", bottomLabel: "", className: "key period" },
        { mainLabel: "/", secLabel: "?", bottomLabel: "↑", className: "key slash ArrowUp" },
        { mainLabel: "Shift", secLabel: "", bottomLabel: "", className: "key rightShift" }
    ],
    row5: [
        { mainLabel: "Ctrl", secLabel: "", bottomLabel: "", className: "key leftCtrl" },
        { mainLabel: "Win", secLabel: "", bottomLabel: "", className: "key leftWin" },
        { mainLabel: "Alt", secLabel: "", bottomLabel: "", className: "key leftAlt" },
        { mainLabel: "_", secLabel: "", bottomLabel: "", className: "key spacebar" },
        { mainLabel: "Alt", secLabel: "", bottomLabel: "←", className: "key rightAlt ArrowLeft" },
        { mainLabel: "Prt", secLabel: "", bottomLabel: "↓", className: "key prt ArrowDown" },
        { mainLabel: "Ctrl", secLabel: "", bottomLabel: "→", className: "key rightCtrl ArrowRight" },
        { mainLabel: "Zen", secLabel: "", bottomLabel: "", className: "key zen" }
    ]
};

const speedbinds = {
    1: 50,
    2: 10,
    3: 0,
}

const keybinds = {
    Escape: { name: "Esc", text: "esc" },
    Digit1: { name: "one", text: "1" },
    Digit2: { name: "two", text: "2" },
    Digit3: { name: "three", text: "3" },
    Digit4: { name: "four", text: "4" },
    Digit5: { name: "five", text: "5" },
    Digit6: { name: "six", text: "6" },
    Digit7: { name: "seven", text: "7" },
    Digit8: { name: "eight", text: "8" },
    Digit9: { name: "nine", text: "9" },
    Digit0: { name: "zero", text: "0" },
    Minus: { name: "minus", text: "-" },
    Equal: { name: "equal", text: "=" },
    Backspace: { name: "backspace", text: "backspace" },
    Tab: { name: "tab", text: "tab" },
    KeyQ: { name: "Q", text: "q" },
    KeyW: { name: "W", text: "w" },
    KeyE: { name: "E", text: "e" },
    KeyR: { name: "R", text: "r" },
    KeyT: { name: "T", text: "t" },
    KeyY: { name: "Y", text: "y" },
    KeyU: { name: "U", text: "u" },
    KeyI: { name: "I", text: "i" },
    KeyO: { name: "O", text: "o" },
    KeyP: { name: "P", text: "p" },
    BracketLeft: { name: "leftBracket", text: "[" },
    BracketRight: { name: "rightBracket", text: "]" },
    Backslash: { name: "backslash", text: "\\" },
    CapsLock: { name: "capslock", text: "capslock" },
    KeyA: { name: "A", text: "a" },
    KeyS: { name: "S", text: "s" },
    KeyD: { name: "D", text: "d" },
    KeyF: { name: "F", text: "f" },
    KeyG: { name: "G", text: "g" },
    KeyH: { name: "H", text: "h" },
    KeyJ: { name: "J", text: "j" },
    KeyK: { name: "K", text: "k" },
    KeyL: { name: "L", text: "l" },
    Semicolon: { name: "semicolon", text: ";" },
    Quote: { name: "quote", text: "'" },
    Enter: { name: "enter", text: "enter" },
    ShiftLeft: { name: "leftShift", text: "leftShift" },
    KeyZ: { name: "Z", text: "z" },
    KeyX: { name: "X", text: "x" },
    KeyC: { name: "C", text: "c" },
    KeyV: { name: "V", text: "v" },
    KeyB: { name: "B", text: "b" },
    KeyN: { name: "N", text: "n" },
    KeyM: { name: "M", text: "m" },
    Comma: { name: "comma", text: "," },
    Period: { name: "period", text: "." },
    Slash: { name: "slash", text: "/" },
    ShiftRight: { name: "rightShift", text: "rightShift" },
    ControlLeft: { name: "leftCtrl", text: "leftCtrl" },
    MetaLeft: { name: "leftWin", text: "leftWin" },
    AltLeft: { name: "leftAlt", text: "leftAlt" },
    Space: { name: "spacebar", text: "spacebar" },
    AltRight: { name: "rightAlt", text: "rightAlt" },
    ControlRight: { name: "rightCtrl", text: "rightCtrl" },
    ArrowUp: { name: "ArrowUp", text: "ArrowUp" },
    ArrowDown: { name: "ArrowDown", text: "ArrowDown" },
    ArrowLeft: { name: "ArrowLeft", text: "ArrowLeft" },
    ArrowRight: { name: "ArrowRight", text: "ArrowRight" },
    F1: { name: "F1", text: "F1" },
    F2: { name: "F2", text: "F2" },
    F3: { name: "F3", text: "F3" },
    F4: { name: "F4", text: "F4" },
    F5: { name: "F5", text: "F5" },
    F6: { name: "F6", text: "F6" },
    F7: { name: "F7", text: "F7" },
    F8: { name: "F8", text: "F8" },
    F9: { name: "F9", text: "F9" },
    F10: { name: "F10", text: "F10" },
    F11: { name: "F11", text: "F11" },
    F12: { name: "F12", text: "F12" },
    ContextMenu: { name: "prt", text: "prt" },
    Printscreen: { name: "Y", text: "y" },
    ScrollLock: { name: "U", text: "u" },
    Pause: { name: "I", text: "i" },
    Insert: { name: "H", text: "h" },
    Home: { name: "J", text: "j" },
    PageUp: { name: "K", text: "k" },
    PageDown: { name: "comma", text: "," },
    Delete: { name: "N", text: "n" },
    End: { name: "M", text: "m" },
};

const wpmrate = {
    belowAverage: ["You need to try harder", "A turtle can type faster than you", "I fell asleep while waiting for you to type"],
    average: ["You have average typing speed", "That was Okay", "Try better next time"],
    aboveAverage: ["Good Job! That was above average", "You are better than 60% of the people, I guess", "You are getting good"],
    fast: ["Oh! That was fast", "You suprised me", "Try getting 69 next time"],
    veryFast: ["Slow down. No ones following you", "Put some ice on your fingers", "Fast and furious baby"],
    expert: ["You better be a typist", "Try changing your profession to a typist", "Hmm, Are you Cheating?"],
}
const resultgenerate = (result) => {
    let text = ""
    switch (result) {
        case "belowAverage":
            text = wpmrate["belowAverage"][Math.floor(Math.random() * wpmrate["belowAverage"].length)]
            break;
        case "average":
            text = wpmrate["average"][Math.floor(Math.random() * wpmrate["average"].length)]
            break;
        case "aboveAverage":
            text = wpmrate["aboveAverage"][Math.floor(Math.random() * wpmrate["aboveAverage"].length)]
            break;
        case "fast":
            text = wpmrate["fast"][Math.floor(Math.random() * wpmrate["fast"].length)]
            break;
        case "veryFast":
            text = wpmrate["veryFast"][Math.floor(Math.random() * wpmrate["veryFast"].length)]
            break;
        case "expert":
            text = wpmrate["expert"][Math.floor(Math.random() * wpmrate["expert"].length)]
            break;
        default:
            text = "Can't calculate Data"
            break;
    }
    return text
}
function categorizeWPM(wpm) {
    if (wpm < 30) {
      return "belowAverage";
    } else if (wpm >= 30 && wpm < 40) {
      return "average";
    } else if (wpm >= 40 && wpm < 60) {
      return "aboveAverage";
    } else if (wpm >= 60 && wpm < 80) {
      return "fast";
    } else if (wpm >= 80 && wpm < 100) {
      return "veryFast";
    } else if (wpm >= 100) {
      return "expert";
    } else {
      return "Invalid WPM";
    }
  }

let currentWord = 1;
let wordCnt = 0;
let rightCnt = 0;
let wrongCnt = 0;
let mode = 4;
let animationSpeed = 1
let timerInterval;
let timer = 0;
let typetrig = 0;
let mistakes = 0;
let count = 0;

const lightUp = (keyElement) => {
    if (keyElement) {
        keyElement.classList.add('highlight');

        setTimeout(() => {
            keyElement.classList.remove('highlight');
        }, 1000);
    }
}

const checkLetter = (letter) => {
    const currentLetter = document.querySelector(`.typeBox>span:nth-child(${currentWord})`)
    const lastLetter = document.querySelector(`.typeBox>span:nth-child(${currentWord - 1})`)

    const typeBoxSpan = document.querySelectorAll(".typeBox>span");
    typeBoxSpan.forEach(spans => {
        spans.classList.remove('current')
    })

    if (letter == "backspace") {
        if (lastLetter) {
            if (lastLetter.classList.contains('right')) {
                lastLetter.classList.remove('right')
                rightCnt--
            } else if (lastLetter.classList.contains('wrong')) {
                lastLetter.classList.remove('wrong')
                wrongCnt--
            }
            currentLetter.classList.remove('right')
            currentLetter.classList.remove('wrong')
            currentWord = currentWord == 1 ? 1 : currentWord - 1;
        }
    } else if (letter == "rightShift" || letter == "leftShift" || letter == "capslock" || letter == "tab") {
        return
    }
    else {
        count++
        if (letter.toLowerCase() == currentLetter.innerHTML.toLowerCase() ||
            (letter.toLowerCase() == "spacebar" && currentLetter.innerHTML == " ")
        ) {
            currentLetter.classList.add('right')
            rightCnt++
        } else {
            currentLetter.classList.add('wrong')
            wrongCnt++
            mistakes++
        }

        if (currentWord == wordCnt) {
            //Win Condition
            activateEndscreen()
        } else {
            currentWord++;
        }
    }

    document.querySelector(`.typeBox>span:nth-child(${currentWord})`).classList.add('current');
    document.querySelector('.rightCnt').innerHTML = rightCnt
    document.querySelector('.wrongCnt').innerHTML = wrongCnt

    resetCnt()
    calculatePercent()
}

const resetCnt = () => {
    document.querySelector('.rightCnt').innerHTML = rightCnt
    document.querySelector('.wrongCnt').innerHTML = wrongCnt
}

const calculatePercent = () => {
    var percent = 100 / wordCnt * currentWord
    const progressElement = document.querySelector('.progress');

    progressElement.style.setProperty('--progress-width', `${percent}%`);
}

document.addEventListener('keydown', function (event) {
    const code = event.code;
    if (typetrig == 0) {
        const keyElement = document.querySelector(`.key.${keybinds[code].name}`);

        lightUp(keyElement)
        if (keybinds[code].name == "Esc") {
            resetData()
        } else {
            checkLetter(keybinds[code].text)
        }
    } else {
        if (code == "KeyF") {
            restart()
        }
    }
});


for (const [row, keyArray] of Object.entries(keys)) {
    var keyrow = document.createElement('div')
    var parent = document.querySelector('.keyboard')
    keyrow.classList = 'keyrow'
    keyrow.classList.add(row)
    parent.append(keyrow)

    for (const key of keyArray) {
        var keyname = document.createElement('div')
        keyname.className = key.className
        keyname.innerHTML = `
                    <p>
                        <span>${key.mainLabel}</span>
                        <span>${key.secLabel}</span>
                    </p>
                    <span>${key.bottomLabel}</span>
        `
        keyname.onclick = function () {
            handleClick(key.className.split(' ')[1]);
        };
        keyrow.append(keyname)
    }
}

function handleClick(keyname) {
    if (typetrig == 0) {
        const keyElement = document.querySelector(`.key.${keyname}`);

        lightUp(keyElement)
        checkLetter(keyname)
    }
}

async function fetchRandomWords(amount) {
    try {
        const response = await fetch(`https://random-word-api.herokuapp.com/word?number=${amount}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const words = await response.json();
        const sentence = words.join(' ');
        wordCnt = sentence
        document.querySelector('.spacebar').innerHTML = "-"
        displayLetters(sentence, animationSpeed);
        countLetters(sentence);
    } catch (error) {
        console.error('Error fetching random words:', error);
    }
}
async function fetchMovieLine() {
    try {
        const response = await fetch('https://api.quotable.io/random');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const movieLine = await response.json();
        console.log(movieLine)
        document.querySelector('.spacebar').innerHTML = movieLine.author
        displayLetters(movieLine.content, animationSpeed);
        countLetters(movieLine.content);
    } catch (error) {
        console.error('Error fetching movie line:', error);
    }
}

async function displayLetters(sentence, animationSpeed) {
    const typeBox = document.querySelector('.typeBox');
    typeBox.innerHTML = ''; // Clear previous content
    for (const letter of sentence) {
        const span = document.createElement('span');
        span.textContent = letter.toLowerCase();
        if (letter == " ") {
            span.classList.add('space')
        } else if (letter === ";" || letter === "!" || letter === "-" || letter === "…") {
            continue;
        }

        typeBox.appendChild(span);

        if (animationSpeed != 0) {
            // Delay for 200 milliseconds (adjust as needed)
            await new Promise(resolve => setTimeout(resolve, animationSpeed));
        }
    }

    document.querySelector('.typeBox>span:nth-child(1)').classList.add('current')
}
function countLetters(sentence) {
    const letterCount = sentence.length;
    wordCnt = letterCount;
}
document.addEventListener('keyup', function (event) {
    const caps = document.querySelector('.capslock')
    if (event.getModifierState && event.getModifierState('CapsLock')) {
        caps.classList.add('active');
    } else {
        caps.classList.remove('active');
    }
});

const setMode = (mode) => {
    document.querySelectorAll('.wordsCount>button').forEach(div => {
        div.classList.remove('active')
    })
    switch (mode) {
        case 1:
            document.querySelector('.wordsCount>button:nth-child(2)').classList.add('active')
            fetchRandomWords(10);
            break;
        case 2:
            document.querySelector('.wordsCount>button:nth-child(3)').classList.add('active')
            fetchRandomWords(15);
            break;
        case 3:
            document.querySelector('.wordsCount>button:nth-child(4)').classList.add('active')
            fetchRandomWords(20);
            break;
        case 4:
            document.querySelector('.wordsCount>button:nth-child(5)').classList.add('active')
            fetchMovieLine();
            break;
        default:
            break;
    }
}

const resetData = () => {
    typetrig = 0;
    currentWord = 1;
    wordCnt = 0;
    rightCnt = 0;
    wrongCnt = 0;
    timer = 0;
    mistakes = 0;
    count = 0;

    const typeBox = document.querySelector('.typeBox');
    typeBox.innerHTML = ''; // Clear previous content

    setMode(mode)
    startTimer();
    resetCnt()
    document.querySelector('.progress').style.setProperty('--progress-width', `0%`);
}

resetData();

const setWords = (modeNum) => {
    mode = modeNum
    setMode(mode)
}

const animationmode = (speed) => {
    animationSpeed = speedbinds[speed]

    document.querySelectorAll('.animationBox>button').forEach(div => {
        div.classList.remove('active')
    })
    switch (speed) {
        case 1:
            document.querySelector('.animationBox>button:nth-child(2)').classList.add('active')
            break;
        case 2:
            document.querySelector('.animationBox>button:nth-child(3)').classList.add('active')
            break;
        case 3:
            document.querySelector('.animationBox>button:nth-child(4)').classList.add('active')
            break;
        default:
            break;
    }
}

function startTimer() {
    if (timerInterval) {
        clearInterval(timerInterval); // Clear any existing interval
    }
    timer = 0; // Reset timer

    const min1 = document.querySelector('.min1');
    const min2 = document.querySelector('.min2');
    const sec1 = document.querySelector('.sec1');
    const sec2 = document.querySelector('.sec2');

    timerInterval = setInterval(function () {
        let minutes = parseInt(timer / 60, 10);
        let seconds = parseInt(timer % 60, 10);

        // Format minutes and seconds as two digits
        let minutesStr = String(minutes).padStart(2, '0');
        let secondsStr = String(seconds).padStart(2, '0');

        // Update the HTML elements
        min1.textContent = minutesStr[0];
        min2.textContent = minutesStr[1];
        sec1.textContent = secondsStr[0];
        sec2.textContent = secondsStr[1];

        timer++;
    }, 1000);
}

const activateEndscreen = () => {
    typetrig = 1

    let wpm = 0
    wpm = Math.round((count / 5) / (timer / 60))
    console.log(wpm+ " " + resultgenerate(categorizeWPM(wpm)) + " " +categorizeWPM(wpm) + " " + resultgenerate("fast"))

    const endscreen = document.querySelector('.successScreen')
    if (endscreen) {
        endscreen.remove()
    } else {
        var screen = document.createElement('div')
        screen.className = 'successScreen center'
        screen.innerHTML = `
            <div class="resultBox center">
                <div class="box">
                    WPM - <span>${wpm}</span>
                </div>
                <div class="box">
                    Total - <span>${wordCnt}</span>
                </div>
                <div class="box">
                    Right - <span>${rightCnt}</span>
                </div>
                <div class="box">
                    Wrong - <span>${wrongCnt}</span>
                </div>
                <div class="box">
                    Mistakes - <span>${mistakes}</span>
                </div>
                <div class="box">
                    Time - <span>${timer}s</span>
                </div>
            </div>
            <p class="resultText">${resultgenerate(categorizeWPM(wpm))}</p>
            <span class="congratsContainer center">
                <span>C</span>
                <span>O</span>
                <span>N</span>
                <span>G</span>
                <span>R</span>
                <span>A</span>
                <span>T</span>
                <span>S</span>
            </span>
            <button onclick="restart()">Restart (Press F to restart)</button>
        `
        document.querySelector('body').append(screen)
    }
}

const restart = () => {
    activateEndscreen()
    resetData()
}
