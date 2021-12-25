let date_1 = new Date(2020, 11, 1); // the month is 0-indexed
let date_2 = new Date(2021, 11, 1); // the month is 0-indexed
// -[1]: year
// -[2]: month
// -[3]: day  (optional)
// -[4]: hour (optional)
// -[5]: min  (optional)
// -[6]: sec  (optional)
// -[7]: ms.  (optional)
console.log('date_1: ', date_1);
console.log('date_2: ', date_2);
console.log('date_1 > date_2', date_1 > date_2);
console.log('date_1 < date_2', date_1 < date_2);

// ==============================================

const num_days_in_month = (y, m) => new Date(y, m, 0).getDate();

// ==============================================

console.log('num_days_in_month(2021, 12): ', num_days_in_month(2021, 12));
console.log('num_days_in_month(2020, 1): ', num_days_in_month(2020, 2));
console.log('num_days_in_month(2021, 1): ', num_days_in_month(2021, 2));
