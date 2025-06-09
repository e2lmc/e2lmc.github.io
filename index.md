---
layout: default
---

<script src="https://cdn.plot.ly/plotly-latest.min.js"></script>

<div style="display: flex; flex-wrap: nowrap; gap: 20px; margin-bottom: 20px; overflow-x: auto;">
  <div id="plot-container-mmlu-var" style="min-width: 300px; height: 400px; flex: 1;"></div>
  <div id="plot-container-mmlu" style="min-width: 300px; height: 400px; flex: 1;"></div>
  <div id="plot-container-gpqa" style="min-width: 300px; height: 400px; flex: 1;"></div>
  <div id="plot-container-math" style="min-width: 300px; height: 400px; flex: 1;"></div>
</div>

<script>
  fetch('{{ site.baseurl }}/assets/data/plot_final.json')
    .then(response => response.json())
    .then(data => {
      const plotData = data.plotData;
      
      // Function to create a plot
      function createPlot(containerId, benchmark, title) {
        const traces = [];
        
        plotData[benchmark].series.forEach(series => {
          const x = series.data.map(point => point[0]);
          const y = series.data.map(point => point[1]);
          
          traces.push({
            x: x,
            y: y,
            name: series.name,
            type: 'scatter',
            mode: series.name.includes('dashed') ? 'lines' : 'lines+markers',
            line: {
              dash: series.name.includes('dashed') ? 'dash' : 'solid',
              color: series.name.includes('blue') ? 'blue' : 
                     series.name.includes('orange') ? 'orange' : 'green'
            },
            hovertemplate: 'x: %{x:.0f} | y: %{y:.3f} <extra></extra> '
          });
        });

        const layout = {
          title: title,
          xaxis: {
            title: 'Training Tokens',
            range: plotData[benchmark].xAxis.range,
            visible: true,
            zeroline: true,
            showgrid: true,
            gridcolor: 'rgba(128, 128, 128, 0.2)',
            fixedrange: true,
            hoverformat: '.2f'
          },
          yaxis: {
            title: 'Score',
            visible: true,
            range: plotData[benchmark].yAxis.range,
            zeroline: true,
            showgrid: true,
            gridcolor: 'rgba(128, 128, 128, 0.2)',
            fixedrange: true
          },
          hovermode: 'x',
          hoverlabel: {
            bgcolor: 'white',
            font: { size: 12 }
          },
          showlegend: false,
          margin: { t: 50, r: 20, b: 0, l: 0 }
        };

        const config = {
          displayModeBar: false,
          responsive: true
        };

        Plotly.newPlot(containerId, traces, layout, config);
      }

      // Create all plots
      createPlot('plot-container-mmlu-var', 'MMLU-Var', 'MMLU-Var');
      createPlot('plot-container-mmlu', 'MMLU', 'MMLU');
      createPlot('plot-container-gpqa', 'GPQA', 'GPQA');
      createPlot('plot-container-math', 'MATH', 'MATH');
    });
</script>

<div style="text-align: center; margin: 20px 0; font-size: 0.7em;">
Model Performance across training tokens 
</div>

## Competition Overview

<div style="font-size: 0.9em; line-height: 1.6; text-align: justify;">
Existing benchmarks have proven effective for assessing the performance of fully trained large language models. However, we find striking differences in the  early training stages of small models, where benchmarks often fail to provide meaningful or discriminative signals. To explore how these differences arise, this competition tackles the challenge of designing scientific knowledge evaluation tasks specifically tailored for measuring early training progress of language models. Participants are invited to develop novel evaluation methodologies or adapt existing benchmarks to better capture performance differences among language models. To support this effort, we provide three pre-trained small models (0.5B, 1B, and 3B parameters), along with intermediate checkpoints sampled during training up to 200B tokens. All experiments and development work can be run on widely available free cloud-based GPU platforms, making participation accessible to researchers with modest hardware. Submissions will be evaluated based on three criteria: the quality of the performance signal they produce, the consistency of model rankings at 1 trillion tokens of training, and their alignment with the scientific knowledge domain. By promoting the design of tailored evaluation strategies for SLMs, this competition aims to attract a broad range of participants from around the world, including those who may not be machine learning experts or have access to dedicated GPU resources. Ultimately, this initiative seeks to make foundational LLM research more systematic and benchmark-informed from the earliest phases of model development.
</div>

## Anouncements

- **26/05/2025**: Competition proposal accepted at NeurIPS 2025!
- **07/07/2025**: E2ML Competition Kick-off 