module.exports = (x,y,callback) => {
    if(x<=0||y<=0){
        setTimeout(()=>
        callback(new Error("\nRectangle dimensions shoulbe be grater then zero, the value of L is: "+
        x+" and the value of B is: "+y),null),
        2000);
    }else{
        setTimeout(()=>
        callback(null,
            {
                perimeter:()=>(2*(x+y)),
                area:()=>(x*y)
            }),
            2000);
    }

}
