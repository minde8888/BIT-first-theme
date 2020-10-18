
class Calendar {

    constructor(target) {

        this.target = target;
        this.DOM = null;
        this.date = new Date();
        this.y = this.date.getFullYear(), this.m = this.date.getMonth(), this.d = this.date.getDay();
        this.lastDayM = new Date(this.y, this.m + 1, 0).getDate();
        let days = this.lastDayM;
        // this.DaysOfWeek = [
        //     'S',
        //     'P',
        //     'A',
        //     'T',
        //     'K',
        //     'Pn',
        //     'Š'
        // ];
        this.Months = ['Sausis', 'Vasaris', 'Kovas', 'Balandis', 'Gegužė', 'Birzelis', 'Liepa', 'Rugpjutis', 'Rugsėjis', 'Spalis', 'Lapkritis', 'Gruodis'];
        this.monthRef = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']

        this.init(days);
    }
    init(lastDayM) {
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
            let m = this.m;
            this.render(lastDayM, m);
        }
    }
    render(lastDayM, curentM) {

        let today = this.date;
        let curentDay = new Date(this.y, curentM, 1).getDay();
        const calendarDays = document.getElementById("dates");
        // let nowM = new Date(this.y, this.date.getMonth());
        // let nowY = nowM.toString().slice(11, -47);
        // nowM = nowM.toString().slice(4, -55);
        // nowM = this.translate(nowM);
        // document.getElementById("calendar-month").innerHTML = nowY + ' ' + nowM;

        const check = document.querySelectorAll(".cview--spacer");

        if (check.length == 0) {
            console.log(111111111);
            for (let i = 0; i < curentDay - 1; i++) {

                const spacer = document.createElement("div");
                spacer.className = "cview--spacer";
                calendarDays.appendChild(spacer);
            }
            for (let d = 0; d <= lastDayM - 1; d++) {

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
            console.log(2222222222);

            Array.from(document.querySelectorAll('.cview--spacer')).forEach(el => el.remove());
            Array.from(document.querySelectorAll('.cview--date')).forEach(el => el.remove());

            // const addDates = document.getElementById("new_dates");
            // const newDates = document.createElement("div");
            // newDates.className = "calendar--view";
            // newDates.setAttribute("id", "dates");
            // addDates.appendChild(newDates);

            for (let x = 0; x < curentDay - 1; x++) {
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

                // if (d == today.getDate() && this.y == today.getFullYear() && this.m == today.getMonth()) {
                //     day.classList.add("today");
                // }
                calendarDays.appendChild(day);
            }

        }



    }
    month(a) {
        const curentMth = document.getElementById("calendar-month");
        let y = this.date.getFullYear(), m = this.date.getMonth();
        let lastDayM = new Date(y, m + a, 0).getDate();
        let curentM = new Date(y, this.date.getMonth() + a, 0);
        let curentY = curentM.toString().slice(11, -47);
        curentM = curentM.toString().slice(4, -55);
        let curM = this.translate(curentM);
        console.log(curentY,curM);
        curentMth.innerHTML = curentY + ' ' + curM;
        let newM = new Date(y, m + a, 0).getMonth();
        this.render(lastDayM, newM);
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
    // renderDays(curentDay){

    // }

}

export default Calendar;