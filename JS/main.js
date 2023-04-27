let button = document.getElementById("viewPdf");
const summerTrainingFAQs = [
  {
    question: "Q1. What is a summer training course?",
    answer: "A short-term program offering practical training during the summer break."
  },
  {
    question: "Q2. Who can participate in a summer training course?",
    answer: "Students from class 3 to 12 interested in gaining knowledge and skills."
  },
  {
    question: "Q3. What are the benefits of attending a summer training course? (relevant to school)",
    answer: "Gaining skills, networking, enhancing your resume, and advancing your career."
  },
  {
    question: "Q4. What types of summer training courses are available?",
    answer: "Various types, ranging from game development to app development and more."
  },
  {
    question: "Q5. How long do summer training courses typically last?",
    answer: "Summer training courses typically last for 7 days."
  },
  {
    question: "Q6. How do I apply for a summer training camp?",
    answer: "You can apply by filling out the form provided by your school."
  },
  {
    question: "Q7. Will I receive a certificate or any form of recognition for completing a summer training course?",
    answer: "Yes, you will typically receive a certificate or recognition for completing a course."
  },
  {
    question: "Q8. What should I expect to learn in a summer training course?",
    answer: "You can expect to learn practical knowledge and skills relevant to the course subject."
  },
  {
    question: "Q9. Will I have access to any resources or support during the course?",
    answer: "Yes, you will have access to all resources and receive continuous guidance."
  },
  {
    question: "Q10. Can I take a summer training course online?",
    answer: "Currently, summer training courses are not available online and are conducted in a classroom environment."
  },
  {
    question: "Q11. How will the course be assessed?",
    answer: "Assessment methods can include exams, projects, and presentations."
  },
  {
    question: "Q12. What happens if I miss a class or fall behind in the course?",
    answer: "You should contact the instructor or program administrator to discuss options for catching up."
  },
  {
    question: "Q13. Can I get a refund if I need to withdraw from the course?",
    answer: "No, refunds are typically not provided for summer training courses."
  },
  {
    question: "Q14. What should I do after completing a summer training course?",
    answer: "You can consider joining an in-depth training program either online or in a classroom setting."
  },
  {
    question: "Q15. How can I give feedback or provide suggestions for improving the course?",
    answer: "You can provide feedback and suggestions through course evaluations or by contacting the instructor or program administrator."
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
      alert("response shared");
    }
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

  // Add event listener to toggle answer visibility
  questionElement.addEventListener("click", function() {
    answerElement.classList.toggle("show-answer");
  });

  faqContainer.appendChild(questionElement);
  faqContainer.appendChild(answerElement);
}