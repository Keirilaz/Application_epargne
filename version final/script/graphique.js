//chart
//depense

const ctxDep = document.getElementById('depChart').getContext('2d');
const depChart = new Chart(ctxDep, {
    type: 'doughnut',
    data: {
        labels: ['Logement', 'Alimentaire', 'Transport', 'Loisir','Santé', 'Divers'],
        datasets: [{
            label: '# of Votes',
            data: [],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(86, 37, 151, 0.5)',
                'rgba(231, 23, 23, 0.5)',
                'rgba(206, 180, 34, 0.5)',
                'rgba(201, 81, 25, 0.5)',
                'rgba(201, 37, 25, 0.5)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(86, 37, 151, 1)',
                'rgba(231, 23, 23, 1)',
                'rgba(206, 180, 34, 1)',
                'rgba(201, 81, 25, 1)',
                'rgba(201, 37, 25, 1)'
            ],
            borderWidth: 1
        }]
    },
   
});

//global

const ctxGlob = document.getElementById('globChart').getContext('2d');
const globChart = new Chart(ctxGlob, {
    type: 'doughnut',
    data: {
        labels: ['dépense', 'revenu'],
        datasets: [{
            label: '# of Votes',
            data: [],
            backgroundColor: [
                'rgba(177, 10, 10, 0.5)',
                'rgba(41, 151, 37, 0.5)'
            ],
            borderColor: [
                'rgba(177, 10, 10, 1)',
                'rgba(41, 151, 37, 1)'
            ],
            borderWidth: 1
        }]
    },
  
});

//revenu

const ctxRev = document.getElementById('revChart').getContext('2d');
const revChart = new Chart(ctxRev, {
    type: 'doughnut',
    data: {
        labels: ['Salaire', 'Allocation' , 'Autres'],
        datasets: [{
            label: '# of Votes',
            data: [],
            backgroundColor: [
                'rgba(139, 68, 197, 0.5)',
                'rgba(59, 42, 207, 0.5)',
                'rgba(18, 193, 216, 0.5)'
            ],
            borderColor: [
                'rgba(139, 68, 197, 1)',
                'rgba(59, 42, 207, 1)',
                'rgba(18, 193, 216, 1)'
            ],
            borderWidth: 1
        }]
    },
    
});