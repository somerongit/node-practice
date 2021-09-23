const rect=require("./rectangle");

function solveRect(l,b) {
    console.log( 'color: #40dd20',"Hi hello nice to see you baby "+b);
    console.info("\nSolving for rectangle with l= "+l+" and b = "+b);
    if (l<=0 || b<=0) {
        console.error("\nRectangle dimentions should be grater then Zero!!!");
    }else{
        console.log("\n\tThe area of rectangle is "+rect.area(l,b));
        console.log("\n\tThe perimeter of rectangle is "+rect.perimeter(l,b));

    }
}

solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-3,5);