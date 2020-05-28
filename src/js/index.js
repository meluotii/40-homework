import _ from 'lodash';
import $ from 'jquery';
import '../scss/index.scss';


function component() {
    const element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}
//JS
document.body.appendChild(component());
//jQuery
$('body').append(component());