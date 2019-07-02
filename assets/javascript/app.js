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
    myQuestion = [
        ['How many provinces in Canada?', 'Seven', 'Eight', 'Nine', 'Ten'],
        ['Which is the largest province in Canada?', 'm', 'a', 'd', 'z'],
        ['Who was the first prime ministr of Canada?', 'Louis St.Laurent', 'Pierre Trudeau', 'Sir John A.Macdonald', 'Sir John Abbott'],

    ];
    /*let questionTracker = [];
    let questionAmount = 3;
    for (i = 0; i < myQuestion.length; i++) {
        do {
            let randomQuestion = Math.floor(Math.random() * myQuestion.length);
        } while (existingQuestion());
        display.innerHTML += myQuestion[randomQuestion];
        questionTracker.push(randamQuestion);
        function existingQuestion() {
            for (i = 0; i < questionTracker.length; i++) {
                if (questionTracker[i] === randamQuestion) {
                    return true;
                }
            }
            return false;
        }
    }*/

    function showQuestion() {

        let randomQuestion = Math.floor(Math.random() * myQuestion.length);

        document.getElementById('myLabel').innerHTML = myQuestion[randomQuestion][0];
        myForm.opt1.value = myQuestion[randomQuestion][1];
        myForm.opt2.value = myQuestion[randomQuestion][2];
        myForm.opt3.value = myQuestion[randomQuestion][3];
        myForm.opt4.value = myQuestion[randomQuestion][4];

        //document.getElementById('myLabel').innerHTML = myQuestion[randomQuestion][randomAnswer];
        //myForm.opt1.value = myQuestion[i][1];
        //myForm.opt2.value = myQuestion[i][2];
        //myForm.opt3.value = myQuestion[i][3];
        //myForm.opt4.value = myQuestion[i][4];
    }

    $('#nxtbtn').click(() => {
        randam.shuffle(myQuestion);
        /*Math.floor(Math.random() * (myQuestion.length));*/
        document.getElementById('nxtbtn').innerHTML = myQuestion[0][0];


    });



});