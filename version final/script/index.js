
document.querySelector('#ajout').addEventListener('click' , (e) => {
    let nouv = document.createElement('tr');
    nouv.innerHTML = `<td>${document.querySelector('#reference').value}</td><td> ${document.querySelector('#montant').value} </td><td><button class="delete">X</button></td>`;
    nouv.classList.add(`${document.querySelector('#sous').value}`);
    nouv.dataset.amount = document.querySelector('#montant').value;
    document.querySelector(`#${document.querySelector('#sous').value}`).appendChild(nouv);
    totalCategorie(`${document.querySelector('#sous').value}`);


    let removing = document.querySelectorAll('.delete');
    let tableRow = document.querySelectorAll('tbody tr');

    for (let index in removing) {
        removing[index].onclick = () => {
            tableRow[index].remove();
            totalCategorie(tableRow[index].className);
        }
    }
})

function totalCategorie(categorie) {
    var total = 0;

    document.querySelectorAll(`.${categorie}`).forEach((dep) => {
        total += parseInt(dep.dataset.amount);
    })

    document.querySelector(`#total-${categorie}`).innerText = total + ' €';
    document.querySelector(`#total-${categorie}`).dataset.totalCategorie = total;
    calculBudget();
}

function calculBudget() {
    var totalDepense = 0;
    var totalRevenue = 0;
    var depData = [];
    var globData = [];
    var revData = [];

    document.querySelectorAll('.depenses').forEach((dep) => {
        totalDepense += parseInt(dep.dataset.totalCategorie);
        depData.push(parseInt(dep.dataset.totalCategorie));
    })

    document.querySelectorAll('.revenus').forEach((rev) => {
        totalRevenue += parseInt(rev.dataset.totalCategorie);
        revData.push(parseInt(rev.dataset.totalCategorie));
        
    })
    globData = [totalDepense, totalRevenue];
    addData(depData, globData, revData);
    document.querySelector('#total-revenue').innerText = totalRevenue + ' €';
    document.querySelector('#total-depense').innerText = totalDepense + ' €';
    document.querySelector('#resultat').innerText = (totalRevenue - totalDepense) + '€';
}
function addData(depData , globData , revData) {
    depChart.data.datasets[0].data = depData ;
    depChart.update();
    globChart.data.datasets[0].data = globData;
    globChart.update();
    revChart.data.datasets[0].data = revData;
    revChart.update();
}

//verouille bouton
document.querySelector('#montant').addEventListener('input' , (e) => {
    if (e.target.value.match(/^[0-9,\.]+$/)) {
        document.querySelector('#ajout').removeAttribute('disabled');
    }else {
        document.querySelector('#ajout').setAttribute('disabled' , 'true');
    }
})

//changement de page:

document.querySelector('.bloc-depense').classList.add('disparition');
document.querySelector('#select-dep').classList.add('disparition');
document.querySelector('.bloc-revenu').classList.remove('disparition');
document.querySelector('#select-rev').classList.remove('disparition');
document.querySelector('#sous').value = 'cata1';

document.querySelector('.revenu').addEventListener('click' , (e) => {
    document.querySelector('.bloc-depense').classList.add('disparition');
    document.querySelector('#select-dep').classList.add('disparition');
    document.querySelector('.bloc-revenu').classList.remove('disparition');
    document.querySelector('#select-rev').classList.remove('disparition');
    document.querySelector('#sous').value = 'cata1';
})

document.querySelector('.depense').addEventListener('click' , (e) => {
    document.querySelector('.bloc-revenu').classList.add('disparition');
    document.querySelector('#select-rev').classList.add('disparition');
    document.querySelector('.bloc-depense').classList.remove('disparition');
    document.querySelector('#select-dep').classList.remove('disparition');
    document.querySelector('#sous').value = 'categorie1';
})