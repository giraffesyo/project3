import React, {Component} from 'react';
import {
     AreaChart, Area, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';

class StockInfo extends Component {

componentDidMount(){
}
    render(){
        const{
            data,
        } = this.props;
        console.log('data')
        console.log(data)

        return (
            <div>



            <p>Rama por id</p>
            <AreaChart width={600} height={200} data={data} syncId="anyId"
                margin={{top: 10, right: 30, left: 0, bottom: 0}}>
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="rama"/>
            <YAxis/>
            <Tooltip/>
            <Area type='monotone' dataKey='preciosubtotal' stroke='#82ca9d' fill='#82ca9d' />
            </AreaChart>
    
            </div>    
        )
    }
    
};



export default StockInfo;