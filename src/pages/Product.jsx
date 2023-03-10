import { Add, Remove } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import { mobile } from '../responsive';

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;

    ${mobile({ padding: '10px', flexDirection: 'column' })}
`;

const ImgContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;

    ${mobile({ height: '40%' })}
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;

    ${mobile({ padding: '10px' })}
`;

const Title = styled.h1`
    font-weight: 200;
`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`;

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;

    ${mobile({ width: '100%' })}
`;

const Filter = styled.div`
    display: flex;
    align-items: center;
`;

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`;

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0px 5px;
    cursor: pointer;
`;

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`;

const FilterSizeOption = styled.option`

`;

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${mobile({ width: '100%' })}
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;

const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: #f5e1e1;
    }
`;


const Product = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <ImgContainer>
                <Image src='https://img.ltwebstatic.com/images3_pi/2022/08/31/1661922652c85e530d7f6fac49e4216a03fa4f55b4.webp' />
            </ImgContainer>
            <InfoContainer>
                <Title>Denim Jumpsuit</Title>
                <Desc>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet error iure repellendus facere nemo aperiam pariatur veniam mollitia nostrum consectetur! Dolores, sint inventore nisi ratione neque debitis alias aliquam veritatis?
                    </Desc>
                <Price>$20</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color='black' />
                        <FilterColor color='darkblue' />
                        <FilterColor color='gray' />
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove />
                        <Amount>1</Amount>
                        <Add />
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default Product
