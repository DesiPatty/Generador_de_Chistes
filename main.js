var btn = document.querySelector("button");
        var out = document.getElementById("output");
        
      
        btn.addEventListener("click", getWord);
       
        function getWord(){
         
          
          var theWord= [
            '¿Cuál es el último animal que subió al arca de Noé? El del-fin.',
            'Si se muere una pulga, ¿a dónde va? Al pulgatorio',
            'Sí los zombies se deshacen con el paso del tiempo ¿zombiodegradables?',
            '¿Cuál es el colmo de Aladdín? Tener mal genio.',
            'Había una vez un niño tan, tan, tan despistado que... ¡da igual, me he olvidado del chiste!',
            'Estás obsesionado con la comida, de verdad. ¿Qué dices croquetamente?',
            '¿Por qué las focas miran siempre hacia arriba? ¡Porque ahí están los focos!',
            '¿Qué le dice un pez a otro?¡Nada!',
            
          ];
    
          
          var wordNum = Math.floor(Math.random() * theWord.length);
          
         
          output.textContent = theWord[wordNum];
        }