const quizData = [
    {
        question: "what does HTML stand for?",
        options: [
            "Hypertext Markup Langauge",
            "Hyper Transfer Markup Langauge",
            "Hypertext Machine Langauge",
            "Hyper Link and Text Markup Langauge",
        ],
        correct: 0,
    },

    {
        question: "what CSS property is used to control Spacing between the elemets?",
        options: ["margin", "padding", "spacing", "boder-spacing"],
        correct: 1,
    },
    {
        question: "what is java Script function to slect element bt its ID?",
        options: [
            "document.query",
            "getElementByID",
            "selectElement",
            "findElement",
        ],
        correct: 1,
    },
    {
        question: "In React.Js which hook is used to perform side effect in a functional component?",
        options: ["useEffect", "useState", "useContext", "useReducer"],
        correct: 0,
    },
    {
        question: "Which HTML tag is use to create an oderd list?",
        options: ["ul", "li", "ol", "dl"],
        correct: 2,
    },
];

const quiz =document.querySelector("#quiz");

const answerElm = document.querySelectorAll(".answer")
const [questionElm, option_1, option_2, option_3, option_4] = document.querySelectorAll(" #question, #option_1, #option_2, #option_3, #option_4")

const sumbmitBtn = document.querySelector("#submit")

let currentQuiz = 0;
let score = 0;

const loadQuiz = () => {
    const { question, options } = quizData[currentQuiz];
    console.log(question);

    questionElm.innerText = question;
    options.forEach(
        (curOption, index) => 
            (window[`option_${ index + 1 }`].innerText = curOption)
    );
};

loadQuiz()

const getSelectedOption = () => {
    let ans_index;
    answerElm.forEach ((curOption, index) => {
        if(curOption.checked) { 
            ans_index = index }
    });
    return ans_index;
};

const deselectedAnswers = () => {
   return answerElm.forEach((curElem) => curElem.checked = false);
};

sumbmitBtn.addEventListener("click", () => {
    const selectedOptionIndex = getSelectedOption();
    console.log(selectedOptionIndex);

    if(selectedOptionIndex === quizData[currentQuiz].correct) {
        score = score + 1;
    };

    currentQuiz++;


    if(currentQuiz < quizData.length) {
        deselectedAnswers();
        loadQuiz();
    }
    else{
        quiz.innerHTML =`<div class="result">
        <h2> Your Score: ${score}/${quizData.length} Correct Answers</h2>
        <p> Congratulation on Completing the Quiz!</p>
        <button class="reload-button" onclick="location.reload()">Play Again</button>`;
    }
});