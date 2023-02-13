
/*
1 - Download and utilize in Script tag
2 - CDN link in script tag
<script type = "text/JavaScript" 
src = "https://cdn.jsdelivr.net/npm/lodash@4.17.20/lodash.min.js">
</script>
3 - npm i --save lodash
4 - use require var _ = require('lodash');
*/

var users = [ 1, 24, 35, 4 ];

let res = users.reduce(function (sum,n){
    return sum + n
},0)

console.log(res);

let resL = _.reduce(users, function(sum, n) {
    return sum + n;
  }, 0);
  console.log(resL);