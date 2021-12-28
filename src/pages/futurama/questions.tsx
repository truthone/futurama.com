import { NextPage } from 'next';
import { useFuturamaData } from '../../hooks/useFuturamaData';
import { Question } from '../../types/Question';

const QuestionsPage: NextPage = () => {
    const {data, error} = useFuturamaData('questions');

    if(error) return <div>로딩에 실패했어요..</div>
    if(!data) return <div>로딩중...</div>
    
    return(
      <div>
        <h1>퓨처라마 퀴즈</h1>
        <main>
          {data.map((questionData: Question) => {
            const {id,question,possibleAnswers,correctAnswer} = questionData;
            return(
              <>
								<div key={`question-list-${id}`}>
                  <h2> Q.{question}</h2>
                  <div>보기</div>
                  <ul>
                    {possibleAnswers.map((pa)=>{
                      return(
                        <li>{pa}</li>
                      )
                    })}
                  </ul>
								</div>
              </>
            )})}
        </main>
      </div>
    );
}

export default QuestionsPage;