//selecting the main div
 mainDiv = document.getElementById('main-div')

 //select every div item inside main div
 div = mainDiv.querySelectorAll('div')
 
 let count = 0
//array of card images 
cardImages = ["apple.jpeg", "orange.jpeg", "pear.jpeg", "watermelon.jpeg"] 

 //when a div item is clicked
 div.forEach(element => {
     element.addEventListener('click', () => {

        //flip the cards

         
         if(element == div[0] || element == div[6])
         {
            element.querySelector('img').src = "images/apple.jpeg"
         }else if (element == div[1] || element == div[4]){
            element.querySelector('img').src = "images/pear.jpeg"
         }else if (element == div[2] || element == div[7]){
            element.querySelector('img').src = "images/orange.jpeg"
            element.querySelector('img').style.width = "200px"
         }else if (element == div[3] || element == div[5]){
            element.querySelector('img').src = "images/mango.jpeg"
            

         }
     })
 });

