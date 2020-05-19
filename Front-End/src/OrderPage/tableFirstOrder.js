import React from "react";
import { Tag } from "antd";
import moment from "moment";
import NumberFormat from "react-number-format";
import * as INDEX_CONSTANTS from "../_constants/index.constants";

const TableFirstOrder = (props) => (
   <table className="ant-table-thead" style={{ width: "100%" }}>
      <tr>
         <th className="ant-table-row-cell-break-word">
            <span className="ant-table-header-column">
               <div>
                  <span className="ant-table-column-title">ID Order</span>
               </div>
               <div style={{ fontWeight: "normal" }}>{props.order.idOrder}</div>
            </span>
         </th>
         <th className="ant-table-row-cell-break-word">
            <span className="ant-table-header-column">
               <div>
                  <span className="ant-table-column-title">PIN</span>
               </div>
               <div style={{ fontWeight: "normal" }}>{props.order.PIN}</div>
            </span>
         </th>
         <th className="ant-table-row-cell-break-word">
            <span className="ant-table-header-column">
               <div>
                  <span className="ant-table-column-title">Ngày mua</span>
               </div>
               <div style={{ fontWeight: "normal" }}>
                  {moment(props.order.dateAdded).format(
                     INDEX_CONSTANTS.DATE_TIME_FORMAT.DATE_TIME
                  )}
               </div>
            </span>
         </th>
         <th className="ant-table-row-cell-break-word">
            <span className="ant-table-header-column">
               <div>
                  <span className="ant-table-column-title">Tổng tiền</span>
               </div>
               <div style={{ fontWeight: "normal" }}>
                  <NumberFormat
                     value={props.order.totalPrice}
                     displayType={"text"}
                     thousandSeparator={true}
                     suffix={" VNĐ"}
                  />
               </div>
            </span>
         </th>
         <th
            className="ant-table-align-center ant-table-row-cell-break-word ant-table-row-cell-last"
            style={{ textAlign: "center" }}
         >
            <span className="ant-table-header-column">
               <div>
                  <span className="ant-table-column-title">Trạng thái</span>
               </div>
               <Tag color="green">{props.order.status}</Tag>
            </span>
         </th>
      </tr>
   </table>
);

export default TableFirstOrder;
