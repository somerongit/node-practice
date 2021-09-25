const rect=require("./rectangle");

function solveRect(l,b) {
    console.info("\nSolving for rectangle with l= "+l+" and b = "+b);
    rect(l,b, (err, rectangle)=>{
        if(err){
            console.log("\nError: ",err.message);
        }else{
            console.log("\nThe area of the rectangle of dimesions L: "
            +l+" and B: "+b+" is:"+rectangle.area());
            console.log("The perimeter of the rectangle of dimesions L: "
            +l+" and B: "+b+" is:"+rectangle.perimeter());
        }
    });
    console.log("This satemet is after call of rect");
}

solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-3,5);