var student = {
    name: "",
    type: "student"
  };
  
  document.addEventListener('DOMContentLoaded', contentLoaded); //здесь добавляется 
     //слушатель 'DOMContentLoaded', который запускает функцию contentLoaded, когда
     //вся страница загрузиться внутри память браузера.
  
  function contentLoaded(event) {
    document.getElementById('name').addEventListener("keyup", keyUp); //ф-ция
      //ищетв документе элемент 'name' и к нему добавляется слушатель "keyup", 
       //который говорит, что при нажатии клавиш запускается функция keyUp 
  }
  
  function keyUp(event) {    //функция запускает ф-цию calculateNumericOutput()
    calculateNumericOutput();
  }
  
  function calculateNumericOutput() { //ф-ция сохраняет изменяющееся значение в 'name'
                                        //в объекте student.name
    student.name = document.getElementById('name').value;
  
    var totalNameValue = 0; //дальше в цикле суммируется значение каждого символа
    for (var i = 0; i < student.name.length; i++) {
      totalNameValue += student.name.charCodeAt(i);
    }
  
    // Insert result into page //дальше выводится значение в элемент 'output'
    var output = "Total Numeric value of person's name is " + totalNameValue;
    document.getElementById('output').innerText = output;
  }
  