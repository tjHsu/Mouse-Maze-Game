
var mapArr = 
[
["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
["*", "*", "*", "*", "*", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
["*", "*", "*", "*", "*", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
["*", "*", "*", "*", "*", "O", "O", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "O", "O", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
["*", "*", "*", "*", "*", "O", "O", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "O", "O", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
["*", "*", "*", "*", "*", "O", "O", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "O", "O", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
["*", "*", "*", "*", "*", "O", "O", "*", "*", "*", "*", "*", "*", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
["*", "*", "*", "*", "*", "O", "O", "*", "*", "*", "*", "*", "*", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
["*", "*", "*", "*", "*", "O", "O", "*", "*", "*", "*", "*", "*", "O", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
["*", "*", "*", "*", "*", "O", "O", "*", "*", "*", "*", "*", "*", "O", "*", "*", "*", "*", "*", "*", "*", "*", "O", "O", "O", "O", "O", "O", "*", "*", "*", "*"],
["*", "*", "*", "*", "*", "O", "O", "*", "*", "*", "*", "*", "*", "O", "*", "*", "*", "*", "*", "*", "*", "*", "O", "O", "O", "O", "O", "O", "*", "*", "*", "*"],
["O", "O", "O", "O", "O", "O", "O", "*", "*", "*", "*", "*", "*", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "*", "*", "*", "*", "O", "O", "O", "O", "O"],
["O", "O", "O", "O", "O", "O", "O", "*", "*", "*", "*", "*", "*", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "*", "*", "*", "*", "O", "O", "O", "O", "O"],
["O", "O", "O", "O", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "O", "O", "F", "F", "O"],
["O", "S", "S", "O", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "O", "O", "F", "F", "O"],
["O", "S", "S", "O", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "O", "O", "F", "F", "O"],
["O", "O", "O", "O", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "O", "O", "O", "O", "O"],
]


function makeMap () {
    for (var i=0; i<20; i++) { 
        for(var j=0; j<32; j++) {
            var cellDiv = $( "<div id='" + i + "-" + j + "' class='cell'></div>" );
            $(".maze-div").append(cellDiv);
            if( mapArr[i][j] == "O" ) {
                $( "#" + i + "-" + j ).addClass( "game-area" );
            }
            if( mapArr[i][j] == "*" ) {
                $( "#" + i + "-" + j ).addClass("wall");
            }
            if( mapArr[i][j] == "S" ) {
                $( "#" + i + "-" + j ).addClass( "start-btn" );
            }
            if( mapArr[i][j] == "F" ) {
                $( "#" + i + "-" + j ).addClass( "finish-btn" );
            }
        }
    }

    //start button - starts the game

    $( ".start-btn" ).click(function() {
        console.log("clicked start")
        $(".wall").addClass("active")

    });

    $(".wall").hover(function(){
        if ($(".wall").hasClass("active")) {
            $(".wall").removeClass("active")
            console.log("You lost the game. sucker.")
        };
    });

    $(".finish-btn").hover(function(){
        if ($(".wall").hasClass("active")) {
            $(".wall").removeClass("active")
            console.log("You won. You aren't completely worthless :D.")
        };
    });
    
} //end of function makeMap()




makeMap()
