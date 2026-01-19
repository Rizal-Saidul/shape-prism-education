// Array berisi semua pertanyaan dalam quiz
      const questionData = [
        {
          id: "q1",
          text: "Apa yang dimaksud dengan prisma?",
          options: {
            a: "Bangun datar dua dimensi dengan sisi sejajar",
            b: "Bangun ruang 3D dengan dua alas kongruen yang sejajar dan sisi tegak",
            c: "Bangun ruang yang hanya memiliki satu alas segitiga",
            d: "Bangun datar dengan keliling sama dengan tinggi",
          },
          correct: "b",
        },
        {
          id: "q2",
          text: 'Apa yang dimaksud dengan "kongruen" dalam konteks prisma?',
          options: {
            a: "Bentuk yang berbeda tetapi memiliki ukuran yang sama",
            b: "Bentuk yang lebih besar dari yang lain",
            c: "Bentuk yang sama persis dan sebangun (identik)",
            d: "Istilah untuk alas yang melengkung",
          },
          correct: "c",
        },
        {
          id: "q3",
          text: "Jika alas prisma berbentuk segilima, maka prisma tersebut disebut...",
          options: {
            a: "Prisma segitiga",
            b: "Prisma segiempat",
            c: "Prisma segilima",
            d: "Prisma segienam",
          },
          correct: "c",
        },
        {
          id: "q4",
          text: "Rusuk prisma adalah...",
          options: {
            a: "Garis pertemuan antara dua sisi prisma",
            b: "Bidang datar yang membentuk permukaan prisma",
            c: "Sudut yang terbentuk antara dua rusuk",
            d: "Jarak dari alas ke tutup prisma",
          },
          correct: "a",
        },
        {
          id: "q5",
          text: "Apa perbedaan antara diagonal ruang dan diagonal bidang?",
          options: {
            a: "Diagonal ruang lebih pendek dari diagonal bidang",
            b: "Diagonal ruang menghubungkan titik berlawanan dalam prisma, diagonal bidang hanya pada satu sisi",
            c: "Tidak ada perbedaan, hanya nama berbeda",
            d: "Diagonal ruang hanya ada pada prisma miring",
          },
          correct: "b",
        },
        {
          id: "q6",
          text: "Manakah yang bukan sifat umum prisma?",
          options: {
            a: "Memiliki dua alas yang sejajar dan kongruen",
            b: "Sisi tegaknya berupa sisi datar atau sisi lengkung",
            c: "Memiliki satu alas dan satu titik puncak",
            d: "Jumlah rusuk bergantung pada bentuk alas",
          },
          correct: "c",
        },
        {
          id: "q7",
          text: "Sudut antara sisi tegak dan alas pada prisma tegak adalah...",
          options: {
            a: "Sudut siku-siku (90°)",
            b: "Sudut tumpul (lebih dari 90°)",
            c: "Sudut lancip (kurang dari 90°)",
            d: "Bervariasi tergantung bentuk alas",
          },
          correct: "a",
        },
        {
          id: "q8",
          text: "Berapa banyak sisi yang dimiliki prisma segiempat?",
          options: {
            a: "4 sisi",
            b: "5 sisi",
            c: "6 sisi",
            d: "6 sisi (2 alas + 4 sisi tegak)",
          },
          correct: "d",
        },
        {
          id: "q9",
          text: "Prisma segitiga memiliki berapa rusuk?",
          options: {
            a: "6 rusuk",
            b: "8 rusuk",
            c: "9 rusuk",
            d: "9 rusuk (3 alas + 3 tutup + 3 tegak)",
          },
          correct: "d",
        },
        {
          id: "q10",
          text: "Rumus volume prisma secara umum adalah...",
          options: {
            a: "V = Luas Alas × Tinggi Prisma",
            b: "V = Keliling Alas × Tinggi Prisma",
            c: "V = (Luas Alas + Luas Tutup) × Tinggi",
            d: "V = Luas Alas × Luas Tutup × Tinggi",
          },
          correct: "a",
        },
      ];

      // Penjelasan untuk setiap pertanyaan
      const explanations = {
        q1: "Prisma adalah bangun ruang 3D dengan dua alas kongruen (sama persis) yang sejajar dan sisi tegak yang menghubungkannya.",
        q2: "Kongruen berarti bentuk dan ukuran yang sama persis, bukan hanya mirip.",
        q3: "Nama prisma ditentukan dari bentuk alasnya. Alas segilima = prisma segilima.",
        q4: "Rusuk adalah garis pertemuan antara dua sisi. Berbeda dengan sisi (bidang) dan sudut (pertemuan rusuk).",
        q5: "Diagonal ruang menghubungkan titik sudut berlawanan dalam ruang 3D, sedangkan diagonal bidang hanya pada permukaan 2D.",
        q6: 'Ciri "satu alas dan satu titik puncak" adalah sifat limas, bukan prisma.',
        q7: "Pada prisma tegak, sisi tegak selalu membentuk sudut 90° dengan alas.",
        q8: "Prisma segiempat: 2 alas segiempat + 4 sisi tegak = 6 sisi total.",
        q9: "Prisma segitiga: 3 rusuk alas + 3 rusuk tutup + 3 rusuk vertikal = 9 rusuk.",
        q10: "Rumus umum volume prisma adalah Luas Alas × Tinggi Prisma, berlaku untuk semua jenis prisma.",
      };
      function renderQuestions() {
        const examContainer = document.getElementById("exam-container");
        let html = "";

        questionData.forEach((question, index) => {
          html += `
                    <div class="exam-question">
                        <div class="question-header">
                            <span class="question-number">${index + 1}</span>
                            <span class="question-text">${question.text}</span>
                        </div>
                        <div class="question-options">
                `;

          // Loop untuk setiap opsi jawaban
          Object.entries(question.options).forEach(([key, value]) => {
            html += `
                        <label class="option">
                            <input type="radio" name="${question.id}" value="${key}">
                            <span>${value}</span>
                        </label>
                    `;
          });

          html += `
                        </div>
                        <div class="feedback-area" id="feedback-${question.id}"></div>
                    </div>
                `;
        });

        examContainer.innerHTML = html;

        // Tambah event listener ke setiap radio button
        document.querySelectorAll('input[type="radio"]').forEach((radio) => {
          radio.addEventListener("change", function () {
            showFeedback(this.name, this.value);
          });
        });
      }
      function showFeedback(questionId, selectedValue) {
        const feedbackArea = document.getElementById(`feedback-${questionId}`);
        const question = questionData.find((q) => q.id === questionId);

        if (!feedbackArea || !question) return;

        const isCorrect = selectedValue === question.correct;
        const correctOptionKey = question.correct;
        const correctOptionText = question.options[correctOptionKey];

        feedbackArea.classList.add("show");

        if (isCorrect) {
          feedbackArea.classList.remove("incorrect");
          feedbackArea.classList.add("correct");
          feedbackArea.innerHTML = `
                    <div class="feedback-text">✅ Jawaban Benar!</div>
                    <div class="feedback-explanation">${explanations[questionId]}</div>
                `;
        } else {
          feedbackArea.classList.remove("correct");
          feedbackArea.classList.add("incorrect");
          feedbackArea.innerHTML = `
                    <div class="feedback-text">❌ Jawaban Salah</div>
                    <div class="feedback-explanation">
                        <strong>Penjelasan:</strong> ${explanations[questionId]}<br>
                        <strong>Jawaban yang benar:</strong> ${correctOptionText}
                    </div>
                `;
        }
      }
      function checkAnswers() {
        let score = 0;
        const results = {};
        let unansweredCount = 0;

        // Loop setiap pertanyaan dan cek jawabannya
        questionData.forEach((question) => {
          const selectedAnswer = document.querySelector(
            `input[name="${question.id}"]:checked`
          );

          if (!selectedAnswer) {
            results[question.id] = { answered: false };
            unansweredCount++;
          } else {
            const isCorrect = selectedAnswer.value === question.correct;
            results[question.id] = { answered: true, isCorrect };

            if (isCorrect) {
              score++;
            }
          }
        });

        // Periksa apakah ada pertanyaan yang belum dijawab
        if (unansweredCount > 0) {
          alert(`⚠️ Ada ${unansweredCount} pertanyaan yang belum dijawab!`);
          return;
        }

        // Disable semua input setelah submit
        document.querySelectorAll('input[type="radio"]').forEach((radio) => {
          radio.disabled = true;
        });
        document.getElementById("submit-exam").disabled = true;

        // Tampilkan hasil
        showResults(score, results);
      }
      function showResults(score, results) {
        const percentage = Math.round((score / questionData.length) * 100);
        const resultPanel = document.getElementById("results-panel");

        // Update skor
        document.getElementById("score-number").textContent = score;
        document.getElementById("percentage").textContent = `${percentage}%`;

        // Tentukan feedback berdasarkan skor
        const feedbackDiv = document.getElementById("results-feedback");
        let feedbackClass = "needs-improvement";
        let feedbackText = "";

        if (percentage === 100) {
          feedbackClass = "excellent";
          feedbackText =
            "🏆 SEMPURNA! Anda menguasai materi prisma dengan sangat baik!";
        } else if (percentage >= 80) {
          feedbackClass = "excellent";
          feedbackText =
            "🎉 Luar Biasa! Pemahaman Anda tentang prisma sangat baik!";
        } else if (percentage >= 60) {
          feedbackClass = "good";
          feedbackText = "👍 Bagus! Anda sudah memahami sebagian besar materi.";
        } else {
          feedbackClass = "fair";
          feedbackText =
            "📚 Terus belajar! Pelajari kembali konsep-konsep dasar prisma.";
        }

        feedbackDiv.className = `results-feedback ${feedbackClass}`;
        feedbackDiv.innerHTML = feedbackText;

        // Tampilkan detail hasil
        showDetailedResults(results);

        // Tampilkan rekomendasi
        showRecommendations(percentage);

        // Tampilkan panel hasil
        resultPanel.style.display = "block";

        // Scroll ke panel hasil
        resultPanel.scrollIntoView({ behavior: "smooth", block: "start" });
      }


      function showDetailedResults(results) {
        const detailedDiv = document.getElementById("detailed-results");
        let html = "";

        questionData.forEach((question, index) => {
          const result = results[question.id];

          let statusIcon = "❌";
          let statusClass = "incorrect";
          let statusText = "Belum dijawab";

          if (result && result.answered) {
            statusIcon = result.isCorrect ? "✅" : "❌";
            statusClass = result.isCorrect ? "correct" : "incorrect";
            statusText = result.isCorrect ? "Benar" : "Salah";
          }

          html += `
                    <div class="result-item ${statusClass}">
                        <div class="result-icon">${statusIcon}</div>
                        <div class="result-text">
                            <div class="result-question">Soal ${index + 1}</div>
                            <div class="result-status ${statusClass}">${statusText}</div>
                        </div>
                    </div>
                `;
        });

        detailedDiv.innerHTML = html;
      }


      function showRecommendations(percentage) {
        const recommendationsDiv = document.getElementById("recommendations");
        let html = "";

        if (percentage >= 80) {
          html = `
                    <div class="recommendation-item">
                        <strong>🌟 Anda sudah mahir!</strong> Lanjutkan dengan mempelajari topik bangun ruang lainnya seperti Limas, Kerucut, dan Bola.
                    </div>
                `;
        } else if (percentage >= 60) {
          html = `
                    <div class="recommendation-item">
                        <strong>📖 Saran:</strong> Pelajari kembali bagian yang kurang dipahami. Fokus pada rumus-rumus dan unsur-unsur prisma.
                    </div>
                `;
        } else {
          html = `
                    <div class="recommendation-item">
                        <strong>💡 Rekomendasi Penting:</strong> Mulai dari awal dengan fokus pada:
                        <ul style="margin-left: 1rem; margin-top: 0.5rem;">
                            <li>Pengertian dasar prisma</li>
                            <li>Unsur-unsur prisma</li>
                            <li>Sifat-sifat prisma</li>
                            <li>Rumus volume dan luas permukaan</li>
                        </ul>
                    </div>
                `;
        }

        recommendationsDiv.innerHTML = html;
      }
      function resetExam() {
        // Hapus semua jawaban
        document.querySelectorAll('input[type="radio"]').forEach((radio) => {
          radio.checked = false;
          radio.disabled = false;
        });

        // Hapus semua feedback
        document.querySelectorAll(".feedback-area").forEach((feedback) => {
          feedback.classList.remove("show", "correct", "incorrect");
          feedback.innerHTML = "";
        });

        // Sembunyikan panel hasil
        document.getElementById("results-panel").style.display = "none";

        // Enable submit button
        document.getElementById("submit-exam").disabled = false;

        // Scroll ke atas exam
        document
          .querySelector(".exam-section")
          .scrollIntoView({ behavior: "smooth" });
      }
      // Ketika DOM sudah siap, render soal-soal
      document.addEventListener("DOMContentLoaded", function () {
        renderQuestions();

        // Tambah event listener untuk tombol submit
        document
          .getElementById("submit-exam")
          .addEventListener("click", checkAnswers);

        // Tambah event listener untuk tombol reset
        document
          .getElementById("reset-exam")
          .addEventListener("click", resetExam);
      });