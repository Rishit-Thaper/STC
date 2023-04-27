let button = document.getElementById("viewPdf");
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
    };
    
    xhr.send(formData);
  }