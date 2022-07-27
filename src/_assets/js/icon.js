import React from 'react';
import {
  IconBookmark,
  IconCode,
  IconCodepen,
  IconComputer,
  IconDesign,
  IconError,
  IconExternal,
  IconFolder,
  IconFork,
  IconGitHub,
  IconInstagram,
  IconLinkedinFull,
  IconLinkedin,
  IconSites,
  IconStar,
  IconTwitter,
} from '../js';

const Icon = ({ name }) => {
  switch (name) {
    case 'Bookmark':
      return <IconBookmark />;
    case 'Code':
      return <IconCode />;
    case 'Codepen':
      return <IconCodepen />;
    case 'Computer':
      return <IconComputer />;
    case 'Design':
      return <IconDesign />;
    case 'Error':
      return <IconError />;
    case 'External':
      return <IconExternal />;
    case 'Folder':
      return <IconFolder />;
    case 'Fork':
      return <IconFork />;
    case 'GitHub':
      return <IconGitHub />;
    case 'Instagram':
      return <IconInstagram />;
    case 'LinkedInFull':
      return <IconLinkedinFull />;
    case 'LinkedIn':
      return <IconLinkedin />;
    case 'Star':
      return <IconStar />;
    case 'Sites':
      return <IconSites />;
    case 'Twitter':
      return <IconTwitter />;
    default:
      return <IconError />;
  }
};

export default Icon;
