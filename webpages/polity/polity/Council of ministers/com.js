const questions = [
    {
        question: "Which of the following statemnts is correct about prime minister of india?",
        optionA: "Prime minister is the nominal head of the council of minister",
        optionB: "He is not responsible to the parliament",
        optionC: "he cannot dismiss any of his ministers",
        optionD: "Prime minister is teh real head of the council of ministers",
        description:'Article 74(1)"There shall be a council of ministers with the prime minister as its head to aid and advise the president who shall, in exercise of his function, act in accordance with such advice"thus the real  power vested in the PM',
        correctOption: "optionD"
    },{
        question: "Prime minister of india is ?",
        optionA: "elected",
        optionB: "selected",
        optionC: "nominated",
        optionD: "appointed",
        description:'appointed by president',
        correctOption: "optionD"
    },{
        question: "Which of the following is not true?",
        optionA: "The president or governor is immune from legal action for officials acts",
        optionB: "No court can compel a governor to perform any duty ",
        optionC: "a two month's notice in writting must be delivered to a governor for bringing civil proceedings in respect of their personal acts",
        optionD: "courts are empowered to enquire the advice tendered by the minister to the president or governor",
        description:'According to article 74(2) on the question whether any and if so what advice was tendered by minsiters to the president shall not be inquired int o any court ',
        correctOption: "option"
    },{
        question: "?",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        description:'',
        correctOption: "option"
    },{
        question: "?",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        description:'',
        correctOption: "option"
    },{
        question: "?",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        description:'',
        correctOption: "option"
    },{
        question: "?",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        description:'',
        correctOption: "option"
    },{
        question: "?",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        description:'',
        correctOption: "option"
    },{
        question: "?",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        description:'',
        correctOption: "option"
    },{
        question: "?",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        description:'',
        correctOption: "option"
    },{
        question: "?",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        description:'',
        correctOption: "option"
    },{
        question: "?",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        description:'',
        correctOption: "option"
    },{
        question: "?",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        description:'',
        correctOption: "option"
    },{
        question: "?",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        description:'',
        correctOption: "option"
    },{
        question: "?",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        description:'',
        correctOption: "option"
    },{
        question: "?",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        description:'',
        correctOption: "option"
    },{
        question: "?",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        description:'',
        correctOption: "option"
    },{
        question: "?",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        description:'',
        correctOption: "option"
    },{
        question: "?",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        description:'',
        correctOption: "option"
    },{
        question: "?",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        description:'',
        correctOption: "option"
    },{
        question: "?",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        description:'',
        correctOption: "option"
    },{
        question: "?",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        description:'',
        correctOption: "option"
    },{
        question: "?",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        description:'',
        correctOption: "option"
    },{
        question: "?",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        description:'',
        correctOption: "option"
    },{
        question: "?",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        description:'',
        correctOption: "option"
    },{
        question: "?",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        description:'',
        correctOption: "option"
    },{
        question: "?",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        description:'',
        correctOption: "option"
    },{
        question: "?",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        description:'',
        correctOption: "option"
    },{
        question: "?",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        description:'',
        correctOption: "option"
    },
]


let shuffledQuestions = [] //empty array to hold shuffled selected questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
    // while (shuffledQuestions.length <= 20) {
    //     const random = questions[Math.floor(Math.random() * questions.length)]
    //     if (!shuffledQuestions.includes(random)) {
    //         shuffledQuestions.push(random)
    //     }
    // }
// question[1]
    shuffledQuestions=questions;
}


let questionNumber = 0
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0

// function for displaying next question in the array to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function showDescription(){
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    document.getElementById('qdesc').innerHTML='Description: ' + currentQuestion.description;
}

function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
console.log( option.labels[0].id)
            correctOption = option.labels[0].id
        }
    })


   
    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
        console.log('IN check 1.....')
        // document.getElementById('qdesc').innerHTML='this is the description......'
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer()
    unCheckRadioButtons()
    //delays next question displaying for a second
    setTimeout(() => {
        if (indexNumber <= 20) {
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 20) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal and resets game
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}