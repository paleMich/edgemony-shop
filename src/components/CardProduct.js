import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  min-width: 250px;
  max-width: 250px;
  height: 300px;
  border: 1px solid black;
  border-radius: 5px;
  
  @media (max-width: 768px) {
    margin: auto 8px;
  }
`

const ProductImg = styled.img`
  width: 120px;
  height: 120px;
`

const TitleProduct = styled.span`
  color: black;
  padding: 10px 5px;
  text-align: start;
  display: -webkit-box;
  line-height: 1.7;
  -webkit-line-clamp: 2;
  max-height: 50px;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`

const BtnDetails = styled.button`
  margin-bottom: 0px;
  padding: 6px;
  border-radius: 5px;
  border: transparent;
  color: aliceblue;
  background-color: rgb(220, 141, 72);
`

function CardProduct({ product, openProductModal }) {
  return (
    <Wrapper>
      <ProductImg src={product.image} alt={product.title}></ProductImg>
      <TitleProduct>{product.title}</TitleProduct>
      <BtnDetails onClick={openProductModal}>View details</BtnDetails>
    </Wrapper>
  )
}

export default CardProduct
