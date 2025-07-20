/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    let m = grid.length; // rows
    let n = grid[0].length; // columns

    let queue = [];
    // first add all the rotten oranges in queue
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            if (grid[i][j] === 2) {
                // pushing indices of rotten oranges
                queue.push([i, j, 0]);
            }
        }
    }

    let maxMinutes = 0;

    // mark adjacent nodes as retten and push in queue till it is not empty
    while (queue.length) {
        let [x, y, level] = queue.shift();
        // we are checking for left, right, top, bottom (in that order)
        if (x > 0 && grid[x - 1][y] === 1) {
            grid[x - 1][y] = 2;
            queue.push([x - 1, y, level + 1]);
        }

        if (x < m - 1 && grid[x + 1][y] === 1) {
            grid[x + 1][y] = 2;
            queue.push([x + 1, y, level + 1]);
        }

        if (y < n - 1 && grid[x][y + 1] === 1) {
            grid[x][y + 1] = 2;
            queue.push([x, y + 1, level + 1]);
        }

        if (y > 0 && grid[x][y - 1] === 1) {
            grid[x][y - 1] = 2;
            queue.push([x, y - 1, level + 1]);
        }

        maxMinutes = Math.max(level, maxMinutes);
    }

    // finally run over each element and check if any fresh orange remains
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            if (grid[i][j] === 1) {
                return -1;
            }
        }
    }

    return maxMinutes;
};