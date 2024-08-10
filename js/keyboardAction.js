var letters = []
var current  = 0;

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
        }, 1000);
    }
}

function handleClick(key, opKey=null) {
    if(current >= letters.length){
        console.log("Hurrayyy you've completed")
    }else if(opKey !== null && opKey.keyCode == 13){
        console.log("Enter")
    }else if(opKey !== null && opKey.keyCode == 27){
        console.log("Escape")
    }else if(opKey !== null && opKey.keyCode == 9){
        console.log("Tab")
    }else if(opKey !== null && opKey.keyCode !== 32 && opKey.keyCode < 47) { 
        return 
    }else {
        let typedKey = opKey == null ? keys[key] : keys[opKey.code]
        console.log(typedKey, key)
        if(typedKey.value.toLowerCase() == letters[current]) {
            document.querySelector(`.typeBox>span:nth-child(${current+1})`).classList.add('right')
            console.log("correct", typedKey.value, letters[current])
        }else {
            document.querySelector(`.typeBox>span:nth-child(${current+1})`).classList.add('wrong')
            console.log("incorrect", typedKey.value, letters[current])
        }
        document.querySelector(`.typeBox>span:nth-child(${current+1})`).classList.remove('current')
        current++;
        if(current < letters.length) document.querySelector(`.typeBox>span:nth-child(${current+1})`).classList.add('current')
        console.log(letters[current])
    }

    opKey == null ? lightUp(key) : lightUp(opKey.code)
}

window.addEventListener("keydown", (e) => handleClick("" ,e))

async function displayLetters(sentence, animationSpeed){
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
}

// displayLetters("Technology frightens me to death. It's designed by engineers to impress other engineers. And they always come with instruction booklets that are written by engineers for other engineers — which is why almost no technology ever works.", 10)

async function fetchMovieLine() {
    try {
        const response = await fetch('https://api.quotable.io/random');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const movieLine = await response.json();
        document.querySelector('.spacebar').innerHTML = movieLine.author
        displayLetters(movieLine.content.toLowerCase(), 10);
        typetrig = 0
    } catch (error) {
        console.error('Error fetching movie line:', error);
        generateRandomOffline()
    }
}
fetchMovieLine()

function ChangeKeyboard(element, target) {
    document.documentElement.style.setProperty(`--${target}`, element.value)
    console.log(element.value)
}