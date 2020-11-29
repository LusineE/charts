var ctx = document.getElementById('Chart_1');
var chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Հունվար', 'Փետրվար', 'Մարտ', 'Ապրիլ', 'Մայիս', 'Հունիս', 'Հուլիս'],
        datasets: [{
            label: 'Գրաֆիկ 1',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [1230050, 950000,1622000, 989000, 1001000, 836000, 1450000]
        }]
    },
});

var ctx = document.getElementById('Chart_2');
var chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Հունվար', 'Փետրվար', 'Մարտ', 'Ապրիլ', 'Մայիս', 'Հունիս', 'Հուլիս'],
        datasets: [{
            label: 'Գրաֆիկ 2',
            backgroundColor: 'green',
            borderColor:'green',
            data: [1230050, 950000,1622000, 989000, 1001000, 836000, 1450000]
        }]
    },
});

var ctx = document.getElementById('Chart_3');
var chart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Հունվար', 'Փետրվար', 'Մարտ', 'Ապրիլ', 'Մայիս', 'Հունիս', 'Հուլիս'],
        datasets: [{
            label: 'Գրաֆիկ 3',
            backgroundColor: ['yellow','red','blue','pink','green','grey','black'],
            borderColor:'grey',
            data: [1230050, 950000,1622000, 989000, 1001000, 836000, 1450000]
        }]
    },
});