const svg = d3.select('svg');
const width = Number(svg.attr('width'));
const height = Number(svg.attr('height'));
const circleG = svg.append('g')
  .attr('transform', `translate(${width / 2},${height / 2})`);

// 画圆
circleG
  .append('circle')
  .attr('r', height / 2)
  .attr('fill', 'yellow')
  .attr('stroke', 'black');

// paint eye
const eyeRadius = 20;
const eyeSpacing = 140;
const eyeOffsetY = 40;

// 创建出来的eyeG位于圆心正中间
const eyeG = circleG.append('g').attr('transform', `translate(0, ${-eyeOffsetY})`);

const eyeLeft = eyeG.append('circle')
  .attr('r', eyeRadius)
  .attr('cx', -eyeSpacing);

const eyeRight = eyeG.append('circle')
  .attr('r', eyeRadius)
  .attr('cx', eyeSpacing);

// paint eyebrow
const eyebrowOffsetY = 100;
const eyebrowWidth = eyeRadius * 2;
const eyebrowHeight = eyeRadius / 2;
const eyebrowSpacing = eyeSpacing;
const eyebrowG = circleG.append('g').attr('transform', `translate(0, ${-eyebrowOffsetY})`);

const eyebrowLeft = eyebrowG.append('rect')
  .attr('width', eyebrowWidth)
  .attr('height', eyebrowHeight)
  .attr('x', -(eyebrowSpacing + eyeRadius));

const eyebrowRight = eyebrowG.append('rect')
  .attr('width', eyebrowWidth)
  .attr('height', eyebrowHeight)
  .attr('x', eyebrowSpacing - eyeRadius);

// paint mouth

const mouth = circleG.append('path')
// @ts-ignore
  .attr('d', d3.arc()({
    innerRadius: eyeSpacing + eyeRadius,
    outerRadius: eyeSpacing - eyeRadius,
    startAngle: Math.PI / 2,
    endAngle: Math.PI * 3 / 2
  }));
