const monthName = document.getElementById('monthName');
const daysContainer = document.getElementById('days');
const prevMonthBtn = document.getElementById('prevMonth');
const nextMonthBtn = document.getElementById('nextMonth');

// Definir a data inicial para Dezembro
let currentDate = new Date();
currentDate.setMonth(11);  // Dezembro é o mês 11

const eventDates = [
    { day: 3, month: 11 }, 
    { day: 5, month: 11 },
    { day: 10, month: 11 }, 
    { day: 12, month: 11 } 
];

function generateCalendar(date) {
    const currentMonth = date.getMonth();
    const currentYear = date.getFullYear();

    const months = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];
    monthName.textContent = `${months[currentMonth]} ${currentYear}`;

    daysContainer.innerHTML = "";

    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    let row = document.createElement('tr');
    for (let i = 0; i < firstDayOfMonth; i++) {
        const emptyCell = document.createElement('td');
        row.appendChild(emptyCell);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        if (row.children.length === 7) {
            daysContainer.appendChild(row);
            row = document.createElement('tr');
        }
        const dayCell = document.createElement('td');
        dayCell.textContent = day;

        // Verificar se o dia é um dia de evento
        const isEventDay = eventDates.some(event => event.day === day && event.month === currentMonth);

        if (isEventDay) {
            dayCell.classList.add('event-day'); 
        }

        dayCell.addEventListener('click', () => {
            if (isEventDay) {
                alert(`Você clicou em um dia com evento! Dia ${day} de Dezembro, mais informaçoes abaixo!!!`);
            } else {
                alert(`Nenhum evento no dia ${day}`);
            }
        });

        row.appendChild(dayCell);
    }

    if (row.children.length > 0) {
        daysContainer.appendChild(row);
    }
}

function nextMonth() {
    currentDate.setMonth(currentDate.getMonth() + 1);
    generateCalendar(currentDate);
}

function prevMonth() {
    currentDate.setMonth(currentDate.getMonth() - 1);
    generateCalendar(currentDate);
}

// Gerar o calendário para Dezembro
generateCalendar(currentDate);

prevMonthBtn.addEventListener('click', prevMonth);
nextMonthBtn.addEventListener('click', nextMonth);
