
function mostrarTelefono() {
    document.querySelector('#phone').style.display = 'block';
}

function ocultarTelefono() {
    document.querySelector('#phone').style.display = 'none';
}

function añadirColor() {
    const opcionSi = document.querySelector('#option1').checked;
    const opcionNo = document.querySelector('#option2').checked;

    if ( opcionSi === true ) {
        document.querySelector('#si').classList.add('activated');
    } else {
        document.querySelector('#si').classList.remove('activated');
    }
    if ( opcionNo === true ) {
        document.querySelector('#no').classList.add('activated');
    } else {
        document.querySelector('#no').classList.remove('activated');
    }

}

function añadirColor2() {
    const opcion1 = document.querySelector('#option1').checked;
    const opcion2 = document.querySelector('#option2').checked;
    const opcion3 = document.querySelector('#option3').checked;
    const opcion4 = document.querySelector('#option4').checked;
    const opcion5 = document.querySelector('#option5').checked;

    if ( opcion1 === true ) {
        document.querySelector('#id1').classList.add('activated');
    } else {
        document.querySelector('#id1').classList.remove('activated');
    }
    if ( opcion2 === true ) {
        document.querySelector('#id2').classList.add('activated');
    } else {
        document.querySelector('#id2').classList.remove('activated');
    }
    if ( opcion3 === true ) {
        document.querySelector('#id3').classList.add('activated');
    } else {
        document.querySelector('#id3').classList.remove('activated');
    }
    if ( opcion4 === true ) {
        document.querySelector('#id4').classList.add('activated');
    } else {
        document.querySelector('#id4').classList.remove('activated');
    }
    if ( opcion5 === true ) {
        document.querySelector('#id5').classList.add('activated');
    } else {
        document.querySelector('#id5').classList.remove('activated');
    }
}