let current_sign = 'O';
let current_player = 'player O';
let result_field = [['','',''], ['','',''], ['','','']];
let main_field = document.getElementById('main_field');
let result = 0;

for (let i = 0; i < 3; i ++) {
    let field_row = document.createElement('tr');
    for (let j = 0; j < 3; j ++) {
      let field_cell = document.createElement('td');
      field_cell.className = 'square';
      field_cell.addEventListener('click',
                                  (function(row, column){return e => play(row, column, e);})(i, j));
      field_row.appendChild(field_cell);
    };
    main_field.appendChild(field_row);
}

function play(row, column, event) {
    if (event.target.innerHTML) {
        alert('Field already taken!')
    } else {
        current_sign = (current_sign == 'X' ? 'O' : 'X');
        current_player = (current_player == 'player X' ? 'player O' : 'player X');
        event.target.innerHTML = current_sign;
        result_field[row][column] = current_sign;
    };           
    for (let i = 0; i < 3; i ++) {
      if ( (result_field[i][0] != '' && result_field[i][0] == result_field[i][1] && result_field[i][0] == result_field[i][2]) ||
          (result_field[0][i] != '' && result_field[0][i] == result_field[1][i] && result_field[0][i] == result_field[2][i])
         ){
        result = 1;
      }
    };
    if ( (result_field[0][0] != '' && result_field[0][0] == result_field[1][1] && result_field[0][0] == result_field[2][2]) ||
          (result_field[0][2] != '' && result_field[0][2] == result_field[1][1] && result_field[0][2] == result_field[2][0])
         ){
    result = 1;
    };
    if(result) {
      setTimeout(function(){
        alert(current_player + ' won!')
        let squares = document.querySelectorAll('.square');
        for (square of squares) {
          square.innerHTML = '';
        };
        result_field = [['','',''], ['','',''], ['','','']];
        result = 0;
      }, 0);                         
    };
};


