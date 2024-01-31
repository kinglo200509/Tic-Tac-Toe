// establishing buttons
let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newgamebtn = document.querySelector("#new_btn");
let messcontainer =document.querySelector(".message_container");
let msg=document.querySelector("#msg");
let clickCount = 0;
// for odd and even turns 
let turn = true;








//  array of array for the win patterns
const winpatters = [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8],
  
];


// this is for the reset game button 
const reset_game=()=>{
  turn = true;
  enableboxes();
  messcontainer.classList.add("hide");
  clickCount = 0;



}



// for the inner text and clickability

boxes.forEach((box) => {
   box.addEventListener("click",()=>{
    console.log("box was clicked");
    if(turn==true){
      box.innerText="O";
      turn = false;
      
    }
    else{
      box.innerText = "x";
      turn = true;
    }

     box.disabled=true;
     clickCount++;
     console.log(clickCount);
     if(clickCount==9){
      console.log("your game is draw")
      showdraw();

     }
  
    
    checwinner()
  })
});
// for the disable button
const disableBoxes = ()=>{
  for(let box of boxes){
    box.disabled = true;
  }
}
// for the enable button
const enableboxes=()=>{
  for(let box of boxes){
    box.disabled = false;
    box.innerText = "";
  }
}

// to show the  winner
const showwinnner = (winner) =>{
  msg.innerText=`Congrathulations,Winner is ${winner} `;
  messcontainer.classList.remove("hide");
  disableBoxes();

}
//  to show the draw
const showdraw = ()=>{
  msg.innerText=`Your game is draw`;
  messcontainer.classList.remove("hide");
  disableBoxes();
  
}






//  to calculate the winner
const checwinner=() =>{
  for(let paterns of winpatters){
    // console.log(paterns[0],paterns[1],paterns[2]);
    // console.log(boxes[paterns[0]].innerText,boxes[paterns[1]].innerText,boxes[paterns[2]].innerText);
    let posval1 = boxes[paterns[0]].innerText;
    let posval2 = boxes[paterns[1]].innerText;
    let posval3 = boxes[paterns[2]].innerText;

    if(posval1 != "" && posval2 != "" && posval3 != ""){
      if(posval1 == posval2 && posval2==posval3){
        console.log("winner",posval1);
        
        showwinnner(posval1);

      }
    }
  }

};
// functions for the reset and new game button
newgamebtn.addEventListener("click",reset_game);
reset.addEventListener("click",reset_game);