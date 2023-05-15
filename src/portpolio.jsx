import styled from "styled-components"

const Container = styled.div`
    width : 100%;
    display : flex;
    justify-content : center;
    padding: 64px 0;
    `;

const InnerContainer = styled.div`
    width:1000px;
`;

const BoxTitle = styled.div`
    font-size:32px;
    font-weight:600px;
    padding:12px 0;
`;
const  BoxSubTitle = styled.div`
    font-size: 24px;
    color: rgba(0,0,0,0.6);
    padding:12px 0;
`;

const ImageContents = styled.div`
    margin: 16px 0;
    padding : 128px 64px; 
    display : flex;     
    justify-content : space-between;
    width:100%;
    height: 350px;
    border-radius : 20px;
    background-image: url('image/2.jpg');
    background-size: cover;
    background-position: center center;
`

const ContentsText = styled.div`
    display: flex;
    flex-direction : colum;
    justify-content: flex-start;
`

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`
const ContentsButton = styled.div`
    width : 200px;
    height: 60px;
    border-radius : 20px;
    background: red;
    color:white;
    display: flex;
    justify-contetn:center;
    align-items: center;
`
export default function Portfolio(){
    return(
        <Container>
            {/*1000px 중앙정렬*/}
            <InnerContainer>
                <div>
                    <BoxTitle>온 . 오프라인 언제 어디서든</BoxTitle>
                    <BoxSubTitle>간편하고 빠르게 매매/임대차 정보와 투자 인사이트를 받아보세용!</BoxSubTitle>
                </div>

                

              <ImageContents>
                    <ContentsText>
                        <div>카카오 비즈 채널</div>
                        <div>선별된 스마트한 핵심 투자 정보를 받아보세용!</div>
                        
                        <div>
                            <div>주기적으로업데이트 되는 요란한 정보</div>
                             <div>1940 노르망디 시절 시세 정보에 기반한 투자 인사이트</div>
                             <div>무정부 시대 영원히 변동 없는 피튀기는 규제 소식</div>
                        </div>
                        </ContentsText>
                        <ButtonContainer>
                            <ContentsButton>채널 폐쇄</ContentsButton>
                        </ButtonContainer>
                </ImageContents>

            </InnerContainer>
        </Container>
    )
}