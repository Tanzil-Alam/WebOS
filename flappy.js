const game = document.getElementById('game'), bird = document.getElementById('bird'), scoreTxt = document.getElementById('score'), msg = document.getElementById('msg');
let bY = 150, spd = 0, scr = 0, run = false, over = false, pairs = [], loop, timer;

const act = () => { if (!run && !over) start(); else if (run) spd = -6; else location.reload(); };
game.onclick = act;
document.onkeydown = e => e.code === 'Space' && act();

function start() { run = true; msg.style.display = 'none'; loop = setInterval(upd, 20); timer = setInterval(add, 1600); }

function add() {
    let off = Math.random() * 80 - 40;
    let t = document.createElement('div'), b = document.createElement('div');
    t.className = 'pipe-top'; t.style.top = off + 'px'; t.innerHTML = '<img src="icon14.png">';
    b.className = 'pipe-bot'; b.style.bottom = -off + 'px'; b.innerHTML = '<img src="icon13.png">';
    game.append(t, b);
    pairs.push({ t, b, x: 500, hit: false });
}

function hit(a, b) {
    let r1 = a.getBoundingClientRect(), r2 = b.getBoundingClientRect();
    return !(r1.right < r2.left || r1.left > r2.right || r1.bottom < r2.top || r1.top > r2.bottom);
}

function upd() {
    spd += 0.4; bY += spd; bird.style.top = bY + 'px';
    let bR = bird.firstElementChild.getBoundingClientRect(), gR = game.getBoundingClientRect();
    if (bR.top <= gR.top || bR.bottom >= gR.bottom) end();

    pairs.forEach(p => {
        p.x -= 3; p.t.style.left = p.b.style.left = p.x + 'px';
        if (hit(bird.firstElementChild, p.t.firstElementChild) || hit(bird.firstElementChild, p.b.firstElementChild)) end();
        if (p.x < 10 && !p.hit) { p.hit = true; scoreTxt.innerText = ++scr; }
    });
}

function end() { run = false; over = true; clearInterval(loop); clearInterval(timer); msg.style.display = 'block'; msg.innerHTML = 'Game Over!<br>Click to Restart'; }