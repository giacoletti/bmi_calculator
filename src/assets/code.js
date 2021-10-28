const nameInput = document.querySelector('input[name=fullName]');
const heightInput = document.querySelector('input[name=height]');
const weightInput = document.querySelector('input[name=weight]');
const button = document.getElementById('submit-button');
const messageElement = document.getElementById('response-message');
debugger
button.addEventListener('click', () => {
    if (nameInput.value === ''){
        messageElement.innerText = 'Enter a full name, please!';
    } else {
        const BMIResult = calculateBMI(heightInput.value, weightInput.value);
        messageElement.innerText = `${nameInput.value} BMI is ${BMIResult}`;     
        //we could store the data into a database to be compared in the future
        //to check if given person BMI is decreasing or increasing
    }
});

function calculateBMI(height, weight) {
    height /= 100;
    return weight / (height * height);
};
