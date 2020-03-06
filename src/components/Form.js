import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import HubspotForm from "react-hubspot-form"
import $ from "jquery"

import theme from "../styles/theme"

const { colors, forms, breakPoints: { screenQuery } } = theme

const Wrapper = styled.div``

const inputHeight = "34px"

const Form = styled.div`
    /* hubspot nests 1 div inside a fieldset to contain input info. "hidden fields" have an inline
    style attribute of display: none; applied to their nested div (but not the fieldset), 
    so use this for entire grid cell spacing:
    Make sure not to set height because hidden fieldsets will become visible (or rather take up grid space...) */
  fieldset, .field {
    width: 100%;
    max-width: 100% !important;
  }
  .hs-form-required {
    display: none; 
  }
  label {
    display: none;
  }
  .hs-error-msgs {
      display: none !important;
  }
  /* I feel bad about this, but can't wrangle the "rollup" error message so might as well hide it: */
  .hs_error_rollup {
      label {
        display: none;
      }
  }
  input,
  select, textarea {
    box-sizing: border-box;
    -webkit-appearance: none;
    box-shadow: inset -1px 1px 2px 1px rgba(31,28,78,0.2);
    /* border: 1px solid red; */
    color: #333;
    background-color: #fff;
    width: 100% !important;
    outline: none !important;
    border: none !important;
    padding: 0 !important;
    height: ${inputHeight} !important;
    padding-left: 10px !important;
    border-radius: 0px;
    margin-top: 20px;
  }
  select {
    /* this is for a custom dropdown triangle icon appearance. Mostly done for the sake of Safari: */
    -webkit-appearance: none;
    -moz-appearance: none;
    background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
    background-repeat: no-repeat;
    background-position-x: 98%;
    background-position-y: 10px;
  }
  textarea{
    height: ${inputHeight}  !important;
    padding-top: ${forms.inputs.innerPadding}px;
  }
  .input {
    margin-right: 0 !important;
    width: 100%;
  }
  input[type="submit"] {
    box-shadow: none;
    background-color: ${colors.brand.main};
    color: ${colors.brand.contrastText};
    border: none;
    font-size: 14px;
    text-transform: uppercase;
    transition-duration: ${theme.transitionDuration} !important;
  }
  input[type="submit"]:hover {
    background-color: ${colors.brand.main} !important;
    color: ${colors.brand.contrastText} !important;
    box-shadow: 4px 4px 0 0 #f7a893 !important;
    outline: none !important;
    cursor: pointer;
  }

  form {
    display: grid;
    justify-items: center;
    column-gap: 30px;
  }
  .full-width, .hs_submit {
    grid-column-start: 1;
    grid-column-end: ${props => props.columns ? props.columns + 1 : '4'};
  }
  .hs_submit {
    /* padding top to make grid align with label line height: */
    width: ${props => props.submitButtonWidth ? `${props.submitButtonWidth}` : '100%'};
    @media screen and (max-width: ${theme.breakPoints.medium}) {
      width: 100%;
    }
  }
  /*thank you message if not redirecting: */
  .submitted-message {
    text-align: center;
    color: ${props => props.dark ? colors.grayscale.white : colors.grayscale.main};
  }
`


export default (props) => {
  const uniqueClass = `hs-form-${props.formId}`

  const ref = useRef(null)
  let columns = props.columns || 3

  const submit = () => {
    if (props.dontRedirect) {
      return
    }
  }

  useEffect(() => {
    window.$ = window.jQuery = $
  }, [])

  return (
    <Wrapper ref={ref} className={`${uniqueClass}`}>
      <Form
        columns={columns}
        submitButtonWidth={props.submitButtonWidth}
        columnWidth={props.columnWidth}
      >
        <HubspotForm
          portalId="462367"
          formId={props.formId}
          translations={{
            en: {
              submitText: props.submitButtonText,
              missingSelect: "Please select an option",
              fieldLabels: {
                email: props.emailLabel || "Work Email"
              }
            }
          }}

          onFormReady={($form, ctx) => {
            if (props.placeholders) {
              props.placeholders.forEach(placeholder => {
                $(`.${uniqueClass} input[name="${placeholder.name}"]`).attr(
                  "placeholder",
                  placeholder.placeholder
                )
              })
            }
            if (props.fullWidthFields) {
              props.fullWidthFields.forEach(field => {
                const isFieldset = $(`.${uniqueClass} .hs_${field}`).parent().is("fieldset")
                if (isFieldset) {
                  $(`.${uniqueClass} .hs_${field}`).parent().addClass("full-width")
                }
                else {
                  $(`.${uniqueClass} .hs_${field}`).addClass("full-width")
                }
              })
            }
          }}

          onFormSubmitted={$form => {
            if (props.onSubmit) {
              props.onSubmit()
            }
            submit()
          }}

          loading={<div>Loading...</div>}
        />
      </Form>
    </Wrapper>
  )
}


