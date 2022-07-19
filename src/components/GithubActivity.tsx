import React from "react";
import GitHubCalendar from "react-github-calendar";

export const GithubActivity: React.FC = (props) => {
  return (
    <div className="activity">
      <div className="activity-text">GitHub activity</div>
      <GitHubCalendar username="jlsnow301" />
    </div>
  );
};
