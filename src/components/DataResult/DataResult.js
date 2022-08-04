import React from "react";
import style from "./DataResult.module.scss";

const DataResult = ({ data, onAddFavorit, favData }) => {
  return (
    <div className={style.main}>
      <table border="1" style={{ marginBottom: "20px" }}>
        <tbody>
          {favData &&
            favData.map((item, index) => (
              <tr key={index}>
                <th>{item.alpha_two_code}</th>
                <th>
                  {item.domains.map((domainsItem, index) => (
                    <p key={index}>{domainsItem}</p>
                  ))}
                </th>
                <th>{item.name}</th>
                <th>
                  {item.web_pages.map((webItem, index) => (
                    <a href={webItem} key={index}>
                      {webItem}
                    </a>
                  ))}
                </th>
                <th>
                  <input
                    type="checkbox"
                    checked={true}
                    onChange={() => onAddFavorit(item)}
                  />
                </th>
              </tr>
            ))}
        </tbody>
      </table>
      {/* <hr /> */}
      <table border="1">
        <tbody>
          {data &&
            data.map((item, index) => (
              <tr key={index}>
                <th>{index}</th>
                <th>{item.alpha_two_code}</th>
                <th>
                  {item.domains.map((domainsItem, index) => (
                    <p key={index}>{domainsItem}</p>
                  ))}
                </th>
                <th>{item.name}</th>
                <th>
                  {item.web_pages.map((webItem, index) => (
                    <a href={webItem} key={index}>
                      {webItem}
                    </a>
                  ))}
                </th>
                <th>
                  <input
                    style={{ width: "40px" }}
                    type="checkbox"
                    checked={favData.find((itemI) => itemI.name === item.name)}
                    onChange={() => onAddFavorit(item)}
                  />
                </th>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataResult;
