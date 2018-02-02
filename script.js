console.log('script sourced');

$(document).ready(function() {
console.log('inJQ');
$('.redButton').click(addRed);
$('.blueButton').click(addBlue);
$('.greenButton').click(addGreen);
$('.yellowButton').click(addYellow);

});
var redCount = 0;
var blueCount = 0;
var greenCount = 0;
var yellowCount = 0;

function addRed() {
  redCount++;
  $('.newClass').append('<div class="redClass"></div>');
  var redOutput = $('#redBoxesOut');
  redOutput.empty();
  var redString = '<li>';
  redString += 'Red Count: ';
  redString += redCount;
  redString += '</li>';
  redOutput.append(redString);
}

function addBlue() {
  blueCount++;
  $('.newClass').append('<div class="blueClass"></div>');
  var blueOutput = $('#blueBoxesOut');
  blueOutput.empty();
  var blueString = '<li>';
  blueString += 'Blue Count: ';
  blueString += blueCount;
  blueString += '</li>';
  blueOutput.append(blueString);
}

function addGreen() {
  greenCount++;
  $('.newClass').append('<div class="greenClass"></div>');
  var greenOutput = $('#greenBoxesOut');
  greenOutput.empty();
  var greenString = '<li>';
  greenString += 'Green Count: ';
  greenString += greenCount;
  greenString += '</li>';
  greenOutput.append(greenString);
}

function addYellow() {
  yellowCount++;
  $('.newClass').append('<div class="yellowClass"></div>');
  var yellowOutput = $('#yellowBoxesOut');
  yellowOutput.empty();
  var yellowString = '<li>';
  yellowString += 'Yellow Count: ';
  yellowString += yellowCount;
  yellowString += '</li>';
  yellowOutput.append(yellowString);
}

function redCount() {
  var redOutput = $('#redBoxesOut');
  redOutput.empty();
  var redString = '<li>';
  redString += redCount;
  redString += '</li>';
  redOutput.append(redString);
}
