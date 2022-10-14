let feature_projects = ["The National University of Architecture", 
                        "Galaxy High School", 
                        "The National University of Art"];

let feature_projects_index = 0;

function featureProjectBack() {
    const feature_projects_text = document.querySelector('#featureProjectText');
    if(feature_projects_index != 0){
        feature_projects_index --;
        feature_projects_text.innerText = feature_projects[feature_projects_index];
    }else{
        feature_projects_index = feature_projects.length - 1;
        feature_projects_text.innerText = feature_projects[feature_projects_index];
    }
  }
function featureProjectNext() {
    const feature_projects_text = document.querySelector('#featureProjectText');
    if(feature_projects_index != feature_projects.length - 1){
        feature_projects_index ++;
        feature_projects_text.innerText = feature_projects[feature_projects_index];
    }else{
        feature_projects_index = 0;
        feature_projects_text.innerText = feature_projects[feature_projects_index];
    }
  }

let done_projects = [{img: "/images/img1.png", title: "Wildstone Infra Hotel", body: "2715 Ash Dr. San Jose, South Dakota"},
                     {img: "/images/img2.png", title: "Wish Stone Building", body: "2972 Westheimer Rd. Santa Ana, Illinois"},
                     {img: "/images/img3.png", title: "Mr. Parkinston's House", body: "3517 W. Gray St. Utica, Pennsylvania"},
                     {img: "/images/img4.png", title: "Oregano Height", body: "2464 Royal Ln. Mesa, New Jersey"},
                     {img: "/images/img5.jpg", title: "Paradise Hotel", body: "5715 Ash Dr. San Jose, New Jersey"},
                     {img: "/images/img6.jpg", title: "Mr. Harry's House", body: "2900 Westheimer Rd. Santa Ana, Illinois"},
                     {img: "/images/img7.jpg", title: "Future Infra Hotel", body: "3543 W. Bless St. Utica, Pennsylvania"},];

let numOfCards = 4;
let done_projects_index = 0;
let pagination =  Math.ceil(done_projects.length / numOfCards);
let pagination_index = 0;

document.addEventListener('DOMContentLoaded', init);
document.addEventListener('DOMContentLoaded', paginationInit);

function init(){
    const done_projects_lists = document.querySelector('.project-body');
    for(let i = done_projects_index; i < done_projects_index+numOfCards; i++){
        
        if(i !== done_projects.length){
            const card = document.createElement("div");
            card.classList.add('project-body-containers');

            const img = document.createElement("img");
            img.src = done_projects[i].img;

            const info = document.createElement("div");
            info.classList.add('project-body-container');

            const name = document.createElement("div");
            name.classList.add('project-body-container-title');
            name.innerText = done_projects[i].title; 
            const address = document.createElement("div");
            address.classList.add('project-body-container-body');
            address.innerText = done_projects[i].body; 
            info.append(name, address);
            card.append(img, info);
            console.log(card)
            done_projects_lists.append(card);
        }
       

        
    }
    
   
}
 function paginationInit(){
     const project_footer_p = document.querySelector('.project-footer-p');
    for(let i = 0; i < pagination; i++){
        const icon = document.createElement("i");
        icon.classList.add('bi');
        icon.classList.add('bi-circle-fill');
        if(i === pagination_index){
            icon.classList.add('active');
        }
        project_footer_p.append(icon);

    }
 }

function DoneProjectBack() {
    let projects = document.getElementById("project-body");
    while (projects.firstChild) {
        projects.removeChild(projects.lastChild);
      }
    if(done_projects_index != 0){
        done_projects_index -= numOfCards;
        init();
    }else{
        done_projects_index = done_projects.length - (done_projects.length %numOfCards);
        init();
    }
  }
function DoneProjectNext() {
    let projects = document.getElementById("project-body");
    while (projects.firstChild) {
        projects.removeChild(projects.lastChild);
      }
    if(done_projects_index+numOfCards <= done_projects.length - 1){
        done_projects_index += numOfCards;
        init();
    }else{
        done_projects_index = 0;
        init();
    }
  }

 
