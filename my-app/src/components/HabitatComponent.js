import React, { useState, useEffect } from 'react';

const HabitatsComponent = () => {
  const [habitats, setHabitats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/habitats')
      .then(response => response.json())
      .then(data => {
        setHabitats(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching habitats:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Habitats</h1>
      <ul>
        {habitats.map((habitat, index) => (
            <li key={index}>
                {habitat.name}<br/>
                {habitat.description}
            </li>
        ))}
      </ul>
    </div>
  );
};

export default HabitatsComponent;
