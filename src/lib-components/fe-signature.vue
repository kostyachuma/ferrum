<template>
  <canvas
    ref="canvas"
    :width="288"
    :height="100"
    class="bg-catskill-white border rounded"
    @mousedown="beginDrawing"
    @mousemove="keepDrawing"
    @mouseup="stopDrawing"
    
  />
</template>

<script>
export default {
  data() {
    return {
      x: 0,
      y: 0,
      isDrawing: false,
      canvas: null,
      dataURL: "",
    };
  },
  mounted() {
    this.canvas = this.$refs.canvas.getContext("2d");
  },
  watch: {
    isDrawing() {
      this.dataURL = this.$refs.canvas.toDataURL();
      this.$emit("input", this.dataURL);
    },
  },
  methods: {
    drawLine(x1, y1, x2, y2) {
      let ctx = this.canvas;
      ctx.beginPath();
      ctx.strokeStyle = "black";
      ctx.lineWidth = 1;
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
      ctx.closePath();
    },
    beginDrawing(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
      this.isDrawing = true;
    },
    keepDrawing(e) {
      if (this.isDrawing === true) {
        this.drawLine(this.x, this.y, e.offsetX, e.offsetY);
        this.x = e.offsetX;
        this.y = e.offsetY;
      }
    },
    stopDrawing(e) {
      if (this.isDrawing === true) {
        this.drawLine(this.x, this.y, e.offsetX, e.offsetY);
        this.x = 0;
        this.y = 0;
        this.isDrawing = false;
      }
    },
    clear() {
      const w = this.$refs.canvas.width;
      const h = this.$refs.canvas.height;
      this.canvas.clearRect(0, 0, w, h);
      this.$emit("input", '');
    },
  },
};
</script>
