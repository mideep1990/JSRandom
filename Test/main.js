const curr = new Date();
console.log(curr.toLocaleString())
console.log(curr.toLocaleString('en-GB', { timeZone: 'Africa/Cairo' }));
console.log(curr.toLocaleString('ko-KR', { timeZone: 'UTC' }));