import React from "react";

const StatisticsLine = (props) => {
  return (
    <table width="100">
      <tbody>
        <tr>
          <td>{props.text}</td>
          <td align="right">{props.value}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default StatisticsLine;
