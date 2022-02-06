let projectName;
let projectPrice;
let investments;
let projectTime = 0;
let buttonCalcul;
buttonCalcul = document.getElementById("buttonCalcul");
message = document.getElementById("message");


// let calculOfTheProject = function(){
//     let timeTodo = calculTime();
//     return "Il vous faudra "+  timeTodo +  " mois pour réaliser votre projet"
// }

calculTime = function () {
    
    projectName = document.getElementById("projectName").value;
    projectPrice = document.getElementById("projectPrice").value;
    investments = document.getElementById("investments").value;

    projectPrice =parseInt(projectPrice, 10);
    investments = parseInt(investments, 10);


    projectTime = projectPrice / investments;
    let years = 0;
    while((projectTime-12)>=0){
        years++
        projectTime = projectTime-12
    }
    projectTime = Math.ceil(projectTime)
    if (projectTime== 12){
        projectTime=0
        years++
    }
    message.textContent =" Il vous faut économiser environ pendant "+years + " années et " + projectTime +" mois ";

    let nouv = document.createElement('tr');
    nouv.innerHTML = `<td>Epargne projet "${projectName}"</td><td> ${investments} </td><td><button class="delete">X</button></td>`;
    nouv.classList.add(`categorie6`);
    nouv.dataset.amount = investments;
    document.querySelector(`#categorie6`).appendChild(nouv);
    totalCategorie(`categorie6`);

    let removing = document.querySelectorAll('.delete');
    let tableRow = document.querySelectorAll('tbody tr');

    for (let index in removing) {
        removing[index].onclick = () => {
            tableRow[index].remove();
            totalCategorie(tableRow[index].className);
        }
    }
}

buttonCalcul.addEventListener("click", function () { calculTime() });











// class project{
//     constructor(Name,Price,investments)
//     {
//         this.Name =Name;
//         this.Price = Price;
//         this.investments = investments
//     }
// }

// projectInit(){
//     calculOfTheProject(Price,investments)
//  let projectName =  new project() 
// }