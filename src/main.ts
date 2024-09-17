import './style.css'

const app = new PIXI.Application();
app.init({ width: 640, height: 360, backgroundColor: 0xffffff }).then(() => {
  document.body.appendChild(app.canvas);

  const line = new PIXI.Graphics()
    .moveTo(100, 200)
    .lineTo(200, 100)
    .lineTo(300, 200)
    .stroke({ width: 1, color: 0 });

  app.stage.addChild(line);
});
