console.log("Working!");
let objectArray = [
  {
    number: "Question 1",
    link: "https://youtu.be/DvixmszUTKg",
    comment: "",
    grade: "0",
  },
  {
    number: "Question 2",
    link: "https://youtu.be/DvixmszUTKg",
    comment: "",
    grade: "0",
  },
  {
    number: "Question 3",
    link: "https://youtu.be/DvixmszUTKg",
    comment: "",
    grade: "0",
  },
  {
    number: "Question 4",
    link: "https://youtu.be/DvixmszUTKg",
    comment: "",
    grade: "0",
  },
  {
    number: "Question 5",
    link: "https://youtu.be/DvixmszUTKg",
    comment: "",
    grade: "0",
  },
];
// Tracks the question number to change and store grade
var qnumber = 0;
function loadIframe(url) {
  var $iframe = $("#videobox");
  $iframe.html(
    '<iframe id="videobox" ' +
      'width="100%" height="100%" frameborder="0" ' +
      'marginheight="0" marginwidth="0" ' +
      'src="' +
      url +
      "></iframe>"
  );
}
function moveNext(){
  
  this.qnumber++;

  if(this.qnumber>=5){
    this.qnumber=4;
  }
  $("#videobox1").css("display", "grid");
  $("#videobox2").css("display", "none");
  $("#videobox3").css("display", "none");
  $("#videobox4").css("display", "none");
  $("#videobox5").css("display", "none");
  $("#qno").text(objectArray[this.qnumber].number);
  $("#comm").val(objectArray[this.qnumber].comment);
  $("#score").text(objectArray[this.qnumber].grade);
  
}
(function start(){

  console.log('i am in start')
  $("#videobox1").css("display", "grid");
  $("#videobox2").css("display", "none");
  $("#videobox3").css("display", "none");
  $("#videobox4").css("display", "none");
  $("#videobox5").css("display", "none");
  $("#qno").text(objectArray[this.qnumber].number);
  $("#comm").val(objectArray[this.qnumber].comment);
  $("#score").text(objectArray[this.qnumber].grade);

})();
function movePrev(){
  
  this.qnumber--;

  if(this.qnumber<=0){
    this.qnumber=0;
  }
  $("#videobox1").css("display", "grid");
  $("#videobox2").css("display", "none");
  $("#videobox3").css("display", "none");
  $("#videobox4").css("display", "none");
  $("#videobox5").css("display", "none");
  $("#qno").text(objectArray[this.qnumber].number);
  $("#comm").val(objectArray[this.qnumber].comment);
  $("#score").text(objectArray[this.qnumber].grade);
  
}

function gradeClick(num, qnumber) {
  console.log("jello"); 
  document.getElementById("score").innerText = num;
  objectArray[this.qnumber].grade = num;

  // Changes grades in result modal
  let grselector = "gr" + (this.qnumber + 1);
  document.getElementById(grselector).textContent =
    objectArray[this.qnumber].grade + "/5";
}

function commentSave() {
  var comment = document.getElementById("comm").value;
  objectArray[this.qnumber].comment = comment;
  // Changes comments in results modal
  let coselector = "co" + (this.qnumber + 1);
  document.getElementById(coselector).textContent =
    objectArray[this.qnumber].comment;
}

$(document).ready(function () {
  // Question 1
  $("#one").click(function () {
    qnumber = 0;
    $("#videobox1").css("display", "grid");
    $("#videobox2").css("display", "none");
    $("#videobox3").css("display", "none");
    $("#videobox4").css("display", "none");
    $("#videobox5").css("display", "none");
    $("#qno").text(objectArray[0].number);
    $("#comm").val(objectArray[0].comment);
    $("#score").text(objectArray[0].grade);
  });
  // Question 2
  $("#two").click(function () {
    loadIframe(objectArray[1].link);
    qnumber = 1;
    $("#videobox1").css("display", "none");
    $("#videobox2").css("display", "grid");
    $("#videobox3").css("display", "none");
    $("#videobox4").css("display", "none");
    $("#videobox5").css("display", "none");
    $("#qno").text(objectArray[1].number);
    $("#comm").val(objectArray[1].comment);
    $("#score").text(objectArray[1].grade);
  });
  // Question 3
  $("#three").click(function () {
    loadIframe(objectArray[2].link);
    qnumber = 2;
    $("#videobox1").css("display", "none");
    $("#videobox2").css("display", "none");
    $("#videobox3").css("display", "grid");
    $("#videobox4").css("display", "none");
    $("#videobox5").css("display", "none");
    $("#qno").text(objectArray[2].number);
    $("#comm").val(objectArray[2].comment);
    $("#score").text(objectArray[2].grade);
  });
  // Question 4
  $("#four").click(function () {
    loadIframe(objectArray[3].link);
    qnumber = 3;
    $("#videobox1").css("display", "none");
    $("#videobox2").css("display", "none");
    $("#videobox3").css("display", "none");
    $("#videobox4").css("display", "grid");
    $("#videobox5").css("display", "none");
    $("#qno").text(objectArray[3].number);
    $("#comm").val(objectArray[3].comment);
    $("#score").text(objectArray[3].grade);
  });
  // Question 5
  $("#five").click(function () {
    qnumber = 4;
    $("#videobox1").css("display", "none");
    $("#videobox2").css("display", "none");
    $("#videobox3").css("display", "none");
    $("#videobox4").css("display", "none");
    $("#videobox5").css("display", "grid");
    loadIframe(objectArray[4].link);
    $("#qno").text(objectArray[4].number);
    $("#comm").val(objectArray[4].comment);
    $("#score").text(objectArray[4].grade);
  });
});
