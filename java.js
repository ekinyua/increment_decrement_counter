let number_counter = document.getElementById("number_counter");
let increase_button = document.getElementById("increase_button");
let decrease_button = document.getElementById("decrease_button");

let count = 0;
increase_button.addEventListener("click", ()=>{
    count ++;
    number_counter.innerHTML = count;
})

  decrease_button.addEventListener("click", ()=>{
    count --;
    number_counter.innerHTML = count;
    if (count =! 0){
      document.getElementById("decrease_button").disabled = false;
    }
    else {
      document.getElementById("decrease_button").disabled = true;
    }
    })

    //let count = 0;
//while (count >= 0){
  //  increase_button.addEventListener("click", ()=>{
    //    count++;
      ///  number_counter.innerHTML = count;
    //})
    //decrease_button.addEventListener("click", ()=>{
      //  count --;
       // number_counter.innerHTML = count;
    
        //if (count <= 0){
        //  document.getElementById("decrease_button").disabled = true;
    //}
      //  else {
       //   document.getElementById("decrease_button").disabled = false;
       // }
    //})
//}