document.addEventListener("DOMContentLoaded", () => {

    // ===================================
    // ELEMENTS
    // ===================================

    const intro = document.getElementById("intro");
    const doorIcon = document.getElementById("doorIcon");
    const openDoorBtn = document.getElementById("openDoorBtn");

    const memoriesSection = document.getElementById("memoriesSection");
    const memoryCards = document.querySelectorAll(".memory-card");

    const memoryModal = document.getElementById("memoryModal");
    const closeMemoryBtn = document.getElementById("closeMemoryBtn");
    const modalIcon = document.getElementById("modalIcon");
    const modalTitle = document.getElementById("modalTitle");
    const modalMessage = document.getElementById("modalMessage");
    const nextMemoryBtn = document.getElementById("nextMemoryBtn");

    const memoryProgress = document.getElementById("memoryProgress");
    const letterPrompt = document.getElementById("letterPrompt");
    const openLetterBtn = document.getElementById("openLetterBtn");

    const letterSection = document.getElementById("letterSection");
    const envelope = document.getElementById("envelope");
    const readLetterBtn = document.getElementById("readLetterBtn");
    const letterContent = document.getElementById("letterContent");
    const finalRevealBtn = document.getElementById("finalRevealBtn");

    const finalSection = document.getElementById("finalSection");
    const daysLeft = document.getElementById("daysLeft");
    const replayBtn = document.getElementById("replayBtn");


    // ===================================
    // BACKGROUND PARTICLES
    // ===================================

    const canvas = document.getElementById("particles");
    const ctx = canvas.getContext("2d");

    let particles = [];

    function resizeCanvas() {
        const ratio = Math.min(window.devicePixelRatio || 1, 2);

        canvas.width = window.innerWidth * ratio;
        canvas.height = window.innerHeight * ratio;

        canvas.style.width = window.innerWidth + "px";
        canvas.style.height = window.innerHeight + "px";

        ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

        particles = Array.from({ length: 75 }, () => ({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            size: Math.random() * 2 + 0.5,
            alpha: Math.random(),
            speed: Math.random() * 0.008 + 0.002
        }));
    }

    function animateParticles() {
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

        particles.forEach(particle => {
            particle.alpha += particle.speed;

            if (particle.alpha > 1 || particle.alpha < 0.15) {
                particle.speed *= -1;
            }

            ctx.beginPath();

            ctx.arc(
                particle.x,
                particle.y,
                particle.size,
                0,
                Math.PI * 2
            );

            ctx.fillStyle =
                `rgba(255, 190, 215, ${particle.alpha})`;

            ctx.fill();
        });

        requestAnimationFrame(animateParticles);
    }

    resizeCanvas();
    animateParticles();

    window.addEventListener("resize", resizeCanvas);


    // ===================================
    // FLOATING HEARTS
    // ===================================

    function heartBurst() {
        const symbols = ["❤️", "💗", "💕", "✨", "🌸"];

        for (let i = 0; i < 22; i++) {
            const particle = document.createElement("span");

            particle.textContent =
                symbols[Math.floor(Math.random() * symbols.length)];

            particle.style.position = "fixed";
            particle.style.left = Math.random() * 100 + "vw";
            particle.style.top = "100vh";
            particle.style.zIndex = "30";
            particle.style.pointerEvents = "none";
            particle.style.fontSize =
                (14 + Math.random() * 16) + "px";

            document.body.appendChild(particle);

            const animation = particle.animate(
                [
                    {
                        transform: "translateY(0) rotate(0deg)",
                        opacity: 1
                    },
                    {
                        transform:
                            `translateY(-${window.innerHeight + 150}px) rotate(360deg)`,
                        opacity: 0
                    }
                ],
                {
                    duration: 2500 + Math.random() * 2500,
                    easing: "ease-out"
                }
            );

            animation.onfinish = () => particle.remove();
        }
    }


    // ===================================
    // SCENE 1: OPEN THE MEMORY DOOR
    // ===================================

    function openMemoryDoor() {
        intro.classList.add("hidden");
        memoriesSection.classList.remove("hidden");

        heartBurst();

        memoriesSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

    openDoorBtn.addEventListener("click", openMemoryDoor);
    doorIcon.addEventListener("click", openMemoryDoor);


    // ===================================
    // SIX MEMORY MESSAGES
    // ===================================

    const memoryData = [
        {
            icon: "🌸",
            title: "நம் கதையின் தொடக்கம்",
            message:
                "ஒவ்வொரு கதைக்கும் ஒரு தொடக்கம் உண்டு. சில தொடக்கங்கள் நம் வாழ்க்கையில் அழகான நினைவுகளாக மாறிவிடுகின்றன. ❤️"
        },
        {
            icon: "💗",
            title: "சிறப்பான தருணங்கள்",
            message:
                "சில தருணங்கள் மிகவும் எளிமையானவை. ஆனால், அவற்றைச் சிறப்பானதாக மாற்றுவது நம் மனதிற்கு நெருக்கமான மனிதர்கள்தான்."
        },
        {
            icon: "🌙",
            title: "எதிர்பாராத திருப்பங்கள்",
            message:
                "வாழ்க்கை சில நேரங்களில் எதிர்பாராத திருப்பங்களைத் தரும். அந்தத் திருப்பங்களுக்குப் பின்னாலும் அழகான தருணங்கள் காத்திருக்கலாம்."
        },
        {
            icon: "✨",
            title: "இன்னும் பல நினைவுகள்",
            message:
                "நம் வாழ்க்கைப் பயணத்தில் இன்னும் பல அழகான நினைவுகளை உருவாக்க வேண்டும் என்று ஆசைப்படுகிறேன். 💖"
        },
        {
            icon: "🌷",
            title: "உன் அழகான கனவுகள்",
            message:
                "உன்னுடைய எல்லாக் கனவுகளும் நனவாக வேண்டும். நீ நினைத்ததைச் சாதித்து, உனக்குப் பிடித்த வாழ்க்கையை வாழ வேண்டும்."
        },
        {
            icon: "❤️",
            title: "உன் மகிழ்ச்சி",
            message:
                "எதிர்காலத்தில் என்ன நடந்தாலும், நீ எப்போதும் மகிழ்ச்சியாகவும் நம்பிக்கையுடனும் இருக்க வேண்டும் என்பதுதான் என் விருப்பம்."
        }
    ];

    const visitedMemories = new Set();

    let currentMemoryIndex = 0;

    function showMemory(index) {
        const memory = memoryData[index];

        if (!memory) return;

        currentMemoryIndex = index;

        modalIcon.textContent = memory.icon;
        modalTitle.textContent = memory.title;
        modalMessage.textContent = memory.message;

        nextMemoryBtn.textContent =
            visitedMemories.size === 6
                ? "முடிந்தது ❤️"
                : "அடுத்த நினைவுக்குச் செல் 💖";

        memoryModal.classList.remove("hidden");
    }

    memoryCards.forEach(card => {
        card.addEventListener("click", () => {
            const index = Number(card.dataset.memory);

            if (!Number.isInteger(index) || !memoryData[index]) {
                return;
            }

            visitedMemories.add(index);
            card.classList.add("visited");

            const hint = card.querySelector(".tap-hint");

            if (hint) {
                hint.textContent = "பார்த்துவிட்டாய் ✓";
            }

            memoryProgress.textContent =
                `${visitedMemories.size} / 6 நினைவுகள் பார்த்துவிட்டாய்`;

            if (visitedMemories.size === 6) {
                letterPrompt.classList.remove("hidden");
            }

            showMemory(index);
            heartBurst();
        });
    });


    // ===================================
    // CLOSE AND NAVIGATE MEMORY MODAL
    // ===================================

    function closeModal() {
        memoryModal.classList.add("hidden");
    }

    closeMemoryBtn.addEventListener("click", closeModal);

    memoryModal.addEventListener("click", event => {
        if (event.target === memoryModal) {
            closeModal();
        }
    });

    nextMemoryBtn.addEventListener("click", () => {
        closeModal();

        for (let i = 1; i <= memoryData.length; i++) {
            const nextIndex =
                (currentMemoryIndex + i) % memoryData.length;

            if (!visitedMemories.has(nextIndex)) {
                showMemory(nextIndex);
                return;
            }
        }
    });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            closeModal();
        }
    });


    // ===================================
    // SCENE 3: OPEN THE LETTER
    // ===================================

    openLetterBtn.addEventListener("click", () => {
        memoriesSection.classList.add("hidden");
        letterSection.classList.remove("hidden");

        letterSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });

    readLetterBtn.addEventListener("click", () => {
        envelope.classList.add("open");

        letterContent.classList.remove("hidden");
        readLetterBtn.classList.add("hidden");

        heartBurst();

        letterContent.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });


    // ===================================
    // SCENE 4: FINAL SURPRISE
    // ===================================

    finalRevealBtn.addEventListener("click", () => {
        letterSection.classList.add("hidden");
        finalSection.classList.remove("hidden");

        updateCountdown();
        heartBurst();

        finalSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });


    // ===================================
    // COUNTDOWN TO 14 OCTOBER
    // ===================================

    function updateCountdown() {
        const now = new Date();

        let birthday = new Date(
            now.getFullYear(),
            9,
            14,
            0,
            0,
            0
        );

        if (now >= birthday) {
            birthday = new Date(
                now.getFullYear() + 1,
                9,
                14,
                0,
                0,
                0
            );
        }

        const difference = birthday.getTime() - now.getTime();

        daysLeft.textContent = Math.ceil(
            difference / (1000 * 60 * 60 * 24)
        );
    }

    updateCountdown();
    setInterval(updateCountdown, 60000);


    // ===================================
    // REPLAY
    // ===================================

    replayBtn.addEventListener("click", () => {
        finalSection.classList.add("hidden");
        intro.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

});