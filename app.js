// Close alert notification 
const xButton = document.querySelector('.alert-close');
xButton.addEventListener('click', () => {
    const div = document.querySelector('.alert-bar');
        div.classList.add('removed');

        setTimeout(() => {div.parentNode.removeChild(div)}, 750);
})
//color variables
const chartColor = getComputedStyle(document.documentElement).getPropertyValue('--color-chart-transparent');
const chartBorderColor = getComputedStyle(document.documentElement).getPropertyValue('--color-header');
// ==========================
// ======= Web traffic charts
//===========================
//create data and charts
const ctx = {
    hourly: document.querySelector('#hourly'), 
    daily: document.querySelector('#daily'), 
    weekly: document.querySelector('#weekly'), 
    monthly: document.querySelector('#monthly')
};
const data = {
    hourly: {
        labels: [6, 9, 12, 15, 18, 21], 
        datasets: [{
            label: '', 
            backgroundColor: chartColor, 
            borderColor: chartBorderColor, 
            data: [340, 568, 1407, 1520, 1009, 503]
        }]
    }, 
    daily: {
        labels: [20, 21, 22, 23, 24, 25, 26, 27, 28], 
        datasets: [{
            label: '', 
            backgroundColor: chartColor, 
            borderColor: chartBorderColor, 
            data: [2678, 2403, 3486, 4008, 3875, 3657, 2455, 3687, 4970]
        }]
    }, 
    weekly: {
        labels: ['1/25', '2/1', '2/8', '2/15', '2/22', '3/1'], 
        datasets: [{
            label: '', 
            backgroundColor: chartColor, 
            borderColor: chartBorderColor, 
            data: [10089, 14047, 12789, 10475, 12587, 16798]
        }]
    }, 
    monthly: {
        labels: ['November', 'December', 'January', 'March', 'April'], 
        datasets: [{
            label: '', 
            backgroundColor: chartColor, 
            borderColor: chartBorderColor, 
            data: [47897, 38976, 42897, 49087, 54980]
        }]
    }
};
const charts = {
    hourly: new Chart(ctx.hourly, {
        type: 'line',
        data: data.hourly, 
        options: {
            legend: {
                display: false
            }
        }
    }),
    daily: new Chart(ctx.daily, {
        type: 'line',
        data: data.daily, 
        options: {
            legend: {
                display: false
            }
        }
    }), 
    weekly: new Chart(ctx.weekly, {
        type: 'line',
        data: data.weekly, 
        options: {
            legend: {
                display: false
            }
        }
    }), 
    monthly: new Chart(ctx.monthly, {
        type: 'line',
        data: data.monthly, 
        options: {
            legend: {
                display: false
            }
        }
    }), 
};
//hide all charts except hourly at the start
for (let period in ctx) {
    if (ctx[period].id != 'hourly') {
        ctx[period].style.display = 'none';
    }
}
//function to highlight a tab in green & make text white
const highlight = (button) => {
    button.style.color = '#FFFFFF';
    button.style.backgroundColor = '#80C98F'; // a particular green
    button.style.borderRadius = '10px';
    button.style.paddingBottom = '3px';
}
//function to unhighlight a tab
const unHighlight = (button) => {
    button.style.color='#808080';
    button.style.backgroundColor = '#FFFFFF';
}
//highlight the hourly tab at first
const hourlyTab = document.querySelector('.hourly'); 
highlight(hourlyTab);
//event listener to highlight a tab & display its chart on click
const trafficCharts = document.querySelector('.traffic-charts');
const trafficButtons = document.querySelectorAll('.periods');
trafficCharts.addEventListener('click', (e) => {
    const buttonText = e.target.textContent.toLowerCase();
    if (e.target.tagName === 'BUTTON') {
        for (let period in ctx) {
            if (ctx[period].id == buttonText) {
                highlight(e.target)
                ctx[period].style.display = 'block';
            } else {
                for (let i = 0; i < trafficButtons.length; i++) {
                    if (!(trafficButtons[i].classList.contains(buttonText))) {
                        unHighlight(trafficButtons[i]);
                    }
                }
                ctx[period].style.display = 'none';
            }
        }
    }
})
//daily traffic bar chart 
const ctxBar = new Chart(document.querySelector('.traffic-bar'), {
    type: 'bar', 
    data: {
        labels: ['W', 'Th', 'F', 'Sa', 'Su', 'M', 'T'], 
        datasets: [{
            label: '', 
            backgroundColor: chartBorderColor, 
            data: [4209, 4686, 3879, 4008, 3875, 3657, 3576]
        }]
    }, 
    options: {
        legend: {
            display: false
        }
    }
})
//mobile users pie chart
const ctxPie = new Chart(document.querySelector('.users-pie'), {
    type: 'doughnut', 
    data: {
        labels: ['Mobile', 'Tablet', 'Desktop'], 
        datasets: [{
            label: '', 
            backgroundColor: [
                '#7477BF', 
                '#80C98F', 
                '#74B1BE'
            ], 
            data: [29876, 14654, 10808]
        }]
    }, 
    options: {
        legend: {
            position: 'right'
        }
    }
})




