import { LeftSidebar } from './components/left-sidebar/left-sidebar';
import { ContentWrapper } from './components/content-wrapper/content-wrapper';
import { RightSidebar } from './components/right-sidebar/right-sidebar';

export function App() {
  return (
    <>
    <LeftSidebar />
    <ContentWrapper />
    <RightSidebar className="right-sidebar" />
    </>
  );
}