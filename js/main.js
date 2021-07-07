const animHeader = document.querySelectorAll('#header-web-d path');
for(let i = 0; i < animHeader.length; i++) {
    console.log(`Letter ${i} is ${animHeader[i].getTotalLength()}`);
}
