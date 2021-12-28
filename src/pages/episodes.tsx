import { NextPage } from 'next';
import { useFuturamaData } from '../hooks/useFuturamaData';
import { Episode } from '../types/Episode';

const EpisodesPage: NextPage = () => {
    const {data, error} = useFuturamaData('episodes');

    if(error) return <div>로딩에 실패했어요..</div>
    if(!data) return <div>로딩중...</div>
    
    return(
      <div>
        <h1>퓨처라마 에피소드 소개</h1>
        <main>
          {data.map((episodeData: Episode) => {
            const {id,number,title,writers,originalAirDate,desc} = episodeData;
            return(
              <>
								<div key={`episode-list-${id}`}>
                  <h1>#{number}</h1>
									<h2>{title}</h2>
									<h3>작가: {writers}</h3>
                  <h3>방영일 : {originalAirDate}</h3>
									<p>{desc}</p> 
								</div>
              </>
            )})}
        </main>
      </div>
    );
}

export default EpisodesPage;