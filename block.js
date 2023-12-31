export class Block {
    constructor(width, height, x, y) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.maxX = width + x;
        this.maxY = height + y;
    }

    draw(ctx) {
        const xGap = 30;
        const yGap = 20;

        ctx.fillStyle = "#ff384e";
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fill(); 

        ctx.fillStyle = "#800814";
        ctx.beginPath();

        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + xGap, this.y - yGap);
        ctx.lineTo(this.maxX + xGap, this.y - yGap);
        ctx.lineTo(this.maxX, this.y);
        ctx.fill();

        ctx.fillStyle = "#9d0919";
        ctx.beginPath();
        ctx.moveTo(this.maxX, this.y);
        ctx.lineTo(this.maxX + xGap, this.y - yGap);
        ctx.lineTo(this.maxX + xGap, this.maxY - yGap);
        ctx.lineTo(this.maxX, this.maxY);
        ctx.fill();

    }
}