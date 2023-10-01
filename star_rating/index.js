let rating=2
function replaceIcons(event,index){
    let startsDiv=document.getElementsByClassName("stars")[0];
    
    let childNodes=startsDiv.childNodes;
    for(let i=0;i<5;i++){
        
        if(index>i){
        childNodes[i+1].setAttribute("class","fa fa-star");
    }else{
        childNodes[i+1].setAttribute("class","fa fa-star-o");
        childNodes[i+1].setAttribute("style","font-size:30px;color:rgba(255, 255, 0, 0.5)")

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
        createSpan.setAttribute("class","fa fa-star");
        }else{
            createSpan.setAttribute("class","fa fa-star-o");        
        }
        createSpan.setAttribute("style","font-size:30px;color:rgba(255, 255, 0, 0.5)")
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
