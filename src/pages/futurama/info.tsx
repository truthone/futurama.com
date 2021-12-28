import { NextPage } from 'next';
import { useFuturamaData } from '../../hooks/useFuturamaData';
import styled from "@emotion/styled";
import { Info } from '../../types/Info';

const InfoPage: NextPage = () => {
  const {data, error} = useFuturamaData('info');

  if(error) return <div>로딩에 실패했어요..</div>
  if(!data) return <div>로딩중...</div>
  
  return(
    <Container>
      <Header>퓨처라마 INFO</Header>
      <main>
        {data.map((infoData: Info) => {
          const {id, synopsis,creators, yearsAired} = infoData;
          return(
            <><Container key={`info-list-${id}`}>
              <div>{yearsAired} 방영</div>
              <Desc>{synopsis}</Desc>
            </Container>
            <Title>Creators</Title>
            <Carousel>
              {creators.map((creator) => {
                return (
                  <Card>
                    <h3>{creator.name}</h3>
                    <MoreBtn href={`${creator.url}`}>더보기</MoreBtn>
                  </Card>
                );
              })}
            </Carousel></>
          )
        })}
      </main>
    </Container>
  );
}

export default InfoPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  padding: 1.2rem;
`;

const Header = styled.h1`
  color: orange;
  text-align: center;
`;

const Desc = styled.p`
  backgound-color: grey;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

const Carousel = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  padding: 1.2rem;
`;

const Title = styled.h2`'
  font-weight: bold;

`;

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  padding: 1.2rem;
`;

const MoreBtn = styled.a`
  color: grey;
  margin-left: 0.3rem;
  cursor: pointer;
`;

