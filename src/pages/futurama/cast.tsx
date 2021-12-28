import { NextPage } from 'next';
import { useFuturamaData } from '../../hooks/useFuturamaData';
import { Cast } from '../../types/Cast';

const CastPage: NextPage = () => {
    const {data, error} = useFuturamaData('cast');

    if(error) return <div>로딩에 실패했어요..</div>
    if(!data) return <div>로딩중...</div>
    
    return(
      <div>
        <h1>퓨처라마 Cast</h1>
        <main>
          {data.map((castData: Cast) => {
            const {id,name,born,died,bio} = castData;
            return(
              <><div key={`cast-list-${id}`}>
                <h2>{name}</h2>
                <p>{born} ~ {died}</p>
              </div>
              <div>
                <div>{bio.url}</div>
                <h3>{bio.text}</h3>
              </div></>
            )})}
        </main>
      </div>
    );
}

export default CastPage;