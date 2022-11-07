import styled, {css} from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const ImageContainer = styled.img`
  --container-width: 70vw;
  position: relative;
  width: var(--container-width);
  height: 600px;
  object-fit: cover;
  border: solid 3px white;
  left: calc(50vw - var(--container-width) / 2);
  top: calc(40vh - 600px / 2);
`;

export const NavButton = styled.button`
  width: 70px;
  height: 70px;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
  position: absolute;
  top: 50%;
  border-radius: 50%;
  color: white;
  box-shadow: 0px 4px 60px 20px rgba(3,3,3,0.9), inset 0 --3em 3m rgba(3,3,3,0.5);
  transform: translate(0, -50%);
  ${(props) => props.right === true ? css`right: 2%` : css`left: 2%`}
`;

export const Title = styled.h3`
  padding: 0px;
  margin: 0px;
  font-size: 28px;
  color: #fff;
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translate(-50%, 0);
  box-shadow: 0px 4px 10px 15px rgba(3,3,3,0.9), inset 0 --3em 3m rgba(3,3,3,0.5);
`;