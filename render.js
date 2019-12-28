// const electron = require("electron");
// const ipc = electron.ipcRenderer;
//const {ipcRenderer} = require("electron");

//создаем массив questions = [q1[type, question, requared, answers[ans1,...],ansmain,info], q2[...],...]
questions = [
  q1 = ['list','Форма собственности', 1, answers = ['Государственная',
    'иностранная',
    'смешанная без иностранного участия',
    'смешанная с иностранным участием',
    'частная'], 3, ''],
  q2 = ['textBox','Собственники', 1, 'Учреждение образования "Гродненский государственный университет имени Янки Купалы"']
]

// // получаем форму
// let form = document.forms.my; // <form name="questions"> element

// // получаем элемент
// let elem = form.element.one; // <input name="one"> element
// //alert(elem.value); // 1

questions.forEach(element => {
alert(element[1]);
  console.log(element[1]);  
});


const sendBtn = document.getElementById('send');
console.log(typeof(sendBtn));
console.log(sendBtn);
// sendBtn.ddEventListener( "click" , () => alert('Спасибо!'));
sendBtn.addEventListener('click', function() {
  //ipcRenderer.send('open-send-dialog');
  alert('Спасибо!');

})
// let data = "tra-ta-ta";
// document.getElementById("1").innerHTML=data;