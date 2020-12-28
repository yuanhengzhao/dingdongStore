import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import StarRateIcon from '@material-ui/icons/StarRate';
import 'react-vertical-timeline-component/style.min.css';
const AdoptionSteps = () => {
  // const timelineElements = [];
  return (
    <section id="about" className="about-mf sect-pt4 route bg-image">
      <div className="container">
        <div className="col-sm-12">
          <div
            className="box-shadow-full"
            style={{
              marginTop: '20px',
              backgroundColor: 'rgb(238,238,238,0.4)',
            }}
          >
            <div className="title-box-2">
              <h5 className="title-left">Adoption Steps</h5>
              <VerticalTimeline className="timeline">
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: 'rgb(33, 150, 243)',
                    color: '#fff',
                  }}
                  contentArrowStyle={{
                    borderRight: '7px solid  rgb(33, 150, 243)',
                  }}
                  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                  icon={<AccessAlarmIcon />}
                >
                  <h3 className="vertical-timeline-element-title">
                    Creative Director
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    Miami, FL
                  </h4>
                  <p>
                    Creative Direction, User Experience, Visual Design, Project
                    Management, Team Leading
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                  icon={<AccessAlarmIcon />}
                  onTimelineElementClick={() => {
                    console.log('here is your ');
                  }}
                >
                  <h3 className="vertical-timeline-element-title">
                    Art Director
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    San Francisco, CA
                  </h4>
                  <p>
                    Creative Direction, User Experience, Visual Design, SEO,
                    Online Marketing
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                  icon={<AccessAlarmIcon />}
                >
                  <h3 className="vertical-timeline-element-title">
                    Web Designer
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    Los Angeles, CA
                  </h4>
                  <p>User Experience, Visual Design</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                  icon={<AccessAlarmIcon />}
                >
                  <h3 className="vertical-timeline-element-title">
                    Web Designer
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    San Francisco, CA
                  </h4>
                  <p>User Experience, Visual Design</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--education"
                  iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                  icon={<MenuBookIcon />}
                >
                  <h3 className="vertical-timeline-element-title">
                    Content Marketing for Web, Mobile and Social Media
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    Online Course
                  </h4>
                  <p>Strategy, Social Media</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--education"
                  iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                  icon={<MenuBookIcon />}
                >
                  <h3 className="vertical-timeline-element-title">
                    Agile Development Scrum Master
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    Certification
                  </h4>
                  <p>Creative Direction, User Experience, Visual Design</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--education"
                  iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                  icon={<MenuBookIcon />}
                >
                  <h3 className="vertical-timeline-element-title">
                    Bachelor of Science in Interactive Digital Media Visual
                    Imaging
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    Bachelor Degree
                  </h4>
                  <p>Creative Direction, Visual Design</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                  icon={<StarRateIcon />}
                />
              </VerticalTimeline>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdoptionSteps;
