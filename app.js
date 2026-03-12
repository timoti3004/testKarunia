document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const landingPage = document.getElementById('landing-page');
    const questionnairePage = document.getElementById('questionnaire-page');
    const startBtn = document.getElementById('start-btn');
    const questionsContainer = document.getElementById('questions-container');
    const progressBar = document.getElementById('progress-bar');
    const currentQText = document.getElementById('current-q');
    const submitBtn = document.getElementById('submit-btn');

    const questions = [
        "Mudah mewakilkan tanggung jawab penting",
        "Dengan jelas melihat perbedaan antara kebenaran dan kesalahan.",
        "Manuntun orang lain mengambil keputusan unuk selamat melalui iman dalam Kristus.",
        "Secara lisan memberi dorongan kepada yang ragu-ragu, susah dan kecewa.",
        "Percaya Allah akan menepati janjiNya, tak peduli apapun keadaan lingkungan.",
        "Mengatur uang dengan baik agar supaya lebih banyak memberikan kepada pekerjaan Tuhan.",
        "Dalam nama Tuhan menyembuhkan penyakit",
        "Membantu pemimpin utama untuk meringankan tugas penting mereka.",
        "Dengan senang hati menyediakan makanan/penginapan bagi mereka yang membutuhkan.",
        "Bila berdoa bagi orang lain, saya sering lupa waktu.",
        "Mempunyai kemampuan menemukan kebenaran baru bagi diri saya.",
        "Membujuk orang lain untuk bergerak maju untuk mencapai tujuan Alkitabiah.",
        "Dengan senang hati bekerja dengan orang-orang yang tidak di perdulikan orang banyak.",
        "Mudah menyesuaikan dengan satu budaya yang berbeda dengan saya.",
        "Menyenangi tanggung jawab untuk membina kerohanian sekelompok orang Kristen.",
        "Senang di panggil untuk melakukan suatu tugas tertentu di sekitar gereja.",
        "Menyanggupkan orang-orang belajar Alkitab secara rinci.",
        "Menerapkan kebenaran secara berhasil dalam kehidupan saya.",
        "Sanggup mengorganisasi pendapat, orang-orang, barang-barang dan waktu untuk pelayanan yang lebih berhasil guna.",
        "Menimbang dengan baik antara yang tidak baik dan baik atau yang jahat dan tidak jahat.",
        "Dengan penuh kesukaan menceritakan bagaimana Kristus telah membawa saya kepada-Nya.",
        "Menjadi alat untuk mengungkapkan rasa puas diri dan mengarahkan kembali yang sesat untuk menghadapi kenyataan rohani.",
        "Pada umumnya lebih senang masa depan daripada masa lalu.",
        "Memberikan lebih banyak barang, atau uang bagi pekerjaan Tuhan.",
        "Dalam nama Tuhan menyembuhkan orang yang emosinya terganggu.",
        "Membantu atau membersihkan alat/perlengkapan gereja.",
        "Dengan sukarela menyediakan tempat menginap bagi tamu.",
        "Memperhatikan dengan lebih sungguh-sungguh permohonan untuk di doakan melebihi orang Kristen lain.",
        "Mempunyai pengetahuan akan kebenaran yang meyakinkan orang Kristen lain.",
        "Tahu kemana saya pergi dan melihat orang Kristen lain mengikutiNya.",
        "Menolong orang yang tidak semestinya demikian.",
        "Belajar bahasa orang lain dengan baik untuk melayani orang lain.",
        "Secara sukarela megorbankan diri saya untuk kepentingan orang Kristen yang masih baru atau sesat.",
        "Menyenangi pekerjaan rutin di gereja yang membosankan orang lain.",
        "Bila saya mengajar Alkitab, semua orang mengerti dengan jelas.",
        "Saya mencari penyelesaian atas berbagai persoalan yang rumit.",
        "Sanggup menyusun tujuan dan membuat rencana yang berhasil guna untuk mencapainya.",
        "Cenderung melihat di bawah permukaan dan meragukan motif orang lain",
        "Menjelaskan dengan gambling kebenaran-kebenaran Alkitab yang membawa orang kepada Yesus.",
        "Secara lisan menantang mereka yang agaknya acuh tak acuh.",
        "Berharap pada kehadiran dan kuasa Allah menghadapi hal yang tidak mungkin.",
        "Perasaan tergerak bila dihadapkan dengan kebutuhan keuangan yang mendesak di dalam pekerjaan Allah.",
        "Dalam nama Tuhan melayani dengan berhasil/baik mereka yang sakit rohani.",
        "Mengetik, menyimpan dan mencatat gambar-gambar atau keputusan bagi pekerjaan Tuhan",
        "Memiliki kepandaian khusus untuk membuat orang lain seperti di rumah sendiri.",
        "Doa adalah sala satu dari latihan rohani yang paling saya gemari.",
        "Mencari dan menguasai bukti-bukti baru dan prinsip-prinsip kebenaran Alkitab.",
        "Mempengaruhi orang lain untuk mencapai tujuan-tujuan yang berkaitan dengan Alkitab.",
        "Melawat kerumah sakit atau dumah jompo agar menjadi berkat bagi mereka.",
        "Mampu berhubungan baik dengan orang Kristen yang berlainan bangsa, bahasa dan budaya.",
        "Mengenal dengan akrab dan di kenal oleh mereka yang saya layani dan pimpin.",
        "Merasa puas melakukan pekerjaan kasar demi kemuliaan Allah.",
        "Membuat kebenaran Alkitab yang sulit itu dapat di mengerti oleh orang lain.",
        "Memilih salah satu pilihan yang Alkitabiah agar berhasil.",
        "Mampu memimpin satu kelompok untuk mengambil keputusan bersama.",
        "Secara tepat mengetahui karunia rohani mana yang dimiliki orang Kristen lain dan mana yang tidak dimiliki.",
        "Menitik beratkan pekabaran yang mengutamakan Injil Keselamatan.",
        "Mampu memberikan penyuluhan secara berhasil kepada mereka yang kebingungan, bersalah dan kecanduan.",
        "Merasa pasti bahwa saya tahu kehendak Allah yang istimewa bagi perkembangan pekerjaan-Nya di masa depan sekalipun orang lain tidak mengetahuinya.",
        "Sanggup mendapat banyak uang untuk di berikan kepada pekerjaan Tuhan.",
        "Berdoa untuk orang lain sehingga terjadi penyembuhan.",
        "Menyebarkan bahan cetakan dan risalah Injil di masyarakat sekitar saya.",
        "Memiliki keramah tamahan yang tulus dan penghargaan kepada setiap tamu.",
        "Allah selalu menjawab doa saya dalam cara yang nyata",
        "Saya banyak menyelidiki dan membaca untuk belajar kebenaran Alkitab",
        "Mengarahkan orang lain melewati berbagai kesulitan dalam pekerjaan Tuhan.",
        "Membawa orang kesepian berjalan-jalan sebentar dan menolong mereka secara praktis.",
        "Menikmati hidup di negara asing.",
        "Menolong orang Kristen yang membutuhkan oleh menuntun mereka kepada ayat-ayat Alkitab yang tepat dan berdoa dengan mereka.",
        "Mau membawa orang lain gantinya memberi kepada mereka.",
        "Menyampaikan kebenaran Alkitab kepada orang lain yang menghasilkan perubahan dalam pengetahuan, sikap, nilai dan perangai.",
        "Pilihan saya akan orang-orang untuk suatu kedudukan terbukti adalah pilihan yang terbaik.",
        "Sanggup mempekerjakan orang-orang Kristen dan menempatkan mereka untuk bekerja mempraktekkan karunia rohani mereka.",
        "Dapat melihat sesuatu yang palsu sebelum kepalsuannya itu terbukti benar.",
        "Terus mencari orang-orang yang tidak percaya untuk memenangkan mereka.",
        "Menghibur orang Kristen yang dalam kesusahan dan penderitaan.",
        "Percaya kepada kebenaran Allah pada waktu semua tampaknya suram.",
        "Mau bertahan hidup sederhana demi berhasilnya pekerjaan Allah.",
        "Menolong secara berhasil guna mereka yang lemah pikiran.",
        "Senang menjadi pembantu guru dalam kelas Alkitab.",
        "Senang orang-orang asing berada di rumah.",
        "Seringkali berdoa di saat saya barangkali harus melakukan hal yang lain.",
        "Sanggup membedakan bukti-bukti utama dan penting mengenai kitab suci.",
        "Orang lain mengikuti saya karena saya memiliki pengetahuan yang membantu pembangunan gereja saya.",
        "Berbicara dengan gembira kepada mereka di lembaga permasyarakatan atau orang-orang yang hidup sendiri dan kesepian.",
        "Mempunyai kesanggupan belajar bahasa asing.",
        "Sanggup memulihkan orang yang telah jauh tersesat dari masyarakat Kristen mereka.",
        "Senang bila orang lain menyampaikan kebutuhannya akan pertolongan.",
        "Melatih orang Kristen untuk menjadi murid Kristus yang lebih penurut.",
        "Merasakan kehadiran Allah yang lain dari biasanya ketika keputusan penting harus diambil."
    ];

    const TOTAL_QUESTIONS = questions.length;
    let answers = JSON.parse(localStorage.getItem('survey_answers')) || {}; // Load from storage if exists

    // Mapping for 18 Spiritual Gifts
    const gifts = [
        "Administrasi",
        "Ketajaman",
        "Penceramah",
        "Nasehat",
        "Iman",
        "Memberi",
        "Menyembuhkan",
        "Menolong",
        "Keramahan",
        "Pengantaraan",
        "Pengetahuan",
        "Kepemimpinan",
        "Kemurahan",
        "Penginjilan",
        "Gembala",
        "Melayani",
        "Guru",
        "Kebijaksanaan"
    ];

    // ==========================================
    // 1. Generate Questions Dynamically
    // ==========================================
    const generateQuestions = () => {
        const fragment = document.createDocumentFragment();

        questions.forEach((questionText, index) => {
            const i = index + 1; // 1-based indexing for UI and ID binding
            const card = document.createElement('div');
            card.className = 'question-card';
            // Stagger animation delay slightly for the first few visible cards
            if (i <= 10) {
                card.style.animationDelay = `${i * 0.05}s`;
            }
            card.id = `q-card-${i}`;

            // Question Title
            const qTitle = document.createElement('h3');
            qTitle.className = 'question-title';
            qTitle.innerHTML = `<span class="q-number">${i}.</span> ${questionText}`;

            // Options Container (1-5 Radio Buttons)
            const optionsGrid = document.createElement('div');
            optionsGrid.className = 'options-grid';

            for (let j = 1; j <= 5; j++) {
                const wrapper = document.createElement('div');
                wrapper.className = 'option-wrapper';

                const input = document.createElement('input');
                input.type = 'radio';
                input.className = 'option-input';
                input.name = `question-${i}`; // Group by question
                input.id = `q${i}-opt${j}`;
                input.value = j;
                
                // Restore checked state if previously answered
                if (answers[i] == j) {
                    input.checked = true;
                }
                
                // Add change listener to track progress
                input.addEventListener('change', () => handleAnswer(i, j));

                const label = document.createElement('label');
                label.className = 'option-label';
                label.setAttribute('for', `q${i}-opt${j}`);
                
                const span = document.createElement('span');
                span.textContent = j;

                label.appendChild(span);
                wrapper.appendChild(input);
                wrapper.appendChild(label);
                optionsGrid.appendChild(wrapper);
            }

            // Scale Labels (Sangat Kurang ... Sangat Baik)
            const scaleLabels = document.createElement('div');
            scaleLabels.className = 'scale-labels';
            
            const labelLeft = document.createElement('span');
            labelLeft.textContent = 'Sangat Kurang';
            
            const labelRight = document.createElement('span');
            labelRight.textContent = 'Sangat Baik';
            
            scaleLabels.appendChild(labelLeft);
            scaleLabels.appendChild(labelRight);

            // Assemble Card
            card.appendChild(qTitle);
            card.appendChild(optionsGrid);
            card.appendChild(scaleLabels);
            
            fragment.appendChild(card);
        });

        // Inject into DOM completely
        questionsContainer.appendChild(fragment);
    };

    // ==========================================
    // 2. Handle State & Progress Tracking
    // ==========================================
    const updateProgress = () => {
        const answeredCount = Object.keys(answers).length;
        const progressPercentage = (answeredCount / TOTAL_QUESTIONS) * 100;
        
        // Update UI
        progressBar.style.width = `${progressPercentage}%`;
        currentQText.textContent = answeredCount;
    };

    const handleAnswer = (qNumber, value) => {
        answers[qNumber] = value;
        localStorage.setItem('survey_answers', JSON.stringify(answers)); // Save to storage
        updateProgress();
        
        // Remove highlight if it was previously highlighted as unanswered
        const currentCard = document.getElementById(`q-card-${qNumber}`);
        if(currentCard) {
            currentCard.classList.remove('highlight-error');
        }
        
        // Optional UX Enhancement: Auto-scroll slightly to the next unanswered question
        // This makes dealing with 90 questions on mobile much smoother.
        if (qNumber < TOTAL_QUESTIONS) {
            const nextCard = document.getElementById(`q-card-${qNumber + 1}`);
            if (nextCard && !answers[qNumber + 1]) {
                // Determine if we need to scroll (if next card is partially off-screen)
                const rect = nextCard.getBoundingClientRect();
                if (rect.bottom > window.innerHeight) {
                    setTimeout(() => {
                        const yOffset = -100; // Offset for the sticky header
                        const y = nextCard.getBoundingClientRect().top + window.pageYOffset + yOffset;
                        window.scrollTo({ top: y, behavior: 'smooth' });
                    }, 300); // Wait briefly after tapping
                }
            }
        }
    };

    // ==========================================
    // 3. Event Listeners (Transitions & Submit)
    // ==========================================
    startBtn.addEventListener('click', () => {
        // Fade out landing page
        landingPage.style.opacity = '0';
        landingPage.style.transform = 'translateY(-20px)';
        
        setTimeout(() => {
            landingPage.classList.remove('active');
            
            // Show Questionnaire
            questionnairePage.classList.add('active');
            window.scrollTo(0, 0);
        }, 400); // Matches CSS transition duration
    });

    submitBtn.addEventListener('click', () => {
        if (Object.keys(answers).length === TOTAL_QUESTIONS) {
            // UI Feedback
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<span>Mengirim...</span><div class="spinner"></div>';
            submitBtn.disabled = true;
            
            // Simulate network request (API Call)
            setTimeout(() => {
                // Determine Results
                const results = calculateResults();
                
                // Show raw data in console for demonstration
                console.log('Submitted Answers Data:', answers);
                console.log('Calculated Results:', results);
                
                // Reset State
                answers = {};
                localStorage.removeItem('survey_answers'); // Clear storage
                document.querySelectorAll('.option-input').forEach(radio => radio.checked = false);
                updateProgress();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                
                // Navigate to Results Page
                questionnairePage.classList.remove('active');
                showResults(results);

            }, 1500);
        } else {
            // Find the first unanswered question
            for (let i = 1; i <= TOTAL_QUESTIONS; i++) {
                if (!answers[i]) {
                    const unansweredCard = document.getElementById(`q-card-${i}`);
                    if (unansweredCard) {
                        // Highlight the card
                        unansweredCard.classList.add('highlight-error');
                        
                        // Scroll to it
                        const yOffset = -120; // Offset for the sticky header
                        const y = unansweredCard.getBoundingClientRect().top + window.pageYOffset + yOffset;
                        window.scrollTo({ top: y, behavior: 'smooth' });
                        
                        // Optional: Show a quick toast/alert
                        alert(`Mohon jawab pertanyaan nomor ${i} terlebih dahulu.`);
                        break; // Stop at the first unanswered
                    }
                }
            }
        }
    });

    const calculateResults = () => {
        let scores = [];
        
        for (let i = 0; i < gifts.length; i++) {
            let total = 0;
            // For each gift (0-17), sum questions: (i+1), (i+1)+18, (i+1)+36, (i+1)+54, (i+1)+72
            for (let j = 0; j < 5; j++) {
                const qNumber = (i + 1) + (j * 18);
                total += parseInt(answers[qNumber] || 0);
            }
            scores.push({
                name: gifts[i],
                score: total
            });
        }
        
        // Sort highest score first
        scores.sort((a, b) => b.score - a.score);
        return scores;
    };

    const showResults = (resultsData) => {
        const resultsPage = document.getElementById('results-page');
        const resultsContainer = document.getElementById('results-container');
        resultsContainer.innerHTML = ''; // clear prior
        
        resultsData.forEach((gift, index) => {
            const item = document.createElement('div');
            item.className = 'result-item';
            
            // Highlight top 3
            if (index < 3) item.classList.add('top-result');
            
            item.innerHTML = `
                <div class="result-name">
                    ${index < 3 ? '<span class="medal">🏆</span>' : ''} 
                    ${gift.name}
                </div>
                <div class="result-score">${gift.score}</div>
            `;
            resultsContainer.appendChild(item);
        });
        
        // Transition in
        setTimeout(() => {
            resultsPage.classList.add('active');
            window.scrollTo(0, 0);
        }, 400);
    };

    // Restart button on results page
    document.getElementById('restart-btn')?.addEventListener('click', () => {
        document.getElementById('results-page').classList.remove('active');
        setTimeout(() => {
            landingPage.style.opacity = '1';
            landingPage.style.transform = 'translateY(0)';
            landingPage.style.display = 'flex';
            landingPage.classList.add('active');
            window.scrollTo(0, 0);
        }, 400);
    });

    // ==========================================
    // 4. Initialize App
    // ==========================================
    generateQuestions();
    updateProgress();

    // Auto-skip landing page if user already started
    if (Object.keys(answers).length > 0) {
        landingPage.classList.remove('active');
        landingPage.style.display = 'none'; // Force hide instantly
        questionnairePage.classList.add('active');
    }

    // Force scroll to top on load to fix browser scroll restoration blank screens
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 50);
});
