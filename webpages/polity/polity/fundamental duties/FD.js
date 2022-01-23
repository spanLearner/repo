const questions = [
    {
        question: "The Fundamental duty to uphold and protect and the sovereignty, unity and integrity of india i mentioned at number?",
        optionA: "Four",
        optionB: "One",
        optionC: "Two",
        optionD: "three",
        description:'none',
        correctOption: "optionD"
    },
    {
        question: "Which of the following statements is/are true of the fundamental duties of an Indian citizen? <P> 1. A legislative process has been provided to enforce these duties.</p> <p> 2. They are correlative to legal duties</p> <br> select the correct answer using the code given below ",
        optionA: "1 only",
        optionB: "2 only",
        optionC: "both 1 and 2",
        optionD: " neither 1 nor 2",
        description:'none',
        correctOption: "optionD"
    }, {
        question: "Under which Articles of indian constitution, provision for fundamnetal duties has been made by the 42 constitution amendment act?",
        optionA: "Article 51",
        optionB: "Artucke 51A",
        optionC: "Article 52",
        optionD: "Article 52",
        description:'none',
        correctOption: "optionB"
    }, {
        question: "The provsions relating to fundamental duties in the constitution of india were addedon the recommendation of?",
        optionA: "balwant rai mehta committee",
        optionB: "Iyenger committee",
        optionC: "swaran singh committee",
        optionD: "thakkar committee",
        description:'none',
        correctOption: "optionC"
    }, {
        question: "When were the fundamental duties incorporated in the constitution?",
        optionA: "1976",
        optionB: "1979",
        optionC: "1975",
        optionD: "1978",
        description:'none',
        correctOption: "optionA"
    }, {
        question: "Which one of the following committees/commissions recommended the inclusion of fundamental duties the constitution?",
        optionA: "Swaran singh committee",
        optionB: "Ashok Mehta committee",
        optionC: "Balram Jakhar Committee",
        optionD: "Sarkaria Commission",
        description:'none',
        correctOption: "optionA"
    }, {
        question: "Which were the members of the swaran singh committee ? <br> A. A.R. Antulay    B. S.S. Ray <br> C. Haridev Joshi     D. C.M. Stephen  <br> Select the correct answer using code given below",
        optionA: "A,B,C,D",
        optionB: "A,B,C",
        optionC: "A,B,D",
        optionD: "B,C,D",
        description:'Swaran singh, A.R. Antulay, s.S. Ray , Rajni Patel, HR Gokhale, V.S Sayed Muhammed, V.N. Gadgil, CM Stephen, DP Singh, Dinesh Goswami, Vasant Sathe, 12. B.N. Banerjee ',
        correctOption: "optionC"
    }, {
        question: "Which of the following statements regarding fundamental duties are true?",
        optionA: "They can be enforced by writs",
        optionB: "They can be promoted only by constitutitonal methods",
        optionC: "They can be used for interpreting ambiguous statutes",
        optionD: "The performance of any particular duty comes within the sphere of constitutional law which court has to decide",
        description:'Fundamental duties can not be enforced by writs fundamental duties have been defined as teh moral obligation of all the citizens to help, promote a spirit of patriotism and to uphold the unity of india',
        correctOption: "optionA"
    }, {
        question: "Which one of the following is a fundamental duty in india?",
        optionA: "Separation of judiciary from executive ",
        optionB: "to value and preserve the rich haritage of our composite culture",
        optionC: "free and compulsory education abolition of untouchability",
        optionD: "abolition of untouchability",
        description:'To value and preserve the rich heritage of our composite culture is a fundamental duty mentioned under article 51A',
        correctOption: "optionB"
    }, {
        question: "The FD of a citizen do not include duty?",
        optionA: "To protect and improve the natural environment",
        optionB: "To cherish and follow the noble ideals which inspired our national struggle for freedom",
        optionC: "to strive towards abolition of untouchability",
        optionD: "To develop scientific temper, humanism and teh spirit of enquiry and reform",
        description:'To strive towards the abolition of untouchability is not FD ',
        correctOption: "optionC"
    }, {
        question: "Which of the following duties have been prescribed by the indian constitution as fundamental duties <br> 1. To defend the country<br>2. To pay income tax <br> 3. To preseve the rich heritage of our composite culture <br> 4. to safeguard the public property ?",
        optionA: "1 and 2",
        optionB: "2 and4",
        optionC: "1,2,3",
        optionD: "1,3,4",
        description:'',
        correctOption: "option"
    }, {
        question: "Protection of which one of the following is a fundamental duty of and indian citizen?",
        optionA: "Village panchayat",
        optionB: "national Flag",
        optionC: "SC, ST",
        optionD: "Wild life",
        description:'It is the duty of every citizen of india to abide by the constitution and respect its ideals  and institutions, the national flag and the national anthem and  to protect and improve the natural environment includign forests, lakes, rivers and wildlife and to have compassion for living creatures',
        correctOption: "optionD"
    },
    {
        question: "Which one of the following is not a fundamental duty?",
        optionA: "To respect the national anthem",
        optionB: "To safeguard public property",
        optionC: "To protect monuments and places of public importance",
        optionD: "to protect and improve the natural environment",
        description:'to protect monuments and places of public imporatance is not mentioned under article 51 A of the india consitution',
        correctOption: "option"
    },{
        question: "How many fundamental duties are there in the indian constituiton ?",
        optionA: "nine",
        optionB: "eleven",
        optionC: "twelve",
        optionD: "twenty",
        description:'Originally there were 10 FD but 11th was added by 86th amendment act 2002 51A(K) was added for parents or guardian to provide an opportunity for education to their children between the age of 6 to 14 years',
        correctOption: "optionB"
    },{
        question: "which one of the following is not a fundamental duty?",
        optionA: "to vote in public elections",
        optionB: "to develop scientific temper",
        optionC: "to safeguard public property",
        optionD: "to abide by the constitution and respect its ideals",
        description:'none',
        correctOption: "optionA"
    },
    {
        question: "to Uphold and protect the sovereignty, unity  and integrity of india is a provision made in the?",
        optionA: "Preamble",
        optionB: "directive principles of state policy",
        optionC: "Fundamental rights",
        optionD: "FD",
        description:'none',
        correctOption: "optionD"
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