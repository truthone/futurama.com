import { NextPage } from 'next';
import { useFuturamaData } from '../hooks/useFuturamaData';
import { character } from '../types/Character';

const CharacterPage: NextPage = () => {
    const {data, error} = useFuturamaData('characters');

    if(error) return <div>로딩에 실패했어요..</div>
    if(!data) return <div>로딩중...</div>
    
    return(
      <div>
        <h1>퓨처라마 캐릭터 소개</h1>
        <main>
          {data.map((characterData: character) => {
            const {id,name,images,gender,species,homePlanet,occupation,sayings,age} = characterData;
            return(
              <>
								<div key={`character-list-${id}`}>
									<img src={`${images.main}`}/>
									<h2>{name.first} {name.middle} {name.last}</h2>
									<div>{gender} / {species} / {homePlanet} / {occupation}
										/ {age}
									</div>
									<p>{sayings.map((say)=>{
										return(
											<div>{say}</div>
										)
									})}</p>
								</div>
              </>
            )})}
        </main>
      </div>
    );
}

export default CharacterPage;