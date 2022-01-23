const questions = [
    {
        question: "The vice president of india is elected by the members of an electoral college comprising?",
        optionA: "Only elected members of both the houses of parliament",
        optionB: "All the members of both the houses of parliament",
        optionC: "Only elected members of rajya sabha and state assemblies",
        optionD: "Only elected members of state assemblies",
        description:'Article 66(1) The vice president is elected by the members of an electoral college  composed of the members of both the houses of parliament in accordance with the system of proportional representaiton by means of single transferable vote',
        correctOption: "optionB"
    },{
        question: "Consider the following statements which are correct<br> 1. Like the election of the president the election of vice president is indirect <br> The member of the state legislatures paly and important role in the election of the both?",
        optionA: "1",
        optionB: "2",
        optionC: "both ",
        optionD: "none",
        description:'',
        correctOption: "optionA"
    },{
        question: "Assertion A- In order to be eligible for election as vice president, a person must be qualified for election as a member of the upper house <br> ReasonR Vice president is chairperson of rajya sabha?",
        optionA: "Both A and R are true R is the correct explaination",
        optionB: "Both A and R are true but R is not correct explaination",
        optionC: "A is true but R is False",
        optionD: "A is False but R is true",
        description:'Article 66(3) of the constitution describes that a person is eligible for election as vice president if he is citizen of india, completed age of 35 years and qualified for election as a member of the ocuncil of states and Article 64 provides that vice prsident is ex officio chairman of the council of states and shall not hold any other office of profit.',
        correctOption: "optionA"
    },{
        question: "consider the following statements <br>1. In order to be the vice-president, a person must be qualified for election as a member of the house of the people <br> 2. a member of the state legislature can be a candidate for this office <br> the term of the office of the vice president is the same as that of the president <br> he can be removed through a formal impeachment?",
        optionA: "1,2",
        optionB: "2,3",
        optionC: "1,4",
        optionD: "3,4",
        description:'According to article 67(b) of the constitution a vice presidnet may be removed from his office by a resolution of the council of states by a majority of all the then members of the council and agreed to by the house of the people no resolution for this purpose shall be moved unless at least 14 days notice has been given of the intention to move the resolution. according to article 66(3)(c) to be eligible for election as vice president a person must be qualified for election as a member of the council of states',
        correctOption: "optionC"
    },{
        question: "How is Vice president of india elected?",
        optionA: "By direct national election",
        optionB: "Nomination by president",
        optionC: "Through direct election by the mps of lok sabha and MLA of vidhan sabha",
        optionD: "Through election by the mps of lok sabha and rajya sabha",
        description:'',
        correctOption: "optionD"
    },{
        question: "The vice president of india: <br> 1. is the seccond highest dignitary of india <br> 2. Has no formal function attached to his office <br> 3.Discharges the functions of the president during his absence <br>4. Acts as the president if the president resigns or is removed or dies ",
        optionA: "1 and 2",
        optionB: "1,2,3",
        optionC: "1,3,4",
        optionD: "all",
        description:'',
        correctOption: "optionD"
    },{
        question: "the vice president may be removed from his office by a resolution of ?",
        optionA: "council of states",
        optionB: "lok sabha",
        optionC: "cabinet",
        optionD: "council of minister",
        description:'',
        correctOption: "optionA"
    },{
        question: "The proposal relating to dismissal of the vice president can be presented in ?",
        optionA: "Any house of parliament",
        optionB: "Rajya sabha",
        optionC: "Lok Sabha ",
        optionD: "none",
        description:'',
        correctOption: "optionB"
    },{
        question: "Who is the chairman/ Ex officio chairman of rajya sabha?",
        optionA: "Vice president",
        optionB: "president",
        optionC: "prime minister",
        optionD: "none",
        description:'',
        correctOption: "optionA"
    },{
        question: "Which one of the following is presided over by one who is not its member?",
        optionA: "Lok sabha",
        optionB: "Rajya sabha",
        optionC: "vidhan sabha",
        optionD: "council of ministers",
        description:'',
        correctOption: "optionB"
    },{
        question: "Among the four pairs given which one consist of a correct-combinatin of dignitaries who became vice president after having held diplomatic posts of ambassador and high commissioners?",
        optionA: "Dr. S. Radha krishnan and G.S pathak",
        optionB: "S. Radha krishnan and v.v. giri",
        optionC: "Dr. Zakir hussain and k.r. narayanan",
        optionD: "B.D. jatti and K.r. narayanan",
        description:'Dr. S. radha krishnan was an ambassador to the u.s.s.r. from 1949 to 1952 and v.v. giri was the high commissioner of sri lanka from 1947 to 1951 k.r. narayanan was also the ambassador of china from 1976 to 78',
        correctOption: "optionB"
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