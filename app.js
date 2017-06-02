//when browser first loads, have button labeled "Add Square"
//document.addEventListener('DOMContentLoaded', function() {
//});

var addSquare = document.createElement('button');
addSquare.id = 'my-btn';
addSquare.innerText = 'Add Square';
document.body.appendChild(addSquare);

var count = 0;
//each time button is clicked, create new div, a black square, with a class name
addSquare.addEventListener('click', function() {
    count++;
    
    var tile = document.createElement('div');
    tile.id = count; 
    tile.className = 'square';
    tile.addEventListener('click', function(){
        var colors = ['Blue', 'Red', 'Green', 'Yellow', 'White'];
        var randomIndex = Math.round(Math.random() * colors.length);
        tile.style.backgroundColor = colors[randomIndex]; 
    });
    tile.addEventListener('mouseenter', function() {
        var inlineElement = document.createElement('span');
        var text = document.createTextNode(tile.id);
        inlineElement.appendChild(text);
        inlineElement.id = "hoverId";
        tile.appendChild(inlineElement);
    });
    tile.addEventListener('mouseleave', function() {
        var inlineElement = document.getElementById("hoverId");
        tile.removeChild(inlineElement);
    });
    tile.addEventListener('dblclick', function() {
        if (tile.id % 2 === 0) {
            var tileToRemove = document.getElementById(tile.id + 1)
            if (!tileToRemove)
                alert("No square after!");
            else
                document.body.removeChild(tileToRemove)
        }

        else {
            var tileToRemove = document.getElementById(tile.id - 1)
            if (!tileToRemove)
                alert("No square before!");
            else
                document.body.removeChild(tileToRemove)
        }
    })
    document.body.appendChild(tile);

});

