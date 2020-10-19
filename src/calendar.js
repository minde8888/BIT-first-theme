
class Calendar {

    constructor(target) {

        this.target = target;
        this.DOM = null;
        this.date = new Date();
        this.y = this.date.getFullYear(), this.m = this.date.getMonth(), this.d = this.date.getDay();
        this.lastDayM = new Date(this.y, this.m + 1, 0).getDate();
        let days = this.lastDayM;
        this.curentM = new Date(this.y, this.m + 1, 0).getMonth();
        this.curentDay = new Date(this.y, this.curentM, 1).getDay();
        let startDay = this.curentDay;

        this.init(days, startDay);
    }

    init(lastDayM, startDay) {
        const DOM = document.querySelector(this.target);
        if (DOM) {
            let a = 1;
            const lastMth = document.getElementById("calendar-month-last");
            const nextMth = document.getElementById("calendar-month-next");

            lastMth.addEventListener("click", () => {
                a = a - 1;
                this.month(a);
            });

            nextMth.addEventListener("click", () => {
                a = a + 1;
                this.month(a);
            });

            this.render(lastDayM, startDay);
        }
    }

    render(lastDayM, curentDay, dataDate) {

        let today = this.date;

        if (curentDay == 0) {
            curentDay = 7;
        }

        const calendarDays = document.getElementById("dates");
        const exisitClassMonth = document.querySelector(".cview__month-current").textContent;

        if (exisitClassMonth == 1) {
            let nowM = new Date(this.y, this.date.getMonth());
            let nowY = nowM.toString().slice(11, -47);
            nowM = nowM.toString().slice(4, -55);
            nowM = this.translate(nowM);
            document.getElementById("calendar-month").innerHTML = nowY + ' ' + nowM;
        }

        const check = document.querySelectorAll(".cview--spacer");
        const check1 = document.querySelectorAll(".cview--date");

        if (check.length == 0 && check1.length == 0) {

            for (let i = 0; i < curentDay - 1; i++) {

                const spacer = document.createElement("div");
                spacer.className = "cview--spacer";
                calendarDays.appendChild(spacer);
            }
            for (let d = 1; d <= lastDayM; d++) {

                let _date = new Date(this.y, this.m, d);
                const day = document.createElement("div");
                day.className = "cview--date";
                day.textContent = d;
                day.setAttribute("data-date", _date);

                if (d == today.getDate() && this.y == today.getFullYear() && this.m == today.getMonth()) {
                    day.classList.add("today");
                }
                calendarDays.appendChild(day);
            }
        } else {
            Array.from(document.querySelectorAll('.cview--spacer')).forEach(el => el.remove());
            Array.from(document.querySelectorAll('.cview--date')).forEach(el => el.remove());

            for (let x = 0; x < curentDay - 1; x++) {

                const spacer = document.createElement("div");
                spacer.className = "cview--spacer";
                calendarDays.appendChild(spacer);
            }

            for (let d = 1; d <= lastDayM; d++) {
                dataDate.setDate( d);
                const day = document.createElement("div");
                day.className = "cview--date";
                day.textContent = d;
                day.setAttribute("data-date", dataDate);

                calendarDays.appendChild(day);

            }
            const aadToday = new Date(this.y, this.m, this.date.getDate());
            const isToday = document.querySelectorAll(".cview--date");
            console.log(dataDate);
            for (let i = 0; i < isToday.length; i++) {
                if (isToday[i].dataset.date == aadToday){
                    console.log(isToday[i]);
                    isToday[i].classList.add("today");
                }            
            }
        }
    }

    month(a) {
        const curentMth = document.getElementById("calendar-month");

        let dataDate = new Date(this.y, this.m+a-1);   
        let y = this.date.getFullYear(), m = this.date.getMonth();
        let curentM = new Date(y, this.date.getMonth() + a, 0);
        let curentY = curentM.toString().slice(11, -47);
        curentM = curentM.toString().slice(4, -55);
        let curM = this.translate(curentM);
        curentMth.innerHTML = curentY + ' ' + curM;

        let lastDayM = new Date(y, m + a, 0).getDate();

        let newM = new Date(y, m + a, 0).getMonth();
        let startDay = new Date(curentY, newM, 1).getDay();

        this.render(lastDayM, startDay, dataDate);
    }

    translate(curentM) {
        switch (curentM) {
            case 'Jan':
                return curentM = 'Sausis';
                break;
            case 'Feb':
                return curentM = 'Vasaris';
                break;
            case 'Mar':
                return curentM = 'Kovas';
                break;
            case 'Apr':
                return curentM = 'Balandis';
                break;
            case 'May':
                return curentM = 'Gegužė';
                break;
            case 'Jun':
                return curentM = 'Birželis';
                break;
            case 'Jul':
                return curentM = 'Liepa';
                break;
            case 'Aug':
                return curentM = 'Rugpjūtis';
                break;
            case 'Sep':
                return curentM = 'Rugsėjis';
                break;
            case 'Oct':
                return curentM = 'Spalis';
                break;
            case 'Nov':
                return curentM = 'Lapkritis';
                break;
            case 'Dec':
                return curentM = 'Gruodis';
                break;
        }
    }
}

export default Calendar;