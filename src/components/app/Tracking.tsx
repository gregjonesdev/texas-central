import React from "react";
import {ScatterChart, LabelList, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import { route, stations } from '../../data/data';


const TooltipContent = (props: any) => {
  console.log(props)
  return (
  <div>{props.payload[0]? props.payload[0].payload.name : null}</div>
  )
}

const RenderNoShape = (props: any)=>{
 return null;
}

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
    <ScatterChart width={500} height={880} margin={{top: 20, right: 20, bottom: 20, left: 20}}>

      <XAxis dataKey={'x'} type="number" tick={false} reversed axisLine={false} domain={[-20, 85]} name='stature' />
      <YAxis dataKey={'y'} type="number" domain={[0, 225]} name='weight' />
      <Scatter name='Predicted R' data={route} fill='#666' lineJointType='monotoneX' line shape={<RenderNoShape />} />
      <Scatter name='Predicted R' data={stations} fill='blue'>
        <LabelList dataKey="name" position="right" />
      </Scatter>
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
