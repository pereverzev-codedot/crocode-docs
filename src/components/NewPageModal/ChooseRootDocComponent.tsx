import { useCallback, useState } from "react";
import useDocuments from "@hooks/useDocuments";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import EmojiIcon from "@components/Emoji";
import { IValues } from "./NewPageModal";

const dynamicStyles = ({ open }: { open: boolean }) => css`
  ${open ? `height:120px; opacity: 1` : `height: 0; opacity: 0`}
`;

const dynamicStylesArrow = ({ open }: { open: boolean }) => css`
  ${open ? `transform: rotate(90deg)` : ``}
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 32px;
`;

const WrapperInput = styled.div`
  position: relative;
  padding: 12px 24px;
  background: #ffffff;
  border: 0.5px solid #696969;
  border-radius: 2px;
  display: flex;
  align-items: center;
  width: 100%;
  gap: 10px;
`;

const ArrowWrapper = styled.div`
  margin-left: auto;
  transition: 0.3s;

  ${dynamicStylesArrow}
`;

const Text = styled.span`
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  color: #696969;
`;

const Location = styled.span`
  font-weight: 400;
  font-size: 20px;
  line-height: 115%;
  color: #000000;
`;

const CollapseList = styled.div`
  position: absolute;
  top: 55px;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border: 1px solid ${(props) => props.theme.palette.border};
  overflow: auto;
  scrollbar-width: 0;
  scrollbar-height: 0;

  ${dynamicStyles}
`;

const CollapseListItem = styled.div`
  padding: 6px 24px;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #696969;
  background-color: #fff;
  display: flex;
  align-items: center;
  gap: 10px;

  &:not(:last-child) {
    border-bottom: 0.5px solid ${(props) => props.theme.palette.border};
  }
`;

const Component = ({
  id,
  icon,
  title,
  handler,
}: {
  id: string;
  icon: string;
  title: string;
  handler: any;
}) => {
  const handleSetValues = useCallback(() => {
    handler({ icon, title, id });
  }, [handler, icon, title, id]) as any;
  return (
    <CollapseListItem onClick={handleSetValues}>
      <EmojiIcon id={icon} />
      {title}
    </CollapseListItem>
  );
};

interface IProps {
  values: IValues;
  setValues: (values: IValues) => void;
}

const ChooseRootDocComponent = ({ values, setValues }: IProps) => {
  const { documents } = useDocuments();
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = useCallback(() => {
    setOpen(!open);
  }, [setOpen, open]);
  const rootDocs = (documents && [...documents.filter((el) => el.parent_id === null)]) || [];
  const data = [{ id: "root", title: "root", icon: "file_folder" }, ...rootDocs];

  return (
    <Wrapper>
      <Location>Location</Location>
      <WrapperInput onClick={handleOpen}>
        <EmojiIcon id={values.icon} />
        <Text>{values.title}</Text>
        <ArrowWrapper open={open}>
          <svg
            width="10"
            height="16"
            viewBox="0 0 10 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1.79175 1.58334L8.20841 8.00001L1.79175 14.4167" stroke="black" />
          </svg>
        </ArrowWrapper>
        <CollapseList open={open}>
          {data.map((el) => {
            return <Component key={el.id} {...el} handler={setValues} id={el.id} />;
          })}
        </CollapseList>
      </WrapperInput>
    </Wrapper>
  );
};

export default ChooseRootDocComponent;
