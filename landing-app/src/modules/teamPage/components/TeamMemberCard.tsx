import './TeamMemberCard.css';
import './TeamMemberCard.css';
import { FaLinkedin } from 'react-icons/fa';
import { TeamPlaceholderIcon } from './teamPlaceHolder/TeamPlaceHolder';

export interface TeamMember {
  image?: string;
  name: string;
  role: string;
  description: string;
  linkedin?: string;
}

export function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="team-card">
      <div className="team-card-image">
        {member.image ? (
          <img src={member.image} alt={member.name} />
        ) : (
          <div className="team-card-placeholder">
            <TeamPlaceholderIcon />
          </div>
        )}
        <div className="team-card-gradient" />
      </div>

      <div className="team-card-info">
        <h3 className="team-name">{member.name}</h3>
        <span className="team-role">{member.role}</span>
        <p className="team-desc">{member.description}</p>
      </div>

      {member.linkedin && (
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="team-linkedin"
          aria-label={`LinkedIn de ${member.name}`}
        >
          <FaLinkedin size={16} />
        </a>
      )}
    </div>
  );
}
