export const getDay = {
    0: "Suanday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
} 

export const getMonth = {
    0: "Jan",
    1: "Feb",
    2: "Mar",
    3: "Apr",
    4: "May",
    5: "Jun",
    6: "Jul",
    7: "Aug",
    8: "Sep",
    9: "Oct",
    10: "Nov",
    11: "Dec"
}

export function dateFormater (date) {
    if(date !== null && date !== undefined) {
        if(date.getDate() < 10 && date.getMonth() < 10) {
            return `${date.getFullYear()}-0${date.getMonth()+1}-0${date.getDate()}`
        }
        if(date.getDate() < 10) {
            return `${date.getFullYear()}-${date.getMonth()+1}-0${date.getDate()}`
        }
        if(date.getMonth() < 10) {
            return `${date.getFullYear()}-0${date.getMonth()+1}-${date.getDate()}`
        }
    }
}

export function calculateDuration(start_time, end_time) {
    const startTime = new Date(start_time);
    const endTime = new Date(end_time);
    
    const durationMilliseconds = endTime - startTime;
    const durationSeconds = durationMilliseconds / 1000;
    
    const hours = Math.floor(durationSeconds / 3600);
    const minutes = Math.floor((durationSeconds % 3600) / 60);
    const seconds = Math.floor(durationSeconds % 60);
    
    return { hours, minutes, seconds };
}

export function isObjectInArray(obj, arr) {
    return arr.some(item => 
        item.hours === obj.hours && 
        item.minutes === obj.minutes && 
        item.seconds === obj.seconds
    );
}