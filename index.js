// 创建一个画布
const canvas = document.createElement('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

// 获取画布上下文
const ctx = canvas.getContext('2d');

// 定义星云的颜色数组
const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];

// 定义星云粒子对象
class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.radius = Math.random() * 2 + 1;
    this.color = colors[Math.floor(Math.random() * colors.length)];
    this.velocity = {
      x: Math.random() * 2 - 1,
      y: Math.random() * 2 - 1
    };
  }

  // 更新粒子位置
  update() {
    this.x += this.velocity.x;
    this.y += this.velocity.y;
    if (this.x > canvas.width + this.radius || this.x < -this.radius || this.y > canvas.height + this.radius || this.y < -this.radius) {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
    }
  }

  // 绘制粒子
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

// 创建粒子数组
const particles = [];
for (let i = 0; i < 1000; i++) {
  particles.push(new Particle());
}

// 动画循环
function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(particle => {
    particle.update();
    particle.draw();
  });
}

// 启动动画
animate();
