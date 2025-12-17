// ==================== ANIME.JS ANIMATIONS ====================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  initializeAnimations();
});

// Main initialization function
function initializeAnimations() {
  // Animate welcome section
  animateWelcomeSection();
  
  // Animate content sections on scroll
  animateOnScroll();
  
  // Animate headings
  animateHeadings();
  
  // Animate list items
  animateListItems();
  
  // Animate table rows
  animateTableRows();
  
  // Add interactive hover effects
  addHoverEffects();
  
  // Animate 3D embeds
  animate3DModels();
  
  // Smooth page load animation
  smoothPageLoad();
  
  // Animate numbers in table
  animateNumbers();
}

// ==================== WELCOME SECTION ANIMATION ====================
function animateWelcomeSection() {
  const welcome = document.querySelector('.welcome');
  const titles = document.querySelectorAll('#title');
  
  // Initial state
  anime.set(welcome, {
    opacity: 0,
    translateY: -50,
    scale: 0.9
  });
  
  // Animate welcome container
  anime({
    targets: welcome,
    opacity: 1,
    translateY: 0,
    scale: 1,
    duration: 1000,
    easing: 'easeOutElastic(1, .6)',
    delay: 200
  });
  
  // Staggered animation for titles
  anime({
    targets: titles,
    opacity: [0, 1],
    translateX: [-30, 0],
    duration: 800,
    delay: anime.stagger(300, { start: 500 }),
    easing: 'easeOutQuad'
  });
}

// ==================== HEADINGS ANIMATION ====================
function animateHeadings() {
  const headings = document.querySelectorAll('h1, h2, h3');
  
  anime.set(headings, {
    opacity: 0,
    translateY: 20
  });
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        anime({
          targets: entry.target,
          opacity: 1,
          translateY: 0,
          duration: 700,
          easing: 'easeOutQuad'
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  headings.forEach(heading => observer.observe(heading));
}

// ==================== LIST ITEMS ANIMATION ====================
function animateListItems() {
  const listItems = document.querySelectorAll('li');
  
  anime.set(listItems, {
    opacity: 0,
    translateX: -30
  });
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const items = entry.target.querySelectorAll('li');
        anime({
          targets: items,
          opacity: 1,
          translateX: 0,
          duration: 600,
          delay: anime.stagger(100),
          easing: 'easeOutQuad'
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  
  document.querySelectorAll('ul, ol').forEach(list => observer.observe(list));
}

// ==================== TABLE ROWS ANIMATION ====================
function animateTableRows() {
  const tableRows = document.querySelectorAll('tbody tr');
  
  anime.set(tableRows, {
    opacity: 0,
    translateY: 20,
    backgroundColor: 'rgba(179, 207, 229, 0)'
  });
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const rows = entry.target.querySelectorAll('tbody tr');
        anime({
          targets: rows,
          opacity: 1,
          translateY: 0,
          duration: 700,
          delay: anime.stagger(80),
          easing: 'easeOutQuad'
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  
  document.querySelectorAll('table').forEach(table => observer.observe(table));
}

// ==================== 3D MODELS ANIMATION ====================
function animate3DModels() {
  const embeds = document.querySelectorAll('.sketchfab-embed-wrapper');
  
  anime.set(embeds, {
    opacity: 0,
    scale: 0.95,
    translateY: 30
  });
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        anime({
          targets: entry.target,
          opacity: 1,
          scale: 1,
          translateY: 0,
          duration: 800,
          easing: 'easeOutQuad'
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  
  embeds.forEach(embed => observer.observe(embed));
}

// ==================== SMOOTH PAGE LOAD ANIMATION ====================
function smoothPageLoad() {
  const sections = document.querySelectorAll('.container > div');
  
  anime.set(sections, {
    opacity: 0,
    translateY: 40
  });
  
  anime({
    targets: sections,
    opacity: 1,
    translateY: 0,
    duration: 800,
    delay: anime.stagger(100, { start: 100 }),
    easing: 'easeOutQuad'
  });
}

// ==================== SCROLL ANIMATIONS ====================
function animateOnScroll() {
  const allDivs = document.querySelectorAll('.container > div:not(.welcome)');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add a subtle scale animation on scroll
        anime({
          targets: entry.target,
          scale: [0.95, 1],
          opacity: [0.8, 1],
          duration: 600,
          easing: 'easeOutQuad'
        });
      }
    });
  }, { threshold: 0.2 });
  
  allDivs.forEach(div => observer.observe(div));
}

// ==================== HOVER EFFECTS ====================
function addHoverEffects() {
  // Hover effects for content sections
  const contentDivs = document.querySelectorAll('.container > div:not(.welcome)');
  
  contentDivs.forEach((div) => {
    div.addEventListener('mouseenter', function() {
      anime({
        targets: this,
        boxShadow: '0 12px 40px rgba(26, 61, 99, 0.2)',
        translateY: -5,
        duration: 300,
        easing: 'easeOutQuad'
      });
    });
    
    div.addEventListener('mouseleave', function() {
      anime({
        targets: this,
        boxShadow: '0 4px 15px rgba(26, 61, 99, 0.08)',
        translateY: 0,
        duration: 300,
        easing: 'easeOutQuad'
      });
    });
  });
  
  // Hover effects for table rows
  const tableRows = document.querySelectorAll('tbody tr');
  
  tableRows.forEach((row) => {
    row.addEventListener('mouseenter', function() {
      anime({
        targets: this,
        scale: 1.02,
        duration: 200,
        easing: 'easeOutQuad'
      });
    });
    
    row.addEventListener('mouseleave', function() {
      anime({
        targets: this,
        scale: 1,
        duration: 200,
        easing: 'easeOutQuad'
      });
    });
  });
  
  // Hover effects for 3D embeds
  const embeds = document.querySelectorAll('.sketchfab-embed-wrapper');
  
  embeds.forEach((embed) => {
    embed.addEventListener('mouseenter', function() {
      anime({
        targets: this,
        scale: 1.02,
        duration: 300,
        easing: 'easeOutQuad'
      });
    });
    
    embed.addEventListener('mouseleave', function() {
      anime({
        targets: this,
        scale: 1,
        duration: 300,
        easing: 'easeOutQuad'
      });
    });
  });
}

// ==================== PARALLAX EFFECT ====================
window.addEventListener('scroll', function() {
  const scrolled = window.pageYOffset;
  const welcome = document.querySelector('.welcome');
  
  if (welcome) {
    anime.set(welcome, {
      translateY: scrolled * 0.3
    });
  }
});

// ==================== TYPING ANIMATION FOR TITLES ====================
function createTypingEffect(element, text, speed = 50) {
  if (!element) return;
  
  element.textContent = '';
  let i = 0;
  
  const type = () => {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  };
  
  type();
}

// ==================== SMOOTH SCROLL TO SECTION ====================
document.addEventListener('click', function(e) {
  if (e.target.tagName === 'A' && e.target.hash) {
    e.preventDefault();
    const target = document.querySelector(e.target.hash);
    
    if (target) {
      // Use smooth scroll behavior instead of anime for better compatibility
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
});

// ==================== ANIMATE NUMBERS IN TABLE ====================
function animateNumbers() {
  const tableCells = document.querySelectorAll('td');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Trigger animation when visible
        anime({
          targets: entry.target,
          opacity: [0.5, 1],
          color: ['#4A7FA7', '#0A1931'],
          duration: 500,
          easing: 'easeOutQuad'
        });
      }
    });
  }, { threshold: 0.5 });
  
  tableCells.forEach(cell => observer.observe(cell));
}

// ==================== INITIALIZE ON LOAD ====================
window.addEventListener('load', function() {
  // Add fade-in effect to entire page
  anime({
    targets: 'body',
    opacity: [0.95, 1],
    duration: 500,
    easing: 'easeOutQuad'
  });
  
  // Adjust animations for device
  adjustAnimationsForDevice();
});

// ==================== PAGE VISIBILITY ANIMATION ====================
document.addEventListener('visibilitychange', function() {
  if (document.hidden) {
    // Page is hidden
    anime.pauseAll();
  } else {
    // Page is visible again
    anime.resumeAll();
  }
});

// ==================== RESPONSIVE ANIMATION ADJUSTMENTS ====================
function adjustAnimationsForDevice() {
  const isMobile = window.innerWidth <= 768;
  
  if (isMobile) {
    // Reduce animation duration on mobile for better performance
    anime.defaults.duration = 500;
    anime.defaults.easing = 'easeOutQuad';
  }
}

// Call on load and resize
window.addEventListener('load', adjustAnimationsForDevice);
window.addEventListener('resize', adjustAnimationsForDevice);

// ==================== EXAM SYSTEM ====================

// Define correct answers
const correctAnswers = {
  q1: 'b',   // Prisma definition
  q2: 'c',   // Kongruen
  q3: 'c',   // Prisma segilima
  q4: 'a',   // Rusuk
  q5: 'b',   // Diagonal ruang vs bidang
  q6: 'c',   // Bukan sifat prisma
  q7: 'a',   // Sudut 90°
  q8: 'd',   // Sisi prisma segiempat
  q9: 'd',   // Rusuk prisma segitiga
  q10: 'a',  // Rumus volume
  q11: 'b',  // Rumus luas permukaan
  q12: 'd',  // Soal volume
  q13: 'a',  // Contoh prisma
  q14: 'b',  // Pengaruh tinggi pada volume
  q15: 'b'   // Perbedaan prisma dan limas
};

// Explanation for each answer
const explanations = {
  q1: 'Prisma adalah bangun ruang 3D yang memiliki dua alas kongruen yang sejajar, yang membedakannya dari bangun datar.',
  q2: 'Kongruen dalam matematika berarti bentuk dan ukuran yang sama persis, bukan hanya mirip atau serupa.',
  q3: 'Nama prisma ditentukan oleh bentuk alasnya. Jika alas segilima, maka disebut prisma segilima.',
  q4: 'Rusuk adalah garis pertemuan antara dua sisi, berbeda dengan sisi (bidang datar) dan sudut (pertemuan rusuk).',
  q5: 'Diagonal ruang menghubungkan titik sudut berlawanan dalam 3D ruang, sementara diagonal bidang hanya pada satu permukaan saja.',
  q6: 'Sifat tidak memiliki "satu alas dan titik puncak" karena itu adalah sifat limas, bukan prisma.',
  q7: 'Pada prisma tegak (bukan miring), sudut antara sisi tegak dan alas selalu 90° (siku-siku).',
  q8: 'Prisma segiempat memiliki 2 alas segiempat + 4 sisi tegak = 6 sisi total.',
  q9: 'Prisma segitiga: 3 rusuk alas + 3 rusuk tutup + 3 rusuk vertikal = 9 rusuk.',
  q10: 'Rumus umum volume prisma adalah luas alas dikali tinggi, berlaku untuk semua jenis prisma.',
  q11: 'Luas permukaan = 2 alas + selimut (keliling alas × tinggi). Ini rumus standar untuk semua prisma.',
  q12: 'V = Luas Alas × Tinggi = 20 cm² × 15 cm = 300 cm³. Perhitungan langsung dan sederhana.',
  q13: 'Buku adalah contoh nyata prisma segiempat dalam kehidupan sehari-hari dengan dua alas persegi panjang.',
  q14: 'Volume berbanding lurus dengan tinggi. Jika tinggi 2× lipat, maka volume juga 2× lipat.',
  q15: 'Perbedaan utama: Prisma memiliki 2 alas sejajar, sementara Limas memiliki 1 alas dan 1 titik puncak.'
};

// Feedback messages
const feedbackMessages = {
  correct: {
    texts: [
      '✨ Jawaban benar! Hebat!',
      '🎯 Tepat sekali!',
      '💯 Sempurna! Kamu mengerti!',
      '👏 Benar! Lanjutkan!',
      '⭐ Excellent! Paham dengan baik!'
    ]
  },
  incorrect: {
    texts: [
      '❌ Belum tepat, coba lagi!',
      '🤔 Jawaban kurang tepat. Pelajari penjelasan di bawah!',
      '📖 Tidak tepat. Mari lihat penjelasan yang benar.',
      '💭 Sayang! Jawaban masih kurang tepat.',
      '🔍 Coba pelajari lagi materi terkait!'
    ]
  }
};

// Initialize exam system
function initializeExam() {
  const submitBtn = document.getElementById('submit-exam');
  const resetBtn = document.getElementById('reset-exam');
  const radioButtons = document.querySelectorAll('input[type="radio"]');

  if (submitBtn) {
    submitBtn.addEventListener('click', checkAnswers);
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', resetExam);
  }

  // Enable reset button initially
  if (resetBtn) {
    resetBtn.disabled = false;
  }

  // Add live validation on selection dengan feedback visual
  radioButtons.forEach(radio => {
    radio.addEventListener('change', function() {
      const questionName = this.name;
      const selectedOption = this.closest('.question-options');
      
      // Visual feedback
      if (selectedOption) {
        anime({
          targets: selectedOption,
          scale: [0.98, 1],
          duration: 300,
          easing: 'easeOutQuad'
        });
      }

      // Show immediate validation with explanation
      showImmediateFeedback(questionName, this.value);
    });
  });
}

// Show immediate feedback ketika user memilih jawaban
function showImmediateFeedback(questionName, selectedValue) {
  const feedbackArea = document.querySelector(`#${questionName}-feedback`);
  if (!feedbackArea) return;

  const correctAnswer = correctAnswers[questionName];
  const isCorrect = selectedValue === correctAnswer;

  feedbackArea.classList.add('show');

  // Animate feedback appearance
  anime({
    targets: feedbackArea,
    opacity: [0, 1],
    translateY: [20, 0],
    duration: 400,
    easing: 'easeOutQuad'
  });

  if (isCorrect) {
    feedbackArea.classList.remove('incorrect');
    feedbackArea.classList.add('correct');
    feedbackArea.innerHTML = `
      <div class="feedback-content">
        <div class="feedback-icon">✅</div>
        <strong>Benar Sekali!</strong>
        <p>${explanations[questionName]}</p>
        <div class="progress-indicator">Jawaban Anda tepat! 🎯</div>
      </div>
    `;
    
    // Vibration jika tersedia
    if (navigator.vibrate) {
      navigator.vibrate([50, 30, 50]);
    }
  } else {
    feedbackArea.classList.remove('correct');
    feedbackArea.classList.add('incorrect');
    
    // Tampilkan jawaban yang benar
    const correctOption = document.querySelector(`input[name="${questionName}"][value="${correctAnswer}"]`);
    const correctLabel = correctOption ? correctOption.closest('.option').querySelector('label').textContent : 'tidak diketahui';
    
    feedbackArea.innerHTML = `
      <div class="feedback-content">
        <div class="feedback-icon">❌</div>
        <strong>Belum Tepat</strong>
        <p>${explanations[questionName]}</p>
        <div class="hint">💡 <strong>Jawaban yang benar:</strong> ${correctLabel}</div>
        <div class="progress-indicator">Coba lagi atau lanjut ke pertanyaan berikutnya.</div>
      </div>
    `;
  }
}

// Check all answers with comprehensive validation
function checkAnswers() {
  let score = 0;
  const results = {};
  let unansweredCount = 0;

  // Check each answer
  for (let i = 1; i <= 15; i++) {
    const questionName = `q${i}`;
    const selectedAnswer = document.querySelector(`input[name="${questionName}"]:checked`);
    
    if (!selectedAnswer) {
      results[questionName] = { answered: false };
      unansweredCount++;
      continue;
    }

    const isCorrect = selectedAnswer.value === correctAnswers[questionName];
    results[questionName] = { 
      answered: true,
      isCorrect: isCorrect,
      selected: selectedAnswer.value
    };

    if (isCorrect) score++;

    // Show feedback on individual question
    showQuestionFeedback(questionName, isCorrect);
  }

  // Check if all questions answered
  if (unansweredCount > 0) {
    anime({
      targets: '.exam-section',
      scale: [1, 1.02, 1],
      duration: 400,
      easing: 'easeInOutQuad'
    });
    
    showToast(`⚠️ Masih ada ${unansweredCount} pertanyaan yang belum dijawab!`);
    return;
  }

  // Disable all inputs setelah submit
  document.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.disabled = true;
  });
  
  const submitBtn = document.getElementById('submit-exam');
  if (submitBtn) {
    submitBtn.disabled = true;
  }

  // Show overall results dengan delay untuk effect
  setTimeout(() => {
    showResults(score, results);
    
    // Animate to results section
    const resultPanel = document.getElementById('results-panel');
    if (resultPanel) {
      anime({
        targets: window,
        scrollTop: resultPanel.offsetTop - 100,
        duration: 1000,
        easing: 'easeInOutQuad'
      });
    }
  }, 600);
}

// Show feedback for individual question
function showQuestionFeedback(questionName, isCorrect) {
  const feedbackArea = document.getElementById(`feedback-${questionName}`);
  const selectedAnswer = document.querySelector(`input[name="${questionName}"]:checked`);
  
  if (!feedbackArea || !selectedAnswer) return;

  const option = selectedAnswer.closest('.option');
  if (!option) return;
  
  feedbackArea.classList.add('show');
  feedbackArea.classList.add(isCorrect ? 'correct' : 'incorrect');

  // Get random feedback message
  const messageType = isCorrect ? 'correct' : 'incorrect';
  const messages = feedbackMessages[messageType].texts;
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];

  feedbackArea.innerHTML = `
    <div class="feedback-text">${randomMessage}</div>
    <div class="feedback-explanation">${explanations[questionName]}</div>
  `;

  // Animate feedback
  anime({
    targets: feedbackArea,
    opacity: [0, 1],
    translateY: [10, 0],
    duration: 400,
    easing: 'easeOutQuad'
  });
}

// Show overall results
function showResults(score, results) {
  const resultPanel = document.getElementById('results-panel');
  const percentage = Math.round((score / 15) * 100);
  
  // Update score display
  document.getElementById('score-number').textContent = score;
  document.getElementById('percentage').textContent = `${percentage}%`;

  // Show result panel
  resultPanel.style.display = 'block';

  // Add feedback based on score
  const feedbackDiv = document.querySelector('.results-feedback');
  let feedbackClass = 'excellent';
  let feedbackText = '';

  if (percentage >= 90) {
    feedbackClass = 'excellent';
    feedbackText = '🏆 Luar Biasa Hebat! Anda sangat memahami materi Prisma dengan sangat baik!';
  } else if (percentage >= 80) {
    feedbackClass = 'good';
    feedbackText = '🎉 Bagus! Pemahaman Anda tentang Prisma sudah sangat baik!';
  } else if (percentage >= 70) {
    feedbackClass = 'fair';
    feedbackText = '👍 Cukup Baik! Anda memahami sebagian besar materi. Pelajari lagi bagian yang masih kurang!';
  } else {
    feedbackClass = 'needs-improvement';
    feedbackText = '📚 Perlu Lebih Banyak Belajar! Jangan menyerah, coba baca materi sekali lagi dengan teliti!';
  }

  feedbackDiv.className = `results-feedback ${feedbackClass}`;
  
  // Prepare appreciation message
  let appreciation = '';
  let emoji = '';
  let encouragement = '';
  let nextStep = '';
  let backgroundColor = '';

  if (percentage === 100) {
    appreciation = '🏆 SEMPURNA! Anda adalah Master Prisma!';
    emoji = '🌟';
    encouragement = 'Luar biasa! Anda telah menguasai setiap konsep dengan sempurna. Prestasi Anda sangat mengesankan!';
    nextStep = 'Anda siap untuk tantangan materi yang lebih kompleks. Selamat atas pencapaian gemilang ini!';
    backgroundColor = '#10b981';
  } else if (percentage >= 90) {
    appreciation = '🥇 SANGAT SEMPURNA! Anda Luar Biasa!';
    emoji = '🎉';
    encouragement = 'Penguasaan Anda terhadap materi sangat mengesankan. Hanya tinggal penyempurnaan kecil saja!';
    nextStep = 'Pelajari kembali bagian yang belum sempurna untuk hasil yang paling maksimal.';
    backgroundColor = '#0ea5e9';
  } else if (percentage >= 80) {
    appreciation = '🥈 SANGAT BAGUS! Anda Hebat!';
    emoji = '👏';
    encouragement = 'Pemahaman Anda terhadap materi Prisma sudah sangat baik. Terus tingkatkan lagi!';
    nextStep = 'Fokus pada beberapa konsep yang belum sepenuhnya dikuasai untuk hasil lebih baik.';
    backgroundColor = '#06b6d4';
  } else if (percentage >= 70) {
    appreciation = '👍 BAGUS! Anda Sedang Berkembang';
    emoji = '💪';
    encouragement = 'Anda sudah menunjukkan pemahaman yang baik. Dengan latihan lebih, pasti bisa lebih baik lagi!';
    nextStep = 'Tinjau kembali bagian-bagian yang masih kurang dan lakukan latihan soal yang lebih banyak.';
    backgroundColor = '#f59e0b';
  } else if (percentage >= 60) {
    appreciation = '📚 CUKUP BAIK! Anda Sedang Belajar';
    emoji = '🤓';
    encouragement = 'Jangan berkecil hati! Setiap pembelajaran membutuhkan waktu. Anda sudah membuat kemajuan yang baik!';
    nextStep = 'Pelajari kembali materi dengan teliti dan coba latihan soal yang lebih variatif.';
    backgroundColor = '#f97316';
  } else {
    appreciation = '🌱 JANGAN MENYERAH! Anda Pasti Bisa!';
    emoji = '💭';
    encouragement = 'Ini adalah kesempatan emas untuk belajar lebih dalam lagi. Semangat terus meningkat!';
    nextStep = 'Pelajari kembali konsep dasar dengan cermat dan mintalah bantuan jika diperlukan.';
    backgroundColor = '#ef4444';
  }

  // Create comprehensive results HTML
  feedbackDiv.innerHTML = `
    <div class="results-appreciation" style="border-left: 5px solid ${backgroundColor}; background: linear-gradient(135deg, ${backgroundColor}20, ${backgroundColor}10);">
      <div class="appreciation-emoji" style="font-size: 3rem; margin-bottom: 1rem;">${emoji}</div>
      <h2 style="color: ${backgroundColor}; margin-bottom: 0.5rem;">${appreciation}</h2>
      <p class="encouragement-text" style="font-size: 1.05rem; line-height: 1.6;">${encouragement}</p>
      
      <div class="score-circle" style="border-color: ${backgroundColor}; color: ${backgroundColor}; width: 150px; height: 150px; margin: 2rem auto;">
        <div class="score-percentage" style="font-size: 3.5rem;">${percentage}%</div>
        <div class="score-label">Skor Anda</div>
      </div>

      <div class="score-breakdown" style="margin: 1.5rem 0; display: flex; justify-content: space-around;">
        <div style="text-align: center;">
          <div style="font-size: 2rem; font-weight: bold; color: #10b981;">${score}</div>
          <div style="font-size: 0.9rem; color: #666;">Jawaban Benar</div>
        </div>
        <div style="text-align: center;">
          <div style="font-size: 2rem; font-weight: bold; color: #999;">15</div>
          <div style="font-size: 0.9rem; color: #666;">Total Soal</div>
        </div>
      </div>

      <div class="next-step-section" style="border-left: 4px solid ${backgroundColor}; background: ${backgroundColor}12; padding: 1.5rem; margin: 1.5rem 0; border-radius: 8px;">
        <h4 style="color: ${backgroundColor}; margin-bottom: 0.5rem;">📌 Langkah Selanjutnya</h4>
        <p style="margin: 0; line-height: 1.6;">${nextStep}</p>
      </div>
    </div>
  `;

  // Show detailed results
  showDetailedResults(results);

  // Show recommendations
  showRecommendations(score, percentage);

  // Animate results
  anime({
    targets: resultPanel,
    opacity: [0.8, 1],
    scale: [0.95, 1],
    duration: 600,
    easing: 'easeOutQuad'
  });

  // Animate score number
  anime({
    targets: '.score-percentage',
    textContent: [0, percentage],
    round: 1,
    duration: 2000,
    easing: 'easeOutElastic(1, .6)',
    delay: 300
  });

  // Show celebration jika sempurna
  if (percentage === 100) {
    setTimeout(() => {
      showCelebration();
    }, 500);
  }
}

// Show detailed results breakdown
function showDetailedResults(results) {
  const detailedDiv = document.getElementById('detailed-results');
  if (!detailedDiv) return;
  
  let html = '';

  for (let i = 1; i <= 15; i++) {
    const questionName = `q${i}`;
    const result = results[questionName];
    
    let statusIcon = '❌';
    let statusClass = 'incorrect';
    let statusText = 'Belum dijawab';

    if (result && result.answered) {
      statusIcon = result.isCorrect ? '✅' : '❌';
      statusClass = result.isCorrect ? 'correct' : 'incorrect';
      statusText = result.isCorrect ? 'Jawaban Benar' : 'Jawaban Salah';
    }

    html += `
      <div class="result-item ${statusClass}">
        <div class="result-icon">${statusIcon}</div>
        <div class="result-text">
          <div class="result-question">Soal ${i}</div>
          <div class="result-status ${statusClass}">${statusText}</div>
        </div>
      </div>
    `;
  }

  detailedDiv.innerHTML = html;
}

// Show recommendations
function showRecommendations(score, percentage) {
  const recommendationsDiv = document.getElementById('recommendations');
  if (!recommendationsDiv) return;
  
  let html = '';

  if (percentage >= 90) {
    html = `
      <div class="recommendation-item">
        <strong>🌟 Anda sudah mahir!</strong> Lanjutkan dengan mempelajari topik bangun ruang yang lebih kompleks seperti Kerucut, Bola, dan Limas.
      </div>
    `;
  } else if (percentage >= 70) {
    html = `
      <div class="recommendation-item">
        <strong>📖 Saran Pembelajaran:</strong> Pelajari kembali beberapa bagian dengan fokus pada rumus-rumus dan aplikasi praktis. Coba lihat model 3D untuk visualisasi lebih baik.
      </div>
    `;
  } else {
    html = `
      <div class="recommendation-item">
        <strong>💡 Rekomendasi Penting:</strong> Mulai dari awal dengan fokus pada definisi dan unsur-unsur prisma. Pahami konsep dasar sebelum mempelajari rumus. Gunakan 3D model untuk membantu visualisasi.
      </div>
      <div class="recommendation-item">
        <strong>📝 Langkah-langkah:</strong>
        <ol style="margin-left: 1.5rem; margin-top: 0.5rem;">
          <li>Pelajari kembali bagian "Pengertian Prisma"</li>
          <li>Pahami setiap unsur prisma dengan detail</li>
          <li>Pelajari sifat-sifat dan jenis-jenis prisma</li>
          <li>Hafalkan rumus volume dan luas permukaan</li>
          <li>Lakukan latihan soal berkali-kali</li>
        </ol>
      </div>
    `;
  }

  recommendationsDiv.innerHTML = html;
}

// Celebration animation untuk nilai sempurna
function showCelebration() {
  // Create confetti effect
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    const colors = ['#FFD700', '#FFA500', '#FF69B4', '#87CEEB', '#98FF98', '#DDA0DD'];
    confetti.style.cssText = `
      position: fixed;
      left: ${Math.random() * 100}%;
      top: -10px;
      width: 10px;
      height: 10px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      border-radius: 50%;
      pointer-events: none;
      z-index: 999;
    `;
    document.body.appendChild(confetti);

    anime({
      targets: confetti,
      translateY: window.innerHeight + 20,
      translateX: (Math.random() - 0.5) * 300,
      opacity: [1, 0],
      duration: 3000 + Math.random() * 1000,
      easing: 'easeInQuad',
      complete: () => confetti.remove()
    });
  }

  // Show celebration modal
  const celebration = document.createElement('div');
  celebration.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: linear-gradient(135deg, #ffffff, #f0f9ff);
    padding: 3rem 2.5rem;
    border-radius: 20px;
    box-shadow: 0 20px 60px rgba(16, 185, 129, 0.3);
    z-index: 1000;
    text-align: center;
    max-width: 450px;
    border: 3px solid #10b981;
  `;
  celebration.innerHTML = `
    <div style="font-size: 4rem; margin-bottom: 1.5rem; display: flex; justify-content: center; gap: 0.5rem;">
      <span style="animation: bounce 0.6s infinite;">🎉</span>
      <span style="animation: bounce 0.6s infinite 0.1s;">✨</span>
      <span style="animation: bounce 0.6s infinite 0.2s;">🏆</span>
    </div>
    <h2 style="color: #10b981; margin-bottom: 0.5rem; font-size: 2.2rem;">Sempurna!</h2>
    <p style="color: #666; font-size: 1.1rem; margin-bottom: 1rem; line-height: 1.6;">
      🌟 <strong>Anda adalah Master Prisma!</strong> 🌟
    </p>
    <p style="color: #888; font-size: 0.95rem;">
      Pencapaian yang luar biasa menakjubkan! Anda telah menguasai semua materi dengan sempurna.
    </p>
    <div style="margin-top: 2rem; padding-top: 1.5rem; border-top: 2px solid #e0e0e0;">
      <p style="color: #666; font-size: 0.9rem; margin: 0;">
        Siap untuk tantangan berikutnya? 💪
      </p>
    </div>
  `;
  document.body.appendChild(celebration);

  // Animate celebration appearance
  anime({
    targets: celebration,
    scale: [0.3, 1],
    opacity: [0, 1],
    duration: 700,
    easing: 'easeOutElastic(1, .6)'
  });

  // Auto remove after 4 seconds
  setTimeout(() => {
    anime({
      targets: celebration,
      scale: [1, 0.3],
      opacity: [1, 0],
      duration: 500,
      easing: 'easeInQuad',
      complete: () => celebration.remove()
    });
  }, 4000);

  // Show congratulations toast
  showToast('🎉 Selamat! Anda telah mencapai skor sempurna!');
}

// Reset exam
function resetExam() {
  const examSection = document.querySelector('.exam-section');
  if (!examSection) return;

  // Clear all radio selections
  document.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.checked = false;
    radio.disabled = false;
  });

  // Clear all feedbacks
  document.querySelectorAll('.feedback-area').forEach(feedback => {
    feedback.classList.remove('show', 'correct', 'incorrect');
    feedback.innerHTML = '';
  });

  // Hide results panel
  const resultPanel = document.getElementById('results-panel');
  if (resultPanel) {
    resultPanel.style.display = 'none';
  }

  // Enable submit button again
  const submitBtn = document.getElementById('submit-exam');
  if (submitBtn) {
    submitBtn.disabled = false;
  }

  // Scroll to top of exam
  anime({
    targets: window,
    scrollTop: examSection.offsetTop,
    duration: 800,
    easing: 'easeInOutQuad'
  });

  // Show success message
  showToast('🔄 Exam telah direset. Silakan mulai ulang!');
}

// Toast notification
function showToast(message) {
  const toast = document.createElement('div');
  toast.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: rgba(26, 61, 99, 0.95);
    color: #ffffff;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(26, 61, 99, 0.15);
    z-index: 1000;
    font-weight: 600;
    font-size: 0.95rem;
    max-width: 300px;
  `;
  toast.textContent = message;
  document.body.appendChild(toast);

  // Animate in
  anime({
    targets: toast,
    opacity: [0, 1],
    translateX: [50, 0],
    duration: 400,
    easing: 'easeOutQuad'
  });

  // Animate out after 3 seconds
  setTimeout(() => {
    anime({
      targets: toast,
      opacity: [1, 0],
      translateX: [0, 50],
      duration: 300,
      easing: 'easeInQuad',
      complete: () => toast.remove()
    });
  }, 3000);
}

// ==================== LOAD EXAM ON DOCUMENT READY ====================
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeExam);
} else {
  initializeExam();
}
