/*
Create a function that takes an array of football clubs with properties: name, wins, loss, draws, scored, conceded, and returns the team name with the highest number of points. If two teams have the same number of points, return the team with the largest goal difference.
How to Calculate Points and Goal Difference
team = {name: "Manchester United", wins: 30, loss: 3, draws: 5, scored: 88, conceded: 20 }

Total Points = 3 * wins + 0 * loss + 1 * draws = 3 * 30 + 0 * 3 + 5 * 1 = 95 points
Goal Difference = scored - conceded = 88 - 20 = 68
Examples
champions([
 {
 name: "Manchester United",
 wins: 30,
 loss: 3,
 draws: 5,
 scored: 88,
 conceded: 30,
 },
 {
 name: "Arsenal",
 wins: 24,
 loss: 6,
 draws: 8,
 scored: 98,
 conceded: 29,
 },
 {
 name: "Chelsea",
 wins: 22,
 loss: 8,
 draws: 8,
 scored: 98,
 conceded: 29,
 },
])
➞ "Manchester United"
*/


let champion = [
  {
    name: "Manchester United",
    wins: 40,
    loss: 3,
    draws: 8,
    scored: 88,
    conceded: 1,
  },
  {
    name: "Arsenal",
    wins: 40,
    loss: 6,
    draws: 8,
    scored: 98,
    conceded: 29,
  },
  {
    name: "Chelsea",
    wins: 22,
    loss: 8,
    draws: 8,
    scored: 98,
    conceded: 29,
  },
]
let newArray = [];

function champions(champion) {

  newArray = champion.map((obj) => ({
    name: obj.name,
    points: (3 * obj.wins) + (1 * obj.draws),
    difference: obj.scored - obj.conceded
  }));

  let winner = findWinner(newArray);
  return winner;
}
champions(champion);



function findWinner(array) {

  let nameChampion = newArray[0].name
  let winObj = newArray[0]
  let maxPoints = newArray[0].points

  for (let key in newArray) {
    if (newArray[key].points > maxPoints) {
      maxPoints = newArray[key].points;
      nameChampion = newArray[key].name
      winObj = newArray[key];
    } else if (newArray[key].points === maxPoints) {
      if (newArray[key].difference > winObj.difference) {
        nameChampion = newArray[key].name;
      } else {
        nameChampion = winObj.name;
      }
    }

  }
      return nameChampion;

}





exports.solution = champions;