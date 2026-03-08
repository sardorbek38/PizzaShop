import React from 'react';
import './Events.css';

import Events1 from '../../assets/Events-1.jpg';
import Events2 from '../../assets/Events-2.jpg';
import Events3 from '../../assets/Events-3.jpg';
import Events4 from '../../assets/Events-4.jpg';
import Events5 from '../../assets/Events-5.jpg';
import Events6 from '../../assets/Events-6.jpg';
import Events7 from '../../assets/Events-7.jpg';


const eventCards = [
  {
    id: 1,
    title: 'HOW WE COOKING',
    size: 'small',
    image: Events1,
  },
  {
    id: 2,
    title: 'OUR BLOG',
    size: 'small',
    image: Events2,
  },
  {
    id: 3,
    title: 'TWO PIZZA FOR 1 PRICE',
    size: 'medium',
    image: Events3,
  },
  {
    id: 4,
    title: 'KITCHEN TOUR',
    size: 'medium',
    image: Events4,
  },
  {
    id: 5,
    title: 'FREE COFFEE FOR 3 PIZZA',
    size: 'large',
    image: Events5,
  },
  {
    id: 6,
    title: 'OUR INSTAGRAM',
    size: 'large',
    image: Events6,
  },
  {
    id: 7,
    title: 'WHERE ARE YOU CHOOSE US?',
    size: 'large',
    image: Events7,
  },
];

function Events() {
  return (
    <div className="events">
      <div className="events__container">
        <div className="events__header">
          <div className="events__grid-top">
            {eventCards.slice(0, 2).map(card => (
              <div key={card.id} className="event-card event-card--small">
                <img src={card.image} alt={card.title} />
                <div className="event-card__overlay">
                  <h3 className="event-card__title">{card.title}</h3>
                  <button className="event-card__btn">More</button>
                </div>
              </div>
            ))}
          </div>

          <div className="events__info">
            <h2 className="events__title">Events</h2>
            <p className="events__desc">
              There are regular events in our pizzeria that will allow
              you to eat delicious food for a lower price!
            </p>
          </div>
        </div>

        <div className="events__grid-middle">
          {eventCards.slice(2, 4).map(card => (
            <div key={card.id} className="event-card event-card--medium">
              <img src={card.image} alt={card.title} />
              <div className="event-card__overlay">
                <h3>{card.title}</h3>
                <button className="event-card__btn">More</button>
              </div>
            </div>
          ))}
        </div>

        <div className="events__grid-bottom">
          {eventCards.slice(4).map(card => (
            <div key={card.id} className="event-card event-card--large">
              <img src={card.image} alt={card.title} />
              <div className="event-card__overlay">
                <h3>{card.title}</h3>
                <button className="event-card__btn">More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Events;
