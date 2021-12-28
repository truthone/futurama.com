import { NextPage } from 'next';
import { useFuturamaData } from '../hooks/useFuturamaData';
import { Info } from '../types/Info';

const InfoPage: NextPage = () => {
  const {data, error} = useFuturamaData('info');

  if(error) return <div>로딩에 실패했어요..</div>
  if(!data) return <div>로딩중...</div>
  
  return(
    <div>
      <h1>퓨처라마 INFO</h1>
      <main>
        {data.map((infoData: Info) => {
          const {id, synopsis,creators, yearsAired} = infoData;
          return(
            <><div key={`info-list-${id}`}>
              <h2>시놉시스: {synopsis}</h2>
              <p>제작연도: {yearsAired}</p>
            </div>
            <div>
              {creators.map((creator) => {
                return (
                  <><div>{creator.url}</div>
									<h3>이름: {creator.name}</h3></>
                );
              })}
            </div></>
          )
        })}
      </main>
    </div>
  );
}

export default InfoPage;