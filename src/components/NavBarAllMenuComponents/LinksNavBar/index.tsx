import { Container, ContentLinkAndIcon, Icon, Link } from "./styles";

import { AiFillAppstore } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import { FaTelegram } from "react-icons/fa";

export function LinksNavBar() {
  return (
    <Container>
      <h5>Website pages.</h5>
      <ContentLinkAndIcon href="#">
        <Icon>
          <AiFillAppstore size={23} style={{ color: "var(--white-200)" }} />
        </Icon>
        <Link>Start</Link>
      </ContentLinkAndIcon>
      <ContentLinkAndIcon href="#">
        <Icon>
          <FcAbout size={23} />
        </Icon>
        <Link>About us</Link>
      </ContentLinkAndIcon>
      <ContentLinkAndIcon href="#">
        <Icon>
          <FaTelegram size={23} style={{ color: "var(--white-200)" }} />
        </Icon>
        <Link>Telegram</Link>
      </ContentLinkAndIcon>
    </Container>
  );
}
