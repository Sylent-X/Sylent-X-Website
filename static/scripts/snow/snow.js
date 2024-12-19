document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('snowflakes');
    if (!canvas) {
        console.error('Canvas element with id "snowflakes" not found.');
        return;
    }
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const snowflakes = [];

    function createSnowflakes() {
        const numberOfSnowflakes = 100;
        for (let i = 0; i < numberOfSnowflakes; i++) {
            snowflakes.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                opacity: Math.random(),
                speedX: Math.random() * 3 - 1.5,
                speedY: Math.random() * 3 + 1,
                radius: Math.random() * 4 + 1
            });
        }
    }

    function drawSnowflakes() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.beginPath();
        for (const snowflake of snowflakes) {
            ctx.moveTo(snowflake.x, snowflake.y);
            ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2, true);
        }
        ctx.fill();
        moveSnowflakes();
    }

    function moveSnowflakes() {
        for (const snowflake of snowflakes) {
            snowflake.x += snowflake.speedX;
            snowflake.y += snowflake.speedY;

            if (snowflake.y > canvas.height) {
                snowflake.y = 0;
            }

            if (snowflake.x > canvas.width) {
                snowflake.x = 0;
            }

            if (snowflake.x < 0) {
                snowflake.x = canvas.width;
            }
        }
    }

    function updateSnowfall() {
        drawSnowflakes();
        requestAnimationFrame(updateSnowfall);
    }

    createSnowflakes();
    updateSnowfall();

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
});