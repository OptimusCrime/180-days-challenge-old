import React, { Component } from 'react';
import Chart from 'chart.js';

import {
  parseGrowthDataSet,
  parseProgressDataSet,
  parseLabels
} from '../../utilities';

export class GraphComponent extends Component {

  render() {
    return (
      <div>
        <canvas id="graph" />
      </div>
    )
  }

  componentDidMount() {
    const {
      entries,
      date_start,
      days_since_start,
      tick
    } = this.props;

    const labels = parseLabels(days_since_start);
    const growthDateSet = parseGrowthDataSet(days_since_start, tick);
    const progressDataSet = parseProgressDataSet(entries, date_start, days_since_start, tick);

    const config = {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Growth',
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: growthDateSet,
            fill: false,
            pointRadius: 0
          }, {
            label: 'Progress',
            backgroundColor: "rgb(54, 162, 235)",
            borderColor: "rgb(54, 162, 235)",
            data: progressDataSet,
            fill: false,
            pointRadius: 0
          }
        ]
      }
    };

    new Chart(document.getElementById('graph').getContext('2d'), config);
  }
}
