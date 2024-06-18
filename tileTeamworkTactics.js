// Tile Teamwork Tactics
// In a board game, a piece may advance 1-6 tiles forward depending on the number rolled on a six-sided die. If you advance your piece onto the same tile as another player's piece, both of you earn a bonus.

// Can you reach your friend's tile number in the next roll? Create a function that takes your position a and your friend's position b and returns a boolean representation of whether it's possible to earn a bonus on any die roll.

// Examples
// possibleBonus(3, 7) ➞ true

// possibleBonus(1, 9) ➞ false

// possibleBonus(5, 3) ➞ false
// Notes
// You cannot move backward (which is why example #3 doesn't work).
// If you are already on the same tile, return false, as you would be advancing away.
// Expect only positive integer inputs.

let bonus = (a, b) => {
  if (a == b) {
    return false
  } else if (a > b) {
    return false
  } else if (b - a <= 6) {
    return true
  }
  return false
}
console.log(bonus(3, 7))
console.log(bonus(1, 9))
console.log(bonus(5, 3))
// bonus(3, 7) //➞ true
// bonus(1, 9) //➞ false
// bonus(5, 3) //➞ false
