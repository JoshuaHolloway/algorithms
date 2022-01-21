// Convert 24-hour (military) time to 12-hr (AM/PM) time

// ==============================================

const f = (time_24) => {
  // Input  [number]: 12
  // Output [string]: '12 AM'

  const time_mod = time_24 % 12;
  const time = time_mod === 0 ? 12 : time_mod;
  const period = time_24 / 12 < 1 ? 'AM' : 'PM';

  return `${time} ${period}`;
};

// ==============================================

for (let i = 0; i < 24; ++i) {
  console.log(f(i));
}
