import { LeftSidebar } from './components/left-sidebar/left-sidebar';
import { RightSidebar } from './components/right-sidebar/right-sidebar';

export function App() {
  return (
    <>
    <LeftSidebar />
    <RightSidebar className="right-sidebar" />
    </>
  );
}