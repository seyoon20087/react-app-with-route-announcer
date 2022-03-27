import React from "react";
import { useLocation } from "react-router-dom";
import styled from "@emotion/styled/macro";

const RouteAnnouncerWrapper = styled.div`
  border: 0px;
  clip: rect(0px, 0px, 0px, 0px);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0px;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  word-wrap: normal;
`;

export const RouteAnnouncer = () => {
  const { pathname } = useLocation();
  const [routeAnnouncement, setRouteAnnouncement] = React.useState("");

  const previouslyLoadedPath = React.useRef(pathname);

  const waitTime = 90;

  React.useEffect(() => {
    if (previouslyLoadedPath.current === pathname) return;
    previouslyLoadedPath.current = pathname;

    if (document.title) {
      setTimeout(() => {
        setRouteAnnouncement(document.title);
      }, waitTime);
    } else if (document.querySelector("h1")) {
      const pageHeader = document.querySelector("h1");
      const content = pageHeader?.innerText ?? pageHeader?.textContent;

      setTimeout(() => {
        setRouteAnnouncement(content || pathname);
      }, waitTime);
    }
  }, [pathname]);

  return (
    <RouteAnnouncerWrapper
      aria-live="assertive"
      role="alert"
      id="__route-announcer__"
    >
      {routeAnnouncement}
    </RouteAnnouncerWrapper>
  );
};
