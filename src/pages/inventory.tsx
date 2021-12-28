import { NextPage } from 'next';
import { useFuturamaData } from '../hooks/useFuturamaData';
import { Inventory } from '../types/Inventory';

const InventoryPage: NextPage = () => {
    const {data, error} = useFuturamaData('episodes');

    if(error) return <div>로딩에 실패했어요..</div>
    if(!data) return <div>로딩중...</div>
    
    return(
      <div>
        <h1>퓨처라마 인벤토리</h1>
        <main>
          {data.map((inventoryData: Inventory) => {
            const {id,title,category,description,slogan,price,stock} = inventoryData;
            return(
              <>
								<div key={`inventory-list-${id}`}>
                  <h1>{title}</h1>
									<h2>카테고리: {category}</h2>
									<h3>가격: {price} / 재고: {stock}</h3>
                  <h3>슬로건: {slogan}</h3>
									<p>{description}</p> 
								</div>
              </>
            )})}
        </main>
      </div>
    );
}

export default InventoryPage;