
import React, {useState} from 'react';
import ReactGA from 'react-ga';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import { css } from '@emotion/core';
import BounceLoader from 'react-spinners/BounceLoader';

import './EmailForm.css'

type Props = {
    subject: string;
}

enum SendEmailStatus {
    SENDING,
    SUCCESS,
    ERROR,
    NONE
}

function EmailForm({subject}: Props) {
    const [text, setText] = useState('')

    const [textIsValid, setTextIsValid] = useState(false)

    const [sendChecked, setSendChecked] = useState(false)

    const [status, setStatus] = useState(SendEmailStatus.NONE)

    const loaderCss = css`
        display: block;
        margin-left: auto;
        margin-right: auto;
    `;

    function sendEmail() {
        setTextIsValid(text !== '')

        setSendChecked(true)

        if(textIsValid) {
            eventTracking('User', 'Send feedback button pressed', `Send feedback button pressed for ${subject}`)
            setStatus(SendEmailStatus.SENDING)
            fetch(process.env.REACT_APP_API_URL + '/sendFeedback', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    text: text,
                    subject: subject
                })
            })
            .then(res => {
                if(!res.ok) {
                    throw new Error(res.statusText)
                }
                return res.json()
            })
            .then(res => {
                setStatus(SendEmailStatus.SUCCESS)
            }, error => {
                console.log(error + ' while sending email')
                setStatus(SendEmailStatus.ERROR)
            });
        }
    }

    function eventTracking(category: string, action: string, label: string) {
        ReactGA.event({
            category: category,
            action: action,
            label: label
        })
    }

    return(
        <div>
            {
                status === SendEmailStatus.SENDING &&
                <div style={{padding: '100px 0'}}>
                    <BounceLoader
                        css={loaderCss}
                        sizeUnit={"px"}
                        size={40}
                        color={'#202020'}
                        loading={status === SendEmailStatus.SENDING}
                    />
                    <p className="SendMessageLabel">Sending message...</p>
                </div>
            }
            {
                status === SendEmailStatus.SUCCESS &&
                <div className="SendEmailStatusText" style={{padding: '100px 0'}}>
                    <p className="SendEmailStatusTitle">Thank you!</p>
                    <p className="SendEmailStatusMsg">
                        Your feedback has been sent succesfully!
                        <br></br>
                        If you wish to continue the conversation, please reach me on social networks :)
                    </p>
                </div>
            }
            {
                status === SendEmailStatus.ERROR &&
                <div className="SendEmailStatusText" style={{padding: '100px 0'}}>
                    <p className="SendEmailStatusTitle">Something went wrong...</p>
                    <p className="SendEmailStatusMsg">Please try to send your message later :)</p>
                </div>
            }
            {
                status === SendEmailStatus.NONE && 
                <div>
                    <Form>
                        <Form.Group>
                            <Form.Text className="FormTitle">Your ideas matter</Form.Text>
                            <Form.Text className="FormSubtitle">
                                Please, if you have found something interesting or to be improved, I would love to learn more to offer better experience and content in the future.                            
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control className="FormTextarea" style={{resize: 'none', borderColor: textIsValid || !sendChecked ? '#ced4da' : '#dc3545'}} as="textarea" rows="5" placeholder="Hey Lorenzo, I think..." 
                                onChange={(e: any) => {
                                    setText(e.target.value)
                                    setTextIsValid(e.target.value !== '')
                                }} 
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Text className="FormDisclaimer">Your privacy matters as well. This feedback is anonymous and I do not collect nor store any of your personal data.</Form.Text>
                        </Form.Group>
                    </Form>
                    <Row className="justify-content-center">
                        <button className="SendButton float-right" onClick={() => sendEmail()}>
                            Send
                        </button>
                    </Row>
                </div>
            }
        </div>
    )
}

export default EmailForm