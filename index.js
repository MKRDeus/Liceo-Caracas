
const btnIngreso = document.querySelector('#ingresar');
const subMenuIngreso = document.querySelector('#sub-ingreso');

btnIngreso.addEventListener("click", function () {
    subMenuIngreso.classList.remove('hide');
    subMenuIngreso.classList.add('show');
})