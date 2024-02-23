var wall = 'rgb(255, 255, 255)';
var original = 'rgb(243, 190, 190)'

function setup() {
    var maze_container = document.getElementById('maze_container');

    for (var i = 0; i < 10; i++){
        var row = document.createElement('div');
        row.className = 'row row' + (i+1);
        row.id = 'row' + (i+1);

        for (var j = 0; j < 10; j++){
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

