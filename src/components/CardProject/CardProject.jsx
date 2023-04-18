import styled from "styled-components";
import { colors } from "../../contants/theme";
import IconGithub from "../../common/icons/IconGithub";

export default function CardProject({
  title,
  description,
  technologies,
  githubHref,
}) {
  return (
    <Card>
      <div className="card-header">
        <h2>{title}</h2>
        <IconGithub
          href={githubHref}
          color={colors.white}
          width={30}
          height={30}
        />
      </div>
      <p>{description}</p>
      <div className="card-footer">
        <p>{technologies}</p>
      </div>
    </Card>
  );
}

const Card = styled.li`
  position: relative;
  border-radius: 10px;
  border: 2px dashed ${colors.primary};
  color: ${colors.white};
  overflow: hidden;
  max-width: 300px;
  display: grid;
  place-items: center;
  padding-top: 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: #2621182d;
    z-index: 10;
  }

  .card-header {
    display: flex;
    align-items: center;
    gap: 2rem;
    flex-grow: 0;
    z-index: 20;

    h2 {
      font-size: 2rem;
    }
  }

  p {
    flex-grow: 1;
    font-size: 1.8rem;
    text-align: justify;
    padding: 2rem;
  }

  .card-footer {
    flex-grow: 0;
    width: 100%;
    border-top: 1px solid ${colors.primary};
    display: flex;
    align-items: center;

    p {
      margin: 0;
      font-size: 1.6rem;
      color: ${colors.secondary};
    }
  }

  @media only screen and (max-width: 550px) {
    border: 1px dashed ${colors.primary};
  }
`;
