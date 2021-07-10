//Speed Check Function

// speed limit = 70
// every 5 over > 1 point
// use Math.Floor(1.3)
// 12 points > suspended

checkSpeed(150, 70);
    
function checkSpeed(actualSpeed, limit) {
    //Get the speed rotated down
    const speed = Math.floor(actualSpeed);
    //Get the overage amount of speed
    const overLimit = speed - limit;
    //Find the license points, rounded down
    const points = Math.floor(overLimit / 5);
    
    //Is the driver speeding?
    if (speed > limit) {
         console.log(`You're speeding by ${overLimit}mph!`);
         console.log(`${points} points have been added to your driver's license.`)
         if (points >= 12) {
             console.log(`You have ${points} points, your license has been suspended.`)
         }

    } else { 
        console.log("You're ok, safe driver."); }
}