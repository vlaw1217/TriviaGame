$(document).ready(() => {


    $('#nxtbtn').hide();
    $('#result').hide();
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

        ['Which is the largest province in Canada?', 'Quebec', 'Ontario', 'Nunavut', 'Manitoba', 'Quebec'],

        ['Who was the first prime ministr of Canada?', 'Louis St.Laurent', 'Pierre Trudeau', 'Sir John A.Macdonald', 'Sir John Abbott', 'Sir John A.Macdonald'],
        ["What is Canada's national animal?", 'The Polar Bear', 'Racoon', 'Moose', 'The Beaver', 'The Beaver'],

        ['What province has the most population in Candada?', 'British Columbia', 'Ontario', 'Quebec', 'Alberta', 'Ontario'],

        ['Which city was "Not" the cpatial city before Ottawa?', 'Edmonton', 'Kingston', 'Montreal', 'Toronto', 'Edmonton']
        
        ['When did Canada befcome a completely independent country?', '1864', '1967', '1770', '1867', '1867'],

        ['Where is the Rocky Mountains located?', 'Manitoba', 'British Columbia', ',Yukon', 'Saskatchewan', 'British Columbia']

        ['Which party is the Cannada current goverment?', 'Conservative', 'Green', 'Liberal', 'New Democratic', 'Liberal'],

        ['In 2019, which university is in the first ranking in Canada', 'Universith of Aberta', 'University of Toronto', 'University of Bristish Columbia', 'McGill University', 'University of Toronto'],
        
        ['The oldest bank in Canada is', 'Royal Bank of Canada(RBC)', 'Bank of Montreal(BMO)', 'Bank of Nova Scotia(Scotiabank)', 'Toronto-Dominion Bank (TD', 'BMO'],
        
        ['How old is Ontario?', '149', '150', '151', '152', '152'],
      
    

    ];

    //end setup question





    // Onclick start button

    $('#start').click(() => {
        $('#nxtbtn').show();

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
        /*document.getElementById('score').innerHTML = 'Score' + score;
      
        let score = 0;*/

            
            //}
          
            let score = 0;

            $('#answerButton1').click(() => {

                if (myForm.opt1.value === correctAnswer) {
                    score = score + 1;
                    console.log('Correct1')

                } else {

                    console.log('Wrong1')

                }

                countTimeLeft = 0;

                showQuestion();

            });

        
        
        
        
        $('#answerButton2').click(() => {
            
          
                //alert(correctAnswer);

                // alert(myForm.opt2.value);

                if (myForm.opt2.value === correctAnswer) {
                    score = score + 1;
                    console.log('correct2');

                } else {

                    console.log('wrong2');

                }

                countTimeLeft = 0;

                showQuestion();

            });



            $('#answerButton3').click(() => {

                alert(correctAnswer);

                alert(myForm.opt3.value);

                if (myForm.opt3.value === correctAnswer) {
                    score = score +1;
                    console.log('correct3');

                } else {

                    console.log('wrong3');

                }

                countTimeLeft = 0;

                showQuestion();

            });



            $('#answerButton4').click(() => {

                // alert(correctAnswer);

                // alert(myForm.opt4.value);

                if (myForm.opt4.value === correctAnswer) {
                    score = score + 1;
                    
                    
                    console.log('correct4');

                } else {

                    console.log('wrong4');

                }

                countTimeLeft = 0;

                showQuestion();

            });
            /*let score = 0;
        document.getElementById('score').innerHTML = 'Score ' + score;*/


            //end compare answer



            //Start next question when click

            $('#nxtbtn').click(() => {

                countTimeLeft = 0;

                showQuestion();

                document.getElementById('score').innerHTML = ('Score ' + score);

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