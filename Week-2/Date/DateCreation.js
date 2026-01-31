// Assignment 1: Date Creation & Extraction (Beginner)
// ---------------------------------------------------
// Tasks:
//        1. Create a Date object for current date & time.
//        2. Extract and display:
//                     * Year
//                     * Month (human readable)
//                     * Date
//                     * Day of week
//                     * Hours, minutes, seconds

//       3. Display the date in this format:
//                     DD-MM-YYYY HH:mm:ss
let Date1=new Date()
let year=Date1.getFullYear()
let month=Date1.getMonth()
let date=Date1.getDate()
let day=Date1.getDay()
let hours=Date1.getHours()
let minutes=Date1.getMinutes()
let seconds=Date1.getSeconds()
console.log("year",year)
console.log("month",month.toString())
console.log("date",date)
console.log("day",day)
console.log("hours",hours)
console.log("minutes",minutes)
console.log("seconds",seconds)

let date2=new Date()


