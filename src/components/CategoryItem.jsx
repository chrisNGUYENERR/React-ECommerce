import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive';

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;

    ${mobile({ height: '20vh' })}
`;

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
    overflow: hidden;

    &:hover ${Image}{
        transform: scale(1.1);
        transition: all ease 0.5s
    }
`;


const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
`;

const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: white;
    color: gray;
    font-weight: 600; 
    cursor: pointer;
`;

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img} />
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem
