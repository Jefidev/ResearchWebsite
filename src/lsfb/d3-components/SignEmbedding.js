import React, {Component} from 'react';
import * as d3 from "d3";

class SignEmbedding extends Component {

    componentDidMount() {
        this.drawChart();
    }



    drawChart() {
        const data = []

        for(let i = 0; i < 100; i +=1){
            var tmp_x = Math.floor(Math.random()*100)
            var tmp_y = Math.floor(Math.random()*100)
            var label = "test"
            var content = "./image.jpg"

            var tmp = {
                "x": tmp_x,
                "y": tmp_y,
                "label": label,
                "hover": content,
                "url": "https://homepages.cae.wisc.edu/~ece533/images/girl.png"
            }

            data.push(tmp)
        }

        const margin = ({top: 25, right: 20, bottom: 35, left: 40})
        const h = this.props.height
        const w = this.props.width

        const x = d3.scaleLinear()
            .domain(d3.extent(data, d => d.x)).nice()
            .range([margin.left, w - margin.right])

        const y = d3.scaleLinear()
            .domain(d3.extent(data, d => d.y)).nice()
            .range([h - margin.bottom, margin.top])


        const xAxis = g => g
                    .attr("transform", `translate(0,${h - margin.bottom})`)
                    .call(d3.axisBottom(x).ticks(w / 80))
                    .call(g => g.select(".domain").remove())
                    .call(g => g.append("text")
                        .attr("x", w)
                        .attr("y", margin.bottom - 4)
                        .attr("fill", "currentColor")
                        .attr("text-anchor", "end")
                        .text("Test x"))

        const yAxis = g => g
                .attr("transform", `translate(${margin.left},0)`)
                .call(d3.axisLeft(y))
                .call(g => g.select(".domain").remove())
                .call(g => g.append("text")
                    
                    .attr("x", -margin.left)
                    .attr("y", 10)
                    .attr("fill", "currentColor")
                    .attr("text-anchor", "start")
                    .style("font-size","10px")
                    .text("Test y"))

        const grid = g => g
                .attr("stroke", "currentColor")
                .attr("stroke-opacity", 0.1)
                .call(g => g.append("g")
                .selectAll("line")
                .data(x.ticks())
                .join("line")
                    .attr("x1", d => 0.5 + x(d))
                    .attr("x2", d => 0.5 + x(d))
                    .attr("y1", margin.top)
                    .attr("y2", h - margin.bottom))
                .call(g => g.append("g")
                .selectAll("line")
                .data(y.ticks())
                .join("line")
                    .attr("y1", d => 0.5 + y(d))
                    .attr("y2", d => 0.5 + y(d))
                    .attr("x1", margin.left)
                    .attr("x2", w - margin.right));

        const svg = d3.select("#" + this.props.id)
        .append("svg")
        .attr("viewBox", [0, 0, w, h])
        .style("margin-left", 100);

        

        svg.append("g")
        .call(xAxis);
        svg.append("g")
        .call(yAxis);
        svg.append("g")
        .call(grid);

        svg.append("g")
            .attr("stroke-width", 1.5)
            .attr("font-family", "sans-serif")
            .attr("font-size", 10)
            .selectAll("path")
            .data(data)
            .enter()
            .append("text")
            .text("bleh")
            .attr("transform", d => `translate(${x(d.x)},${y(d.y)})`)
            .attr("fill", "#000000")
            .style("font-size","8px")
            .on("mouseover",function (d, i) {
                d3.select(this).style("fill", "#4aa89c");          
                
            }).on("mouseout", function () {
                d3.select(this)
                    .transition()
                    .duration(400)
                    .style("fill", "#00000");
            });
   

      }
            
      render(){
        return <div id={this.props.id}></div>
      }
  
}

export default SignEmbedding;