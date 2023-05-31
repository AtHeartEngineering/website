# Blocks

<canvas id="canvas" width="800" height="800"></canvas><canvas>

<script>
      function drawCorner(ctx, x, y, size, color="#000000") {
      ctx.fillStyle = color;
      let s1 = size/4
      let s2 = size/8
      ctx.fillRect(x+size-s1, y+size-s2, s1, s2);
      ctx.fillRect(x+size-s2, y+size-s1, s2, s1);
    }

    function drawBlocks(ranges, size=3, round=8) {
      const canvas = document.getElementById('canvas');
      const ctx = canvas.getContext('2d');

      let blockWidth = size;
      let blockHeight = size;
      let padding = Math.round(size*0.25);

      // Calculate the maximum block number from all ranges
      let numBlocks = Math.max(...ranges.map(range => range.max));

      // Calculate the approximate number of blocks per row to get a square layout
      let blocksPerRow = Math.round(Math.ceil(Math.sqrt(numBlocks)) / round) * round;
      let numColumns = numBlocks/blocksPerRow

      // Initialize the starting position
      let x = 0;
      let y = 0;

      // Counter for blocks drawn
      let count = 1;

      // Draw blocks
      for (let i = 0; i < numColumns; i++) {
        for (let j = 0; j < blocksPerRow; j++) {
          // Stop drawing blocks once the desired number is reached
          if (count > numBlocks) return;

          // Find the color for this block
          let color = "#808080";  // default color
          for (let range of ranges) {
            if (count >= range.min && count <= range.max) {
              color = range.color;
              break;
            }
          }

          // Draw the block with the chosen color
          ctx.fillStyle = color;
          ctx.fillRect(x, y, blockWidth, blockHeight);

          // If the block's order is divisible by round, draw a black corner
          if (count % round === 0) {
            drawCorner(ctx, x, y, size);
          }

          // Increment block counter
          count++;

          // Move to the next position
          x += blockWidth + padding;
        }

        // Reset x to 0 and increment y for the next row
        x = 0;
        y += blockHeight + padding;
      }
    }

    // Call the function to draw the blocks
    const ranges = [
      { min: 1, max: 5, color: "#00CC00" },
      { min: 6, max: 10, color: "#70F000" },
      { min: 75, max: 512, color: "#CCCC00" },
    ];
    drawBlocks(ranges, 15);
</script>