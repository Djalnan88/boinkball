export class Ball {
    constructor(stageWidth, stageHeight, radius, speed) {
        this.radius = radius;
        this.vx = speed;
        this.vy = speed;

        const diameter = this.radius * 2;
        this.x = diameter + (Math.random() * stageWidth - diameter);
        this.y = diameter + (Math.random() * stageHeight - diameter);
    }

    draw(ctx, stageWidth, stageHeight, block) {
        this.x += this.vx;
        this.y += this.vy;

        this.bounceWindow(stageWidth, stageHeight);
        for (var i = 0; i < 3; i++) {
            this.bounceBlock(block[i]);
        }
 
        ctx.fillStyle = "#fdd700"
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();

    }

    bounceWindow(stageWidth, stageHeight) {
        const minX = this.radius;
        const minY = this.radius;
        const maxX = stageWidth - this.radius;
        const maxY = stageHeight - this.radius;

        if (this.x <= minX || this.x >= maxX) {
            this.vx *= -1;
        }
        if (this.y <= minY || this.y >= maxY) {
            this.vy *= -1;
        }
    }

    bounceBlock(block) {
        const minX = block.x - this.radius;
        const maxX = block.maxX + this.radius;
        const minY = block.y - this.radius;
        const maxY = block.maxY + this.radius;

        if(this.x >= minX && this.x <= maxX && this.y >= minY && this.y <= maxY) {
            const x1 = Math.abs(minX - this.x);
            const x2 = Math.abs(maxX - this.x);
            const y1 = Math.abs(minY - this.y);
            const y2 = Math.abs(maxY - this.y);
            const min1 = Math.min(x1, x2);
            const min2 = Math.min(y1, y2);
            const min = Math.min(min1, min2);

            if(min == min1) {
                this.vx *= -1;
            } else if(min == min2) {
                this.vy *= -1;
            }
        }
    }
}
