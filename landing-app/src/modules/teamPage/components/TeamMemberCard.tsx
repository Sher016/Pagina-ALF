import './TeamMemberCard.css';
import { FaLinkedin } from 'react-icons/fa';

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
            <svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="team-placeholder-svg">
              <ellipse cx="60" cy="48" rx="28" ry="6" fill="rgba(0,229,160,0.15)" />
              <path d="M32 52 Q32 30 60 28 Q88 30 88 52 Z" fill="rgba(0,229,160,0.2)" stroke="rgba(0,229,160,0.4)" strokeWidth="1.5"/>
              <rect x="28" y="50" width="64" height="6" rx="3" fill="rgba(0,229,160,0.3)" stroke="rgba(0,229,160,0.5)" strokeWidth="1"/>
              <ellipse cx="60" cy="70" rx="18" ry="20" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5"/>
              <path d="M30 120 Q30 95 45 90 L60 86 L75 90 Q90 95 90 120 Z" fill="rgba(0,229,160,0.1)" stroke="rgba(0,229,160,0.25)" strokeWidth="1.5"/>
              <path d="M52 90 L60 100 L68 90" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" fill="none"/>
              <rect x="42" y="100" width="16" height="10" rx="2" fill="rgba(0,229,160,0.15)" stroke="rgba(0,229,160,0.4)" strokeWidth="1"/>
              <line x1="44" y1="104" x2="56" y2="104" stroke="rgba(0,229,160,0.5)" strokeWidth="1"/>
              <line x1="44" y1="107" x2="52" y2="107" stroke="rgba(0,229,160,0.3)" strokeWidth="1"/>
            </svg>
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
