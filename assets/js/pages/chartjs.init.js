function getChartColorsArray(r) {
    if (null !== document.getElementById(r))
        return (
            (r = document.getElementById(r).getAttribute("data-colors")),
            (r = JSON.parse(r)).map(function (r) {
                var o = r.replace(" ", "");
                return -1 === o.indexOf(",")
                    ? getComputedStyle(document.documentElement).getPropertyValue(o) || o
                    : 2 == (r = r.split(",")).length
                    ? "rgba(" + getComputedStyle(document.documentElement).getPropertyValue(r[0]) + "," + r[1] + ")"
                    : o;
            })
        );
}
function getDataset(canvasId,label, data) {
    lineChartColor = getChartColorsArray(canvasId);
    return {
                label:label,
                fill: !0,
                lineTension: 0.5,
                backgroundColor: lineChartColor[0],
                borderColor: lineChartColor[1],
                borderCapStyle: "butt",
                borderDash: [],
                borderDashOffset: 0,
                borderJoinStyle: "miter",
                pointBorderColor: lineChartColor[1],
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: lineChartColor[1],
                pointHoverBorderColor: "#fff",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: data.map((x) => x.value),
            };
}
  // Default Chart Configuration
  defaultOption = { x: { ticks: { font: { family: "Poppins" } } }, y: { ticks: { font: { family: "Poppins" } } }, plugins: { legend: { labels: { font: { family: "Poppins" } } } } };
  function getData(canvasId,label, data){
      return {
          labels: data.map((x) => x.label),
          datasets: [
                                 getDataset(canvasId, label, data)
            ],
      };
  }

  function getChart(canvasId,label, data){
    linechart = document.getElementById(canvasId);
    linechart.setAttribute("width", linechart.parentElement.offsetWidth);
   return  new Chart(canvasId, {
    type: "line",
    data: getData(canvasId,label, data)
  ,
    options:defaultOption ,
}) ;
}