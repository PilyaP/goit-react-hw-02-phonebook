import styled from '@emotion/styled';

export const ContactsItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #fff;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
`;

export const ContactName = styled.span`
  font-weight: 700;
  margin-right: 10px;
`;

export const ContactNumber = styled.span`
  font-size: 14px;
  color: #666;
`;

export const DeleteButton = styled.button`
  width: 70px;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  &:hover {
    background-color: #3367d6;
  }
`;
