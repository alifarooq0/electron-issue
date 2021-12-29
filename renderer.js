// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.


document.getElementById('body').addEventListener('mouseenter', function() {
    console.log('MOUSEENTER')
    document.getElementById('hover').innerHTML='MOUSEENTER';
})

document.getElementById('body').addEventListener('mouseout', function() {
    console.log('MOUSEOUT')
    document.getElementById('hover').innerHTML='MOUSEOUT';
})
