
export interface Category {
  rate: number;
  // odds: number;
  name: string;
  color?: string;
}

function d2a(dgree: number) {
  const a = Math.PI/180 * dgree;
  return a;
}

function randomN (max: number) {
  const m = Math.floor(Math.random() * max + 1);
  return m;
}

export class ArcRaffle{
  el: HTMLCanvasElement;

  categories: Category[] = [];

  __rotate: number = -90;

  isRotating: boolean = false;
  isRotated: boolean = false;

  __rotateTimer: number;
  constructor(el: HTMLCanvasElement) {

    if (!el) {
      console.error('请提供canvas元素');
    }
    this.el = el;
  }

  setData(arr: Category[]) {
    for (let i = 0; i < arr.length; i++) {
      arr[i].color = `rgb(${randomN(255)}, ${randomN(255)}, ${randomN(255)})`;
    }
    this.categories = arr || [];

  }

  getSelected() {
    if (this.isRotated) {
      let i = 0;
      let startAngle = 0;
      while(i < this.categories.length) {
        const cate = this.categories[i];
        const currentAngle = startAngle + (cate.rate) * 360;
        console.info(this.__rotate, currentAngle)
        if (this.__rotate < currentAngle) {
          return cate;
        }
        startAngle = currentAngle;
        i++;
      }
    }


  }

  
  drawRates() {
    const { width, height } = this.el;
    const ctx = this.el.getContext('2d');
    
    const centerX = width / 2;
    const centerY = height / 2;
    let prevA = 0;
    ctx.save();
    for (let i = 0; i < this.categories.length; i++) {
      ctx.beginPath();
      // ctx.imageSmoothingEnabled = true;
      // ctx.imageSmoothingQuality = 'high';
      ctx.moveTo(centerX, centerY);
      const cate = this.categories[i];
      const currentA = cate.rate * 360 + prevA;
      const aS = d2a(prevA);
      const aE = d2a(currentA);
      ctx.arc(centerX, centerY, centerX, aS, aE);
      ctx.fillStyle = cate.color || `rgb(${randomN(255)}, ${randomN(255)}, ${randomN(255)})`;
      ctx.closePath();
      // ctx.stroke();
      ctx.fill();
      prevA = currentA;
    }
    
    ctx.restore();
  }
  
  drawPointer() {
    const { width, height } = this.el;
    const ctx = this.el.getContext('2d');
    const centerX = width / 2;
    const startX = centerX;
    const startY = centerX / 2;
    const radius = centerX / 2;
    
    const endX = Math.cos(d2a(this.__rotate)) * radius + centerX;
    const endY = Math.sin(d2a(this.__rotate)) * radius + centerX;
    ctx.save();
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.moveTo(centerX, centerX);
    ctx.lineTo(endX, endY);
    ctx.stroke();
    ctx.fill();
    
    ctx.restore();
  }

  stop() {
    this.isRotating = false;
    cancelAnimationFrame(this.__rotateTimer);
    this.__rotateTimer = undefined;
  }
  
  start () {
    if (this.isRotating) {
      return;
    }
    this.isRotating = true;
    this.isRotated = true;
    const { width, height } = this.el;
    const ctx = this.el.getContext('2d');
    ctx.clearRect(0, 0, width, height);

    this.drawRates();
    this.drawPointer();

    const _that = this;
    function run() {
      const step = 10;
      _that.__rotate = (_that.__rotate + step) % 360;
      // console.info(_that.__rotateX, _that.__rotateY);
      ctx.clearRect(0, 0, _that.el.width, _that.el.height);
      _that.drawRates();
      _that.drawPointer();
      _that.__rotateTimer = requestAnimationFrame(run);
    }

    this.__rotateTimer = requestAnimationFrame(run);
  }

  draw () {
    const { width, height } = this.el;
    const ctx = this.el.getContext('2d');
    ctx.clearRect(0, 0, width, height);
    this.drawRates();
    this.drawPointer();
  }

  reset() {
    
  }

}