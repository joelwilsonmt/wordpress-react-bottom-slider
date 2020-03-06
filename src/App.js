import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

import Form from "./components/Form"
import theme from "./styles/theme"

const { breakPoints: { screenQuery } } = theme

const gridGap = "40px"
const Wrapper = styled.div`
  max-height: 100vh;
  width: 100vw;
  transition-duration: 1s;
  background-color: #6FD4DD;
  position: fixed;
  left: 0;
  z-index: 2147483002; /* this oddly specific z-index is to lay over Intercom's dialog, which has a z-index of 2147483001 */
  ${props => props.open ? `bottom: 0;` : `bottom: -69vh;`}
  ${screenQuery.medium}{
    ${props => props.open ? `bottom: 0;` : `bottom: -100vh;`}
  }
  box-shadow: 0 12px 14px 10px rgba(0,0,0,.5);
`
const InnerWrapper = styled.div`
  padding: 5%;
  font-family: "Proxima Nova", "Helvetica Neue", Helvetica, Arial, sans-serif;
  margin: 0 auto;
  color: #333;
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-column-gap: ${gridGap};
  align-items: center;
  width: 90%;
  max-width: 1110px;
  ${screenQuery.medium}{
    grid-template-columns: 1fr;
    grid-row-gap: 25px;
  }
`
const PDFWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: ${gridGap};
  align-items: center;
  ${screenQuery.mobile}{
    grid-template-columns: 1fr;
    grid-row-gap: 20px;
  }
`
const BackdropWrapper = styled.div`
  position: relative;
  order: 1;
  ${screenQuery.mobile}{
    order: 2;
    max-width: 55%;
    margin: auto;
  }
  @media screen and (max-width: 325px){
    display: none;
  }
`
const Backdrop = styled.img`
  position: absolute;
  width: 100%;
  max-width: 75%;
  top: -40px;
  right: -40px;
  z-index: -1;
 
`
const PDFImage = styled.img`
  z-index: 1000;
  max-width: 100%;
  ${screenQuery.mobile}{
    max-height: 25vh;
  }
`
const TextSection = styled.div`
  order: 2;
  ${screenQuery.mobile}{
    text-align: center;
    margin-bottom: 15px;
    order: 1;
  }
`
const FormWrapper = styled.div`
  background-color: #fff;
  padding: 5%;
`
const Headlines = styled.div`
  text-align: center;
  h2 {
    color: #fc5b30; 
  }
  h2, h5 {
    margin: 0 0 10px 0;
    font-weight: 450;
    ${screenQuery.mobile}{
      margin: 0 0 5px 0;
    }
  }
`
const CloseButton = styled.img`
  position: relative;
  float: right;
  max-width: 40px;
  top: 10px;
  right: 10px;
  :hover {
    cursor: pointer;
  }
`




function App() {
  const [open, setOpen] = useState(false)
  const [seen, setHasBeenSeen] = useState(false)
  let tags = []
  let children
  if (document.getElementsByClassName('tags')[0]) {
    children = Array.from(document.getElementsByClassName('tags')[0].children)
  }
  if (children) { children.forEach(child => tags.push(child.innerHTML.toLowerCase())) }

  const shouldShow = () => {
    const hasTags = tags.includes('grants') || tags.includes('corporate giving')
    if (!seen && hasTags) {
      // console.log("slider hasn't been seen and page has tags", seen)
      return true
    }
    else return false
  }

  const authorDiv = document.getElementsByClassName('author')[0]

  useEffect(() => {
    const handleScroll = () => {
      if (authorDiv) {
        const { bottom } = authorDiv.getBoundingClientRect()
        if (bottom - window.innerHeight < 0 && shouldShow()) {
          setOpen(true)
          setHasBeenSeen(true)
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })
  const placeholders = [
    {
      name: 'email',
      placeholder: 'Enter your email'
    },
    {
      name: 'firstname',
      placeholder: 'First name'
    },
    {
      name: 'lastname',
      placeholder: 'Last name'
    },
    {
      name: 'company',
      placeholder: 'Company'
    }
  ]

  const redirect = () => {
    if (tags.includes('grants')) {
      window.open('https://info.submittable.com/transforming-grantmaking-maximizing-impact-through-improved-grants-management-download')
    }
    else if (tags.includes('corporate giving')) {
      window.open('https://info.submittable.com/start-build-effective-csr-program-download')
    }
    else {
      console.log("something went wrong")
    }
  }
  return (
    <Wrapper open={open}>
      <CloseButton onClick={() => setOpen(false)} src="https://blog.submittable.com/wp-content/uploads/Modal-Close-Button.svg" />
      <InnerWrapper>
        <PDFWrapper>
          <BackdropWrapper>
            <Backdrop src="https://blog.submittable.com/wp-content/uploads/Circle.svg" />
            <PDFImage src="https://blog.submittable.com/wp-content/uploads/EOY_numbers_2019_blog-03-1-1.png" />
          </BackdropWrapper>
          <TextSection>
            <h3>Get the PDF guide</h3>
            <p>Download the guide to boosting your opportunity with Submittable promotions.</p>
          </TextSection>
        </PDFWrapper>
        <FormWrapper>
          <Headlines>
            <h2>Form Headline</h2>
            <h5>Form Subheadline</h5>
          </Headlines>
          <Form
            formId='0d6a37f1-36ae-4560-8060-c1972828d394'
            columns={2}
            fullWidthFields={['email', 'company']}
            placeholders={placeholders}
            onSubmit={() => {
              setOpen(false)
              redirect()
            }}
          />
        </FormWrapper>
      </InnerWrapper>
    </Wrapper>
  )
}

export default App;
