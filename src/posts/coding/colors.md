
# CSS Colors

These are some common colors I use in CSS, this is mostly a quick reference for myself. I imagine this list will grow with time.

<div style="display: flex; flex-direction: row; flex-wrap: wrap; gap: 1rem">
  <style>
    .color-example {
      display: flex;
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      margin: 1rem;
      text-align: center;
      justify-content: center;
      align-items: center;
      font-size: 1rem;
    }
  </style>
  <div class="color-example" style="background-color: rgba(0, 0, 0, 0.98); color: white">
    blackish
  </div>
  <div class="color-example" style="background-color: rgba(242, 242, 242, 0.6); color: black">
    gray-light
  </div>
  <div class="color-example" style="background-color: rgba(255, 255, 255, 1); color: black">
    white
  </div>
  <div class="color-example" style="background-color: rgb(225, 225, 225); color: black">
    whitish
  </div>
  <div class="color-example" style="background-color: rgb(108, 149, 153); color: white">
    steel
  </div>
  <div class="color-example" style="background-color: #59f02b; color: black">
    neon-green
  </div>
  <div class="color-example" style="background-color: #19d457; color: black">
    green
  </div>
  <div class="color-example" style="background-color: #61f291; color: black">
    green-light
  </div>
  <div class="color-example" style="background-color: #45a164; color: white">
    jade
  </div>
  <div class="color-example" style="background-color: #405c37; color: white">
    hunter-green
  </div>
  <div class="color-example" style="background-color: #315db5; color: white">
    dark-blue
  </div>
  <div class="color-example" style="background-color: #477eed; color: white">
    blue
  </div>
  <div class="color-example" style="background-color: #53d3e0; color: black">
    blue-light
  </div>
  <div class="color-example" style="background-color: #a7f6ff; color: black">
    blue-very-light
  </div>
  <div class="color-example" style="background-color: #9198e5; color: black">
    violet
  </div>
  <div class="color-example" style="background-color: #b4bbff; color: black">
    violet-light
  </div>
  <div class="color-example" style="background-color: #cc71c2; color: white">
    mauve
  </div>
  <div class="color-example" style="background-color: #bf2c7f; color: white">
    pink
  </div>
  <div class="color-example" style="background-color: #b638f5; color: white">
    purple
  </div>
  <div class="color-example" style="background-color: #ff7575; color: black">
    sunset
  </div>
  <div class="color-example" style="background-color: #ffb585; color: black">
    sunset-light
  </div>
  <div class="color-example" style="background-color: #fa5f5f; color: white">
    orangered
  </div>
  <div class="color-example" style="background-color: #de1a1a; color: white">
    max-red
  </div>
  <div class="color-example" style="background-color: #fad14b; color: black">
    yellow
  </div>
</div>

```css
:root {
  --blackish: rgba(0, 0, 0, 0.98);
  --gray-light: rgba(242, 242, 242, 0.6);
  --white: rgba(255, 255, 255, 1);
  --whitish: rgb(225, 225, 225);
  --steel: rgb(108, 149, 153);
  --neon-green: #59f02b;
  --green: #19d457;
  --green-light: #61f291;
  --jade: #45a164;
  --hunter-green: #405c37;
  --dark-blue: #315db5;
  --blue: #477eed;
  --blue-light: #53d3e0;
  --blue-very-light: #a7f6ff;
  --violet: #9198e5;
  --violet-light: #b4bbff;
  --mauve: #cc71c2;
  --pink: #bf2c7f;
  --purple: #b638f5;
  --sunset: #ff7575;
  --sunset-light: #ffb585;
  --orangered: #fa5f5f;
  --max-red: #de1a1a;
  --yellow: #fad14b;
}
```
