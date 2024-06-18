import React from 'react';

const TopicCard = ({ topic }) => (
    <div className="topic-card">
        <h3>{topic.topic}</h3>
        <p>Easy: {topic.easy}</p>
        <p>Medium: {topic.medium}</p>
        <p>Hard: {topic.hard}</p>
        <p>Total: {topic.total}</p>
    </div>
);

export default TopicCard;

