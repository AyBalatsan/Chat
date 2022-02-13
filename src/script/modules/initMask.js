import IMask from 'imask';

export default function initMask() {
    var element = document.querySelector('#field-phone');
    var maskOptions = {
    mask: '+{7}(000)000-00-00'
    };
    var mask = IMask(element, maskOptions);
}
