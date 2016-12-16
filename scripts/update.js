function update() {

    if (game) {

        for (var i = 0; i < 5; i++) {

            for (var o = 0; o < 3; o++) {

                tiles[i][o].update();

            }

        }

        //////////////////////////////////ONCLICK OR OUT OF RENDERING CONTEXT/////////////////
        if (tiles[0][0].y >= canvas.height || tiles[0][0].clicked || tiles[0][1].clicked || tiles[0][2].clicked) {

            //////////////////////////////////////IF OUT OF RENDERING CONTEXT AND NOT CLICKED/////////
            if (tiles[0][0].clicked != 1 && tiles[0][1].clicked != 1 && tiles[0][2].clicked != 1) {

                lose();

            }

            if (game) {


                ///////////////////////MAKE IT WORK ONLY AT 5 ROWS !!!!!!!!!//////////////
                newValue(0, gamemode);
                rows++;

                for (var i = 0; i <= 2; i++) {

                    tiles[0][i].clicked = 0;
                    tiles[0][i].y = tiles[4][i].y - canvas.height / 3;
                    tiles[5][i] = tiles[0][i];
                }


                for (var i = 0; i < 4; i++) {

                    tiles[i][0] = tiles[i + 1][0];
                    tiles[i][1] = tiles[i + 1][1];
                    tiles[i][2] = tiles[i + 1][2];

                }

                tiles[4][0] = tiles[5][0];
                tiles[4][1] = tiles[5][1];
                tiles[4][2] = tiles[5][2];

                //////////////SPEEED IT UP !/////////////////////

                speed += canvas.height / 45600;
            }
        }
    }
}
