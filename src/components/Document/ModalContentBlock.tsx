import styled from "@emotion/styled";
import EmojiIcon from "@components/Emoji";

const ModalContentBlockWrapper = styled.div`
  padding: 20px 7px 2px 7px;
`;

const ModalContentBlockName = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 115%;
  color: #696969;
  padding-left: 10px;
`;

const ModalContentBlockContent = styled.div``;

const ModalContentBlockContentItem = styled.div`
  padding: 6px 10px;
  display: flex;
  align-items: center;
  gap: 6px;
`;

const ModalContentBlockContentItemName = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 115%;
  color: #696969;
  cursor: pointer;
`;

type PropsType = {
  title: string;
};

const ModalContentBlock = ({ title }: PropsType): JSX.Element => {
  return (
    <ModalContentBlockWrapper>
      <ModalContentBlockName>{title}</ModalContentBlockName>
      <ModalContentBlockContent>
        <ModalContentBlockContentItem>
          <EmojiIcon id="+1" />
          <ModalContentBlockContentItemName>Name</ModalContentBlockContentItemName>
        </ModalContentBlockContentItem>
        <ModalContentBlockContentItem>
          <EmojiIcon id="+1" />
          <ModalContentBlockContentItemName>Name</ModalContentBlockContentItemName>
        </ModalContentBlockContentItem>
        <ModalContentBlockContentItem>
          <EmojiIcon id="+1" />
          <ModalContentBlockContentItemName>Name</ModalContentBlockContentItemName>
        </ModalContentBlockContentItem>
        <ModalContentBlockContentItem>
          <EmojiIcon id="+1" />
          <ModalContentBlockContentItemName>Name</ModalContentBlockContentItemName>
        </ModalContentBlockContentItem>
      </ModalContentBlockContent>
    </ModalContentBlockWrapper>
  );
};

export default ModalContentBlock;
