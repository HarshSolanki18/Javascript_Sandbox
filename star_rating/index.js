let rating=2
function replaceIcons(event,index){
    let startsDiv=document.getElementsByClassName("stars")[0];
    let childNodes=startsDiv.childNodes;
    for(let i=0;i<5;i++){
        
        if(index>i){
        childNodes[i+1].setAttribute("class",event.type=="mouseover"? "star-hover fa fa-star":"star fa fa-star");
    }else{
        childNodes[i+1].setAttribute("class","star fa fa-star-o");
       

    }
            
        
    }

}
function onHoverStars(event,index){
    replaceIcons(event,index)
}

function onMouseOut(event){
    replaceIcons(event,rating)
}

function onClick(event,index){
   
    rating=index
    replaceIcons(event,rating)        
    
}


function displayEmptyStars(){
    let startsDiv=document.getElementsByClassName("stars")[0];
    
    for(let i=0;i<5;i++){
        let createSpan=document.createElement("i");
        if(rating>i){
        createSpan.setAttribute("class","star fa fa-star");
        }else{
            createSpan.setAttribute("class","star fa fa-star-o");        
        }
        
        createSpan.addEventListener("mouseover",(event)=>{
            onHoverStars(event,i+1)
        })
        createSpan.addEventListener("mouseout",(event)=>{
            onMouseOut(event)
        })
        createSpan.addEventListener("click",(event)=>{
            onClick(event,i+1)
        })    
        startsDiv.appendChild(createSpan)
    }
    
}

displayEmptyStars()
