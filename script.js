const questions = [
    {
        question: "Also known as Rizal Law?",
        answers: [
            {text: "Republic Act No. 1427",correct: false},
            {text: "Republic Act No. 1437",correct: false},
            {text: "Republic Act No. 1425",correct: true},
            {text: "Republic Act No. 1435",correct: false},

        ] 
    },
    {
        question: "When was the Rizal Law filed by the Committee on Education?",
        answers: [
            {text: "April 3, 1950 ",correct: false},
            {text: "April 3, 1955",correct: false},
            {text: "April 3, 1956",correct: true},
            {text: "April 3, 1951",correct: false},

        ] 
    },
    {
        question: "An Act to Noli Mi Tangere and El Filibusterismo compulsory reading matter in all public and private colleges",
        answers: [
            {text: "Senate Bill No. 438",correct: true},
            {text: "Senate Bill No. 434",correct: false},
            {text: "Senate Bill No. 439",correct: false},
            {text: "Senate Bill No. 437",correct: false},

        ] 
    },
    {
        question: "The DepEd shall take steps to promulgate rules and regulations for the immediate implementations of the provision of this act",
        answers: [
            {text: "SECTION 1",correct: false},
            {text: "SECTION 2",correct: false},
            {text: "SECTION 3",correct: true},
            {text: "SECTION 4",correct: false},

        ] 
    },
    {
        question: "Jose Rizal's Noli Mi Tangere and El fili are hereby declared compulsory reading matter in all private and public schools, colleges and universities in Philippines ",
        answers: [
            {text: "SECTION 1",correct: true},
            {text: "SECTION 2",correct: false},
            {text: "SECTION 3",correct: false},
            {text: "SECTION 4",correct: false},

        ] 
    },
    {
        question: "No provision of this act shall be constructed as prohibiting or limiting the study of the works of other Filipino heroes",
        answers: [
            {text: "SECTION 1",correct: false},
            {text: "SECTION 2",correct: false},
            {text: "SECTION 3",correct: false},
            {text: "SECTION 4",correct: true},

        ] 
    },
    {
        question: "Any public or private college or university found violating, failing to comply with, or circumventing the provision shall be punished accordingly",
        answers: [
            {text: "SECTION 3",correct: false},
            {text: "SECTION 4",correct: false},
            {text: "SECTION 5",correct: true},
            {text: "SECTION 6",correct: false},

        ] 
    },
    {
        question: "Who supported Senator Laurel on the debates of the Senate Bill No. 438",
        answers: [
            {text: "Sen. Mariano J. Cuenco",correct: false},
            {text: "Sen. Francision Rodrigo",correct: false},
            {text: "Sen. Decoroso Rosales",correct: false},
            {text: "Sen. Claro M. Recto",correct: true},

        ] 
    },
    {
        question: "When does the conflict reached the House of Representatives? ",
        answers: [
            {text: "April 19, 1956",correct: true},
            {text: "April 18, 1956",correct: false},
            {text: "April 20, 1956",correct: false},
            {text: "April 17, 1956",correct: false},

        ] 
    },
    {
        question: "Who introduced House Bill No. 5561 which identical copy of Senate Bill No. 438",
        answers: [
            {text: "Sen. Emilio Cortez",correct: true},
            {text: "Congressman Jacobo Z. Gonzales",correct: false},
            {text: "Congresswoman Carmen D. Consing ",correct: false},
            {text: "Tecla San Andres Ziga",correct: false},

        ] 
    },
    {
        question: "Courses on the life, works and writings of Jose Rizal, particularly El Fili and Noli or their English translation shall be used as basic text ",
        answers: [
            {text: "Section 1",correct: true},
            {text: "Section 2",correct: false},
            {text: "Section 3",correct: false},
            {text: "Section 4",correct: false},

        ] 
    },
    {
        question: "The Board of National Education shall cause the translation of the Noli Me Tangere and El Fili",
        answers: [
            {text: "Section 1",correct: false},
            {text: "Section 2",correct: false},
            {text: "Section 3",correct: true},
            {text: "Section 4",correct: false},

        ] 
    },
    {
        question: "When does the Senate Bill No. 438 was passed without amendment with 71 votes in favor",
        answers: [
            {text: "May 15, 1956",correct: false},
            {text: "May 17, 1956",correct: false},
            {text: "May 19, 1956",correct: true},
            {text: "May 20, 1956",correct: false},

        ] 
    },
     {
        question: "Who organized the merchant of the flowering economy of the Philippines in 1830 raising profits of middle and upper class Filipinos",
        answers: [
            {text: "Spanish and American",correct: false},
            {text: "British and American",correct: false},
            {text: "Japanese and American",correct: true},
            {text: "Chinese and American",correct: false},

        ] 
    },
    {
        question: "According to the passage, what fueled the growth of the nationalist movement in the late nineteenth century in the Philippines?",
        answers: [
            {text: "Political developments",correct: false},
            {text: "Religious developments",correct: false},
            {text: "Cultural developments",correct: false},
            {text: "Economic growth",correct: true},

        ] 
    },
    {
        question: "What were the main products of the Philippine export economy in the nineteenth century?",
        answers: [
            {text: "Rice",correct: false},
            {text: "Machinery",correct: false},
            {text: "Consumer goods",correct: false},
            {text: "Agricultural product",correct: true},

        ] 
    },
    {
        question: "According to the passage, when had Rizal already decided to separate from Spain?",
        answers: [
            {text: "When the Spanish prosecutors noted it in 1896",correct: false},
            {text: "Long before the decision was made",correct: true},
            {text: "After understanding the historical context",correct: false},
            {text: "As soon as reforms would not be forthcoming",correct: false},

        ] 
    },
    {
        question: "How did the outdated tax system in the Philippines hinder progress?",
        answers: [
            {text: "It encouraged modernization",correct: false},
            {text: "It supported agricultural progress",correct: false},
            {text: "It diverted taxes into public works",correct: false},
            {text: "It penalized modernization",correct: true},

        ] 
    },
      {
        question: "What negative impact did the Guardia Civil have on the provinces in the Philippines?",
        answers: [
            {text: " They focused on maintaining peace and order",correct: false},
            {text: "They facilitated agricultural progresss",correct: false},
            {text: "They became an oppressive force and harassed farmers",correct: true},
            {text: "They successfully rid the provinces of the bands of tulisanes",correct: false},

        ] 
    },
     {
        question: "How did economic development in the Philippines impact Spanish colonial policies?",
        answers: [
            {text: "It hindered progress and threatened existing prosperity",correct: false},
            {text: "It brought stability to the government",correct: false},
            {text: "It was seen as a hindrance to progress",correct: true},
            {text: "It led to consistent policies for the overseas colonies",correct: false},

        ] 
    },    
    {
        question: "Who is considered as the greatest hero and martyr of our nation?",
        answers: [
            {text: "Emilio Jacinto",correct: false},
            {text: "Jose Rizal",correct: true},
            {text: "Antonio Luna",correct: false},
            {text: "Graciano Lopez Jaena",correct: false},

        ] 
    },  
     {
        question: "What are the two significant days that are commemorated in connection to Jose Rizal?",
        answers: [
            {text: "Day of his birth and day of his marriage",correct: false},
            {text: "Day of his birth and day of his arrest",correct: false},
            {text: "Day of his birth and day of his death",correct: false},
            {text: "Day of his birth and day of his execution",correct: true},

        ] 
    },
     {
        question: "According to the article, who made Rizal the foremost national hero?",
        answers: [
            {text: "Civil Governor William Howard Taft",correct: true},
            {text: "Emilio Aguinaldo",correct: false},
            {text: "Antonio Luna",correct: false},
            {text: "M.H. del Pilar",correct: false},

        ] 
    },
    {
        question: "According to the article, who delivered an eulogy of Rizal on the floor of the U.S. House of Representatives?",
        answers: [
            {text: "Pedro Paterno",correct: false},
            {text: "Cong. Henry Allen Cooper",correct: true},
            {text: "Antonio Luna",correct: false},
            {text: "M.H. del Pilar",correct: false},

        ] 
    },
      {
        question: "Where were the attacks on Rizal and his novel staged outside of the Philippines?",
        answers: [
            {text: "United States",correct: false},
            {text: "Spain",correct: true},
            {text: "Germany",correct: false},
            {text: "France",correct: false},

        ] 
    },
    {
        question: "How did Rizal respond to the challenges and hardships he faced?",
        answers: [
            {text: "He complained and blamed others for his failures",correct: false},
            {text: "He sought revenge against his enemies",correct: false},
            {text: "He endured and persevered through suffering",correct: true},
            {text: "He gave up and renounced his campaign",correct: false},

        ] 
    },
     {
        question: "How did Rizal respond to the challenges and hardships he faced?",
        answers: [
            {text: "He complained and blamed others for his failures",correct: false},
            {text: "He sought revenge against his enemies",correct: false},
            {text: "He endured and persevered through suffering",correct: true},
            {text: "He gave up and renounced his campaign",correct: false},

        ] 
    },
     {
        question: "What work by Rizal is considered to have contributed tremendously to the formation of Filipino nationality?",
        answers: [
            {text: "Ninay",correct: false},
            {text: "Noli Me Tangere",correct: true},
            {text: "Discursos y Articulos Varios",correct: false},
            {text: "La Soberania Monacal",correct: false},

        ] 
    },
    {
        question: "Who was Jose Rizal, and which country is he associated with?",
        answers: [
            {text: "A Chinese philosopher in Japan",correct: false},
            {text: "A Filipino nationalist and writer",correct: true},
            {text: "A Spanish painter in Mexico",correct: false},
            {text: "An Indian freedom fighter",correct: false},

        ] 
    },
    {
        question: "Which 19th-century ideology emphasized the promotion of national identity, culture, and independence?",
        answers: [
            {text: "Romanticism",correct: true},
            {text: "Realism",correct: false},
            {text: "Naturalism",correct: false},
            {text: "Impressionism",correct: false},

        ] 
    },
    {
        question: "What historical event in the Philippines significantly influenced the emergence of 19th-century nationalism?",
        answers: [
            {text: "The Battle of Bunker Hill",correct: false},
            {text: "The Boston Tea Party",correct: false},
            {text: "The Spanish-American War",correct: false},
            {text: "The Gomburza Martyrdom",correct: true},

        ] 
    },
    {
        question: "In which European city did Jose Rizal write most of his influential works and advocate for Philippine independence?",
        answers: [
            {text: "Madrid",correct: true},
            {text: "Paris",correct: false},
            {text: "London",correct: false},
            {text: "Berlin",correct: false},

        ] 
    },
    {
        question: "In which year was Jose Rizal executed by firing squad, which ultimately fueled the flames of Philippine independence?",
        answers: [
            {text: "1896",correct: true},
            {text: "1897",correct: false},
            {text: "1898",correct: false},
            {text: "1899",correct: false},

        ] 
    },
    {
        question: "Who was the first Philippine president and leader of the First Philippine Republic, which declared independence from Spanish rule in 1898?",
        answers: [
            {text: "Jose Rizal",correct: false},
            {text: "Marcelo H Del Pilar",correct: false},
            {text: "Juan Luna",correct: false},
            {text: "Emilio Aguinaldo",correct: true},

        ] 
    },
    {
        question: "Which organization did Jose Rizal join during his stay in Europe, where he actively advocated for Filipino rights and reforms?",
        answers: [
            {text: "Katipunan",correct: false},
            {text: "Liga Filipina",correct: false},
            {text: "Magdalo",correct: false},
            {text: "La Solidaridad",correct: true},

        ] 
    },
    
];
const questionElement = document.getElementById("questions");
const answerButtons = document.getElementById("answer-buttons");
const proceedButton = document.getElementById("proceed-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    
    currentQuestionIndex = 0;
    score = 0;
    proceedButton.innerHTML = "Proceed";
    proceedButton.classList.add("custom-button", "centered-button");
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    console.log(1);
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    }); 
} 


function resetState(){
    proceedButton.style.display = "none";
    while (answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    proceedButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = 'You scored ' + score +  ' out of ' + questions.length + '!';
    proceedButton.innerHTML = "Play Again";
    proceedButton.style.display = "block";
}

function handleproceedButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
};

proceedButton.addEventListener("click", () =>{
    if(currentQuestionIndex < questions.length){
        handleproceedButton();
    }else{
        startQuiz();
    }

    }
);
startQuiz();