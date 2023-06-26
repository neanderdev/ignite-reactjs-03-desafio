import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

import { Avatar, Info, ProfileContainer, Title } from './styles';

export function Profile() {
    return (
        <ProfileContainer>
            <Avatar src="https://www.github.com/neanderdev.png" alt='' />

            <div>
                <Title>
                    <h1>Neander de Souza</h1>

                    <NavLink to="#">
                        GITHUB

                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </NavLink>
                </Title>

                <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>

                <Info>
                    <div>
                        <FontAwesomeIcon icon={faGithub} />

                        neanderdev
                    </div>

                    <div>
                        <FontAwesomeIcon icon={faBuilding} />

                        Rocketseat
                    </div>

                    <div>
                        <FontAwesomeIcon icon={faUserGroup} />

                        32 seguidores
                    </div>
                </Info>
            </div>
        </ProfileContainer>
    );
}