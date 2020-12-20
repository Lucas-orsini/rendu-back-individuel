const urlParams = new URLSearchParams(window.location.search);
let idQuestion = urlParams.get('sondage')

$.ajax({
    method: "GET",
    url: "http://localhost/AjaxPHP/public/?page=sondage",
    dataType: "json",
    headers: {
        'Accept': 'application/json'
    },
    success: function (res) {
        for (i = 0; i < res.length; i++) {
            if (res[i].id === idQuestion) {
                render(res[i])
            }//on récupère juste le sondage correspondant au paramètre url
        }
    },
    error: function (res, status, err) {
        console.log(err)
    },
})//requete qui récupère tous les sondages (SondageController)


function render(sondage) {
    $('.title').text(sondage.titre)

    sondage.questions.forEach(element => {//on parcourt les questions et les affichent
        $(".questionContent").append(`<div class="${element.id} questions"><h2>${element.titre}</h2></div>`)
        let vote = 0
        console.log(element)
        element.reponses.forEach(elem => {
            vote += parseInt(elem.vote)
        })
        element.reponses.forEach(ele => {//on parcourt les réponses et les affichent
            $(`.${element.id}`).append(`<input type="radio" class="reponse" id="${ele.id}" name="${element.id}"><label for="${ele.id}">${ele.reponse}</label>`)
            $(`.${element.id}`).append(` (${Math.round((ele.vote / vote)*100)}%)<br><br>`)
        })
    });
    $(".questionContent").append('<button onclick="end()">envoyer</button>')

}//affichage

function end() {
    let answered = [];
    let allAnswers = document.getElementsByClassName("reponse")
    for (i = 0; i < allAnswers.length; i++) {
        if (allAnswers[i].checked === true) {
            answered.push(parseInt(allAnswers[i].id))
        }
    }//on check quelles réponses sont selectionné
    console.log(answered)
    $.ajax({
        url: "http://localhost/AjaxPHP/public/?page=sondage",
        method: 'POST',
        data:{
            item: answered,
        },
        dataType: "json",
        success: function (response) {
            console.log(response)
        },
        error: function(response, err){
            console.log(err)
        }
    })//requete au controller pour envoyer les réponses choisies
    window.location.href = "http://localhost/AjaxPHP/public/?page=home"

}

let timer = parseInt($('.timer').text())

function time(sec) {

    setTimeout(() => {
        sec--
        if (sec === 0) {
            window.location.href = "http://localhost/AjaxPHP/public/?page=home"
        } else {
            $('.timer').html(sec)
            time(sec)
        }
    }, 1000)
}//fonction recursive pour faire un timer qui s'update chaque seconde

time(timer)