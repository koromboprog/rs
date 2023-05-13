window.onload = function() {
    var sentenceDiv = document.getElementById('sentence');
    var generateButton = document.getElementById('generateButton');

    // Array of random sentences
    var randomSentences = [
        "Learn as if you will live forever, live like you will die tomorrow , تعلم كما لو كنت ستعيش إلى الأبد، عش كما لو كنت ستموت غدًا" ,
        "All our dreams can come true, if we have the courage to pursue them. يمكن أن تتحقق كل أحلامنا، إذا كانت لدينا الشجاعة لللسعى ورائها.",
        "When you have a dream, you’ve got to grab it and never let go.  عندما يكون لديك حلم، عليك أن تنتزعه ولا تتركه.",
        "The secret of getting ahead is getting started.  سر المضي قدمًا هو البدء.",
        "Be the sun of your solar system.  كن شمس النظام الشمسي الخاص بك.",
        "The best time to plant a tree was 20 years ago. The second best time is now. كان أفضل وقت لزرع شجرة قبل 20 عامًا. ثاني أفضل وقت هو الآن.",
        "Nothing is impossible. The word itself says ‘I’m possible!  لاشئ مستحيل. الكلمة نفسها تقول “أنا ممكن!"
    ];

    // Function to generate a random sentence
    function generateRandomSentence() {
        var randomIndex = Math.floor(Math.random() * randomSentences.length);
        var randomSentence = randomSentences[randomIndex];
        sentenceDiv.innerHTML = randomSentence;
    }

    // Generate a random sentence on button click
    generateButton.onclick = generateRandomSentence;
};