// Quz data 

const quizData=[
    {
        question:"When did Georgkutty and his family gonr for Dhyaanam in the movie Drishyam ?",
        options :['August-2','August-4','August-1','August-3'],
        correct:0

    },

    {
        question:"Which character is famous for solving complicicated cases in CBI Diary series ?",
        options:['Balraman','Sethurama Iyer ','Indhu choodan','Bharath chandran IPS'],
        correct:1
    },

    {
        question:"What is the capital of India ?",
        options:['Mumbai','Chennai','New Delhi','Kolkata'],
        correct:2
    },

    {

        question:"Who is the leader of Avengers ?",
        options:['Iron Man','Thor','Captian America','Hulk'],
        correct:0
    },

    {
        question: "In which film did Mohanlal play the character <b> Sethu Madhavan</b>",
        options:['Vanaprastham','Drishyam','kireedam','Chithram'],
        correct:2
    }

    
];

let currentQuizIndex=0;
let result=document.querySelector('.result');
console.log(result);
let nextbtn=document.querySelector('.next');
let score=0;
let progressBar = document.querySelector('.progress');


loadQuiz();

// Function to load or display Quiz;
function loadQuiz(){
    let quiz=quizData[currentQuizIndex];
    console.log(quiz);

    // setting the question
    document.getElementById('question').innerHTML=quiz.question;

    // setting the options 
    document.getElementById('option1').innerHTML=quiz.options[0];
    document.getElementById('option2').innerHTML=quiz.options[1];
    document.getElementById('option3').innerHTML=quiz.options[2];
    document.getElementById('option4').innerHTML=quiz.options[3];
    nextbtn.disabled=true;
    result.innerHTML=" ";
    
}


// function to submit the answer 
function checkAnswer(user_Selected_Answer){
    nextbtn.disabled=false; //when the user seleeeceted any answer ,the next button turn off the  the disabled state 
    // checking condition
    if(user_Selected_Answer===quizData[currentQuizIndex].correct){
        result.innerHTML="correct answer";
        score++;
    }else{
        score--;
        result.innerHTML="Oops wrong answer.";
        return;
    }
    
    currentQuizIndex++; //incrementing teh quiz index 
}


// this is to load the next question when the user clicks the next button 
nextbtn.addEventListener('click',()=>{
    progressBar.style.width =`${(currentQuizIndex / quizData.length) *100}%`;
    if(currentQuizIndex<quizData.length){
        loadQuiz(); //load next quiz if the index is less than ttoal question length
        document.body.style.backgroundColor='white';
        document.body.style.color='black';

    }else{
        document.body.innerHTML=`QUIZ FINSHED <br> score:<b> ${score} / ${quizData.length}  </b>`;
        document.body.style.fontSize="1.8rem"
        document.body.style.color="#fff";
    }

})