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
                    <span>${key.mainLabel}</span>
                    <span>${key.secLabel}</span>
                </p>
                <span>${key.bottomLabel}</span>
            `;
            keyname.onclick = function () {
                handleClick(key.className.split(' ')[1]);
            };
            keyrow.append(keyname);
        }
    }
}

// Call the function to create the keyboard
createKeyboard(keys);

function handleClick(key) {
    console.log(`Key clicked: ${key}`);
}