const eventsData = {};

// Add Event function to populate events
function addEvent(date, time, type, location, link) {
    if (!eventsData[date]) {
        eventsData[date] = [];
    }
    eventsData[date].push({ time, type, location, link });
}
//march 2025
addEvent("2025-03-29", "9:50 AM", "Stick and Shoot", "Prince William Ice", "https://www.frontline-connect.com/monthlysched.cfm?fac=pwice&facid=1&month=4&year=2025&session=3");
addEvent("2025-03-29", "11:10 AM", "Ashburn", "Prince William Ice", "https://apps.daysmartrecreation.com/dash/x/#/online/ashburn/event-registration?date=2025-03-29&&sport_ids=30");
addEvent("2025-03-29", "11:50 AM", "Stick and Shoot 10U", "Prince William Ice", "https://www.frontline-connect.com/monthlysched.cfm?fac=pwice&facid=1&month=4&year=2025&session=3");
addEvent("2025-03-29", "12:30 PM", "Ashburn", "Prince William Ice", "https://apps.daysmartrecreation.com/dash/x/#/online/ashburn/event-registration?date=2025-03-29&&sport_ids=30");
addEvent("2025-03-29", "1:40 PM", "Stick and Shoot", "Prince William Ice", "https://www.frontline-connect.com/monthlysched.cfm?fac=pwice&facid=1&month=4&year=2025&session=3");
addEvent("2025-03-29", "2:10 PM", "Stick and Shoot", "Medstar", "https://apps.daysmartrecreation.com/dash/x/#/online/capitals/event-registration?date=2025-03-29&&sport_ids=31");

addEvent("2025-03-30", "6:40 PM", "Stick and Shoot", "Medstar", "https://apps.daysmartrecreation.com/dash/x/#/online/capitals/event-registration?date=2025-03-30&&sport_ids=31");

addEvent("2025-03-31", "10:30 AM", "Stick and Shoot", "St James", "https://www.thestjames.com/activities/springfield/ice-house?date=2025-03-31");
addEvent("2025-03-31", "12:10 PM", "Stick and Shoot", "Prince William Ice", "https://www.frontline-connect.com/monthlysched.cfm?fac=pwice&facid=1&month=4&year=2025&session=3");
addEvent("2025-03-31", "2:00 PM", "Stick and Shoot", "Prince William Ice", "https://www.frontline-connect.com/monthlysched.cfm?fac=pwice&facid=1&month=4&year=2025&session=3");
addEvent("2025-03-31", "3:40 PM", "Stick and Shoot", "Medstar", "https://apps.daysmartrecreation.com/dash/x/#/online/capitals/event-registration?date=2025-03-31&&sport_ids=31");
addEvent("2025-03-31", "3:50 PM", "Stick and Shoot", "Prince William Ice", "https://www.frontline-connect.com/monthlysched.cfm?fac=pwice&facid=1&month=4&year=2025&session=3");
addEvent("2025-03-31", "5:40 PM", "Stick and Shoot", "Prince William Ice", "https://www.frontline-connect.com/monthlysched.cfm?fac=pwice&facid=1&month=4&year=2025&session=3");
addEvent("2025-03-31", "7:50 PM", "Stick and Shoot", "Medstar", "https://apps.daysmartrecreation.com/dash/x/#/online/capitals/event-registration?date=2025-03-31&&sport_ids=31");
// april 2025
addEvent("2025-04-01", "10:30 AM", "Stick and Shoot", "St James", "https://www.thestjames.com/activities/springfield/ice-house?date=2025-03-31");
addEvent("2025-04-01", "12:00 PM", "Stick and Shoot", "Ashburn", "https://apps.daysmartrecreation.com/dash/x/#/online/ashburn/event-registration?date=2025-04-01&&sport_ids=30");
addEvent("2025-04-01", "12:20 PM", "Stick and Shoot", "Prince William Ice", "https://www.frontline-connect.com/monthlysched.cfm?fac=pwice&facid=1&month=4&year=2025&session=3");
addEvent("2025-04-01", "2:10 PM", "Stick and Shoot", "Prince William Ice", "https://www.frontline-connect.com/monthlysched.cfm?fac=pwice&facid=1&month=4&year=2025&session=3");
addEvent("2025-04-01", "3:40 PM", "Stick and Shoot", "Medstar", "https://apps.daysmartrecreation.com/dash/x/#/online/capitals/event-registration?date=2025-04-01&&sport_ids=31");
addEvent("2025-04-01", "4:00 PM", "Stick and Shoot", "Prince William Ice", "https://www.frontline-connect.com/monthlysched.cfm?fac=pwice&facid=1&month=4&year=2025&session=3");

addEvent("2025-04-02", "10:30 AM", "Stick and Shoot", "St James", "https://www.thestjames.com/activities/springfield/ice-house?date=2025-03-31");
addEvent("2025-04-02", "3:40 PM", "Stick and Shoot", "Medstar", "https://apps.daysmartrecreation.com/dash/x/#/online/capitals/event-registration?date=2025-04-02&&sport_ids=31");

addEvent("2025-04-03", "10:30 AM", "Stick and Shoot", "St James", "https://www.thestjames.com/activities/springfield/ice-house?date=2025-03-31");
addEvent("2025-04-03", "12:20 PM", "Stick and Shoot", "Prince William Ice", "https://www.frontline-connect.com/monthlysched.cfm?fac=pwice&facid=1&month=4&year=2025&session=3");
addEvent("2025-04-03", "2:10 PM", "Stick and Shoot", "Prince William Ice", "https://www.frontline-connect.com/monthlysched.cfm?fac=pwice&facid=1&month=4&year=2025&session=3");
addEvent("2025-04-03", "3:40 PM", "Stick and Shoot", "Medstar", "https://apps.daysmartrecreation.com/dash/x/#/online/capitals/event-registration?date=2025-04-03&&sport_ids=31");
addEvent("2025-04-03", "4:00 PM", "Stick and Shoot", "Prince William Ice", "https://www.frontline-connect.com/monthlysched.cfm?fac=pwice&facid=1&month=4&year=2025&session=3");
addEvent("2025-04-03", "8:30 PM", "Stick and Shoot", "Ashburn", "https://apps.daysmartrecreation.com/dash/x/#/online/ashburn/event-registration?date=2025-04-03&&sport_ids=30");

addEvent("2025-04-04", "10:30 AM", "Stick and Shoot", "St James", "https://www.thestjames.com/activities/springfield/ice-house?date=2025-03-31");
addEvent("2025-04-04", "12:20 PM", "Stick and Shoot", "Prince William Ice", "https://www.frontline-connect.com/monthlysched.cfm?fac=pwice&facid=1&month=4&year=2025&session=3");
addEvent("2025-04-04", "2:10 PM", "Stick and Shoot", "Prince William Ice", "https://www.frontline-connect.com/monthlysched.cfm?fac=pwice&facid=1&month=4&year=2025&session=3");
addEvent("2025-04-04", "4:00 PM", "Stick and Shoot", "Prince William Ice", "https://www.frontline-connect.com/monthlysched.cfm?fac=pwice&facid=1&month=4&year=2025&session=3");
addEvent("2025-04-04", "6:00 PM", "Stick and Shoot", "Prince William Ice", "https://www.frontline-connect.com/monthlysched.cfm?fac=pwice&facid=1&month=4&year=2025&session=3");
addEvent("2025-04-04", "6:10 PM", "Stick and Shoot", "Ashburn", "https://apps.daysmartrecreation.com/dash/x/#/online/ashburn/event-registration?date=2025-04-04&&sport_ids=30");

addEvent("2025-04-05", "3:10 PM", "Stick and Shoot", "Ashburn", "https://apps.daysmartrecreation.com/dash/x/#/online/ashburn/event-registration?date=2025-04-05&&sport_ids=30");

addEvent("2025-04-06", "5:20 PM", "Stick and Shoot", "Ashburn", "https://apps.daysmartrecreation.com/dash/x/#/online/ashburn/event-registration?date=2025-04-06&&sport_ids=30");

addEvent("2025-04-07", "12:00 PM", "Stick and Shoot", "Ashburn", "https://apps.daysmartrecreation.com/dash/x/#/online/ashburn/event-registration?date=2025-04-07&&sport_ids=30");
addEvent("2025-04-07", "7:50 PM", "Stick and Shoot", "Ashburn", "https://apps.daysmartrecreation.com/dash/x/#/online/ashburn/event-registration?date=2025-04-07&&sport_ids=30");

addEvent("2025-04-08", "12:00 PM", "Stick and Shoot", "Ashburn", "https://apps.daysmartrecreation.com/dash/x/#/online/ashburn/event-registration?date=2025-04-08&&sport_ids=30");

addEvent("2025-04-10", "12:00 PM", "Stick and Shoot", "Ashburn", "https://apps.daysmartrecreation.com/dash/x/#/online/ashburn/event-registration?date=2025-04-10&&sport_ids=30");

addEvent("2025-04-11", "12:00 PM", "Stick and Shoot", "Ashburn", "https://apps.daysmartrecreation.com/dash/x/#/online/ashburn/event-registration?date=2025-04-11&&sport_ids=30");

addEvent("2025-04-12", "11:10 AM", "Stick and Shoot", "Ashburn", "https://apps.daysmartrecreation.com/dash/x/#/online/ashburn/event-registration?date=2025-04-12&&sport_ids=30");

addEvent("2025-04-13", "3:30 PM", "Stick and Shoot", "Ashburn", "https://apps.daysmartrecreation.com/dash/x/#/online/ashburn/event-registration?date=2025-04-13&&sport_ids=30");
addEvent("2025-04-13", "5:20 PM", "Stick and Shoot", "Ashburn", "https://apps.daysmartrecreation.com/dash/x/#/online/ashburn/event-registration?date=2025-04-13&&sport_ids=30");

const calendarDates = document.querySelector('.calendar-dates');
const monthYear = document.getElementById('month-year');
const prevMonthBtn = document.getElementById('prev-month');
const nextMonthBtn = document.getElementById('next-month');
const filterTimeSelect = document.getElementById("filter-time");
const filterLocationSelect = document.getElementById("filter-location");
const today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

function renderCalendar(month, year) {
    calendarDates.innerHTML = '';
    monthYear.textContent = `${months[month]} ${year}`;

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Blanks for days of week pre-first day
    for (let i = 0; i < firstDay; i++) {
        const blank = document.createElement('div');
        calendarDates.appendChild(blank);
    }

    // Days populated
    for (let i = 1; i <= daysInMonth; i++) {
        const day = document.createElement('div');
        day.textContent = i;

        // Format date
        const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
        day.setAttribute('data-date', dateString);
        day.addEventListener('click', showEvents);
        calendarDates.appendChild(day);
    }
}

// Show events for the selected date
function showEvents(event) {
    const selectedDate = event.target.getAttribute("data-date");
    const eventList = document.getElementById("event-list");
    const eventElements = document.querySelectorAll('.calendar-dates div');

    // Clear previous selections
    eventElements.forEach(day => day.classList.remove("current-selected-date"));

    event.target.classList.add("current-selected-date"); // mark current selected date

    if (!eventList) {
        console.error("Event list element not found.");
        return;
    }

    eventList.innerHTML = ""; // Clear previous events

    if (eventsData[selectedDate]) {
        eventsData[selectedDate].forEach((event) => {
            const item = document.createElement("div");
            item.classList.add("item1"); // Use item1 class for styling
            item.innerHTML = `
                <p>${selectedDate}</p> <!-- Display the date -->
                <h4>${event.type}</h4>
                <h1>${event.time}</h1>
                <h4>${event.location}</h4>
                <div class="bottomtag">
                    <button><a href="${event.link}" target="_blank">Sign Up</a></button>
                </div>
            `;
            eventList.appendChild(item);
        });
    } else {
        eventList.innerHTML = "<li>No events scheduled</li>";
    }

    // Reset filtering after showing new events
    filterEvents();
}

// Filtering functionality
filterTimeSelect.addEventListener('change', filterEvents);
filterLocationSelect.addEventListener('change', filterEvents);

function filterEvents() {
    const selectedTime = filterTimeSelect.value;
    const selectedLocation = filterLocationSelect.value;
    const selectedDate = document.querySelector(".current-selected-date").getAttribute("data-date"); // Get currently selected date
    const eventList = document.getElementById("event-list");
    eventList.innerHTML = ""; // Clear previous events

    if (eventsData[selectedDate]) {
        const filteredEvents = eventsData[selectedDate].filter(event => {
            const eventHour = parseInt(event.time.split(':')[0]);
            const eventPeriod = event.time.split(' ')[1];
            let inTimeRange = true;

            // Filter by time
            if (selectedTime !== 'all') {
                if (selectedTime === 'morning') {
                    inTimeRange = (eventPeriod === 'AM' && eventHour < 12);
                } else if (selectedTime === 'afternoon') {
                    inTimeRange = (eventPeriod === 'PM' && eventHour < 6) || (eventPeriod === 'AM' && eventHour >= 12);
                } else if (selectedTime === 'evening') {
                    inTimeRange = (eventPeriod === 'PM' && eventHour >= 6);
                }
            }

            // Filter by location
            const inLocation = selectedLocation === 'all' || event.location === selectedLocation;

            return inTimeRange && inLocation;
        });

        // Display filtered events
        filteredEvents.forEach((event) => {
            const item = document.createElement("div");
            item.classList.add("item1"); // Use item1 class for styling
            item.innerHTML = `
                <p>${selectedDate}</p> <!-- Display the date -->
                <h4>${event.type}</h4>
                <h1>${event.time}</h1>
                <h4>${event.location}</h4>
                <div class="bottomtag">
                    <button><a href="${event.link}" target="_blank">Sign Up</a></button>
                </div>
            `;
            eventList.appendChild(item);
        });

        if (filteredEvents.length === 0) {
            eventList.innerHTML = "<li>No events scheduled that match your filters</li>";
        }

    } else {
        eventList.innerHTML = "<li>No events scheduled</li>";
    }
}

// Navigation buttons to change the month
prevMonthBtn.addEventListener('click', () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    renderCalendar(currentMonth, currentYear);
});

nextMonthBtn.addEventListener('click', () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    renderCalendar(currentMonth, currentYear);
});

// Initialize calendar
renderCalendar(currentMonth, currentYear);
