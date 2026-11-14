'use strict';
const names = ['John', 'Paul', 'Jones'];

for(const name of names) {
    const li = document.createElement('li');
    li.innerHTML = name;
    document.querySelector('#target').appendChild(li);
}