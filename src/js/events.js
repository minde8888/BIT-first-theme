"use strict";

import axios from 'axios';
import Calendar from './calendar.js';

class Events {
    constructor(target) {
        this.target = target;
        this.DOM = null;
        this.path = "/wordpress/wp-content/plugins/BIT_first/api/?route=";
        this.uri = document.location.origin;
        this.calendar = new Calendar;
        this.d = this.calendar.date.getDate();
        this.m = this.calendar.date.getMonth();
        this.y = this.calendar.date.getFullYear();
        this.dayToday = new Date(this.y, this.m, this.d);
        this.init();
    }
    init() {
        const DOM = document.querySelector(this.target);
        if (DOM) {
            axios.post(this.uri + this.path + 'event-create-front', {})
                .then(function (response) {

                    let call = new Events;

                    call.calendar = new Calendar;

                    if (response.status == 200 && response.statusText == 'OK') {
                        let action = response.data.html;

                        let keys = [];

                        for (let key in action) {
                            keys.push(key);
                        }

                        let HTML = '';
                        let data = [];
                        let keys1 = [];
                        const todaysEvents = document.querySelector('.todaysEvents');

                        for (let i = 0; i < keys.length; i++) {
                            if (call.dayToday == action[keys[i]].event_date) {
                                data[i] = action[keys[i]];
                            }
                        }

                        let sorteToday = call.calendar.sort(data);
                        let newData = call.sortObject(keys, action);

                        for (let key1 in sorteToday) {
                            keys1.push(key1);
                        }
                        for (let i = 0; i < keys1.length; i++) {
                            let y = sorteToday[keys1[i]].event_date.toString().slice(11, -47);
                            let m = sorteToday[keys1[i]].event_date.toString().slice(4, -55);
                            m = call.calendar.translate(m);
                            let d = sorteToday[keys1[i]].event_date.toString().slice(8, -52);
                            HTML += `<div> ${y} ${m} ${d}</div>
                            <div> ${sorteToday[keys1[i]].event_description}  ${sorteToday[keys1[i]].event_time} </div>`;
                        }
                        todaysEvents.innerHTML = HTML;

                        const nearestEvents = document.querySelector('.nearestEvents');

                        HTML = '';

                        for (let i = 0; i < newData.length; i++) {
                            let value = newData[i];
                            let y = value.event_date.toString().slice(11, -47);
                            let m = value.event_date.toString().slice(4, -55);
                            m = call.calendar.translate(m);
                            let d = value.event_date.toString().slice(8, -52);

                            HTML += `<div> ${y} ${m} ${d} </div>
                            <div> ${value.event_description} </div>`;
                        }
                        nearestEvents.innerHTML = HTML;
                    }



                }).catch(function (error) {
                    if (error.response) {
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                    } else if (error.request) {
                        console.log(error.request);
                    } else {
                        console.log('Error', error.message);
                    }
                    console.log(error);
                });
        }

    }

    sortObject(keys, action) {

        let a = 0;
        let start = true;
        let daysCheck = 0;
        let newDate = [];


        while (start) {

            let addDay = new Date(this.y, this.m, this.d + a++);

            daysCheck++;

            if (daysCheck == 30) {
                start = false;
            }

            for (let i = 0; i < keys.length; i++) {

                if (addDay == action[keys[i]].event_date &&
                    this.dayToday != action[keys[i]].event_date) {
                    newDate.push(action[keys[i]]);
                }
            }

        }

        return newDate;
    }
}

export default Events;