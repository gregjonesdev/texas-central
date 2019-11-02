import React from "react";
import {ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

const data = [
  {x: 100, y: 200},
  {x: 120, y: 100},
  {x: 170, y: 300},
  {x: 140, y: 250},
  {x: 150, y: 400},
  {x: 110, y: 280}
]

const stations = [
  {x: 80, y: 100},
  {x: 110, y: 250},
  {x: 200, y: 700},
]

const route = [
  {x: 80, y: 100},
  {x: 80, y: 100},
  {x: 80, y: 100},
  {x: 110, y: 250},
  {x: 120, y: 255},
  {x: 150, y: 300},
  {x: 160, y: 420},
  {x: 170, y: 550},
  {x: 200, y: 700},
]

const tooltipContent = () => (
  <div>items: badass shit</div>
)

export const Tracking = () =>

  <div
    id="pills-tracking"
    className="tab-pane fade show card"
    role="tabpanel"
    aria-labelledby="pills-tracking-tab">
    <div className="card-header font-style">
      <h3>Tracking</h3>
    </div>
    <div className="card-body">
    <ScatterChart width={400} height={400} margin={{top: 20, right: 20, bottom: 20, left: 20}}>

      <XAxis dataKey={'x'} type="number" tick={false} reversed axisLine={false} domain={[80, 200]} name='stature' />
      <YAxis dataKey={'y'} type="number"  domain={[100, 700]} name='weight' />
      <Scatter name='A school' data={data} fill='#8884d8'/>
      <Scatter name='Predicted R' data={route} fill='#666' lineJointType='monotoneX' line />
      <Scatter name='Predicted R' data={stations} fill='red' r={20} />
      <Tooltip content={tooltipContent} />
    </ScatterChart>
    </div>
    <div className="card-footer">
      <span>
        <i>
          Please visit Texas Central's{" "}
          <a href="https://www.texascentral.com/">
            Official Website.
          </a>
        </i>
      </span>
    </div>
  </div>
