





function screenSizeTest(){


  /*--Phone Screen Display--*/

    if (screen.availWidth <= 420) {
        console.log("hello motherfucker! Phone size");
        console.log("Mobile screen display short : "+screen.availWidth +" , "+ screen.availHeight);  
        }
      
      
        /*--Tablet & Small Screen  Display--*/
      if (screen.availWidth > 420 && screen.availWidth < 1280) {
        console.log("hello motherfucker ! tab size");
        console.log(" tablet screen display  : " + screen.availWidth + " , " + screen.availHeight);
       
        }
      /*--Desktop Screen Display--*/
      if (screen.availWidth >= 1280) {
        console.log("hello motherfucker ! desk size");
        console.log(" desktop screen display : " + screen.availWidth + " , " + screen.availHeight );
     
      }
     
}


 function screenDisplay() {
  
let smallScreen = false;
let tabScreen = false;
let bigScreen = false;

  /*--Phone Screen Display--*/

   if (screen.availWidth <= 420) {
     smallScreen = true;
   } else {
     smallScreen = false;
   }

   /*--Tablet & Small Screen  Display--*/
   if (screen.availWidth > 420 && screen.availWidth < 1280) {
     tabScreen = true;
   } else {
     tabScreen = false;
   }
   /*--Desktop Screen Display--*/
   if (screen.availWidth >= 1280) {
     bigScreen = true;
   } else {
     bigScreen = false;
   }

 
 }


export {screenSizeTest};


