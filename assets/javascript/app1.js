$(document).ready(() => {



    //Front page to explain the game 

    myMessage =

        'You have total 10 questions. <br>' +

        'Total time is 100 sec. <br>' +

        'Each question you have 10 sec to anwser. <br>' +

        'Good luck!';



    document.getElementById('message').innerHTML = myMessage;

    //let totalTime = 10;



    //start setup all question 

    i = 0;

    let score = 0;

    myQuestion = [

        ['How many provinces in Canada?', 'Seven', 'Eight', 'Nine', 'Ten', 'Ten'],

        ['Which is the largest province in Canada?', 'm', 'a', 'd', 'z', 'm'],

        ['Who was the first prime ministr of Canada?', 'Louis St.Laurent', 'Pierre Trudeau', 'Sir John A.Macdonald', 'Sir John Abbott', 'Sir John A.Macdonald'],

    ];

    //end setup question





    // Onclick start button

    $('#start').click(() => {

        // Question show

        $('#question').show(showQuestion);

    });

    //end Onclick







    function showQuestion() {



        //setTimeout(StopQuestion, 5000);

        //setup random number to display question

        let randomQuestion = Math.floor(Math.random() * myQuestion.length);

        //start display random question and answer

        document.getElementById('myLabel').innerHTML = myQuestion[randomQuestion][0];

        myForm.opt1.value = myQuestion[randomQuestion][1];

        myForm.opt2.value = myQuestion[randomQuestion][2];

        myForm.opt3.value = myQuestion[randomQuestion][3];

        myForm.opt4.value = myQuestion[randomQuestion][4];

        let correctAnswer = myQuestion[randomQuestion][5];



        //alert(myForm.opt1.value+' '+myForm.opt2.value+' '+myForm.opt3.value+' '+myForm.opt4.value+' Answer= '+correctAnswer);





        //alert(correctAnswer);

        //end random question and answer        





        // Set timer Function Start

        let countTimeLeft = 10;

        let countDownTimer = setInterval(function () {

            //alert('count down '+countTimeLeft);

            document.getElementById('countDown').innerHTML = countTimeLeft + ' second remaining';

            countTimeLeft -= 1;



            if (countTimeLeft <= -1) {

                clearInterval(countDownTimer);

                $('#countDown').show(countTimeLeft);

                $('#question').show(showQuestion);

            }

        }, 1500);



        //let countDownTimer = setInterval(myTimer,1000);

        // Messages and Start Button hide

        $('#message').hide();

        $('#start').hide();

        // End timer Function



        //Start compare answer

        $('#answerButton0').click(() => {

            if (myForm.opt1.value === correctAnswer) {

                console.log('Correct Answer= ' + correctAnswer + 'Your answer ' + myForm.opt1.value);

            } else {

                console.log('Wrong Answer= ' + correctAnswer + 'Your answer ' + myForm.opt1.value);

            }

            countTimeLeft = 0;

            //showQuestion();

        });



        $('#answerButton1').click(() => {

            //alert(correctAnswer);

           // alert(myForm.opt2.value);

            if (myForm.opt2.value === correctAnswer) {

                console.log('correct2');

            } else {

                console.log('wrong2');

            }

            countTimeLeft = 0;

           // showQuestion();

        });



        $('#answerButton2').click(() => {

            //alert(correctAnswer);

            //alert(myForm.opt3.value);

            if (myForm.opt3.value === correctAnswer) {

                console.log('correct3');

            } else {

                console.log('wrong3');

            }

            countTimeLeft = 0;

           // showQuestion();

        });



        $('#answerButton3').click(() => {

           // alert(correctAnswer);

           // alert(myForm.opt4.value);

            if (myForm.opt4.value === correctAnswer) {

                console.log('correct4');

            } else {

                console.log('wrong4');

            }

            countTimeLeft = 0;

           // showQuestion();

        });

        //end compare answer



        //Start next question when click

        $('#nxtbtn').click(() => {

            countTimeLeft = 0;

            showQuestion();

            //            for (i = 0; i < myQuestion.length; i++);

            //showQuestion()

            //  function addScore() {

            //alert('addscore');

            //alert(score);

            //if (correctAnswer === true) {

            //score++

            //document.getElementById('score').innerHTML = 'Score';

            //}

            //}

        })

        //End next question



    }

    //end showquestion function











})