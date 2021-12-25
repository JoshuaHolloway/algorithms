// Convert 24-hour (military) time to 12-hr (AM/PM) time

// ==============================================

const f = (time_24) => {
  // Input  [number]: 12
  // Output [string]: '12 AM'

  const date = new Date();
  return date;
};

// ==============================================

// -When called as a constructor, returns a new Date object.
const date = new Date();
console.log('date: ', date, '\ntypeof date: ', typeof date);

// -Returns the numeric value corresponding to the current time—the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC, with leap seconds ignored.
const date_now = Date.now();
console.log('date_now: ', date_now);

const date_timestamp = new Date(date_now);
console.log('date_timestamp: ', date_timestamp);

const date_psql = new Date('2022-01-01T06:00:00.000Z');
// Returns the day of the month (1–31) for the specified date according to local time.
console.log('date_psql: ', date_psql);

//
let birthday = new Date(1995, 11, 17, 13, 24, 0); // the month is 0-indexed
// -[1]: year
// -[2]: month
// -[3]: day  (optional)
// -[4]: hour (optional)
// -[5]: min  (optional)
// -[6]: sec  (optional)
// -[7]: ms.  (optional)
console.log('birthday: ', birthday);

// ==============================================

// Date.prototype.toDateString()
// -Returns the "date" portion of the Date as a human-readable string like 'Thu Apr 12 2018'.
console.log('date.toDateString(): ', date.toDateString());

// Date.prototype.getDate()
// -Returns the day of the month (1–31) for the specified date according to local time.
console.log('date.getDate(): ', date.getDate());

// Date.prototype.getDay()
// -Returns the day of the week (0–6) for the specified date according to local time.
console.log('date.getDay(): ', date.getDay());

// Date.prototype.getFullYear()
// -Returns the year (4 digits for 4-digit years) of the specified date according to local time.
console.log('date.getFullYear(): ', date.getFullYear());

// Date.prototype.getHours()
// -Returns the hour (0–23) in the specified date according to local time.
console.log('date.getHours(): ', date.getHours());

// Date.prototype.getMilliseconds()
// -Returns the milliseconds (0–999) in the specified date according to local time.
console.log('date.getMilliseconds(): ', date.getMilliseconds());

// Date.prototype.getMinutes()
// -Returns the minutes (0–59) in the specified date according to local time.
console.log('date.getMinutes(): ', date.getMinutes());

// Date.prototype.getMonth()
// -Returns the month (0–11) in the specified date according to local time.
console.log('date.getMonth(): ', date.getMonth());

// Date.prototype.getSeconds()
// -Returns the seconds (0–59) in the specified date according to local time.
console.log('date.getSeconds(): ', date.getSeconds());

// Date.prototype.getTime()
// -Returns the numeric value of the specified date as the number of milliseconds since January 1, 1970, 00:00:00 UTC. (Negative values are returned for prior times.)
console.log('date.getTime(): ', date.getTime());

// Date.prototype.getTimezoneOffset()
// -Returns the time-zone offset in minutes for the current locale.
console.log('date.getTimezoneOffset(): ', date.getTimezoneOffset());

// Date.prototype.getYear()
// -Returns the year (usually 2–3 digits) in the specified date according to local time. Use getFullYear() instead.
console.log('date.getYear(): ', date.getYear());

// ==============================================
