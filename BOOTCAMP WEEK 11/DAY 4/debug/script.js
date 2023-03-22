const sum = (add1, add2) => {
    const added = add1 + add2;
    return added;
}

const doCalculation = (userInput) => {
    const [num1, num2] = userInput;
    return sum(num1, num2);
}

const displayCalculation = () => {
    const fakeUserInput = ['1', '4'];
    const finalSum = doCalculation(fakeUserInput);


    const section = document.querySelector('.result');
    const paragraph = document.createElement("p");
    const text = document.createTextNode(`User input adds up to: ${finalSum}`);
    paragraph.appendChild(text);   
    section.appendChild(paragraph);
}

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('click');
    button.addEventListener('click', () => {
        displayCalculation();
    });
  });