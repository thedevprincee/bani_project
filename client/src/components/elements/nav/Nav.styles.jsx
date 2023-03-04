import styled from "styled-components";

const NavWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 24px 0 24px;
  -webkit-box-align: center;
  font-family: Poppins, sans-serif;
  height: inherit;
  @media screen and (min-width: 990px) {
  }
`;


export const NavLogoWrapper = styled.div`
  width: 60px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavLeftLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-box-pack: start;
  place-content: stretch flex-start;
  -webkit-box-align: center;
  align-items: center;
  order: 0;
  -webkit-box-flex: 0;
  flex: 0 1 auto;
  align-self: auto;
  height: auto;
  margin: 0px;
  padding: 0px;
`;

export const NavIcon = styled.div`
  position: relative;
  font-size: 1.3rem;
  background-color: rgb(245, 246, 250);
  width: 30px;
  height: 30px;
  color: #000;
  border-radius: 50%;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  margin-right: 16px;
  cursor: pointer;
`;

export const NavIconNotify = styled.div`
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: rgb(84, 68, 242);
  top: 8px;
  left: 15px;
`;

export const NavUserLayout = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  -webkit-box-pack: start;
  place-content: stretch flex-start;
  -webkit-box-align: center;
  align-items: center;
  order: 0;
  -webkit-box-flex: 0;
  flex: 0 1 auto;
  align-self: auto;
  height: auto;
  margin: 0px;
  padding: 4px 8px;
  background-color: rgb(245, 246, 250);
  border-radius: 10px;
  cursor: pointer;
`;
export const NavUserDp = styled.div`
  width: 30px;
  height: 30px;
  color: rgb(255, 255, 255);
  background-color: rgb(84, 68, 242);
  border-radius: 50%;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  margin-right: 10px;
  font-size: 0.7rem;
  font-weight: 600;
`;

export const NavFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-right: 10px;
`;

export const NavUserDDIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const NavCompTxt = styled.h6`
  font-size: 0.7rem;
  line-height: 1.4rem;
`;
export const NavMailTxt = styled.p`
  font-size: 0.6rem;
  color: rgb(117, 117, 117); ;
`;

export default NavWrapper;
