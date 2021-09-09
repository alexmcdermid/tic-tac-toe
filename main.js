//init the data structure/ variables (can be used to reset)
//render transfering state variables to the dom
var t1 = document.getElementById('1');
var t2 = document.getElementById('2');
var t3 = document.getElementById('3');
var t4 = document.getElementById('4');
var t5 = document.getElementById('5');
var t6 = document.getElementById('6');
var t7 = document.getElementById('7');
var t8 = document.getElementById('8');
var t9 = document.getElementById('9');
var reset = document.getElementById('reset');
var turn = document.getElementById('turn');

var clicks = 1;
//todo create one event listener to handle clicks for board
//to do this we need to have all our data stored within JAVASCRIPT
//currently we are checking on the html to see if things should be done
//we want to create a data structure in JS and then update the html by using the data in javascript
//shouldn't be difficult could use an array or hashmap(just map in js)
//we then remove the checks on html and check the js data, we only have to access html to push updates 
    
function charSelector() {
    if (clicks%2 == 0)
    return 'o';
    else
    return 'x';
}

t1.addEventListener('click', function(clickEvent){
    clickEvent.preventDefault();
    if (t1.textContent !== '') return;
    t1.innerText = charSelector();
    clicks++;
    turn.innerText = charSelector()+" turn";
});

t2.addEventListener('click', function(clickEvent){
    clickEvent.preventDefault();
    if (t2.textContent !== '') return;
    t2.innerText = charSelector();
    clicks++;
    turn.innerText = charSelector()+" turn";
});

t3.addEventListener('click', function(clickEvent){
    clickEvent.preventDefault();
    if (t3.textContent !== '') return;
    t3.innerText = charSelector();
    clicks++;
    turn.innerText = charSelector()+" turn";
});

t4.addEventListener('click', function(clickEvent){
    clickEvent.preventDefault();
    if (t4.textContent !== '') return;
    t4.innerText = charSelector();
    clicks++;
    turn.innerText = charSelector()+" turn";
});

t5.addEventListener('click', function(clickEvent){
    clickEvent.preventDefault();
    if (t5.textContent !== '') return;
    t5.innerText = charSelector();
    clicks++;
    turn.innerText = charSelector()+" turn";
});

t6.addEventListener('click', function(clickEvent){
    clickEvent.preventDefault();
    if (t6.textContent !== '') return;
    t6.innerText = charSelector();
    clicks++;
    turn.innerText = charSelector()+" turn";
});

t7.addEventListener('click', function(clickEvent){
    clickEvent.preventDefault();
    if (t7.textContent !== '') return;
    t7.innerText = charSelector();
    clicks++;
    turn.innerText = charSelector()+" turn";
});

t8.addEventListener('click', function(clickEvent){
    clickEvent.preventDefault();
    if (t8.textContent !== '') return;
    t8.innerText = charSelector();
    clicks++;
    turn.innerText = charSelector()+" turn";
});

t9.addEventListener('click', function(clickEvent){
    clickEvent.preventDefault();
    if (t9.textContent !== '') return;
    t9.innerText = charSelector();
    clicks++;
    turn.innerText = charSelector()+" turn";
});

reset.addEventListener('click', function(clickEvent){
    clickEvent.preventDefault();
    t1.innerText = '';
    t2.innerText = '';
    t3.innerText = '';
    t4.innerText = '';
    t5.innerText = '';
    t6.innerText = '';
    t7.innerText = '';
    t8.innerText = '';
    t9.innerText = '';
    clicks = 1;
    turn.innerText = charSelector()+" turn";
});



