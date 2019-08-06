$(document).ready(function () {

    $("#resetBtn").hide();
    $("#nextBtn").hide();


    $("#startButton").click(function () {
        $(this).hide();
        $("#message").hide();
        $("#resetBtn").show();
        $("#nextBtn").show();

        let seconds = 45;
        let timer;
        function myFunction() {
            if (seconds < 45) { // I want it to say 1:00, not 60
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
           
            
            document.getElementById("question").innerHTML = [randomQuestion[0]];
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
          
                $("button").click(function (){
                    if (this.value.trim() === correctAnswer.toString()) {
                        $("p").text("Correct");
                        correct++
                    } else {
                        (this.value.trim() !== correctAnswer.toString()
                        )
                        $("p").text("Wrong");
                        wrong++
                    }
                    document.getElementById("correct").innerHTML = "Total Correct = " + correct;
                    document.getElementById("wrong").innerHTML = "Total Wrong = " + wrong;
                });
        
        
            }
                question();
     

       
        $("#nextBtn").click(function () {  
            document.getElementById("question").innerHTML = '';
            document.getElementById("answerBtn").innerHTML = '';  
            question();
            $("#nextBtn").show();
        })
        $("#resetBtn").click(function () {
            locacion.reload()
        });
    });
});




