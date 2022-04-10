function puzzle(){
  var response = prompt("Puzzle: What dose a liar do when he's dead?\nAnswer: He ____ ____.");
if(response === "lies still"){
  var r = confirm("Congratulations! Gotham needs you!");
   if (r == true) {
     window.open("https://www.bilibili.com/video/BV1Ca411t7MQ?spm_id_from=333.337.search-card.all.click","_blank")
   }
}
else{
  var r = confirm("Sorry.\nBeing rich is not enough to be Batman.");
}
}
