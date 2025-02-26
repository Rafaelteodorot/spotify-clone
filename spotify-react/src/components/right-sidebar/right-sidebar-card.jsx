import './right-sidebar.css';
import PropTypes from 'prop-types';
import { Button } from '../buttons/button';


function RightSidebarCardRoot(props) {
  return (
    <div className="card">
      {props.children}
    </div>

  );
}

RightSidebarCardRoot.propTypes = {
  children: PropTypes.elementType,
}

function RightSidebarCardHeader({ title, buttonText }) {
  return (
    <div className="flex justify-space-between items-center">
      <span className="font-title text-white">{title}</span>
      <Button highlightSmoothingText scale link>{buttonText}</Button>
    </div>
  );
}

RightSidebarCardHeader.propTypes = {
  title: PropTypes.string,
  buttonText: PropTypes.string,
}

function RightSidebarCardEvent(props) {
  return (
    <a className="card-calendar" href="#">
      {props.children}
    </a>
  );
}

RightSidebarCardEvent.propTypes = {
  children: PropTypes.elementType,
}

function RightSidebarCardDate({ date = '' }) {
  const [day, month] = date.split(' ');
  return (
    <div className="date">
      <span>{day || '??'}</span>
      <span>{month || '??'}</span>
    </div>
  );
}

RightSidebarCardDate.propTypes = {
  date: PropTypes.string,
}

function RightSidebarCardInfo({ location, description, date, time }) {
  return (
    <div className="info">
      <h3>{location}</h3>
      <p>{description}</p>
      <div>{[date, time, location,]}</div>
  </div>
  );
}

RightSidebarCardInfo.propTypes = {
  location: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.string,
  time: PropTypes.string,
}

function ButtonTextRightSidebar(props) {
  return (
    <Button highlightSmoothingText scale link>{props.children}</Button>
  )
}

ButtonTextRightSidebar.propTypes = {
  children: PropTypes.elementType,
}

export const RightSidebarCard = {
  Root: RightSidebarCardRoot,
  Header: RightSidebarCardHeader,
  Event: RightSidebarCardEvent,
  Date: RightSidebarCardDate,
  Info: RightSidebarCardInfo,
  Button: ButtonTextRightSidebar,
}