"use client";
// Timeline.js
import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const Timeline = ({ experiences }) => {
  return (
    <div>
      <h2 className="text-center text-4xl md:text-5xl font-bold text-white mt-20 mb-8 md:mb-12">
        Work Experience
      </h2>
      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <VerticalTimelineElement
            key={index}
            date={experience.date}
            icon={<img src={experience.icon} alt="Icon" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />}
            iconStyle={{ background: '#ffffff', color: '#fff' }}
            className={index % 2 === 0 ? 'left-timeline opacity-100' : 'right-timeline opacity-100'} // Apply alternate styling based on index
            contentStyle={{ background: 'rgba(49, 54, 63, 0.5)', color: '#fff', boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )', backdropFilter: 'blur(4px)', borderRadius: '10px' }}
          >
            <h3 className="vertical-timeline-element-title text-white text-lg md:text-2xl font-extrabold">{experience.role}</h3>
            <h4 className="vertical-timeline-element-subtitle text-white">{experience.company}</h4>
            <p className="text-white">{experience.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
