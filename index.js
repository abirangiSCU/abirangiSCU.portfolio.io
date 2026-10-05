const programCard = document.getElementsByClassName("program-card-background");
let isInUI=false;
let languageAndDescription = [
    ["HTML","I've been programming in HTML since I was in 4th grade. I am very comfortable in that language, especially since I've programmed my own website from when I was in 5th grade."],
    ["CSS","I am really good at programming CSS, since I find it easy to do. The only problem that I have with it is that I don't match colors very good, so when programming, I would like to have someone tell me what colors they want on the website."],
    ["JavaScript","Like with all logic programming languages, I am very good at JavaScript. I can interpret sequence structure, along with logical statements, such as when something needs to be equal to another at a given moment. I am a bit rusty on JavaScript since I have not programmed in it in a while, but I am able to look up the API and easily figure out what I want from it!"]
]
function sleep(ms){
    return new Promise((resolve) => setTimeout(resolve, ms));
}
async function reverseTween(i,j){
    let programCompleted = true;
    console.log("reversing");
    let stoppedValue = 0;
    for(let k=j;k>0;--k){
        if(!isInUI){
            let degreeValue = (k-1)/200 *360;
            console.log(degreeValue);
            if (degreeValue>90){
                degreeValue=(180-degreeValue)*-1;
            }else{
                programCard[i].querySelector("div").innerHTML = "<h2>" + languageAndDescription[i][0] + "</h2>";
            }
            programCard[i].querySelector("div").style.transform = "rotateY(" + degreeValue + "deg)";
        }else{
            stoppedValue=k;
            programCompleted=false;
            break;
        }
        await sleep(1);
    }
    if(!programCompleted){
        tweenThing(i,stoppedValue);
    }
}
async function tweenThing(i,startValue){
    let programCompleted = true;
    let stoppedValue = 0;
    for(let j=startValue;j<100;++j){
        if(isInUI){
            let degreeValue = (j+1)/200 *360;
            if (degreeValue>90){
                degreeValue=(180-degreeValue)*-1;
                programCard[i].querySelector("div").innerHTML = "<h2>" + languageAndDescription[i][1] + "</h2>";
            }
            programCard[i].querySelector("div").style.transform = "rotateY(" + degreeValue + "deg)";
        }else{
            programCompleted=false;
            stoppedValue=j;
            break;
        }
        await sleep(1);
    }
    if(!programCompleted){
        reverseTween(i,stoppedValue);
    }
}
for(let i =0;i<programCard.length;++i){
    //let timeElapsed = 0;
    programCard[i].querySelector("div").innerHTML = "<h2>" + languageAndDescription[i][0] + "</h2>";
    programCard[i].addEventListener('mouseenter',function() {
        isInUI = true;
        tweenThing(i,0);
    });
    programCard[i].addEventListener('mouseleave',function(){
        isInUI=false;
        console.log("exit");
    });
}