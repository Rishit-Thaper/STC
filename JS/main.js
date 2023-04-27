let button = document.getElementById("viewPdf");
const summerTrainingFAQs = [
  {
    question: "Q. What is a summer training course?",
    answer: "Ans. A short-term program offering practical training during the summer break."
  },
  {
    question: "Q. Who can participate in a summer training course?",
    answer: "Ans. Students from class 3 to 12 interested in gaining knowledge and skills."
  },
  {
    question: "Q. What are the benefits of attending a summer training course? (relevant to school)",
    answer: "Ans. Gaining skills, networking, enhancing your resume, and advancing your career."
  },
  {
    question: "Q. What types of summer training courses are available?",
    answer: "Ans. Various types, ranging from game development to app development and more."
  },
  {
    question: "Q. How long do summer training courses typically last?",
    answer: "Ans. Summer training courses typically last for 7 days."
  },
  {
    question: "Q. How do I apply for a summer training camp?",
    answer: "Ans. You can apply by filling out the form provided by your school."
  },
  {
    question: "Q. Will I receive a certificate or any form of recognition for completing a summer training course?",
    answer: "Ans. Yes, you will typically receive a certificate or recognition for completing a course."
  },
  {
    question: "Q. What should I expect to learn in a summer training course?",
    answer: "Ans. You can expect to learn practical knowledge and skills relevant to the course subject."
  },
  {
    question: "Q. Will I have access to any resources or support during the course?",
    answer: "Ans. Yes, you will have access to all resources and receive continuous guidance."
  },
  {
    question: "Q. Can I take a summer training course online?",
    answer: "Ans. Currently, summer training courses are not available online and are conducted in a classroom environment."
  },
  {
    question: "Q. How will the course be assessed?",
    answer: "Ans. Assessment methods can include exams, projects, and presentations."
  },
  {
    question: "Q. What happens if I miss a class or fall behind in the course?",
    answer: "Ans. You should contact the instructor or program administrator to discuss options for catching up."
  },
  {
    question: "Q. Can I get a refund if I need to withdraw from the course?",
    answer: "Ans. No, refunds are typically not provided for summer training courses."
  },
  {
    question: "Q. What should I do after completing a summer training course?",
    answer: "Ans. You can consider joining an in-depth training program either online or in a classroom setting."
  },
  {
    question: "Q. How can I give feedback or provide suggestions for improving the course?",
    answer: "Ans. You can provide feedback and suggestions through course evaluations or by contacting the instructor or program administrator."
  }
];

function handleClick(pdfURL) {
    let pdfViewer = document.getElementById("pdfViewer");
    // let pdfViewer1 = document.getElementById("pdfViewer1"); 
    let pdfSection = document.getElementById("pdfSection");
    pdfViewer.src = pdfURL;
    // pdfViewer1.src = pdfURL;

    pdfSection.scrollIntoView({ behavior: 'smooth' });
}

function submitForm(event) {
  event.preventDefault(); // Prevent the form from submitting normally
  
  var form = document.querySelector('form');
  var formData = new FormData(form);
  var xhr = new XMLHttpRequest();
  
  xhr.open("POST", form.action, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // Handle the successful response, if needed
      console.log(xhr.responseText);
    }
    alert("response shared");
    form.reset();
  };
  
  xhr.send(formData);
}

const faqContainer = document.getElementById("faqContainer");

// Generate HTML elements for each FAQ
for (const faq of summerTrainingFAQs) {
  const questionElement = document.createElement("button");
  questionElement.className = "faq-question";
  questionElement.textContent = faq.question;

  const answerElement = document.createElement("div");
  answerElement.className = "faq-answer";
  answerElement.textContent = faq.answer;


  faqContainer.appendChild(questionElement);
  faqContainer.appendChild(answerElement);
}