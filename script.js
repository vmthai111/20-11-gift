const flowers = document.querySelectorAll('.flower');

flowers.forEach(flower => {
    const left = Math.random() * window.innerWidth;
    const duration = 5 + Math.random() * 5;
    const delay = Math.random() * 5;
    flower.style.left = left + 'px';
    flower.style.animationDuration = duration + 's';
    flower.style.fontSize = 20 + Math.random() * 30 + 'px';
    flower.style.animationDelay = delay + 's';
});
