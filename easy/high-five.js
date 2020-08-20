/**
 * @param {number[][]} items
 * @return {number[][]}
 */
var highFive = function(items) {
    let scoreMap = {};

    for (let i = 0; i < items.length; i++) {
        let scoreItem = items[i];
        let studentId = scoreItem[0];
        let score = scoreItem[1];

        if (scoreMap[studentId]) {
            scoreMap[studentId].push(score);
        } else {
            scoreMap[studentId] = [score];
        }

    }

    let answer = [];
    for (const studentId in scoreMap){
        let scores = scoreMap[studentId];
        scores.sort( (a,b) => b-a);
        let total = 0;
        for (let i = 0; i < 5; i++) {
            total += scores[i];
        }
        let average = Math.floor(total / 5);

        answer.push([parseInt(studentId), average]);
    }
    
    return answer;

};

highFive([[1,91],[1,92],[2,93],[2,97],[1,60],[2,77],[1,65],[1,87],[1,100],[2,100],[2,76]]);

