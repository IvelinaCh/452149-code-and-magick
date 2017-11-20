'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.beginPath();
  ctx.bezierCurveTo(110, 40, 215, 20, 320, 40);
  ctx.bezierCurveTo(320, 40, 425, 60, 530, 40);
  ctx.bezierCurveTo(530, 40, 510, 155, 530, 260);
  ctx.bezierCurveTo(530, 260, 425, 280, 320, 260);
  ctx.bezierCurveTo(320, 260, 215, 240, 110, 260);
  ctx.bezierCurveTo(110, 260, 130, 155, 110, 40);
  ctx.closePath();
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fill();

  ctx.beginPath();
  ctx.bezierCurveTo(100, 30, 205, 10, 310, 30);
  ctx.bezierCurveTo(310, 30, 415, 50, 520, 30);
  ctx.bezierCurveTo(520, 30, 500, 145, 520, 250);
  ctx.bezierCurveTo(520, 250, 415, 270, 310, 250);
  ctx.bezierCurveTo(310, 250, 205, 230, 100, 250);
  ctx.bezierCurveTo(100, 250, 120, 145, 100, 30);
  ctx.closePath();
  ctx.fillStyle = 'white';
  ctx.fill();

  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 50);
  ctx.fillText('Список результатов:', 120, 70);

  var findMax = function (arr) {
    var max = -1;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }

    return max;
  };

  findMax(times);

  var canvasHeight = 270;
  var histogramHeight = 150;
  var max;//var opacityRandom = Math.random();

  var barWidth = 40;
  var indent = 90;
  var initialX = 150;
  var initialY = 200;
  var lineHeight = 30;
  var step = histogramHeight - lineHeight * 2;

  for (var i = 0; i < times.length; i++) {
    ctx.fillStyle = 'black';
    ctx.fillText(parseInt(times[i], 10), initialX + indent * i, 100);
    ctx.fillText(names[i], initialX + indent * i, canvasHeight - lineHeight);
    ctx.fillStyle = 'rgba(0, 0, 255, 1)';
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    };
    ctx.fillRect(initialX + indent * i, initialY - times[i] * step / max, barWidth, times[i] * step / max);
  };
};
