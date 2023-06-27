import { Content } from './components/Content';
import { Info } from './components/Info';

import { PostContainer } from './styles';

export function Post() {
    return (
        <PostContainer>
            <Info />

            <Content />
        </PostContainer>
    );
}