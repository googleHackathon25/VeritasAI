// src/pages/HomePage/HomePage.jsx
import React from 'react';
import styles from './HomePage.module.css';
import ArticleCard from '../../components/ArticleCard/ArticleCard';
import SearchBar from '../../components/SearchBar/SearchBar';

import useNews from './ArrayForArticles';
///////////////////////////////////


///////////////////////////////////

const articles = [
  {
    title: "'Here We ARE': Trump Responds as Russian Drone Incursion into Poland Prompts NATO Action",
    description: "US President Donald Trump had a measured response on Wednesday...",
  },
  {
    title: "Kuldeep Yadav Creates History, Becomes First Player In The World To...",
    description: "India started off their Asia Cup 2025 campaign with a tremendous win against hosts United Arab Emirates...",
  },
  {
    title: "Solar Eclipse 2025: When and how to watch the last Surya Grahan of the year...",
    description: "Details on the timing and visibility of the final solar eclipse of 2025...",
  },
  {
    title: "This is what drinking black coffee daily for 30 days does to your body...",
    description: "Black coffee enthusiasts may notice these surprising changes...",
  },
  {
    title: "Gen Z engineering graduate cites bizarre reason to refuse interview: 'I am 1000 times better...'",
    description: "In today's workplace, employees from Generation Z...",
  },
  {
    title: "Smriti Mandhana And Pratika Rawal Break World Record Of Most Runs By...",
    description: "Smriti Mandhana and Pratika Rawal have formed a solid opening pair for Team India",
  },
];

// This array points to the images you saved in 'public/teamImages/'
// If you used .png, just change the extension here (e.g., 'vedant.png')
const teamMembers = [
    { name: 'Vedant', color: '#FDEBC8', image: '/teamImages/vedant2.svg' },
    { name: 'Smera', color: '#F7F1F8', image: '/teamImages/smera2.svg' },
    { name: 'Ujwal', color: '#E9EFFF', image: '/teamImages/ujwal2.svg' },
    { name: 'Mitali', color: '#FADED4', image: '/teamImages/mitali2.svg' },
];

const HomePage = () => {
  const batmi = useNews();
  return (
    <main className={styles.homePage}>
      <div className={styles.container}>
        <SearchBar />
        <div className={styles.articleGrid}>
          {batmi.map((article, index) => (
            <ArticleCard
              key={index}
              title={article.title}
              description={article.description}
            />
          ))}
        </div>

        {/* MODIFICATION: Added id="our-team" to the section below */}
        <section id="our-team" className={styles.teamSection}>
          <h2 className={styles.teamTitle}>Our Team.</h2>
          <div className={styles.teamContainer}>
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={styles.teamMemberCard}
                style={{ backgroundColor: member.color }}
              >
                <span className={styles.memberName}>{member.name}</span>
                <div className={styles.imagePlaceholder}>
                  <img
                    src={member.image}
                    alt={`Profile of ${member.name}`}
                    className={styles.teamImage}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default HomePage;