$(document).ready(() => {

    //Front page to explain the game  
    myMessage =
        'You have total 10 questions. <br>' +
        'Total time is 100 sec. <br>' +
        'Each question you have 10 sec to anwser. <br>' +
        'Good luck!';

    document.getElementById('message').innerHTML = myMessage;
    //let totalTime = 10;
    /*i = 0;
    let score = 0;
    myQuestion = [
        ['How many provinces in Canada?', 'Seven', 'Eight', 'Nine', 'Ten', 'Ten'],
        ['Which is the largest province in Canada?', 'm', 'a', 'd', 'z', 'm'],
        ['Who was the first prime ministr of Canada?', 'Louis St.Laurent', 'Pierre Trudeau', 'Sir John A.Macdonald', 'Sir John Abbott', 'Sir John A.Macdonald'],

    ];*/


    // Onclick start button
    $('#start').click(() => {
        TotolTime = 100;
        // Question show

        $('#question').show(showQuestion);


        function showQuestion() {
            //setTimeout(StopQuestion, 5000);

            let countTimeLeft = 10;
            let countDownTimer = setInterval(myTimer, 1000);
            function myTimer() {
                document.getElementById('countDown').innerHTML = countTimeLeft + ' second remaining';
                $('#countDown').show(countTimeLeft);

                countTimeLeft -= 1;

              
                    if (countTimeLeft <= -1){
                        for (t = 0; t <= -1; t++)
                        mytimer()
                    showQuestion()
                } else {
                     === 100
                    clearInterval(countDownTimer);
                }
            
                
                
            } /*1000);*/


            // Messages and Start Button hide
            $('#message').hide();
            $('#start').hide();


            i = 0;
            let score = 0;
            myQuestion = [
                ['How many provinces in Canada?', 'Seven', 'Eight', 'Nine', 'Ten', 'Ten'],
                ['Which is the largest province in Canada?', 'm', 'a', 'd', 'z', 'm'],
                ['Who was the first prime ministr of Canada?', 'Louis St.Laurent', 'Pierre Trudeau', 'Sir John A.Macdonald', 'Sir John Abbott', 'Sir John A.Macdonald'],

            ];

       
            randomQuestion = Math.floor(Math.random() * myQuestion.length);


            document.getElementById('myLabel').innerHTML = myQuestion[randomQuestion][0];
            //console.log(myQuestion[0][5]);

            myForm.opt1.value = myQuestion[randomQuestion][1];
            myForm.opt2.value = myQuestion[randomQuestion][2];
            myForm.opt3.value = myQuestion[randomQuestion][3];
            myForm.opt4.value = myQuestion[randomQuestion][4];

        }

        let correctAnswer = myQuestion[randomQuestion][5];

        $('#answerButton').click(() => {
            $('#nxtbtn').click(() => {
                for (i = 0; i < myQuestion.length; i++);
                showQuestion()

                function addScore() {
                    score++
                    document.getElementById('score').innerHTML = 'Score';
                }
            });

            //for (i = 0; i < myQuestion.length; i++)

            if (myForm.opt1.value === correctAnswer) {
                console.log('correct');
                showQuestion();
            }

            if (myForm.opt2.value === correctAnswer) {
                console.log('correct');
                showQuestion();
            }

            if (myForm.opt3.value === correctAnswer) {
                console.log('correct');
                showQuestion();
            }

            if (myForm.opt4.value === correctAnswer) {
                console.log('correct');
                showQuestion();

            }
            else {
                console.log('wrong');
                showQuestion();
            }
                
        });
        //} else {
        // console.log('wrong');
        //showQuestion();
        //}

        //});
        /* $('#answerButton1').click(() => {
             if (myForm.opt2.value === correctAnswer) {
                 console.log('correct');
                 showQuestion();*/

        /* } else {
            console.log('wrong');
            showQuestion();
       }
    });*/
        /*$('#answerButton2').click(() => {
            if (myForm.opt3.value === correctAnswer) {
                console.log('correct');
                showQuestion();*/

        /*} else {
            console.log('wrong');
            showQuestion();
        }
    });
    $('#answerButton3').click(() => {
        if (myForm.opt4.value === correctAnswer) {
            console.log('correct');
           
            showQuestion();
        } else {
            console.log('wrong');
            showQuestion();
        }
    });*/

        /* $('#nxtbtn').click(() => {
             for (i = 0; i < myQuestion.length; i++);
             showQuestion()
 
             function addScore() {
                 //alert('addscore');
                 //alert(score);
                 //if (correctAnswer === true) {
 
                 score++
                 document.getElementById('score').innerHTML = 'Score';
                 //}*/


    })

        



});

