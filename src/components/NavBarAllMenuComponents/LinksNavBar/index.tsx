import { Container, ContentLinkAndIcon, Icon, LinkStyle } from "./styles";

import { AiFillAppstore } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import { FaTelegram } from "react-icons/fa";

import Link from "next/link";

export function LinksNavBar() {
  return (
    <Container>
      <h5>Website pages.</h5>
      <ContentLinkAndIcon>
        <Icon>
          <AiFillAppstore size={23} style={{ color: "var(--white-200)" }} />
        </Icon>
        <LinkStyle>
          <Link href="/dashboard">Start</Link>
        </LinkStyle>
      </ContentLinkAndIcon>
      <ContentLinkAndIcon>
        <Icon>
          <FcAbout size={23} />
        </Icon>
        <LinkStyle>
          <Link href="/aboutus">About Us</Link>
        </LinkStyle>
      </ContentLinkAndIcon>
      <ContentLinkAndIcon>
        <Icon>
          <FaTelegram size={23} style={{ color: "var(--white-200)" }} />
        </Icon>
        <LinkStyle>
          <Link href="##">Telegram</Link>
        </LinkStyle>
      </ContentLinkAndIcon>
    </Container>
  );
}
