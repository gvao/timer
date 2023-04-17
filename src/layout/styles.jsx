import styled, { createGlobalStyle } from "styled-components"

export const Container = styled.section`
  width: 90%;
  max-width: 690px;

  background-color: var(--color-black-50);
  color: var(--color-white);

  padding: var(--pad-med);
  margin: var(--pad-med) auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--pad-med);

  /* border: .4px solid; */
  border-radius: var(--radius-default);

  box-shadow: 3px 3px 3px 4px rgba(0, 0, 0, .4);
`

export const Title = styled.h1`
  font-size: 100px;
  filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, .4));
  letter-spacing: 8px;
`

export const Subtitle = styled.h2`
  width: 100%;
  font-size: 80px;
  text-align: center;
  /* justify-content: center; */

  position: relative;

  &:after {
    content: "";

    width: 50%;
    height: 15px;

    background-color: rgba( 0, 0, 0, .4 );
    
    z-index: -1;
    position: absolute;
    bottom: 0;
    left: 50%;
    
    transform: translateX(-50%);
    border-radius: 50%;
    
    filter: blur(6px);
  }
`


export const ContainerBts = styled.div`

  width: 100%;
  max-width: 50%;

  margin-top: 6px;
  border-top: 1px solid;
  padding: var(--pad-default);

  display: flex;
  flex-direction: column;
  gap: 8px;

  
  label {
    text-align: center;
    color: var(--color-400);

    padding: var(--pad-med);
    border-radius: var(--radius-default);
    border: none;
    opacity: .6;
    cursor: pointer;
    border: .4px solid;
    
    &.checked {
      border: 2px solid;
      opacity: 1;
    }

    input[type="checkbox"] {
      display: none
    }

    input:checked ~ label {
      background-color: green;
      color: green;
    }
  }
`

export const Button = styled.button`
  min-width: 150px;

  padding: var(--pad-med) var(--pad-default);
  border-radius: var(--radius-default);
  border: none;
  text-transform: uppercase;
  font-weight: bold;

  background-color: var(--color-500);

  position: relative;

  box-shadow: 4px 4px 6px rgba(0, 0, 0, .3),
  4px 4px 2px -1px rgba(255, 255, 255, .5) inset,
  -4px -4px 2px -1px rgba(0, 0, 0, .5) inset;
  
  &:active {
    
    box-shadow: -4px -4px 3px -1px rgba(255, 255, 255, .5) inset, 
    4px 4px 3px -1px rgba(0, 0, 0, .5) inset;

  }
`

export const ContainerListadeVoltas = styled.section`

  margin-top: var(--pad-med);

  ul {
    padding: 8px;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    gap: var(--pad-default);

    li {
      flex-basis: 45%;

      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;
      
      /* line-height: 1.5; */
      font-size: 20px;
    }
  }

`