  console.log("chargement addition.js...");

  window.ENI = window.ENI || {};


  function addition (a,b){
    return a + b;
  }


  window.ENI.afficheListe = function  (){
    var liste = ['A','B','C','D','E'];

    var ul = document.createElement("ul");
    for (var i; i < liste.length; i++){
      var li = document.createElement("li");
      li.textContent = liste[i];
      ul.appendChild(li);
    }

    return ul;

  }

