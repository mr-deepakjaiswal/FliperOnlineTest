import React, { useEffect, useState } from 'react';
import TopicCard from './TopicCard';

const TopicSelection = () => {
  const [topics, setTopics] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    fetch('https://ap-south-1.aws.data.mongodb-api.com/app/application-0-eexgfbu/endpoint/v2/list?list=show')
      .then(response => response.json())
      .then(data => setTopics(data))
      .catch(error => console.error('Error fetching topics:', error));
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const filteredTopics = topics.filter(topic =>
    topic?.topic?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedTopics = filteredTopics.sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.topic.localeCompare(b.topic);
    } else {
      return b.topic.localeCompare(a.topic);
    }
  });

  return (
    <div className='topicsGet'>
      <h1>Topics</h1>
      <div className="controls">
        <input
          type="text"
          placeholder="Search topics..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <select value={sortOrder} onChange={handleSortChange}>
          <option value="asc">Sort A-Z</option>
          <option value="desc">Sort Z-A</option>
        </select>
      </div>
      <div className="topic-grid">
        {sortedTopics.map(topic => (
          <TopicCard key={topic.topic} topic={topic} />
        ))}
      </div>
    </div>
  );
};

export default TopicSelection;
