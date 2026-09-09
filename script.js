// قائمة الكلمات المستخرجة من الصور المرفقة
const wordsList = [
    // كلمات مذكر (Masculin)
    { word: "thé", gender: "m", article: "Le", meaning: "شاي" },
    { word: "café", gender: "m", article: "Le", meaning: "قهوة" },
    { word: "jus", gender: "m", article: "Le", meaning: "عصير" },
    { word: "lait", gender: "m", article: "Le", meaning: "حليب" },
    { word: "problème", gender: "m", article: "Le", meaning: "مشكلة" },
    { word: "sucre", gender: "m", article: "Le", meaning: "سكر" },
    { word: "livre", gender: "m", article: "Le", meaning: "كتاب" },
    { word: "cahier", gender: "m", article: "Le", meaning: "دفتر" },
    { word: "stylo", gender: "m", article: "Le", meaning: "قلم حبر" },
    { word: "exercice", gender: "m", article: "L'", meaning: "تمرين" },
    { word: "texte", gender: "m", article: "Le", meaning: "نص" },
    { word: "séminaire", gender: "m", article: "Le", meaning: "ندوة" },
    { word: "outil", gender: "m", article: "L'", meaning: "أداة" },
    { word: "copain", gender: "m", article: "Le", meaning: "صديق" },
    { word: "ami", gender: "m", article: "L'", meaning: "صديق" },
    { word: "monde", gender: "m", article: "Le", meaning: "عالم" },
    { word: "travail", gender: "m", article: "Le", meaning: "عمل" },
    { word: "emploi", gender: "m", article: "L'", meaning: "عمل / وظيفة" },
    { word: "site", gender: "m", article: "Le", meaning: "موقع" },
    { word: "arbre", gender: "m", article: "L'", meaning: "شجرة" },
    { word: "essai", gender: "m", article: "L'", meaning: "تجربة" },
    { word: "roman", gender: "m", article: "Le", meaning: "رواية" },
    { word: "siècle", gender: "m", article: "Le", meaning: "قرن" },
    { word: "concert", gender: "m", article: "Le", meaning: "حفلة" },
    { word: "résultat", gender: "m", article: "Le", meaning: "نتيجة" },
    { word: "endroit", gender: "m", article: "L'", meaning: "مكان" },
    { word: "lieu", gender: "m", article: "Le", meaning: "مكان" },
    { word: "accident", gender: "m", article: "L'", meaning: "حادث" },
    { word: "bruit", gender: "m", article: "Le", meaning: "ضجة" },
    { word: "jour", gender: "m", article: "Le", meaning: "يوم" },
    { word: "cadeau", gender: "m", article: "Le", meaning: "هدية" },
    { word: "document", gender: "m", article: "Le", meaning: "وثيقة" },
    { word: "page", gender: "m", article: "La", meaning: "صفحة (استثناء)" },
    { word: "parapluie", gender: "m", article: "Le", meaning: "مظلة" },
    { word: "incendie", gender: "m", article: "Le", meaning: "حريق" },
    { word: "génie", gender: "m", article: "Le", meaning: "عبقرية" },
    { word: "silence", gender: "m", article: "Le", meaning: "صمت" },
    { word: "stade", gender: "m", article: "Le", meaning: "ملعب" },
    { word: "comité", gender: "m", article: "Le", meaning: "لجنة" },
    { word: "été", gender: "m", article: "L'", meaning: "صيف" },
    { word: "côté", gender: "m", article: "Le", meaning: "جانب" },
    { word: "pamplemousse", gender: "m", article: "Le", meaning: "جريپ فروت" },
    { word: "musée", gender: "m", article: "Le", meaning: "متحف" },
    { word: "lycée", gender: "m", article: "Le", meaning: "ثانوية" },
    { word: "père", gender: "m", article: "Le", meaning: "أب" },
    { word: "frère", gender: "m", article: "Le", meaning: "أخ" },
    { word: "ministère", gender: "m", article: "Le", meaning: "وزارة" },
    { word: "mystère", gender: "m", article: "Le", meaning: "سر / غموض" },

    // كلمات مؤنث (Féminin)
    { word: "mère", gender: "f", article: "La", meaning: "أم" },
    { word: "sœur", gender: "f", article: "La", meaning: "أخت" },
    { word: "femme", gender: "f", article: "La", meaning: "امرأة" },
    { word: "tante", gender: "f", article: "La", meaning: "عمة / خالة" },
    { word: "fleur", gender: "f", article: "La", meaning: "زهرة" },
    { word: "remarque", gender: "f", article: "La", meaning: "ملاحظة" },
    { word: "lampe", gender: "f", article: "La", meaning: "مصباح" },
    { word: "herbe", gender: "f", article: "L'", meaning: "عشب" },
    { word: "voix", gender: "f", article: "La", meaning: "صوت" },
    { word: "histoire", gender: "f", article: "L'", meaning: "تاريخ / قصة" },
    { word: "revue", gender: "f", article: "La", meaning: "مجلة" },
    { word: "œuvre", gender: "f", article: "L'", meaning: "عمل فني" },
    { word: "amie", gender: "f", article: "L'", meaning: "صديقة" },
    { word: "copine", gender: "f", article: "La", meaning: "صديقة" },
    { word: "vie", gender: "f", article: "La", meaning: "حياة" },
    { word: "semaine", gender: "f", article: "La", meaning: "أسبوع" },
    { word: "période", gender: "f", article: "La", meaning: "فترة" },
    { word: "porte", gender: "f", article: "La", meaning: "باب" },
    { word: "fenêtre", gender: "f", article: "La", meaning: "نافذة" },
    { word: "chambre", gender: "f", article: "La", meaning: "غرفة" },
    { word: "école", gender: "f", article: "L'", meaning: "مدرسة" },
    { word: "règle", gender: "f", article: "La", meaning: "قاعدة / مسطرة" },
    { word: "grammaire", gender: "f", article: "La", meaning: "قواعد" },
    { word: "lettre", gender: "f", article: "La", meaning: "رسالة / حرف" },
    { word: "aide", gender: "f", article: "L'", meaning: "مساعدة" },
    { word: "mer", gender: "f", article: "La", meaning: "بحر" },
    { word: "place", gender: "f", article: "La", meaning: "مكان / ساحة" },
    { word: "opinion", gender: "f", article: "L'", meaning: "رأي" },
    { word: "rue", gender: "f", article: "La", meaning: "شارع" },
    { word: "route", gender: "f", article: "La", meaning: "طريق" },
    { word: "voisine", gender: "f", article: "La", meaning: "جارة" },
    { word: "cousine", gender: "f", article: "La", meaning: "ابنة عم / خال" },
    { word: "région", gender: "f", article: "La", meaning: "منطقة" },
    { word: "robe", gender: "f", article: "La", meaning: "فستان" },
    { word: "nuit", gender: "f", article: "La", meaning: "ليلة" },
    { word: "pluie", gender: "f", article: "La", meaning: "مطر" },
    { word: "planète", gender: "f", article: "La", meaning: "كوكب" },
    { word: "chose", gender: "f", article: "La", meaning: "شيء" },
    { word: "cause", gender: "f", article: "La", meaning: "سبب" },
    { word: "photo", gender: "f", article: "La", meaning: "صورة" },
    { word: "image", gender: "f", article: "L'", meaning: "صورة" },
    { word: "moto", gender: "f", article: "La", meaning: "دراجة نارية" },
    { word: "radio", gender: "f", article: "La", meaning: "راديو" },
    { word: "fin", gender: "f", article: "La", meaning: "نهاية" },
    { word: "eau", gender: "f", article: "L'", meaning: "ماء" },
    { word: "cour", gender: "f", article: "La", meaning: "باحة / ساحة" },
    { word: "couleur", gender: "f", article: "La", meaning: "لون" },
    { word: "leçon", gender: "f", article: "La", meaning: "درس" },
    { word: "erreur", gender: "f", article: "L'", meaning: "خطأ" },
    { word: "peau", gender: "f", article: "La", meaning: "جلد" },
    { word: "maison", gender: "f", article: "La", meaning: "منزل" },
    { word: "chemise", gender: "f", article: "La", meaning: "قميص" },
    { word: "matière", gender: "f", article: "La", meaning: "مادة" },
    { word: "chanteuse", gender: "f", article: "La", meaning: "مغنية" },
    { word: "année", gender: "f", article: "L'", meaning: "سنة" },
    { word: "personne", gender: "f", article: "La", meaning: "شخص" },
    { word: "classe", gender: "f", article: "La", meaning: "صف" },
    { word: "fille", gender: "f", article: "La", meaning: "فتاة / ابنة" },
    { word: "cigarette", gender: "f", article: "La", meaning: "سيجارة" },
    { word: "action", gender: "f", article: "L'", meaning: "حدث / عمل" },
    { word: "activité", gender: "f", article: "L'", meaning: "نشاط" },
    { word: "télévision", gender: "f", article: "La", meaning: "تلفاز" },
    { word: "réflexion", gender: "f", article: "La", meaning: "تفكير / انعكاس" },
    { word: "habitude", gender: "f", article: "L'", meaning: "عادة" },
    { word: "étude", gender: "f", article: "L'", meaning: "دراسة" },
    { word: "limonade", gender: "f", article: "La", meaning: "عصير ليمون" },
    { word: "élégance", gender: "f", article: "L'", meaning: "أناقة" },
    { word: "patience", gender: "f", article: "La", meaning: "صبر" },
    { word: "voiture", gender: "f", article: "La", meaning: "سيارة" },
    { word: "mesure", gender: "f", article: "La", meaning: "قياس" },
    { word: "boulangerie", gender: "f", article: "La", meaning: "مخبز" }
];

let shuffledQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    shuffledQuestions = [...wordsList].sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("quiz-box").style.display = "block";
    document.getElementById("score-box").style.display = "none";
    showQuestion();
}

function showQuestion() {
    resetState();
    let q = shuffledQuestions[currentQuestionIndex];
    document.getElementById("word-text").innerText = q.word;
    document.getElementById("word-meaning").innerText = q.meaning ? `الترجمة: ${q.meaning}` : '';
    
    let progressPercent = ((currentQuestionIndex) / shuffledQuestions.length) * 100;
    document.getElementById("progress").style.width = `${progressPercent}%`;
}

function resetState() {
    document.getElementById("feedback").innerText = "";
    document.getElementById("feedback").className = "feedback";
    document.getElementById("options").style.display = "grid";
    document.getElementById("next-btn").style.display = "none";
}

function checkAnswer(selectedGender) {
    let q = shuffledQuestions[currentQuestionIndex];
    let feedbackEl = document.getElementById("feedback");

    if (selectedGender === q.gender) {
        score++;
        feedbackEl.innerText = `إجابة صحيحة! 🎉 (${q.article} ${q.word})`;
        feedbackEl.className = "feedback correct";
    } else {
        let correctGenderText = q.gender === 'm' ? 'مذكر (Masculin)' : 'مؤنث (Féminin)';
        feedbackEl.innerText = `إجابة خاطئة ❌! الصحيح هو: ${correctGenderText} (${q.article} ${q.word})`;
        feedbackEl.className = "feedback incorrect";
    }

    document.getElementById("options").style.display = "none";
    
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
        document.getElementById("next-btn").style.display = "block";
    } else {
        setTimeout(showScore, 2000);
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    showQuestion();
}

function showScore() {
    document.getElementById("quiz-box").style.display = "none";
    document.getElementById("score-box").style.display = "block";
    document.getElementById("score-text").innerText = `${score} / ${shuffledQuestions.length}`;
}

function restartQuiz() {
    startQuiz();
}

window.onload = startQuiz;
