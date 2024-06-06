
class ScrapeDraw {
  el: HTMLCanvasElement;

  drawWidth = 30;

  constructor(el: HTMLCanvasElement) {
    this.el = el;
    this.el.addEventListener('mousedown', this.down.bind(this));
  }

  down(evt: MouseEvent) {
    const { left, top } = this.el.getBoundingClientRect();
    const { clientX, clientY } = evt;
    const ctx = this.el.getContext('2d');
    ctx.beginPath();
    // ctx.strokeStyle = '#000';
    // ctx.strokeStyle = 'transparent';
    ctx.lineCap = 'round';
    ctx.lineWidth = this.drawWidth;
    ctx.globalCompositeOperation = 'destination-out';
    ctx.moveTo(clientX - left, clientY - top);
    // ctx.arc(clientX - left, clientY - top, 20, 0, Math.PI * 2);
    // ctx.clip();
    document.addEventListener('mousemove', this.move);
    document.addEventListener('mouseup', this.up);
  }

  move = (evt: MouseEvent) => {
    const { left, top } = this.el.getBoundingClientRect();
    const { clientX, clientY } = evt;
    const ctx = this.el.getContext('2d');
    ctx.lineTo(clientX - left, clientY - top);
    ctx.stroke();
    // ctx.clip();
  }

  up = (evt: MouseEvent) => {
    const ctx = this.el.getContext('2d');
    // ctx.closePath();
    // ctx.stroke();
    // ctx.clip();

    document.removeEventListener('mousemove', this.move);
    document.removeEventListener('mouseup', this.up);
  }


  draw() {
    const { width, height } = this.el;
    const ctx = this.el.getContext('2d');
    
    // 画遮盖物
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = '#ccc';
    ctx.rect(0, 0, width, height);
    ctx.fill();
    ctx.restore();
    ctx.save();
    ctx.translate(width / 2, height / 2);
    ctx.rotate(-Math.PI * 45 / 180);
    ctx.fillStyle = 'red';
    ctx.fillText('刮一刮', 0, 0);
    ctx.fillText('刮一刮', -10, -10);
    ctx.fillText('刮一刮', -50, -20);
    ctx.fillText('刮一刮', 10, 40);
    ctx.fillText('刮一刮', 20, 80);
    ctx.fillText('刮一刮', 0, 0);
    ctx.fillText('刮一刮', 0, 0);
    // ctx.stroke();
    ctx.restore();
  }
}

export default ScrapeDraw;
