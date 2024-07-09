
function splitText() {
    const splitContainer = document.getElementById("splitContainer");
    const splitText = document.getElementById("splitText");
    const nextStep = document.getElementById("nextStep");

    // Add a class to split the text
    splitContainer.classList.add("split-animation");

    // After the split animation, show the next step
    setTimeout(() => {
        splitContainer.classList.add("hidden");
        nextStep.classList.remove("hidden");
    }, 1000);
}

function validateForm(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;

    if (name.toLowerCase() === 'fuddu' && password === '26052006') {
        alert("Login successful!");

        // Open Memory Lane section in a new window
        openMemoryLane();
    } else {
        alert("You are wrong. Name: yours name, Pass :Yours birthday");
    }
}

function openMemoryLane() {
    // Replace 'memoryLane.html' with the actual URL of your Memory Lane page
    window.open('letter.html', target="_self");
}







