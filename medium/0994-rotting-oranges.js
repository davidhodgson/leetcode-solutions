/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    
    let freshOranges = 0;
    let queue = [];
    let time = 0;

    // initialization: set up the count of fresh oranges, and enqueue the rotten oranges
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if (grid[r][c] == 1)
                freshOranges++;
            if (grid[r][c] == 2)
                queue.push([r, c]);
        }
    }

    let directions = [ [0, 1], [0, -1], [1, 0], [-1, 0]];

    while (queue.length > 0 && freshOranges > 0) {
        let queueLength = queue.length;

        for (let i = 0; i < queueLength; i++) {
            let [r, c] = queue.shift();

            for (let [dr, dc] of directions) {
                let row = r + dr;
                let col = c + dc;

                if (row < 0 || row >= grid.length || 
                    col < 0 || col >= grid[0].length ||
                    grid[row][col] != 1
                ) continue;

                grid[row][col] = 2;
                queue.push([row, col]); // enqueue the rotten orange
                freshOranges--;
            }
        }
        time += 1;
    }

    if (freshOranges == 0) return time;

    return -1;
}