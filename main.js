$(document).ready(function(){
    $('#adicionar').click(function(){
        $('#listaDeTarefa').slideDown()
    })
    $('#cancelar').click(function(){
        $('#listaDeTarefa').slideUp(function(){
            $('#listaDeTarefa').empty();
        })
    })

    $('form').on('submit',function(e){
        e.preventDefault()
    
        const novaTarefa = $('#tarefa-nova').val()
        const bloco = $('<li>').text(novaTarefa)
        $('#listaDeTarefa').append(bloco)
    
        $('#tarefa-nova').val('')
       
    })
    $('#listaDeTarefa').on('click', 'li', function(){
       
        $(this).toggleClass('linha-em-cima')
    })
})




