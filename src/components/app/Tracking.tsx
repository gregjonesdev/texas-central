import React from 'react';
import {
  ScatterChart,
  LabelList,
  Scatter,
  XAxis,
  YAxis,
  Tooltip } from 'recharts';
import { route, stations } from '../../data/data';


const TooltipContent = (props: any) => {
  console.log(props)
  const data = props.payload[0]
  return (
    <div className="card">
      {data ?
        <div>
          <div className="card-header">
            {data.payload.number}
          </div>
          <div className="card-body">
            Next Stop:
            ETA:
            Status:
          </div>
        </div> : null}
    </div>
  )


}

const RenderNoShape = (props: any)=>{
 return null;
}

const trains = [
  {number: "TC-001", y:35.8124423078681, x:26.32818991569823},
]

export const Tracking = () =>

  <div
    id="pills-tracking"
    className="tab-pane fade show card pills-content"
    role="tabpanel"
    aria-labelledby="pills-tracking-tab">
    <div className="card-header font-style">
      <h3>Tracking</h3>
    </div>
    <div className="card-body">
      <ScatterChart
        width={500}
        height={880}
        margin={{top: 20, right: 20, bottom: 20, left: 20}}>
        <XAxis
          dataKey={'x'}
          type="number"
          tick={false}
          reversed
          axisLine={false}
          domain={[-20, 85]}
          name='longitude' />
        <YAxis
          dataKey={'y'}
          type="number"
          tick={false}
          domain={[0, 225]}
          axisLine={false}
          name='latitude' />
        <Scatter
          name='routes'
          data={route}
          fill='#666'
          lineJointType='monotoneX'
          line shape={<RenderNoShape />} />
        <Scatter
          name='stations'
          data={stations}
          fill='blue'>
          <LabelList dataKey="name" position="right" />
        </Scatter>
        <Scatter
          name='trains'
          data={trains}
          fill='red'/>
        <Tooltip cursor={false} content={<TooltipContent />} />
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
