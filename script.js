function displayPDF() {
    console.log("hello");
    var fileInputContainer = document.getElementById("pdfFileContainer");
    var pdfViewer = document.getElementById("pdfViewer");

    var fileInput = document.getElementById("pdfFile");
    var file = fileInput.files[0];

    if (file && file.type === "application/pdf") {
        fileInputContainer.style.opacity = "0";
        document.getElementById("fileLoader").style.display = "none";
        document.getElementById("columns").style.display = "";

        pdfViewer.innerHTML =
            '<object data="' +
            URL.createObjectURL(file) +
            '#page=1" type="application/pdf" width="100%" height="100%"></object>';

        for (vid of document.getElementsByTagName("video")) {
            const currentUnixTime = Math.floor(new Date().getTime() / 1000);
            vid.currentTime = currentUnixTime % vid.duration;
        }
    } else {
        alert("Please select a valid PDF file.");
    }
}

document.getElementById("pdfFile").addEventListener("change", displayPDF);
