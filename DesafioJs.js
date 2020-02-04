var link = "https://api.punkapi.com/v2/beers/random";

window.onload = function(){
  Swal.fire({
    title: 'CADASTRE-SE PARA RECEBER NOTIFICAÇÕES',
    showClass: {
      popup: 'animated fadeInDown faster'
    },
    hideClass: {
      popup: 'animated fadeOutUp faster'
    }
  })
}




$(document).ready(function(){
     $.ajax({
      url: link,
      type: 'get',
      dataType: 'json',
      success: function(data){
          console.log(data);
          $('#imagemum').attr('src',data[0].image_url);
          $('#nomeum').text(data[0].name);
          $('#dataum').text(data[0].first_brewed);
          $('#teorum').text(data[0].abv);
          $('#sloganum').text(data[0].tagline);
      },
      error : function(erro){
          console.log(erro);
      }
    })
})
$(document).ready(function(){
  $.ajax({
   url: link,
   type: 'get',
   dataType: 'json',
   success: function(data){
       console.log(data);
       
       $('#imagemdois').attr('src',data[0].image_url);
       $('#nomedois').text(data[0].name);
       $('#datadois').text(data[0].first_brewed);
       $('#teordois').text(data[0].abv);
       $('#slogandois').text(data[0].tagline);
   },
   error : function(erro){
       console.log(erro);
   }
 })
})
$(document).ready(function(){
  $.ajax({
   url: link,
   type: 'get',
   dataType: 'json',
   success: function(data){
       console.log(data);
       $('#imagemtres').attr('src',data[0].image_url);
       $('#nometres').text(data[0].name);
       $('#datatres').text(data[0].first_brewed);
       $('#teortres').text(data[0].abv);
       $('#slogantres').text(data[0].tagline);
   },
   error : function(erro){
       console.log(erro);
   }
 })
})
$(document).ready(function(){
  $.ajax({
   url: link,
   type: 'get',
   dataType: 'json',
   success: function(data){
       console.log(data);
       $('#imagemquatro').attr('src',data[0].image_url);
       $('#nomequatro').text(data[0].name);
       $('#dataquatro').text(data[0].first_brewed);
       $('#teorquatro').text(data[0].abv);
       $('#sloganquatro').text(data[0].tagline);
   },
   error : function(erro){
       console.log(erro);
   }
 })
})
$(document).ready(function(){
  $.ajax({
   url: link,
   type: 'get',
   dataType: 'json',
   success: function(data){
       console.log(data);
       $('#imagemcinco').attr('src',data[0].image_url);
       $('#nomecinco').text(data[0].name);
       $('#datacinco').text(data[0].first_brewed);
       $('#teorcinco').text(data[0].abv);
       $('#slogancinco').text(data[0].tagline);
   },
   error : function(erro){
       console.log(erro);
   }
 })
})

function oi(){
    Swal.mixin({
        input: 'text',
        confirmButtonText: 'Proximo &rarr;',
        showCancelButton: true,
        progressSteps: ['1', '2', '3']
      }).queue([
        {
          title: 'FAÇA SEU CADASTRO',
          text: 'DIGITE SEU NOME'
        },
        'DIGITE SEU E-MAIL',
        'DIGITE SUA IDADE'
      ]).then((result) => {
        if (result.value) {
          const answers = JSON.stringify(result.value)
          Swal.fire({
            title: 'CADASTRADO!',
            html: `
              Suas respostas:
              <pre><code>${answers}</code></pre>
            `,
            confirmButtonText: 'FINALIZAR'
          })
        }
      })
}




  
 
    
    
