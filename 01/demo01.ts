import d3 from 'd3';
// Select the svg area
const svg = d3.select('#Viz_area');

// Create a scale: transform value in pixel
const x = d3.scaleLinear()
  .domain([0, 100])         // This is the min and the max of the data: 0 to 100 if percentages
  .range([50, 400]);       // This is the corresponding value I want in Pixel

// Show the axis that corresponds to this scale
svg.call((d3.axisBottom(x)) as any);

// Add 3 dots for 0, 50 and 100%
svg.append('circle')
  .attr('cx', x(10)).attr('cy', 100).attr('r', 40).style('fill', 'blue');
svg.append('circle')
  .attr('cx', x(50)).attr('cy', 100).attr('r', 40).style('fill', 'red');
svg.append('circle')
  .attr('cx', x(100)).attr('cy', 100).attr('r', 40).style('fill', 'green');
