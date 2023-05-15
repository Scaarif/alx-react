import $ from 'jquery';
import _ from 'lodash';

const paragraphs = '<p>Holberton Dashboard</p><p>Dashboard data for the students</p>';
$('body').append(paragraphs);
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

let count = 0;

function updateCounter() {
  count++;
  $('#count').text(`${count} clicks on the button`);
}

$('button').on('click', _.debounce(updateCounter, 250));
