import Book from './Book.js';
import Library from './Library.js';
import Screen from './Screen.js';

(function(){
    let library = new Library();
    let screen = new Screen();
    screen.init(library);
})();