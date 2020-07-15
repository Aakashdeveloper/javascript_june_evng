[0,1,1,2,3,5,8,13]

var fibonacci = function(n){
    if(n===1){
        return [0,1]
    }else{
        var data = fibonacci(n-1)
        data.push(data[data.length-1]+data[data.length-2])
        return data
    }
}

fibonacci(25)
(26) [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025]
fibonacci(5)
(6) [0, 1, 1, 2, 3, 5]
fibonacci(8)
(9) [0, 1, 1, 2, 3, 5, 8, 13, 21]