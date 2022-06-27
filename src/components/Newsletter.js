import React from 'react';
import { css } from '@emotion/react'
import ConvertKitForm from 'convertkit-react';
import Container from './Container';

const Newsletter = () => {
    const config = {
        formId: 3387801,
        template: 'mills',
        emailPlaceholder: 'Email address',
        submitText: 'Subscribe',
        headingText: 'Join the newsletter',
        disclaimerText: 'No spam. Unsubscribe at any time.',
        buttonBackground: '#202020'
    }
    return(
        <Container>
            <ConvertKitForm css={
                    css`
                    margin-left: auto;
                    margin-right: auto;`
                } 
                {...config}>
                <p>Subscribe to get my latest content by email.</p>
            </ConvertKitForm>
        </Container>
        
    )
}

export default Newsletter