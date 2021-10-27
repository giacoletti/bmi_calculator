const nameInput = document.querySelector('input[name=fullName]');
const heightInput = document.querySelector('input[name=height]');
const weightInput = document.querySelector('input[name=weight]');
const button = document.getElementById('submit-button');
const messageElement = document.getElementById('response-message');
debugger
button.addEventListener('click', () => {
    const BMIResult = calculateBMI(heightInput.value, weightInput.value);
    messageElement.innerText = `${nameInput.value} BMI is ${BMIResult}`;     
});

function calculateBMI(height, weight) {
    height /= 100;
    return weight / (height * height);
};
