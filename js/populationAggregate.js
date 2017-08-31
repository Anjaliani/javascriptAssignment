
 
var svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height"),
    radius = Math.min(width, height) / 2,
    g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
 
var color = d3.scaleOrdinal(["#5FECEC","#CEEC5F", "#D571DC", "#DC3D69", "#132AE5", "#ff8c00"]);
 
var pie = d3.pie()
    .sort(null)
    .value(function(d) { return d.population_2013; });
 
var path = d3.arc()
    .outerRadius(radius - 10)
    .innerRadius(0);
 
var label = d3.arc()
    .outerRadius(radius - 40)
    .innerRadius(radius - 40);
 
d3.json("../json/aggre1.json", function(error, data) {
  if (error) throw error;
 
  var arc = g.selectAll(".arc")
    .data(pie(data))
    .enter().append("g")
      .attr("class", "arc");
 
  arc.append("path")
      .attr("d", path)
      .attr("fill", function(d) { return color(d.data.continent); });
 
  arc.append("text")
      .attr("transform", function(d) { return "translate(" + label.centroid(d) + ")"; })
      .attr("dy", "0.35em")
      .text(function(d) { return d.data.continent; });
});
 
