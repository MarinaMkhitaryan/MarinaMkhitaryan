
let point = -1

function ballClick (){
    
    point++
    text.innerHTML = `Points : ${point } `

    let leftValue = Math.floor(Math.random() * 1000 ) 
    let topValue =  Math.floor(Math.random() * 1000 ) 
    
    let widthValue = Math.floor(Math.random() * 100 )
    let heightValue = Math.floor(Math.random() * 100 )
    
    let clr1 =  Math.random() * 255 ;
    let clr2 = Math.random() *255  ;
    let clr3 = Math.random() *255  ;


    ball.style.backgroundColor = `rgb(${clr1},${clr2},${clr3} )` ;

    
    if(leftValue + widthValue >= 450  ){
        leftValue = 445 - widthValue
    }
    if(topValue + heightValue >= 450 ){
        topValue = 445 - heightValue
    }
    if(leftValue == "0" || topValue == "0" || widthValue == "0" || heightValue == "0"){
        leftValue = "100"
        topValue = "100"
        widthValue = "100"
        heightValue = "100"
    }

    ball.style.width = `${widthValue}px`
    ball.style.height = `${heightValue}px` 
    ball.style.left = `${leftValue}px` 
    ball.style.top = `${topValue}px`
 
    console.log(topValue + " top");
    console.log(heightValue + " heigth" );
    console.log(leftValue + " left");
    console.log(widthValue + " width" );

}










