const programCard = document.getElementsByClassName("program-card-background");
let currentSlideSelected = 0;
let projectInfos = [];
let htmlElementChangedName = [];
let currentProjectModified;
let currentCardSelected = -1
const projectTitleInfoToId = new Map();
projectTitleInfoToId.set("Project Name","projectName");
projectTitleInfoToId.set("Role","role");
projectTitleInfoToId.set("Creation & Release","creation");
projectTitleInfoToId.set("Creation","creation");
projectTitleInfoToId.set("Project Information","projectInfo")
projectTitleInfoToId.set("Game Link","gameLink");
projectTitleInfoToId.set("Image","displayImage");
projectTitleInfoToId.set("Worked During","creation");
projectTitleInfoToId.set("Video Link","gameLink");
console.log(projectTitleInfoToId.entries());
Array.from(projectTitleInfoToId.entries()).forEach(([key,value]) => {
    if(htmlElementChangedName.findIndex(idName => idName==value)==-1){
        htmlElementChangedName[htmlElementChangedName.length] = value;
    }
})
let boolArray = new Array(htmlElementChangedName.length);
function createNewProject(){
    projectInfos[projectInfos.length] = new Map();
    currentProjectModified = projectInfos[projectInfos.length-1];
}
createNewProject();
//let currentProjectModified = projectInfos.get("Duck Escape");
currentProjectModified.set("Project Name","Duck Escape");
currentProjectModified.set("Role","Lead Developer and Scripter");
currentProjectModified.set("Creation & Release","Spring 2022");
currentProjectModified.set("Project Information","Duck Escape is a game similar to Flood Escape 2 on Roblox, but duck themed! I programmed the elevator teleportation system from the lobby to the map that players had to escape. I also programmed the swimming for when the player falls into the water or acid, along with the health draining/healing for every time the player remains in the liquid or air. I was leading 3 builders with the design.");
currentProjectModified.set("Game Link","https://www.roblox.com/games/8524929902/Duck-Escape")
currentProjectModified.set("Image","robloxLogo.png");
//projectInfos.set("Find the Ducks!",new Map());
createNewProject();
//currentProjectModified = projectInfos.get("Find the Ducks!");
currentProjectModified.set("Project Name","Find the Ducks!");
currentProjectModified.set("Role","Lead Developer and Scripter");
currentProjectModified.set("Creation & Release","Spring 2022");
currentProjectModified.set("Project Information","I created a find the ducks game with 3 builders, where you had to find ducks in 4 different habitats: Summer, Fall, Winter, and Spring. I programmed the part where when you touch a duck, it counts it as a duck found and can't be found again. When the player finds all the ducks, I programmed it to say that the player won. I was leading 3 builders with the design.");
currentProjectModified.set("Game Link","https://www.roblox.com/games/9034029997/Find-the-Ducks");
currentProjectModified.set("Image","robloxLogo.png");
createNewProject();
currentProjectModified.set("Project Name","Zombie Invasion");
currentProjectModified.set("Role","Lead Developer and Scripter");
currentProjectModified.set("Creation","Summer 2022");
currentProjectModified.set("Project Information","I lead a team of developers to create Zombie Invasion, a tower defense game where you place towers to defend against a hoard of enemies that try to drain your health and kill you. The game was inspired by Tower Battles and the older versions of Tower Defense Simulator. While we made some progress, unfortunately due to external reasons, the game has been set on hiatus for the time being.");
currentProjectModified.set("Image","robloxLogo.png");
createNewProject();
currentProjectModified.set("Project Name","Catcher in the Rye");
currentProjectModified.set("Role","Creator");
currentProjectModified.set("Creation","Fall 2022");
currentProjectModified.set("Project Information","Based on the novel by J.D. Salinger, Catcher in the Rye is a game that would let you experience the events of Catcher in the Rye as a Roblox character with Holden, the main character in the book. There would be some twists in the game, such as when one of Holden's roommates named Ackley that would normally have smelly toenails in the novel, had poisonous nails in the game, and players had to escape the dorm that Holden was staying in. The game was created for an English school project.");
currentProjectModified.set("Image","robloxLogo.png");
currentProjectModified.set("Video Link","https://youtu.be/QpwPTjRVAQE?is=tqBqxLpsv0pca-Yo");
createNewProject();
currentProjectModified.set("Project Name","Roku Internship");
currentProjectModified.set("Role","Programmer");
currentProjectModified.set("Worked During","Summer 2024");
currentProjectModified.set("Project Information","I interned for the Roku company back in 2024 through my then-AP Computer Science A teacher. I worked in a team to develop \"Puzzle Charades\", where you had to guess who a particular person is in as few guesses as possible. I helped develop the game loop where once players would correctly guess the person through the multiple-choice menu provided, another person would randomly pop up for the player to guess again. Also, I helped with fixing bugs in the game, such as the images (as we split the person's image into 9 pieces, so that every 5 seconds, a new piece would show up) being flipped 90 degrees, so I fixed that bug.");
currentProjectModified.set("Image","robloxLogo.png");
createNewProject();
currentProjectModified.set("Project Name","CodePad");
currentProjectModified.set("Role","Programmer");
currentProjectModified.set("Worked During","Summer 2023-Summer 2024");
currentProjectModified.set("Project Information","CodePad is an online programming site, where instead of writing JavaScript, Python, or PHP code only on your hard drive, you would be able to do it on the website where it would save into a cloud. I helped develop the like button inside of the site, where pressing the like button would help increase projects' visibility (due to the nature of being able to publish your own coding projects).");
createNewProject();
currentProjectModified.set("Project Name","Heroism: Tower Defense");
currentProjectModified.set("Role","Scripter");
currentProjectModified.set("Worked During","Summer 2026-present");
currentProjectModified.set("Project Information","Heroism: Tower Defense is a tower defense game on Roblox where you place towers to defend against oncoming enemies, but also have heroes that can help defend against certain enemies that ordinary towers can't. I helped with programming enemy abilities, such as a stun effect on a random tower in an enemy's hitbox range, or a splash stun effect on a group of towers from far away based on the enemy's position. I have also programmed the nametags in the game where it would display group role, along with special roles for developers to show to other players when they are logged onto the game. Currently, I am working on creating new towers!");
currentProjectModified.set("Game Link","https://www.roblox.com/games/128150070502198/Heroism-Tower-Defense");
createNewProject();
currentProjectModified.set("Project Name","Track & Field");
currentProjectModified.set("Role","Scripter");
currentProjectModified.set("Worked During","Summer 2026-present");
currentProjectModified.set("Project Information","Track & Field is an upcoming game where you race other players by pressing random keys to help you go faster, but if you hit a wrong key, then you get hit by a train. I scripted the increased player speed, along with the player death by playing the custom-made animation that another developer made.");
createNewProject();
currentProjectModified.set("Project Name","Quizzer");
currentProjectModified.set("Role","Creator");
currentProjectModified.set("Creation","Winter 2025-Summer 2025");
currentProjectModified.set("Project Information","Quizzer! is a game where you get to create your own quizzes and share them with your friends! I created the UI on the game, along with the lobby layout, but I mainly did scripting work through DataStores, MessagingService, and general part creation for the game to function. I did UI programming work to make the game playable as you make the quizzes, such as how many questions you want, what you want the quiz name to be called, along with the type of question for each question (multiple-choice, free response, or matching), and the ability to publish your quizzes for the whole world to view. I also did scripting work, such as determining during play if players selected or typed the right answer so that they can progress and complete the quiz, the teleport system where players teleport to the quiz they choose, and the stopwatch that determines how long a player takes to complete a quiz, with it stating the players' best time per quiz.");
currentProjectModified.set("Game Link","roblox.com");
currentProjectModified.set("Image","");
currentProjectModified.set("Game Link","https://www.roblox.com/games/76016124220601/Quizzer")
createNewProject();
currentProjectModified.set("Project Name","Video Recorder");
currentProjectModified.set("Role","Creator");
currentProjectModified.set("Creation","Spring 2026-present");
currentProjectModified.set("Project Information","Video Recorder is a tool that I created to make it easier to record camera shots inside of Roblox Studio for skits that I am going to be recording on my YouTube channel. I created the UI that is present in the tool, along with programming features of the tool, such as being able to move the camera after a certain period of time from one place to another, either instantaneously or gradually, along with the ability to track an object's position and orientation wherever it goes and calling BindableEvents, such that users that use the tool can have something change in the background while the tool is capturing the scene they want.");
currentProjectModified.set("Image","");
currentProjectModified.set("Video Link","https://x.com/__VectorRBLX__/status/2104003055637418210")
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
    let stoppedValue = 0;
    for(let k=j;k>0;--k){
        if(!isInUI || currentCardSelected!=i){
            let degreeValue = (k-1)/200 *360;
            if (degreeValue>90){
                degreeValue=(180-degreeValue)*-1;
            }else{
                programCard[i].querySelector("div").innerHTML = "<h2 style='font-size: 50px'>" + languageAndDescription[i][0] + "</h2>";
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
                programCard[i].querySelector("div").innerHTML = "<h2 style='font-size: 10px'>" + languageAndDescription[i][1] + "</h2>";
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
function updateProjectInformation(){
    for(let [titleName,description] of projectInfos[currentSlideSelected]){
        if(titleName=="Image"){
            document.getElementById(projectTitleInfoToId.get(titleName)).src = description;
        }else{
            if(description==""){
                document.getElementById(projectTitleInfoToId.get(titleName)).innerHTML="";
                continue;
            }
            if(titleName=="Game Link" || titleName=="Video Link")
                description="<a href=\""+description+"\">"+description+"</a>";
            document.getElementById(projectTitleInfoToId.get(titleName)).innerHTML="<b>" + titleName + ": </b>" + description;
        }
    }
}
for(let i =0;i<programCard.length;++i){
    //let timeElapsed = 0;
    programCard[i].querySelector("div").innerHTML = "<h2 style='font-size: 50px'>" + languageAndDescription[i][0] + "</h2>";
    programCard[i].addEventListener('mouseenter',function() {
        isInUI = true;
        currentCardSelected=i;
        tweenThing(i,0);
    });
    programCard[i].addEventListener('mouseleave',function(){
        isInUI=false;
        let matrix = window.getComputedStyle(programCard[i].querySelector('div')).getPropertyValue("transform");
        if(matrix.length==24){
            console.log("in reverse"); 
            reverseTween(i,100);
        }
    });
}
document.getElementById("goBack").onclick = function(){
    --currentSlideSelected;
    if(currentSlideSelected<0)
        currentSlideSelected = projectInfos.length - 1;
    updateProjectInformation();
}
document.getElementById("goForward").onclick = function(){
    ++currentSlideSelected;
    currentSlideSelected%=projectInfos.length;
    updateProjectInformation();
}
updateProjectInformation();