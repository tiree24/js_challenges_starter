(function(){

    document.write("hello from tallest-mountain.js");
let mountain1 = [101527876745, 200,869,185,745,200,336, 5000000]

//solution 1
console.log(Math.max.apply(null, mountain1), "solutuion 1");

//solution 2
console.log(Math.max(...mountain1), "solutuion 2");

//solution 3
mountain1.sort(function(a, b) {
    return a - b;
  })

console.log(mountain1[ mountain1.length - 1 ], "solutuion 3")

})();