import "./style.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "antd";
import Modal from "../modal"

const { Meta } = Card;

function TopibOldim() {
  const [page, setPage] = useState(0);
  const [topilma, setTopdim] = useState([]);

  useEffect(() => {
    (async function () {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/photos`,
        {
          params: {
            _page: page,
            _limit: 6,
          },
        }
      );
      setTopdim(response.data);
    })();
  }, [page]);


  return (
    <div>
      <div className="wrap">

        {topilma.map((topilmacha) => {
          return (
            <div key={topilmacha.id}>
              <Card className="card"
                hoverable
                style={{
                  width: 200,
                }}
                cover={<img alt={topilmacha.title} src={topilmacha.url} />}
              >
                <Meta title={topilmacha.title} />
               <Modal/>
              </Card>
            </div>
          );
        })}
      </div>

      {[1, 2, 3, 4, 5].map((num) => {
        return (
          <button key={num} onClick={() => setPage(num)}>
            {num}
          </button>
        );
      })}
    </div>
  );
}
export default TopibOldim;
