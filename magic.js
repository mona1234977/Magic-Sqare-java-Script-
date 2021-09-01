 console.log("**welcome in Magic Sqare**")
magic_sqare=[[8,3,4],
             [1,5,9],
             [6,7,2]];
var i=0
var sum1=0
while(i<magic_sqare.length){
    var r=0
    while(r<magic_sqare.length){
        sum1=sum1+magic_sqare[i][r]
        r++
        break
    }i++


}console.log(sum1)
var a=0
var sum2=0
while(a<magic_sqare.length){
    var c=0
    while(c<magic_sqare.length){
        sum2=sum2+magic_sqare[a][c]
        c++
        break
    }a++
}console.log(sum2)
var b=0
var sum3=0
while(b<magic_sqare.length){
    var d=0
    while(d<magic_sqare.length){
        if(b==d){
            sum3=sum3+magic_sqare[d][d]
        }d++

    }b++
}console.log(sum3)
if(sum1===sum2 && sum2===sum3 && sum1===sum3){
    console.log("magic sqare")
}else{
    console.log("not a magic sqare")
}

