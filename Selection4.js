function DisplayTime(Division) {
    switch (Division) {
        case "A":
            {
                console.log("Your exam is at 7 AM");
                break;
            }
        case "B":
            {
                console.log("Your exam is at 8 AM");
                break;
            }
        case "C":
            {
                console.log("Your exam is at 9 AM ");
                break;
            }
        case "D":
            {
                console.log("Your exam is 10 AM ");
                break;
            }
        default:
            {
                console.log("wrong input should either A,B,C,D");
            }
    }
}
var Value = "C";
DisplayTime(Value);
