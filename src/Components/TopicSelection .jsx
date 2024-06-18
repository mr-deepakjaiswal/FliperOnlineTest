import React, { useEffect, useState } from 'react';
import TopicCard from './TopicCard';

const TopicSelection = () => {
  const [topics, setTopics] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://ap-south-1.aws.data.mongodb-api.com/app/application-0-eexgfbu/endpoint/v2/list?list=show')
      .then(response => response.json())
      .then(data => setTopics(data))
      .catch(error => console.error('Error fetching topics:', error));
  }, []);

  const filteredTopics = topics.filter(topic =>
    topic?.topic?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='topicsGet'>
      <h1>Topics</h1>
      <div className="topic-grid">
        {filteredTopics.map(topic => (
          <TopicCard key={topic.topic} topic={topic} />
        ))}
      </div>
    </div>
  );
};

export default TopicSelection;
