"use client";
// Timeline.js
import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Timeline = ({ experiences }) => {
  return (
    <div>
      <h2 className="text-center text-4xl font-bold text-white mt-20 mb-8 md:mb-12">
        Work Experience
      </h2>
      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <VerticalTimelineElement
            key={index}
            date={experience.date}
            iconStyle={{ background: '#ADB7BE', color: '#fff' }}
            icon={<span></span>}
            className={index % 2 === 0 ? 'left-timeline' : 'right-timeline'} // Apply alternate styling based on index
          >
            <h3 className="vertical-timeline-element-title text-black">{experience.role}</h3>
            <h4 className="vertical-timeline-element-subtitle text-black">{experience.company}</h4>
            <p className="text-black">{experience.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;

