# Blocks

<div id="blocks">
  <div id="controls">
    <div id="sizewrapper">
      <label for="size">Size: </label>
      <input type="number" id="size" name="size" min="1" max="25" value="15">
    </div>
    <div id="roundwrapper">
      <label for="round">Round: </label>
      <input type="number" id="round" name="round" min="1" max="128" value="8">
      <input type="checkbox" id="shape" name="shape" title="tall/long">
    </div>
    <div id="buttonwrapper">
      <button id="add">Add Range</button>
      <button id="reset" title="reset">↻</button>
    </div>
    <div id="rangewrapper">
      <div id="rangelabels">
        <div>Min</div>
        <div>Max</div>
        <div>Color</div>
      </div>
      <div id="ranges"></div>
    </div>
  </div>
  <canvas id="canvas" width="400" height="400"></canvas>
</div>

<script>
    /* Setup */
    let size = 15;
    let round = 8;
    let ranges = {};
    let colors = [
      "#FF0000",
      "#00FF00",
      "#0000FF",
      "#FFFF00",
      "#FF00FF",
      "#00FFFF",
      "#FF8000",
      "#FF0080",
      "#80FF00",
      "#8000FF",
      "#0080FF",
      "#00FF80",
      "#FF80FF",
      "#80FFFF",
      "#FFFF80",
      "#FF8080",
      "#80FF80",
      "#8080FF",
      "#FF80FF",
      "#80FFFF",
    ]
    const sizeInput = document.getElementById('size');
    const sizeValue = document.getElementById('sizevalue');
    const roundInput = document.getElementById('round');
    const roundValue = document.getElementById('roundvalue');
    const rangesContainer = document.getElementById('ranges');
    const clearStorageButton = document.getElementById('reset');
    const shapeCheckbox = document.getElementById('shape');

    /* Add Event Listeners */
    clearStorageButton.addEventListener('click', () => {
      localStorage.clear();
      rangesContainer.innerHTML = '';
      loadLocalStorage();
    });

    sizeInput.addEventListener('input', () => {
      size = sizeInput.value;
      localStorage.setItem('size', size);
      drawBlocks();
    });

    roundInput.addEventListener('input', () => {
      round = roundInput.value;
      localStorage.setItem('round', round);
      drawBlocks();
    });

    add.addEventListener('click', () => {
      addRange();
    });

    shapeCheckbox.addEventListener('change', () => {
      drawBlocks();
    });

    loadLocalStorage();

    function loadLocalStorage() {
      // Load Size from local storage
      if (localStorage.getItem('size')) {
        sizeInput.value = parseInt(localStorage.getItem('size'));
        size = sizeInput.value;
      } else {
        localStorage.setItem('size', size);
      }

      // Load Round from local storage
      if (localStorage.getItem('round')) {
        roundInput.value = parseInt(localStorage.getItem('round'));
        round = roundInput.value;
      } else {
        localStorage.setItem('round', round);
      }

      // Load Ranges from local storage
      const rangesTemp = JSON.parse(localStorage.getItem('ranges')) || new Object();
      if (Object.keys(rangesTemp).length === 0) {
        console.log("No ranges found, creating default ranges")
        rangesContainer.append(createRangeFields(Date.now(), 1, 8));
        rangesContainer.append(createRangeFields(Date.now()+1, 9, 16));
        rangesContainer.append(createRangeFields(Date.now()+2, 17, 24));
        updateRangeState();
      } else {
        for (const [id, range] of Object.entries(rangesTemp)) {
          console.log("Loading range " + id + ", min: " +  range.min + ", max: " + range.max + ", color: " + range.color)
          const rangeElement = createRangeFields(id, range.min, range.max, range.color)
          rangesContainer.append(rangeElement);
        }
      }

      drawBlocks();
    }

    function randomColor() {
      return colors[Math.floor(Math.random() * colors.length)];
    }

    function addRange() {
      const id = Date.now();
      const maxRange = getMaxRange();
      const min = maxRange + 1;
      const max = maxRange + parseInt(round);
      rangesContainer.append(createRangeFields(id, min, max));
      updateRangeState();
    }

    function createRangeFields(id, min=1, max=8, color=randomColor()) {
      console.log("Creating range field " + id + ", min: " +  min + ", max: " + max + ", color: " + color)
      const rangeContainer = document.createElement('div');
      rangeContainer.id = id;

      const minInput = document.createElement('input');
      minInput.id = 'min';
      minInput.type = 'number';
      minInput.placeholder = 'Min';
      minInput.min = 1;
      minInput.value = min;
      minInput.title = 'Minimum value of the range';
      minInput.addEventListener('input', () => {
        maxInput.min = minInput.value;
        updateRangeState();
      });

      const maxInput = document.createElement('input');
      maxInput.id = 'max';
      maxInput.type = 'number';
      maxInput.placeholder = 'Max';
      maxInput.min = minInput.value;
      maxInput.value = max;
      maxInput.title = 'Maximum value of the range';
      maxInput.addEventListener('input', () => {
        minInput.max = maxInput.value;
        updateRangeState();
      });

      const colorInput = document.createElement('input');
      colorInput.id = 'color';
      colorInput.type = 'color';
      colorInput.value = color;
      colorInput.title = 'Color of the range';
      colorInput.addEventListener('input', () => {
        updateRangeState();
      });

      const deleteButton = document.createElement('button');
      deleteButton.id = 'delete';
      deleteButton.innerHTML = 'X';
      deleteButton.title = 'Delete range';
      deleteButton.addEventListener('click', () => {
        const localRanges = JSON.parse(localStorage.getItem('ranges')) || {};
        delete localRanges[id];
        localStorage.setItem('ranges', JSON.stringify(localRanges));
        updateRangeState();
        rangeContainer.remove();
      });

      rangeContainer.appendChild(minInput);
      rangeContainer.appendChild(maxInput);
      rangeContainer.appendChild(colorInput);
      rangeContainer.appendChild(deleteButton);
      return rangeContainer;
    }

    function updateRangeState() {
      const rangeElements = document.getElementById("ranges").children;
      const localRanges = JSON.parse(localStorage.getItem('ranges')) || {};
      for (let rangeElement of rangeElements) {
          const id = rangeElement.id;
          const minInput = rangeElement.querySelector('#min');
          const maxInput = rangeElement.querySelector('#max');
          const colorInput = rangeElement.querySelector('#color');
            localRanges[id] = {
              min: minInput.value,
              max: maxInput.value,
              color: colorInput.value,
            };
        };
      ranges = localRanges;
      console.log(ranges);
      localStorage.setItem('ranges', JSON.stringify(localRanges));
      drawBlocks();
    }

    function retrieveRangeState(){
      ranges = JSON.parse(localStorage.getItem('ranges'))
      return ranges;
    }

    function drawCorner(ctx, x, y, size, color="#000000") {
      ctx.fillStyle = color;
      let s1 = size/4
      let s2 = size/8
      ctx.fillRect(x+size-s1, y+size-s2, s1, s2);
      ctx.fillRect(x+size-s2, y+size-s1, s2, s1);
    }

    function getMaxRange() {
      updateRangeState();
      const ranges = retrieveRangeState();
      return Math.max(...Object.values(ranges).map(({ max }) => max));
    }

    function getShape(numBlocks, round) {
      let nr // num rows
      let bpr // blocks per row
      if (round > 2 && numBlocks >= round) {
        let shape = shapeCheckbox.checked
        let a = Math.max(
                2,
                Math.round(numBlocks/round)
              )
        let b = Math.floor(Math.sqrt(numBlocks))
        if (shape) {
          nr = Math.min(a, b)
        } else {
          nr = Math.max(a, b)
        }
        bpr = Math.floor(numBlocks / nr)
      } else {
        bpr = Math.round(Math.ceil(Math.sqrt(numBlocks)))
        nr = numBlocks / bpr
      }
      console.log(nr, bpr)
      // if (numBlocks % round || numBlocks + 1 % round) {
      //   return Math.round(Math.ceil(Math.sqrt(numBlocks)) / round) * round;
      // }
      // bpr = Math.round(Math.ceil(Math.sqrt(numBlocks)))
      // nr = numBlocks / bpr
      return [bpr, nr]
    }

    function drawBlocks(ranges=retrieveRangeState(), _size=parseInt(size), _round=parseInt(round)) {
      const canvas = document.getElementById('canvas');
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      let blockWidth = _size;
      let blockHeight = _size;
      let padding = Math.round(_size*0.25);

      // Calculate the maximum block number from all ranges
      const numBlocks = Math.max(...Object.values(ranges).map(({ max }) => max));

      // Calculate the approximate number of blocks per row to get a square layout
      const [blocksPerRow, numRows] = getShape(numBlocks, _round);

      //console.log("Drawing " + numBlocks + " blocks" + ", blockWidth: " + blockWidth + ", blockHeight: " + blockHeight + ", padding: " + padding + ", blocksPerRow: " + blocksPerRow + ", numColumns: " + numColumns, ", round: " + _round, ", size: " + _size);

      // Initialize the starting position
      let x = 0;
      let y = 0;

      // Counter for blocks drawn
      let count = 1;

      // Draw blocks
      for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < blocksPerRow; j++) {
          // Stop drawing blocks once the desired number is reached
          if (count > numBlocks) return;


          // Find the color for this block
          let color = "#a0a0a0";  // default color
          for (let range of Object.values(ranges)) {
            if (count >= range.min && count <= range.max) {
              color = range.color;
              break;
            }
          }

          // Draw the block with the chosen color
          ctx.fillStyle = color;
          ctx.fillRect(x, y, blockWidth, blockHeight);

          // If the block's order is divisible by round, draw a black corner
          if (count % _round === 0 && _round > 1) {
            drawCorner(ctx, x, y, _size);
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
</script>

<style>
#blocks {
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
}

#canvas {
  border: 1px solid #000000;
  margin: 1rem auto;
}
#controls input {
  padding: 0.375rem;
  margin: 0.25rem;
  font-size: 1.2rem;
  width: 6rem;
}
#sizewrapper, #roundwrapper {
  display: flex;
  align-items: center;
  margin: 1rem 0;
}
label {
  font-weight: bold;
  margin-right: 0.5rem;
}
#rangewrapper {
  display: flex;
  flex-direction: column;
  align-items: start;
  width: fit-content;
  margin: .5em 0;
}
#rangelabels {
  display: flex;
  justify-content: space-around;
  width: calc(100% - 1em);
}
#rangelabels > * {
  text-align: center;
}
#ranges {
  display: flex;
  flex-direction: column;
  align-items: start;
}
#ranges > div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0;

}

#ranges > div > input[type="color"] {
  aspect-ratio: 1 / 1;
  width: 3.125rem;
  height: 3.125rem;
  padding: 0rem;
  border: none;
}

#delete {
  margin-left: 0.25rem;
  padding: 0.375rem 0.625rem;
  font-size: 1.2rem;
  background-color: #ff0000;
  color: #ffffff;
  border: none;
  border-radius: 0.25rem;
}
</style>