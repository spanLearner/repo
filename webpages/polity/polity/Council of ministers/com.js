const questions = fetch('http://localhost:3000/questions')


const questions2 = [
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
        question: "A central minister who is not the member of any house can remain in the office for?",
        optionA: "1year",
        optionB: "6months",
        optionC: "two years",
        optionD: "three years",
        description:'',
        correctOption: "optionB"
    },{
        question: "Which of the following statements is not true regarding the parliament of india?",
        optionA: "The constitution provides for a parliamentary form of government",
        optionB: "the function of the parliament is to provide for a cabinet",
        optionC: "the membership of the cabinet is restricted to the lower hosue",
        optionD: "the cabinet enjoys the confidence of the majority in the popular chamber of the house",
        description:'A person who is not a member of either hosue canalso become the member of the cabinet, but he cannotcontinue as minister for more than 6 months, unless, hesecure a seat ineither hosue of the parliament Article 75(5)',
        correctOption: "optionC"
    },{
        question: "The council of minister is collectively responsible ?<br> 1. to the hosue of the people <br> 2. Under a constitutional obligation <br> 3. As per article 75(3)<br>4. As per article 74(3) <br> which of the above statements are true",
        optionA: "1,2",
        optionB: "1,2,3",
        optionC: "1,3,4",
        optionD: "1,2,3,4",
        description:'Acc. to Article 75(3) of the indian constitution. the council fo minsiter shall be collectively responsible to the lok sabha. it is a constitutional obligation, Article 74(3) does not exist inthe constitution of india',
        correctOption: "optionB"
    },{
        question: "The P.M of india is responsible to whom?",
        optionA: "The cabinet",
        optionB: "The president",
        optionC: "The lok sabha",
        optionD: "the rajya sabha",
        description:'',
        correctOption: "optionC"
    },{
        question: "Which of the following is not a correct situation arising after the resignation of the council of minsiters?",
        optionA: "president's rule will be imposed",
        optionB: "the president will ask to continue till alternative arrangement",
        optionC: "the alternative arrangement means earliest possible general election to be held to form a new government",
        optionD: "Out going council of ministers may have had charge till the formation of the new government",
        description:'',
        correctOption: "optionA"
    },{
        question: "consider the correct one <br> 1. The union council of ministers shall be collectively responsible to the lok sabha <br> 2. Union ministers shall hold office during the pleasure of the prime minister?",
        optionA: "only 1",
        optionB: "both",
        optionC: "none ",
        optionD: "only2",
        description:'',
        correctOption: "optionA"
    },{
        question: "1. the council of minsters in the centre shall be collectively responsible to the parliament <br>2. the union ministers shall hold the office during the pleassure of the president of india <br>The prime minister shall communicate to the president aboutthe proposals for legislative<br> select the correct one?",
        optionA: "1",
        optionB: "2,3",
        optionC: "1,3",
        optionD: "all",
        description:'',
        correctOption: "optionB"
    },{
        question: "Which one of the following is not explicitely stated in the constitution of india but followed as a convention?",
        optionA: "The finance minister is to be a member of the lower house ",
        optionB: "The prime minister has to resign if he loses the majority in the lower house",
        optionC: "All the parts of india are to be represented inteh councils of minsters",
        optionD: "In the event of both the president and the vice president demitting office simultaneously before the end of the tenure, the speaker of the lower house of the parliament will officiate as the president",
        description:'',
        correctOption: "optionB"
    },{
        question: "Which one of the following motions, the council of ministers in india can move?",
        optionA: "no confidence motion",
        optionB: "censure motion ",
        optionC: "adjournment motion",
        optionD: "confidence motion",
        description:'the council of ministers in india can move confidence motion A motion of no confidence can be introduced in lok sabha. the governmentbrings the motion of confidence in lok sabha when it has to prove confidece or support of a majority in the house of people',
        correctOption: "option"
    },{
        question: "The council of minsiters has to resign if a no confidence motion is passed by a majority of members of?",
        optionA: "lok sabha",
        optionB: "rajya sabha",
        optionC: "both the houses seprately",
        optionD: "both the houses in joint sitting",
        description:'',
        correctOption: "optionA"
    },{
        question: "After resigning, whose permission does aminister require to give a statement in lok sabha?",
        optionA: "PM",
        optionB: "speaker",
        optionC: "president",
        optionD: "supreme court",
        description:'if a member resigns from the office of minister he can make a statement in the house about his resignation when allowed by the speaker. it is however open to the member to mak a statemntor not and he cannot be compelled to do so',
        correctOption: "optionB"
    },{
        question: "The number of lok sabha members required to table a No Confidence Motion agianst the council of minsters is?",
        optionA: "30",
        optionB: "40",
        optionC: "50",
        optionD: "60",
        description:'',
        correctOption: "optionC"
    },{
        question: "1. There is no mention of a No- confidence motion <br> 2. A Motion of a no confidence can be introduced in the lok sabha only<br> Which of the statemnts are true?",
        optionA: "1",
        optionB: "2",
        optionC: "both",
        optionD: "none",
        description:'',
        correctOption: "optionC"
    },{
        question: "Who will decide the office of profit?",
        optionA: "President and governor and union parliament",
        optionB: "supreme court",
        optionC: "UPSC",
        optionD: "none",
        description:'analysis-1 The office of profit is decided by the union parliament for the union under article 102(1)(2) and by the state legislatures for the state under article 191(1)(a)<br> Analysis 2-According to article 103(1) and (2) in the centre, the presidentshall do so on the advice of the election commission and in accordance with article 192(1) and (2) in the states, thegovenor shall do so on the advice of the election commission',
        correctOption: "optionA"
    },{
        question: "In Indian polity, the executive is subordinate to the ?",
        optionA: "Judiciary",
        optionB: "Legislature",
        optionC: "Election commission",
        optionD: "UPSC",
        description:'',
        correctOption: "optionB"
    },{
        question: "Who was the first finance minister of india?",
        optionA: "Guljari lalnanda",
        optionB: "RK shanmukham chetty",
        optionC: "krishnamachari",
        optionD: "sarojini naidu",
        description:'law minister was B.R. ambedkar after independence before was jogendra nath mandal',
        correctOption: "optionB"
    },{
        question: "which one of the following terms does not appear in the constitution of india?",
        optionA: "Annual financial statement",
        optionB: "Appropriation bill",
        optionC: "Budget ",
        optionD: "consolidated fund of india",
        description:'Article 112 is annual financial statement',
        correctOption: "optionC"
    },{
        question: "select the incorrect<br> A deve goda      1996-97<br>B. chandra shekhar      1990-91<br>C Inder kumar Gujral      1997-98<br>D vishwanath pratap singh        1989-91?",
        optionA: "A",
        optionB: "B",
        optionC: "C",
        optionD: "D",
        description:'vishwanath pratap singh acted form 1989-90',
        correctOption: "optionD"
    },{
        question: "Who among the following held the office of the prime minister of india more than once?<br>1.J.L. nehru <br>2. Indira gandhi <br> 3. Gulzari lal nanda <br>4. atal bihari vajpayee",
        optionA: "1",
        optionB: "2",
        optionC: "all",
        optionD: "2,3,4",
        description:'all the persons held the office more than once in which guljari lal was the acting president twice',
        correctOption: "optionC"
    },{
        question: "Who among the following was the member of lok sabha during his prime minister ship?",
        optionA: "deve gowda",
        optionB: "IK gujral",
        optionC: "chandrashekhar",
        optionD: "Manmohan singh",
        description:'was the member of parliament from ballia',
        correctOption: "option"
    },{
        question: "The work Mantrimandal (cabinet) is mentioned only once in constitution and that is in?",
        optionA: "article 352",
        optionB: "74",
        optionC: "356",
        optionD: "76",
        description:'the word cabint is mentioned in the constitution of india in article 352(3) which says "the president shall not issue a proclamation unless the union cabinet communicates him in writing that such a proclamation may be issued. it is note worthy that the word cabinet has been mentioned two times in tis article"',
        correctOption: "optionA"
    },{
        question: "the policy of liberalisation, privatisation globalisation was announced as new economic policy by PM?",
        optionA: "Rajeev gandhi",
        optionB: "Vishwanath pratap singh",
        optionC: "PV narsimha rao",
        optionD: "atal bihari vajpayee",
        description:'on 24 july 1991',
        correctOption: "optionC"
    },{
        question: "Which one of the following statemnts is not true about manmohan singh?",
        optionA: "Former finance minister of india",
        optionB: "former governor of RBI",
        optionC: "former chairman of finance commission",
        optionD: "former representative of india at the IMF",
        description:'',
        correctOption: "optionC"
    },{
        question: "assertion A ministers make policy and civil servants adher to that policy <br> reason R parliamentary form of government works on the principle of 'cabinet collective responsibility'?",
        optionA: "both A and R are true and a is the correct explaination of R",
        optionB: "Both A and R are true but not the correct explaination of R",
        optionC: "a is true but R is false",
        optionD: "A is false but R is true",
        description:'',
        correctOption: "optionB"
    },{
        question: "The union minister can be a member of either of the house of the parliament, but he is eligible to vote only in?",
        optionA: "both the houses",
        optionB: "only to which he belongs",
        optionC: "loksabha only",
        optionD: "rajya sabha only",
        description:'',
        correctOption: "optionB"
    },{
        question: "AssertionA- describing a person as deputy prime minister is a political decision<br>Reason R- it does not confer on him any power of the prime minister?",
        optionA: "both A and R are true and a is the correct explaination of R",
        optionB: "Both A and R are true but not the correct explaination of R",
        optionC: "a is true but R is false",
        optionD: "A is false but R is true",
        description:'In the constitution of india, the duty and office of deputy prime minister is not mentioned,but conventionally a cabinet minister can be declared as a deputy prime minsiter. it does not confer on him any power of the prime minister',
        correctOption: "optionB"
    },{
        question: "1. The executive power of the union of india is vested in the prime minister 2. the prime minister is the ex-officio chairman of the civil services board? <br> which one is correct",
        optionA: "1",
        optionB: "2",
        optionC: "both",
        optionD: "none",
        description:'Article 53(1) the executive power of the union of india is not vested in the prime minister but in the president<br> the adminsitrative head of the secretariat is cabinet secretary whi is also the ex oficio chairman of the civil services board and he is under the supervision of PMO and he is also the highest civil services officer of central government',
        correctOption: "optionD"
    },{
        question: "which one of the following constituitonal amendment states that the total number of ministers including the PM in the Council of ministers shall not exceed fifteen percent of the total number of members of the hosue of the people?",
        optionA: "90",
        optionB: "91",
        optionC: "92",
        optionD: "93",
        description:'91st constitutional amendment act,2003 this was added in article 75(1A)',
        correctOption: "optionB"
    },{
        question: "1. the number of ministries at the centre on 15th august 1947 was 18<br>2. the number of ministries at the centre at present is 36 ?<br> which of the follwing are correct",
        optionA: "1",
        optionB: "2",
        optionC: "both",
        optionD: "none",
        description:'the number of ministries at the centre was 18 at present the number of ministries at the centre are 51',
        correctOption: "optionA"
    },{
        question: "which of the following official documents is related with india?",
        optionA: "green paper",
        optionB: "white paper",
        optionC: "yellow book",
        optionD: "blue book",
        description:'white paper is an official document issued by the government of india or by its ministry which explains the governemnt policies on a particular subject and allows the government to collect feedback before a bill is prepared',
        correctOption: "optionB"
    },{
        question: "which article of the indian constitution describes 'the executive power of every state shall be so exercised as not to impede or prejudice the exercise of the executive power of the union'?",
        optionA: "article 257",
        optionB: "258",
        optionC: "355",
        optionD: "356",
        description:'',
        correctOption: "optionA"
    },{
        question: "which of the following are the functions of the cabinet secretariat <br>1. preparation of agenda for cabinet meetings<br>2. secretariat assistace to cabinet committees<br>3. allocation of financial resources to the ministries<br> select the correct?",
        optionA: "1",
        optionB: "2,3",
        optionC: "1,2",
        optionD: "1,2,3",
        description:'',
        correctOption: "optionC"
    },{
        question: "which one is not correctly matched <br>a. JL nehru       Shanti van <br>b. LB shashtri     Vijaya ghat<br>c. indira gandhi      Shakti sthal<br>d. rajiv gandhi      karam bhumi?",
        optionA: "A",
        optionB: "B",
        optionC: "C",
        optionD: "D",
        description:'karma bhumi is memorial of the ninth president of india Dr. shankar dayal sharma while the name of the memorial of rajiv gandhi is veer bhumi',
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