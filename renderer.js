const { dialog } = require('electron').remote;
const fs = require('fs');

document.getElementById('saveBtn').addEventListener('click', () => {
    const content = document.getElementById('editor').value;
    dialog.showSaveDialog({
        filters: [
            { name: 'Lua Files', extensions: ['lua'] },
            { name: 'All Files', extensions: ['*'] }
        ]
    }).then(result => {
        if (!result.canceled) {
            fs.writeFileSync(result.filePath, content);
        }
    }).catch(err => {
        console.log(err);
    });
});

document.getElementById('loadBtn').addEventListener('click', () => {
    dialog.showOpenDialog({
        filters: [
            { name: 'Lua Files', extensions: ['lua'] },
            { name: 'All Files', extensions: ['*'] }
        ]
    }).then(result => {
        if (!result.canceled) {
            const content = fs.readFileSync(result.filePaths[0], 'utf-8');
            document.getElementById('editor').value = content;
        }
    }).catch(err => {
        console.log(err);
    });
});

document.getElementById('formatBtn').addEventListener('click', () => {
    alert('Format function is not implemented yet.');
});
