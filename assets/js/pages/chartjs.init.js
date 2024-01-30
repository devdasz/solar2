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