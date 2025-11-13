import React from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';

const DesignCard = ({ 
  title = "Default Title", 
  description = "Default description goes here.", 
  icon, 
  bg = "rgba(255,255,255,0.35)",
  link = "View Details",
}) => {
  return (
    <StyledWrapper bg={bg}>
      <div className="card">
        {icon && <div className="icon">{icon}</div>}

        <div className="card__content">
          <p className="card__title">{title}</p>
          <p className="card__description">{description}</p>

          <Link className="btn" to="/all-products">
            {link}
          </Link>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    position: relative;
    width: 320px;
    height: 230px;
    background: ${(props) => props.bg};
    backdrop-filter: blur(8px);
    border-radius: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    perspective: 1000px;
    border: 1px solid rgba(255,255,255,0.4);
    box-shadow: 0 8px 25px rgba(0,0,0,0.1);
    transition: all 0.6s ease;
  }

  .icon svg {
    width: 55px;
    fill: #333;
    opacity: 0.9;
    transition: all 0.6s ease;
  }

  .card:hover {
    transform: translateY(-6px) scale(1.05);
    box-shadow: 0 12px 28px rgba(0,0,0,0.25);
  }

  .card__content {
    position: absolute;
    inset: 0;
    padding: 20px;
    background: ${(props) => props.bg};
    backdrop-filter: blur(10px);
    transform: rotateX(-90deg);
    transform-origin: bottom;
    transition: all 0.6s ease;
  }

  .card:hover .card__content {
    transform: rotateX(0deg);
  }

  .card__title {
    font-size: 26px;
    color: #222;
    font-weight: 800;
    margin: 0;
  }

  .card:hover .icon svg {
    opacity: 0;
    transform: scale(0.3);
  }

  .card__description {
    margin-top: 10px;
    font-size: 15px;
    color: #555;
    line-height: 1.5;
  }

  .btn {
    margin-top: 18px;
    display: inline-block;
    padding: 9px 16px;
    background: linear-gradient(90deg, #6366f1, #a855f7);
    color: white;
    border-radius: 10px;
    font-weight: 600;
    text-decoration: none;
    transition: 0.3s ease;
  }

  .btn:hover {
    opacity: 0.85;
    transform: translateY(-2px);
  }
`;

export default DesignCard;
