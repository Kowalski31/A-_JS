function setup() {
    var maze_container = document.getElementById('maze_container');

    for (var i = 0; i < 10; i++){
        var row = document.createElement('div');
        row.className = 'row row ' + (i+1);
        row.id = 'row ' + (i+1);

        for (var j = 0; j < 10; j++){
            var node = document.createElement('div');
            node.className = 'node node ' + ((i*10) + (j+1));
            node.id = 'node ' + ((i*10) + (j+1));

            row.appendChild(node);
        }

        maze_container.appendChild(row);
        
    }
}