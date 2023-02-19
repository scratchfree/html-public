const htmlBody = document.querySelector('body'); // The body from HTML 

const randomClickFunction = function () {
    const colors = ['yellow', 'green', 'black', 'gray', 'blue']; // color-list

    const randomIndex = Math.floor(Math.random() * colors.length); // use Math.Random + .length from colors

    const randomColor = colors[randomIndex]; // Using INDEX from Math.random()

    htmlBody.style.backgroundColor = randomColor; // Set style background 

    console.log('The user clicked to color > ' + randomColor);

    // if its work correct try it
    // >>>>  htmlBody.onclick = randomClickFunction;  <<<<
}

// scratchfree