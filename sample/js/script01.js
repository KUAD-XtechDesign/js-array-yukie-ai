$(function(){

  let students = ["田中","山田","松本","山本","沢田"]

  $("#button00").on("click",function(){
    console.log(students)
  })

　$("#button1").on("click",function(){
    $("#content").text("最初のメンバーは" + "学生は全員で" + students.lengh + "人")+
})

　$("#button2").on("click",function(){
    $("#content").text(students[2]);
})

　$("#button3").on("click",function(){
  $("#content").text(students[students.length-1]);
})

})