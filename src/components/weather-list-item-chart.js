import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

function _average(data){
  return _.round(_.sum(data) / data.length);
}

export default (props) => {
  return(
    <div>
      <Sparklines data={props.data} height={140} width={180}>
        <SparklinesLine color={props.color || "green"} />
        <SparklinesReferenceLine type="mean" />
      </Sparklines>
      <div>{_average(props.data)} {props.units}</div>
    </div>
  );
};
