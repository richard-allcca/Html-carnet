const d = document;
const w = window;
const mq = '(min-width: 768px)';
const $jPnlCelular = d.getElementById('jPnlCelular');
const $jPnlEscritorio = d.getElementById('jPnlEscritorio');
const $jBtnPrint1 = d.getElementById('jBtnPrint1');
const $jBtnPrint2 = d.getElementById('jBtnPrint2');
const $data = d.getElementById('data');
const $data2 = d.getElementById('data2');
// pdf
const doc = new jsPDF();

let date = new Date().toLocaleDateString();
let time = new Date().toLocaleTimeString();

$data.innerHTML = `${date} - ${time}`;
$data2.innerHTML = `${date} - ${time}`;

d.addEventListener('click', (e) => {
   // if (e.target == $jBtnPrint) {
   // 	alert('Hello');
   // 	doc.save('test.pdf');
   // 	// doc.save("a4.pdf");
   // }

   if (e.target == $jBtnPrint1 || e.target == $jBtnPrint2) {
      // alert('Hello');
      w.print();
   }
});

function responsiveMedia() {
   let breakpoint = w.matchMedia(mq);

   const responsive = (e) => {
      if (e.matches) {
         // console.log("escritorio");
         $jPnlEscritorio.classList.remove('hide');
         $jPnlCelular.classList.add('hide');
      } else {
         // console.log('celular');
         $jPnlEscritorio.classList.add('hide');
         $jPnlCelular.classList.remove('hide');
      }
   };
   breakpoint.addEventListener('change', responsive);
   responsive(breakpoint);
}

responsiveMedia();
