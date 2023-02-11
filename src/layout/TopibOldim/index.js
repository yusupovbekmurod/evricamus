import "./style.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "antd";
import { Pagination } from "antd";

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
              <Card
                hoverable
                style={{
                  width: 190,
                }}
                cover={<img alt={topilmacha.title} src={topilmacha.url} />}
              >
                <Meta title={topilmacha.title} uploaded={topilmacha.id} />
              </Card>
            </div>
          );
        })}
      </div>

      {[1, 2, 3, 4, 5].map((num) => {
        
        return (
            
                 <Pagination
              defaultCurrent={1}
              total={50}
              key={num}
              onClick={() => setPage(num)}
              >
                {num}
                {console.log(num)}
              </Pagination>
              
        );
       
      })}

    </div>
  );
}
export default TopibOldim;



{/* <button key={num} onClick={() => setPage(num)}>
{num}
{console.log(num)}

</button> */}
