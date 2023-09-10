import React, { useContext, useRef, useState } from "react"
import {
  Button,
  Container,
  Input,
  Text,
  Textarea,
} from "../../../../components/molecules"
import { EmployerContext } from "../../Employer.component"
import { ACTIONS } from "../../Employer.constants"
import { styled } from "styled-components"
import { Device } from "../../../../components/atoms/DeviceSize"

const MAX_SIZE_16_KB = 16384

const StyledContainer = styled(Container)`
  width: 60%;
  @media ${Device.Small} {
    width: 100%;
  }
`

function JobForm() {
  const [jobRequirements, setJobRequirements] = useState("")
  const [tags, setTags] = useState("")
  const [companyName, setCompanyName] = useState("")
  const [contactInfo, setContactInfo] = useState("")
  const [jobDescriptionDoc, setJobDescriptionDoc] = useState(null)
  const [fileError, setFileError] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [successMessage, setSuccessMessage] = useState("")
  const { dispatch } = useContext(EmployerContext)
  const fileInputRef = useRef(null)

  const validateForm = () => {
    if (
      !(
        jobRequirements &&
        tags &&
        companyName &&
        contactInfo 
      )
    ) {
      setErrorMessage("All fields are required")
      return false
    }
    setErrorMessage("")
    return true
  }

  const handleSubmit = () => {
    const isFormValid = validateForm()
    if (isFormValid) {
      dispatch({
        type: ACTIONS.ADD_JOB,
        data: {
          jobRequirements,
          tags,
          companyName,
          contactInfo,
          jobDescriptionPdf: jobDescriptionDoc,
        },
      })
      setSuccessMessage("Job posted successfully!!")

      setTimeout(() => {
        setSuccessMessage("")
      }, 3000)
    }
  }

  const removeFileUploded = () => {
    setJobDescriptionDoc(null)

    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]

    if (file) {
      if (file.size <= MAX_SIZE_16_KB) {
        setJobDescriptionDoc(file.name)
        setFileError("")
      } else {
        setFileError("File size exceeds the 16KB limit.")
        removeFileUploded()
      }
    }
  }

  const handleClear = () => {
    removeFileUploded()
    setCompanyName("")
    setContactInfo("")
    setFileError("")
    setTags("")
    setJobRequirements("")
  }

  return (
    <StyledContainer width="100%" marginTop="md" padding="md">
      <Text content="Post Job" color="blue600" size="lg" marginBottom="lg" />
      <Container display="flex" marginBottom="xsm">
        <Text
          noWrap
          content="Job Description"
          marginRight="sm"
          color="grey700"
          size="md"
          width="300px"
        />
        <Container width="100%" display="flex">
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            ref={fileInputRef}
          />
          <Text content={fileError} marginLeft="sm" color="red600" size="sm" />
        </Container>
      </Container>
      <Container display="flex" marginBottom="xsm">
        <Text
          required
          noWrap
          content="Job Requirements"
          marginRight="sm"
          color="grey700"
          size="md"
          width="300px"
        />
        <Container width="100%">
          <Textarea value={jobRequirements} onChange={setJobRequirements} />
        </Container>
      </Container>
      <Container display="flex" marginBottom="xsm">
        <Text
          required
          noWrap
          content="Tags"
          marginRight="sm"
          color="grey700"
          size="md"
          width="300px"
        />
        <Container width="100%">
          <Input
            placeholder="React, javascript, frontend developer"
            value={tags}
            onChange={setTags}
          />
        </Container>
      </Container>
      <Container display="flex" marginBottom="xsm">
        <Text
          required
          noWrap
          content="Company Name"
          marginRight="sm"
          color="grey700"
          size="md"
          width="300px"
        />
        <Container width="100%">
          <Input value={companyName} onChange={setCompanyName} />
        </Container>
      </Container>
      <Container display="flex" marginBottom="xsm">
        <Text
          required
          noWrap
          content="Company Info"
          marginRight="sm"
          color="grey700"
          size="md"
          width="300px"
        />
        <Container width="100%">
          <Input value={contactInfo} onChange={setContactInfo} />
        </Container>
      </Container>
      <Container display="flex">
        <Button marginRight="lg" value="Post Job" onClick={handleSubmit} />
        <Button value="Clear" onClick={handleClear} />
      </Container>
      {errorMessage && (
        <Text marginTop="sm" content={errorMessage} color="red600" size="sm" />
      )}
      {successMessage && (
        <Text
          marginTop="sm"
          content={successMessage}
          color="green600"
          size="sm"
        />
      )}
    </StyledContainer>
  )
}

export default JobForm
