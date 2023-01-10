import React from "react";
import Link from "@components/Link";
import BreadcrumbsNav from "@components/Document/BreadcrumbsNav";
import EmojiIcon from "@components/Emoji";
import { IDoc } from "@hooks/useDocuments";
import styled from "@emotion/styled";
interface IProps {
  activeDocument: IDoc | null;
}

const BreadcrumbsItemWrapper = styled.span`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const Breadcrumbs = ({ activeDocument }: IProps) => {
  return (
    <BreadcrumbsNav>
      {activeDocument?.breadcrumbs &&
        activeDocument?.breadcrumbs.map(({ id, title, icon }) => (
          <React.Fragment key={id}>
            <Link to={`/${title}--${id}`}>
              <EmojiIcon id={icon || "+1"} />
              {title}
            </Link>
            <span>/</span>
          </React.Fragment>
        ))}
      {activeDocument && (
        <BreadcrumbsItemWrapper>
          <EmojiIcon id={activeDocument.icon || "+1"} />
          {activeDocument.title}
        </BreadcrumbsItemWrapper>
      )}
    </BreadcrumbsNav>
  );
};

export default Breadcrumbs;
