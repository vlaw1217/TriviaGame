$(document).ready(function () {

    $("#resetBtn").hide();
    $("#nextBtn").hide();


    $("#startButton").click(function () {
        $(this).hide();
        $("#message").hide();
        $("#resetBtn").show();
        $("#nextBtn").show();

        let seconds = 10;
        let timer;
        function myFunction() {
            if (seconds < 10) { // I want it to say 1:00, not 60
                document.getElementById("timer").innerHTML = seconds;
            }
            if (seconds > 0) { // so it doesn't go to -1
                seconds--;
            } else {
                clearInterval(timer);
                $("#question").hide();
                $("#answerBtn").hide();
                $("#resetBtn").hide();
                $("#nextBtn").hide();
                $("#msg").hide();
                $("#timeup").text("Times Up");
            }
        }

        if (!timer) {
            timer = window.setInterval(function () {
                myFunction();
            }, 1000); // every second
        }

        myQuestion = [

            ["How many provinces in Canada?", 'Seven', 'Eight', 'Nine', 'Ten', 'Ten'],

            ["Which is the largest province in Canada?", 'Quebec', 'Ontario', 'Nunavut', 'Manitoba', 'Quebec'],

            ["Who was the first prime minister of Canada?", 'Louis St.Laurent', 'Pierre Trudeau', 'Sir John A.Macdonald', 'Sir John Abbott', 'Sir John A.Macdonald'],

            ["What is Canada's national animal?", 'The Polar Bear', 'Racoon', 'Moose', 'The Beaver', 'The Beaver'],

            ["What province has the most population in Candada?", 'British Columbia', 'Ontario', 'Quebec', 'Alberta', 'Ontario'],

            ["Which city was 'NOT' the cpatial city before Ottawa?", 'Edmonton', 'Kingston', 'Montreal', 'Toronto', 'Edmonton']

            ["When did Canada befcome a completely independent country?", '1864', '1967', '1770', '1867', '1867'],

            ["Where is the Rocky Mountains located?", 'Manitoba', 'British Columbia', ',Yukon', 'Saskatchewan', 'British Columbia']

            ["Which party is the Cannada current goverment?", 'Conservative', 'Green', 'Liberal', 'New Democratic', 'Liberal'],

            ["In 2019, which university is in the first ranking in Canada?", 'University of Aberta', 'University of Toronto', 'University of Bristish Columbia', 'McGill University', 'University of Toronto'],

            ["The oldest bank in Canada is...", 'Royal Bank of Canada(RBC)', 'Bank of Montreal(BMO)', 'Bank of Nova Scotia(Scotiabank)', 'Toronto-Dominion Bank (TD)', 'Bank of Montreal(BMO)'],

            ["How old is Ontario?", "149", "150", "151", "152", "152"],

        ];

        
        function question() {
            //After random question in array
            let randomQuestion = myQuestion[Math.floor(Math.random() * myQuestion.length)];
           
            
            document.getElementById("question").innerHTML = randomQuestion[0];
            console.log(randomQuestion[0])
            let randomAnswer = randomQuestion.slice(1, 5)
            console.log(randomAnswer)
            let correctAnswer = randomQuestion.slice(5);
            console.log(correctAnswer)

            document.getElementById("answerBtn").innerHTML +=
                "<li><button value='" + randomAnswer[0] + "'>" + randomAnswer[0] + "</button></li >" +
                "<li><button value='" + randomAnswer[1] + "'>" + randomAnswer[1] + "</button></li>" +
                "<li><button value='" + randomAnswer[2] + "'>" + randomAnswer[2] + "</button></li>" +
                "<li><button value='" + randomAnswer[3] + "'>" + randomAnswer[3] + "</button></li>";


            let correct = 0;
            let wrong = 0;
            $("button").click(function () {
                if (this.value.trim() === correctAnswer.toString()) {
                    $("p").text("Correct");
                    correct++
                } else {
                    $("p").text("Wrong");
                    wrong++
                }
                document.getElementById("correct").innerHTML = "Total Correct = " + correct;
                document.getElementById("wrong").innerHTML = "Total Wrong = " + wrong;
            });

        }

        question()
        $("#nextBtn").click(function () {  
            document.getElementById("question").innerHTML = '';
            document.getElementById("answerBtn").innerHTML = '';  
            question();
            $("#nextBtn").show();
        })
        $("#resetBtn").click(function () {
            location.reload()
        });
    });
});




//////var scoreCount = 0;

////var correctAnswer;

////$("#answerButton1").hide();

////$("#answerButton2").hide();

////$("#answerButton3").hide();

////$("#answerButton4").hide();


//myQuestion = [


    //['How many provinces in Canada?', 'Seven', 'Eight', 'Nine', 'Ten', 'Ten'],

    //['Which is the largest province in Canada?', 'Quebec', 'Ontario', 'Nunavut', 'Manitoba', 'Quebec'],

    //['Who was the first prime ministr of Canada?', 'Louis St.Laurent', 'Pierre Trudeau', 'Sir John A.Macdonald', 'Sir John Abbott', 'Sir John A.Macdonald'],

    //["What is Canada's national animal?", 'The Polar Bear', 'Racoon', 'Moose', 'The Beaver', 'The Beaver'],

    //['What province has the most population in Candada?', 'British Columbia', 'Ontario', 'Quebec', 'Alberta', 'Ontario'],

    //['Which city was "Not" the cpatial city before Ottawa?', 'Edmonton', 'Kingston', 'Montreal', 'Toronto', 'Edmonton']

    //['When did Canada befcome a completely independent country?', '1864', '1967', '1770', '1867', '1867'],

    //['Where is the Rocky Mountains located?', 'Manitoba', 'British Columbia', ',Yukon', 'Saskatchewan', 'British Columbia']

    //['Which party is the Cannada current goverment?', 'Conservative', 'Green', 'Liberal', 'New Democratic', 'Liberal'],

    //['In 2019, which university is in the first ranking in Canada', 'Universith of Aberta', 'University of Toronto', 'University of Bristish Columbia', 'McGill University', 'University of Toronto'],

    //['The oldest bank in Canada is', 'Royal Bank of Canada(RBC)', 'Bank of Montreal(BMO)', 'Bank of Nova Scotia(Scotiabank)', 'Toronto-Dominion Bank (TD)', 'BMO'],

    //['How old is Ontario?', '149', '150', '151', '152', '152'],

//];


/*$(document).ready(() => {*/



    //$('#nxtbtn').hide();

    //$('#result').hide();

    //$('#form').hide();

    //Front page to explain the game


/*myMessage =


    'You have total 10 questions. <br>' +

    'Total time is 100 sec. <br>' +

    'Each question you have 10 sec to anwser. <br>' +

    'Good luck!';


document.getElementById('message').innerHTML = myMessage;*/


    //let totalTime = 10;


    //start setup all question

    ////i = 0;


    //let scoreCount = 0;


    //end setup question


    // Onclick start button



    //$('#start').click(() => {

        //$('#nxtbtn').show();

        //$('#form').show();

        //$("#answerButton1").show();

        //$("#answerButton2").show();

        //$("#answerButton3").show();

        //$("#answerButton4").show();

        //$('#start').text('Play Again');

        //$('#start').click(function () {

            //location.reload();

        //});

        //var counter = 20;

        //var interval = setInterval(function () {

            //counter--;

            // Display 'counter' wherever you want to display it.

            //if (counter <= 0) {

                //clearInterval(interval);

                //document.getElementById('myLabel').innerHTML = '';

                //$("#answerButton1").prop('value', '');

                //$("#answerButton2").prop('value', '');

                //////$("#answerButton3").prop('value', '');

                //////$("#answerButton4").prop('value', '');

                //////$('#countDown').text('');

                //////$("#answerButton1").remove();

                //////$("#answerButton2").remove();

                //////$("#answerButton3").remove();

                //////$("#answerButton4").remove();

                //////$('#nxtbtn').remove();

                //$('#start').prop('value','Play Again');

                //////document.getElementById('score').innerHTML = ('Your final score is.............' + scoreCount);

                ////return;

            ////} else {

                ////$('#countDown').text(counter);

                ////console.log("Timer --> " + counter);

            ////}

        ////}, 1000);



        // Question show

        ////document.getElementById('score').innerHTML = ('Score ' + scoreCount);

        // $('#question').show(showQuestion);

        ////showQuestion();


    ////});


    //end Onclick



    //function showQuestion() {


        //setTimeout(StopQuestion, 5000);

        //setup random number to display question


        //let randomQuestion = Math.floor(Math.random() * myQuestion.length);


        //start display random question and answer


        //document.getElementById('myLabel').innerHTML = myQuestion[randomQuestion][0];

        //$("#answerButton1").prop('value', myQuestion[randomQuestion][1]);

        //$("#answerButton2").prop('value', myQuestion[randomQuestion][2]);

        //$("#answerButton3").prop('value', myQuestion[randomQuestion][3]);

        //$("#answerButton4").prop('value', myQuestion[randomQuestion][4]);

        //document.getElementById('answerButton1').innerHTML = myQuestion[randomQuestion][1];

        // myForm.opt1.value = myQuestion[randomQuestion][1];



        //myForm.opt2.value = myQuestion[randomQuestion][2];



        // myForm.opt3.value = myQuestion[randomQuestion][3];



        // myForm.opt4.value = myQuestion[randomQuestion][4];


        ////correctAnswer = myQuestion[randomQuestion][5];


        ////$('#answerButton1').click(() => {

            ////if (myForm.opt1.value === correctAnswer) {

                ////scoreCount = scoreCount + 1;

                ////document.getElementById('score').innerHTML = ('Score ' + ////scoreCount);

                ////showQuestion();

            ////} else {

                ////console.log('Wrong1')

            ////}

        ////});


        ////$('#answerButton2').click(() => {

           //// if (myForm.opt2.value === correctAnswer) {

                ////scoreCount = scoreCount + 1;

                ////document.getElementById('score').innerHTML = ('Score ' + scoreCount);

                //showQuestion();

            //} else {

                //console.log('Wrong1')

            //}

        //});



        //$('#answerButton3').click(() => {

            //if (myForm.opt3.value === correctAnswer) {

                //scoreCount = scoreCount + 1;

                //document.getElementById('score').innerHTML = ('Score ' + scoreCount);

                //showQuestion();

            //} else {

                //console.log('Wrong1')

            //}

        //});


/*
        $('#answerButton4').click(() => {

            if (myForm.opt4.value === correctAnswer) {

                scoreCount = scoreCount + 1;

                document.getElementById('score').innerHTML = ('Score ' + scoreCount);

                showQuestion();

            } else {

                console.log('Wrong1')

            }

        });


        //Start next question when click



        $('#nxtbtn').click(() => {


            countTimeLeft = 0;


            showQuestion();


            document.getElementById('score').innerHTML = ('Score ' + scoreCount);



        })

        //End next question

    }

    //end showquestion function


/*})*/





