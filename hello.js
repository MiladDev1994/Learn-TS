// const name: string = "Milad";
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * Math.pow(shape.radius, 2);
        case "square":
            return Math.pow(shape.sideLength, 2);
        default:
            // const _exhaustiveCheck: never = shape;
            return shape;
    }
}
console.log(getArea({ kind: "triangle", sideLength: 5 }));
// export {}
