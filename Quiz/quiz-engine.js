document.addEventListener("DOMContentLoaded", function () {

  // 🔹 1. Get stored selections
  let cls = localStorage.getItem("quizClass");
  let subject = localStorage.getItem("quizSubject");
  let topic = localStorage.getItem("quizTopic");

  if (!cls || !subject || !topic) {
    window.location.href = "quiz.html";
    return;
  }

  // Normalize keys (very important)
  cls = cls.toLowerCase().trim();
  subject = subject.toLowerCase().trim();
  topic = topic.toLowerCase().trim();

  console.log("Stored values:", cls, subject, topic);

  // 🔹 2. Check if QUIZ_DATA exists
  if (typeof QUIZ_DATA === "undefined") {
    console.error("QUIZ_DATA is not loaded.");
    document.getElementById("quiz-container").innerHTML =
      "<p class='text-red-600 font-semibold'>Quiz data not loaded.</p>";
    return;
  }

  // 🔹 3. Debug each level
  if (!QUIZ_DATA[cls]) {
    console.error("Class not found:", cls);
    document.getElementById("quiz-container").innerHTML =
      "<p class='text-red-600 font-semibold'>Class not found.</p>";
    return;
  }

  if (!QUIZ_DATA[cls][subject]) {
    console.error("Subject not found:", subject);
    document.getElementById("quiz-container").innerHTML =
      "<p class='text-red-600 font-semibold'>Subject not found.</p>";
    return;
  }

  if (!QUIZ_DATA[cls][subject][topic]) {
    console.error("Topic not found:", topic);
    document.getElementById("quiz-container").innerHTML =
      "<p class='text-red-600 font-semibold'>Topic not found.</p>";
    return;
  }

const allQuestions = QUIZ_DATA[cls][subject][topic];

// Shuffle questions
const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());

// Select first 10
const questions = shuffled.slice(0, 10);

  const container = document.getElementById("quiz-container");

  // 🔹 4. Generate Questions
  questions.forEach((q, index) => {

    const questionBlock = document.createElement("div");
questionBlock.className =
  "mb-8 p-6 sm:p-8 bg-white rounded-2xl shadow-lg border border-gray-200";
    questionBlock.innerHTML = `
<p class="font-semibold text-lg mb-5 leading-relaxed">
        ${index + 1}. ${q.question}
      </p>

      <div class="space-y-2">
        ${q.options.map((option, i) => `
<label class="flex items-center gap-3 p-3 sm:p-4 rounded-xl border border-black hover:bg-gray-50 transition cursor-pointer">
            <input type="radio"
              name="question-${index}"
              value="${i}"
class="accent-orange-500 w-5 h-5 flex-shrink-0">
            <span>${option}</span>
          </label>
        `).join("")}
      </div>
    `;

    container.appendChild(questionBlock);
  });

  // 🔹 5. Submit Logic
  document.getElementById("submit-btn")
    .addEventListener("click", function () {

      let score = 0;

      questions.forEach((q, index) => {

        const selected = document.querySelector(
          `input[name="question-${index}"]:checked`
        );

        const allOptions = document.querySelectorAll(
          `input[name="question-${index}"]`
        );

        allOptions.forEach((optionInput) => {

          const parentLabel = optionInput.parentElement;
          const optionIndex = parseInt(optionInput.value);

          parentLabel.classList.remove("bg-green-100", "bg-red-100");

          // Highlight correct answer
if (optionIndex === q.answer) {
  parentLabel.classList.add("bg-orange-100", "border-orange-400");
}
          // Highlight wrong selection
          if (selected &&
              optionIndex === parseInt(selected.value) &&
              optionIndex !== q.answer) {
            parentLabel.classList.add("bg-red-100");
          }
        });

        if (selected &&
            parseInt(selected.value) === q.answer) {
          score++;
        }

      });

      const resultSection = document.getElementById("result-section");

      resultSection.classList.remove("hidden");
resultSection.innerHTML = `
  <p class="font-semibold text-lg mb-4">You scored ${score} out of ${questions.length}</p>
  <div class="flex gap-4 justify-center">
    <a href="#" id="retake-link" class="text-orange-500 underline hover:text-orange-600">Retake Quiz</a>
    <a href="quiz.html" id="back-classes" class="text-blue-500 underline hover:text-blue-600">Back to Classes</a>
  </div>
`;
document.getElementById("retake-link").addEventListener("click", function(e) {
  e.preventDefault();
  window.location.reload(); // Refreshes the page
});
      window.scrollTo({
        top: resultSection.offsetTop - 100,
        behavior: "smooth"
      });

    });

});
