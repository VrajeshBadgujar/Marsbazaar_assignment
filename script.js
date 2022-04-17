let print = async function generatepdf() {
  document.getElementById("download").innerHTML = "downloading..";

  // downloading
  var downloading = document.getElementById("save");
  var doc = new jspdf("l", "pt");

  await html2canvas(downloading, {
    allowTaint: true,
    useCORS: true,
  }).then((canvas) => {
    //  covert to png

    doc.addImage(canvas.toDataURL("image/png"), "PNG", 5, 5, 825, 580);
  });
  doc.save("Food-Delivery.pdf");

  // end of downloading

  window.open("Food-Delivery.pdf")
  
  //  return false;
  
  document.getElementById("download").innerHTML = "Download";
  
  // window.open("E:\Food-Delivery.pdf", "http://127.0.0.1:5501/Food-Delivery.pdf")
  // window.open("E:\Food-Delivery.pdf", "http://iis-server/MY_VIRTUAL_DRIVE_D//Food-Delivery.pdf")
  // http://iis-server/MY_VIRTUAL_DRIVE_D/Hello.txt
  
//   var pdf = Food-Delivery.pdf;
  
// window.open("file:///E:/Food-Delivery%20(6).pdf", '_blank');
// };

// function openPDF(pdf){
//     window.open(pdf);
//     return false;
 
}