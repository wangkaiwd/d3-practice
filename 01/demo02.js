const { select, arc } = d3;
// d3.arc: 创建一个环形生成器

const svg = select('svg');

const width = svg.attr('width');
const height = svg.attr('height');
// 元素g是用来组合对象的容器。添加到g元素上的变换会应用到其所有的子元素上。添加到g元素的属性会被其所有的子元素继承
// 个人理解：相当于div,对svg里的标签进行分组，对应组里的元素会继承g元素的属性
const g = svg.append('g')
  .attr('transform', `translate(${width / 2}, ${height / 2})`);

const circle = g.append('circle');

// 画圆
circle.attr('r', height / 2);
circle.attr('fill', 'yellow');
// stroke: 定义了给定元素图形的外轮廓的颜色。它的默认值是none
// 个人理解：相当于border
circle.attr('stroke', 'black');

const eyeSpacing = 101;
const eyeYOffset = -89;
const eyeRadius = 40;
// eyebrow: 眉毛
const eyebrowWidth = 70;
const eyebrowHeight = 20;
const eyebrowYOffset = -70;

const eyesG = g
  .append('g')
  .attr('transform', `translate(0, ${eyeYOffset})`);

const leftEye = eyesG
  .append('circle')
  .attr('r', eyeRadius)
  .attr('cx', -eyeSpacing);

const rightEye = eyesG
  .append('circle')
  .attr('r', eyeRadius)
  .attr('cx', eyeSpacing);

const eyebrowsG = eyesG
  .append('g')
  .attr('transform', `translate(0, ${eyebrowYOffset})`);

eyebrowsG
  .transition().duration(2000)
  .attr('transform', `translate(0, ${eyebrowYOffset - 50})`)
  .transition().duration(2000)
  .attr('transform', `translate(0, ${eyebrowYOffset})`);

// rect: SVG的一个基本形状，用来创建矩形，基于一个角位置以及它的宽和高。它还可以用来创建圆角矩形
// rx:
// ry:
// x:
// y:
const leftEyebrow = eyebrowsG
  .append('rect')
  .attr('x', -eyeSpacing - eyebrowWidth / 2)
  .attr('width', eyebrowWidth)
  .attr('height', eyebrowHeight);

const rightEyebrow = eyebrowsG
  .append('rect')
  .attr('x', eyeSpacing - eyebrowWidth / 2)
  .attr('width', eyebrowWidth)
  .attr('height', eyebrowHeight);

const mouth = g
  .append('path')
  .attr('d', arc()({
    innerRadius: 150,
    outerRadius: 170,
    startAngle: Math.PI / 2,
    endAngle: Math.PI * 3 / 2
  }));











