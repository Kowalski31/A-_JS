var wall = 'rgb(255, 255, 255)';
var original = 'rgb(243, 190, 190)';
var maze_length = 10;


function setup() {
    var maze_container = document.getElementById('maze_container');

    for (var i = 0; i < maze_length; i++){
        var row = document.createElement('div');
        row.className = 'row row' + (i+1);
        row.id = 'row' + (i+1);

        for (var j = 0; j < maze_length; j++){
            var node = document.createElement('div');
            node.className = 'node node' + ((i*10) + (j+1));
            node.id = 'node' + ((i*10) + (j+1));
            
            if(((i*10) + (j+1)) != 1 && ((i*10) + (j+1)) != 100){
                node.style.backgroundColor = original;

                node.onclick = function(){
                    toggleBackgroundColor(this.id);
                }
            }
            row.appendChild(node);
        }
        
        maze_container.appendChild(row);
    }
}

function toggleBackgroundColor(elementID){
    var element = document.getElementById(elementID);

    if(element.style.backgroundColor == wall){
        element.style.backgroundColor = original;
    } else {
        element.style.backgroundColor = wall;
    }
}

function clearMaze(){
    for(var i = 2; i < maze_length*maze_length; i++){
        var node = document.getElementById('node' + i);
        node.style.backgroundColor = original;
    }
}

function startMaze(){

    var maze = [];

    for (let i = 0; i < maze_length; i++){
        maze[i] = new Array(maze_length).fill(0);
    }

    var rowCount = 0;
    var colCount = 0;
    var nodeVal = 1;

    for (let i = 1; i <= maze_length*maze_length; i++){
        var node_color = document.getElementById('node' + i).style.backgroundColor;
        if(node_color == wall){
            maze[rowCount][colCount] = -1;
        }
        else{
            maze[rowCount][colCount] = nodeVal;
            nodeVal++;    
        }

        colCount++;

        if(colCount == maze_length){
            colCount = 0;
            rowCount++;
        }
    }
    // console.log(maze);
    
    var adjList = {};

    var possibleMoves = [[-1, 0], [0, -1], [1, 0], [0, 1]]; // up, left, down, right

    for (let i = 0; i < maze_length; i++){
        for (let j = 0; j < maze_length; j++){
            if(maze[i][j] != -1){
                var node = maze[i][j];
                // adjList[node] = [];
                var neighbors = [];

                for (let k = 0; k < 4; k++){
                    var newRow = i + possibleMoves[k][0];
                    var newCol = j + possibleMoves[k][1];

                    if(newRow >= 0 && newRow < maze_length && newCol >= 0 && newCol < maze_length){
                        if(maze[newRow][newCol] != -1){
                            // adjList[node].push(maze[newRow][newCol]);
                            neighbors.push([newRow, newCol]);
                        }
                    }
                }
                adjList[node] = neighbors;
            }
        }
    }
    
    console.log(adjList);
}   