// 2. Необходимо создать html-страницу с названием 2.html, в которой подключить файл 2.js (его тоже необходимо создать рядом с html-файлом). В js-файле необходимо создать следующий скрипт:

// Cоздать функцию greeting, которая принимает в качестве аргумента имя человека и выводит приветствие, используя переданное ей имя, в консоль.

// Необходимо у пользователя запросить имя и вызвать функцию greeting, передав туда полученное от пользователя значение.



function greeting(name) {
  var greetingMessage = 'Привет' + name + '!';
  return greetingMessage;
}

document.addEventListener('DOMContentLoaded', function() {
  var name = prompt('Введите ваше имя:');
  var greetingMessage = greeting(name);
  
  alert(greetingMessage);
});