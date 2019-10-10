/**
 * <circle></circle>
 * cx: 定义一个中心点的x轴坐标
 * cy: 定义一个中心点的y轴坐标
 * r : 用来定义圆的半径
 *
 * x,y轴坐标相对于父元素
 *
 * selection.data: 指定一组数据和对应于选择的元素
 *
 * data中的值的每一项会作为调用`api`中传入函数的第一个参数，第二个参数为当前元素的索引
 */
// const svg = d3.select('svg');
// const circle = svg.selectAll('circle');
// set circle.style
// circle.style('fill', 'steelblue');

// attr , data, second callback function parameters
// function first param: item in data, second param: element index in all elements
// circle
//   .data([32, 57, 112])
//   .attr('fill', 'steelblue')
//   .attr('r', (d) => Math.sqrt(d))
//   .attr('cx', (d, i) => {
//     console.log(d, i); //
//     return 40 * (i + 1);
//   });

// enter: 暂时不存在的DOM元素中的每个数据元素的占位符节点
// const svg = d3.select('svg');
//
// const circle = svg.selectAll('circle')
//   .data([32, 57, 112, 293]);
//
// const circleEnter = circle.enter().append('circle');
// circleEnter.attr('cy', 60)
//   .attr('cx', 160)
//   .attr('r', function (d) { return Math.sqrt(d); });

// common use combination: selectAll + data + enter + append

// use a svg dynamic create circle what the number of it correspond of data
const svg = d3.select('svg');

svg.selectAll('circle')
  .data([32, 57, 112, 293])
  .enter().append('circle')
  .attr('cy', 60)
  .attr('cx', (d, i) => i * 100 + 30)
  .attr('r', d => Math.sqrt(d));
