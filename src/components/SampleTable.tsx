import React from 'react';
import 'antd/dist/antd.css';
import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import './SampleTable.scss';
import Produce from './Produce';
import LiveRates from './LiveRates';
export default function SampleTest() {
   
  interface User {
        produce: any;
        grade: string;
        quantityRemaining: any;
        pricePerQtl: number;
        liveRates: any;
        intentSell: string;
        additional: any;
      }
      
      const columns: ColumnsType<User> = [
        {
          title: "Produce",
          dataIndex: "produce",
          render:(produce)=>(
                <Produce produce={produce.produce} img={produce.img} verity={produce.verity} grade={produce.grade} />
            )
            
          
        },
        {
          title: "Grade",
          dataIndex: "grade"
        },
        {
          title: "Quantity Remaining",
          dataIndex: "quantityRemaining",
          render:(quanRem)=>(
               <div> {quanRem.rem} qtl
                  <table>
                    <tr>
                      <td><div style={{width: 100 , height:12}}>
                      <progress className="quan-rem-progress" value={quanRem.rem} max={quanRem.total}></progress></div></td>
                      <td><span className="quanRem-total">{quanRem.total} qtl</span></td>
                 </tr>
                </table></div>
          )
        },
      
        {
          title: "Price per qtl",
          dataIndex: "pricePerQtl"
        },
        {
          title: "Live APMC Rates per qtl",
          dataIndex: "liveRates",
          render: (rates)=>(
            <LiveRates rate={rates.rate} change={rates.change} />
          )
          
          
        },
        
        {
            title: "Intent Sell",
            dataIndex: "intentSell"
        },
        
        {
            title: "Addititonal",
            dataIndex: "additional",
            render:(additional)=>(
              <a href="/">{additional.value}</a>
            )
        }
      ];
      
      const data: User[] = [
        {
            produce: {img:"rice.png", produce:"Rice" , verity:"Sona Masoori", grade:"Raw"},
            grade: "Grade B",
            quantityRemaining: {rem:20, total:20},
            pricePerQtl: 5200,
            liveRates: {change:300,rate:5300},
            intentSell: "No",
            additional: {value:"Produce Photos"}
        },
        {
            produce: {img:"ragi.png",produce:"Ragi", verity:"Pearl Millet"},
            grade: "Grade B",
            quantityRemaining: {rem:20,total:40},
            pricePerQtl: 5200,
            liveRates: {change:-150,rate:2100},
            intentSell: "No",
            additional: {value:"Produce Photos"}
        }
      ];
      
  return (
    <div>
     <Table<User> columns={columns} dataSource={data} pagination={false} />
    </div>

  );
}
