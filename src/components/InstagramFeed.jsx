// src/components/InstagramFeed.jsx
import { useState } from 'react';

/**
 * Premium Mock Instagram Feed
 * Since the API is restricted without account ownership, this component
 * provides a high-fidelity 'Real' look using local assets and social overlays.
 */
export default function InstagramFeed() {
  const posts = [
    { id: 1, url: '/images/Instagram/1.jpg', likes: '1.2k', comments: '42' },
    { id: 2, url: '/images/Instagram/2.jpg', likes: '840', comments: '18' },
    { id: 3, url: '/images/Instagram/3.jpg', likes: '2.1k', comments: '64' },
    { id: 4, url: '/images/Instagram/4.jpg', likes: '912', comments: '22' },
    { id: 5, url: '/images/Instagram/5.jpg', likes: '1.5k', comments: '31' },
    { id: 6, url: '/images/Instagram/6.jpg', likes: '730', comments: '15' },
  ];

  return (
    <div className="ig-container">
      {/* --- Premium Social Header --- */}
      <div className="ig-profile-header">
        <div className="ig-profile-info">
          <div className="ig-avatar">
            <img src="/images/Instagram/IG_Logo.jpg" alt="Exotic Wall Finishes" className="avatar-img" />
            <div className="avatar-ring"></div>
          </div>
          <div className="ig-meta">
            <div className="ig-handle">
              exoticwallfinishes
              <span className="verified-badge">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.9 14.7L6.3 12.9l1.4-1.4 2.4 2.4 5.6-5.6 1.4 1.4-7 7z" />
                </svg>
              </span>
            </div>
            <div className="ig-subtitle">ON THE FEED • LATEST ARRIVALS</div>
          </div>
        </div>
        <div className="ig-header-line"></div>
      </div>

      <div className="ig-grid">
        {posts.map((post) => (
          <div key={post.id} className="ig-item-wrapper">
            <div className="ig-item">
              <img src={post.url} alt="Exotic Wall Finishes Instagram" loading="lazy" />
              <div className="ig-overlay">
                <div className="ig-stat">
                  <span className="icon">❤</span> {post.likes}
                </div>
                <div className="ig-stat">
                  <span className="icon">🗨</span> {post.comments}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="ig-cta" style={{ marginTop: '4rem', textAlign: 'center' }}>
        <a 
          href="https://www.instagram.com/exoticwallfinishes/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-premium"
          style={{ 
            padding: '1rem 2.5rem', 
            border: '1px solid rgba(255,255,255,0.2)', 
            borderRadius: '50px',
            fontSize: '0.9rem',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: '#fff',
            display: 'inline-block',
            background: 'transparent',
            transition: 'all 0.4s ease'
          }}
        >
          Follow @exoticwallfinishes
        </a>
      </div>
    </div>
  );
}
