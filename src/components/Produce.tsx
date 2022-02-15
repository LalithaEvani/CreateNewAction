import React from 'react';
import 'antd/dist/antd.css';
import './Produce.scss';

export default function Produce(props:any) {
    return (
        <div className="produce-container">
            <table>
                <tr><td><img style={{width:87, height:87}} alt={props.produce} src={props.img} />
                </td>
                <td><b>{props.produce}</b> <br />
                    {props.verity}<br />
                    {props.grade}
                </td>
                </tr>
            </table>
        </div>
    )
}





