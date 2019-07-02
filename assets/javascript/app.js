$(document).ready(() => {

    //Front page to explain the game  
    myMessage =
        'You have total 10 questions. <br>' +
        'Total time is 100 sec. <br>' +
        'Each question you have 10 sec to anwser. <br>' +
        'Good luck!';

    document.getElementById('message').innerHTML = myMessage;


    // Onclick start button
    $('#start').click(() => {
        // Question show
        $('#question').show(showQuestion);
        let countTimeLeft = 10;
        let countDownTimer = setInterval(function () {
            document.getElementById('timer').innerHTML = countTimeLeft + ' second remaining';
            countTimeLeft -= 1;
            if (countTimeLeft <= 0) {
                clearInterval(countDownTimer);
                $('#timer').show(countTimeLeft);

            }

        }, 1000);

        // Messages and Start Button hide
        $('#message').hide();
        $('#start').hide();

    });

    i = 0;
    myQuestion = [['How many provinces in Canada?', 'a', 'b', 'c', 'd'],
    ['Which is the largest province in Canada?', 'm', 'a', 'd', 'z'],
    
    
    ];
    /*let myQuestionsLength = myQuestions.length;*/
    function showQuestion() {
        document.getElementById('myLabel').innerHTML = myQuestion[0][0];
        myForm.opt1.value = myQuestion[i][1];
        myForm.opt2.value = myQuestion[i][2];
        myForm.opt3.value = myQuestion[i][3];
        myForm.opt4.value = myQuestion[i][4];
    }
    function changeQuestion() {
        i += 1;
        /*for (i; i < myQuestion.length; i++) {
            let randomQuestion = Math.floor(Math.random() * (myQuestion.length));*/
   
           
    }



});