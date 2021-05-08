/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
        <Container>
            <CTA>
                <CTALogoOne src="/images/cta-logo-one.svg" />
                <SignUp>GET ALL THERE</SignUp>
                <Description>
                    This clone was made by Maxwell Plumer. If you're looking for a full-stack developer, capable of producing "Disney-Quality" content -- reach out via <a href="https://www.linkedin.com/in/maxplumer/">LinkedIn</a>!
                </Description>
                <CTALogoTwo src="/images/cta-logo-two.png" />
            </CTA>
        </Container>
    )
}

export default Login

const Container = styled.div`
    height: calc(100vh - 70px);
    position: relative;
    display: flex;
    align-items: top;
    justify-content: center;

    &:before {
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url("/images/login-background.jpg");
        position: absolute;
        content: "";
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        opacity: 0.7;
        z-index: -1;
    }


`

const CTA = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 80%;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    align-items: center;
`

const CTALogoOne = styled.img`
    
`

const SignUp = styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0px;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-Bottom: 12px;


    &:hover {
        background: #0483ee;
    }
`

const Description = styled.p`
    font-size: 16px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;



`

const CTALogoTwo = styled.img`
    width: 90%;
    
`
