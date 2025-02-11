document.addEventListener("DOMContentLoaded", function () {
    const heartsContainer = document.querySelector(".hearts-container");

    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (Math.random() * 2 + 3) + "s";
        heart.style.fontSize = (Math.random() * 20 + 10) + "px";
        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    setInterval(createHeart, 100);


});


let noButtonClickCount = 0; // Contador para el botón "No"
let noButtonState = 0; // Estado actual del botón "No"

// Mostrar el gif inicial
document.getElementById('gifContainer').style.display = 'block';

document.getElementById('siBtn').addEventListener('click', function() {
    // Ocultar el gif triste y mostrar el gif feliz
    document.getElementById('sadGifContainer').style.display = 'none';
    document.getElementById('sadGifContainer1').style.display = 'none';
    document.getElementById('sadGifContainer2').style.display = 'none';
    document.getElementById('sadGifContainer3').style.display = 'none';
    document.getElementById('sadGifContainer4').style.display = 'none';
    document.getElementById('gifContainer').style.display = 'none';
    document.getElementById('happyGifContainer').style.display = 'block';

    // Ocultar los botones "Pregunta Sí" y "No "
    document.getElementById('question1').style.display = 'none';
    document.getElementById('siBtn').style.display = 'none';
    document.body.classList.add('bg-green');
    document.getElementById('noBtn').style.display = 'none';

    // Mostrar el mensaje específico
    document.getElementById('messageContainer').style.display = 'block';
    document.getElementById('messageContainer').innerHTML = '¡Ya sabia! jajaja';
    document.getElementById('question2').innerHTML = 'te veo el 21';
  
});


document.getElementById('noBtn').addEventListener('click', function() {
    switch (noButtonState) {
        case 0:

            document.getElementById('question1').style.display = 'none';
            document.getElementById('question2').innerHTML = '¿No me quieres?';


            // Primera vez haciendo clic en "No"
            document.getElementById('happyGifContainer').style.display = 'none';
            document.getElementById('gifContainer').style.display = 'none';
            document.getElementById('sadGifContainer').style.display = 'block';

            // Modificar el botón "No"
            document.getElementById('noBtn').innerHTML = '¿Estás segura?';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
          
            
            document.getElementById('siBtn').style.fontSize = '40px';
            document.getElementById('siBtn').style.padding = '20px 40px';
       
            
           

        
            noButtonClickCount++;
            noButtonState++;
            break;

        case 1:
            // Segunda vez haciendo clic en "No"

            document.getElementById('question1').style.display = 'none';
            document.getElementById('question2').innerHTML = '¿Ni migajas?';

            document.getElementById('noBtn').innerHTML = '¡¿Realmente estas segura?!';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.getElementById('sadGifContainer').style.display = 'none';
            document.getElementById('sadGifContainer2').style.display = 'block';

            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '50px';
            document.getElementById('siBtn').style.padding = '30px 50px';
        
            noButtonState++;
            break;

        case 2:
            document.getElementById('question2').innerHTML = '¿Ni un chorrito?';

            document.getElementById('noBtn').innerHTML = 'Estás segura de verdad, ¿eh?';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.getElementById('sadGifContainer').style.display = 'none';
            document.getElementById('sadGifContainer2').style.display = 'none';
            document.getElementById('sadGifContainer3').style.display = 'block';

            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '60px';
            document.getElementById('siBtn').style.padding = '40px 60px';
        
            noButtonState++;
            break;
        
        case 3:
            document.getElementById('question2').innerHTML = '¿Mejor ya ni voy a MTY?';   

            document.getElementById('noBtn').innerHTML = '¿Eres positvo?';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '70px';
            document.getElementById('siBtn').style.padding = '50px 70px';
        
            noButtonState++;
            break;
        case 4:
           
            document.getElementById('question2').innerHTML = '¿Cancelamos la cita?';   

            document.getElementById('noBtn').innerHTML = 'Di que si por favor?';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            document.getElementById('sadGifContainer').style.display = 'none';
            document.getElementById('sadGifContainer2').style.display = 'none';
            document.getElementById('sadGifContainer3').style.display = 'none';
            document.getElementById('sadGifContainer4').style.display = 'block';


            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '130';
            document.getElementById('siBtn').style.padding = '125px 140px';
         
            noButtonState++;
            break;
        case 5:
           
            document.getElementById('question2').innerHTML = 'Mejor chis de perro?';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '170px';
            document.getElementById('siBtn').style.padding = '160px 190px';

            noButtonState++;
            break;
        

        default:
            // Por si acaso, maneja cualquier otro caso aquí
            break;
    }
});



