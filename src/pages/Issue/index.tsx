import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';

import { api } from '../../lib/axios';

import { Banner } from '../../components/Banner';
import { Loading } from '../../components/Loading';

import { Content, PostContainer } from './styles';

interface issueInfo {
    htmlUrl: string;
    title: string;
    userLogin: string;
    createdAt: string;
    comments: number;
}

export function Issue() {
    const { user, repository, issue } = useParams();

    const [issueInfo, setIssueInfo] = useState({} as issueInfo);
    const [body, setBody] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchIssue() {
            const { data } = await api.get(`/repos/${user}/${repository}/issues/${issue}`);

            setIssueInfo({
                htmlUrl: data.html_url,
                title: data.title,
                userLogin: data.user.login,
                createdAt: data.created_at,
                comments: data.comments
            })
            setBody(data.body);
            setIsLoading(false);
        }

        fetchIssue();
    }, [issue, repository, user]);

    return (
        <PostContainer>
            {
                isLoading
                    ?
                    <Loading />
                    :
                    <>
                        <Banner
                            issue={issueInfo}
                        />

                        <Content>
                            <ReactMarkdown
                                linkTarget={'_blank'}
                            >
                                {body}
                            </ReactMarkdown>
                        </Content>
                    </>
            }
        </PostContainer>
    );
}