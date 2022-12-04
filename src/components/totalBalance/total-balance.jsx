import styled from '@emotion/styled'

const TotalBalanceWrapper = styled.div`
    margin-top: 28px;
    max-width: 395px;
    height: 80px;
    border-radius: 30px;

    padding-top: 8px;
    background-color: #ffffff;

    @media (max-width: 768px) {
        max-width: 336px;
    }
`
const Title = styled.p`
    padding-left: 40px;
    font-family: 'Circe';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    text-transform: uppercase;
    color: #A6A6A6;
    margin: 0 0 12px 0;
`
const Balance = styled.p`
    padding-left: 40px;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    color: #000000;
    margin: 0;
`

const TotalBalance = () => {
    return (
        <TotalBalanceWrapper>
            <Title>Your balance</Title>
            <Balance>₴ 24 000.00</Balance>

        </TotalBalanceWrapper>
    )
}

export default TotalBalance