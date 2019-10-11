"use strict";
var svg = d3.select('svg');
var width = Number(svg.attr('width'));
var height = Number(svg.attr('height'));
var circleG = svg.append('g')
    .attr('transform', "translate(" + width / 2 + "," + height / 2 + ")");
// 画圆
circleG
    .append('circle')
    .attr('r', height / 2)
    .attr('fill', 'yellow')
    .attr('stroke', 'black');
// paint eye
var eyeRadius = 20;
var eyeSpacing = 140;
var eyeOffsetY = 40;
// 创建出来的eyeG位于圆心正中间
var eyeG = circleG.append('g').attr('transform', "translate(0, " + -eyeOffsetY + ")");
var eyeLeft = eyeG.append('circle')
    .attr('r', eyeRadius)
    .attr('cx', -eyeSpacing);
var eyeRight = eyeG.append('circle')
    .attr('r', eyeRadius)
    .attr('cx', eyeSpacing);
// paint eyebrow
var eyebrowOffsetY = 100;
var eyebrowWidth = eyeRadius * 2;
var eyebrowHeight = eyeRadius / 2;
var eyebrowSpacing = eyeSpacing;
var eyebrowG = circleG.append('g').attr('transform', "translate(0, " + -eyebrowOffsetY + ")");
var eyebrowLeft = eyebrowG.append('rect')
    .attr('width', eyebrowWidth)
    .attr('height', eyebrowHeight)
    .attr('x', -(eyebrowSpacing + eyeRadius));
var eyebrowRight = eyebrowG.append('rect')
    .attr('width', eyebrowWidth)
    .attr('height', eyebrowHeight)
    .attr('x', eyebrowSpacing - eyeRadius);
// paint mouth
var mouth = circleG.append('path')
    // @ts-ignore
    .attr('d', d3.arc()({
    innerRadius: eyeSpacing + eyeRadius,
    outerRadius: eyeSpacing - eyeRadius,
    startAngle: Math.PI / 2,
    endAngle: Math.PI * 3 / 2
}));
