import PropTypes from 'prop-types';

function EventItemRoot(props) {
  const { children } = props;

  return (
    <a className="card-calendar" href="#">
      {children}
    </a>
  );
}

EventItemRoot.propTypes = {
  children: PropTypes.elementType,
};

function EventItemDateContainer(props) {
  const { children } = props;

  return (
    <div className="date">
      {children}
    </div>
  );
}

EventItemDateContainer.propTypes = {
  children: PropTypes.elementType,
};

function EventItemMonth(props) {
  const { children } = props;

  return (
    <span>{children}</span>
  );
}

EventItemMonth.propTypes = {
  children: PropTypes.elementType,
};

function EventItemDay(props) {
  const { children } = props;

  return (
    <span>{children}</span>
  );
}

EventItemDay.propTypes = {
  children: PropTypes.elementType,
};

function EventItemInfoContainer(props) {
  const { children } = props;

  return (
    <div className="info">{children}</div>
  );
}

EventItemInfoContainer.propTypes = {
  children: PropTypes.elementType,
};

function EventItemTitle(props) {
  const { children } = props;

  return (
    <h3>{children}</h3>
  );
}

EventItemTitle.propTypes = {
  children: PropTypes.elementType,
};

function EventItemDescription(props) {
  const { children } = props;
  return (
    <p>{children}</p>
  );
}

EventItemDescription.propTypes = {
  children: PropTypes.elementType,
};

function EventItemMoreInfo(props) {
  const { children } = props;
  
  return (
    <div>{children}</div>
  );
}

EventItemMoreInfo.propTypes = {
  children: PropTypes.elementType,
};

export const EventItem = {
  Root: EventItemRoot,
  DateContainer: EventItemDateContainer,
  Month: EventItemMonth,
  Day: EventItemDay,
  InfoContainer: EventItemInfoContainer,
  Title: EventItemTitle,
  Description: EventItemDescription,
  MoreInfo: EventItemMoreInfo,
};