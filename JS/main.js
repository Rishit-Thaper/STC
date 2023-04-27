let button = document.getElementById("viewPdf");
function handleClick(pdfURL) {
    let pdfViewer = document.getElementById("pdfViewer");
    // let pdfViewer1 = document.getElementById("pdfViewer1"); 
    let pdfSection = document.getElementById("pdfSection");
    pdfViewer.src = pdfURL;
    // pdfViewer1.src = pdfURL;

    pdfSection.scrollIntoView({ behavior: 'smooth' });
}