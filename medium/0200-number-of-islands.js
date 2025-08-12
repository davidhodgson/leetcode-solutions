/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0;

    const dfs = (row, column, grid) => {

        if (row < 0 || column < 0 || row >= grid.length || column >= grid[0].length) 
            return;

        if (grid[row][column] == '1') {
            grid[row][column] = '0';

            dfs(row+1, column, grid);
            dfs(row-1, column, grid);
            dfs(row, column + 1, grid);
            dfs(row, column-1, grid);
        }


    };


    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if (grid[r][c] == '1') {
                count++;

                dfs(r, c, grid);
            }
        }
    }

    return count;

};

var grid = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
];

console.log(numIslands(grid));