/**
 * Created by admin on 2017/6/16.
 */
require('../css/index.css')
function component () {
    var element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());