import React from "react";
import Form from "../components/basiccomponent/Form";
import { render, fireEvent, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'



describe("Add Company Data", () => {

  describe("with valid inputs", () => {
    it('calls the onSubmit function', async () => {
      const onSubmitForm = jest.fn();

      const companyObject = {CompanyName: "",City: "",State: "",FoundedDate: "",Description: ""}
      const {getByTestId,getByRole} = render(<Form Heading={'Create A New Company'} passingObject={companyObject} HitApi={onSubmitForm} ButtonText={'Add'}/>)

      await act(async () => {
        fireEvent.change(getByTestId("CompanyName"), {target: {value: "Clear Bridge Mobile"}})
        fireEvent.change(getByTestId("City"), {target: {value: "V"}})
        fireEvent.change(getByTestId("State"), {target: {value: "Ontario"}})
        fireEvent.change(getByTestId("FoundedDate"), {target: {value: "2011-01-01"}})
        fireEvent.change(getByTestId("Description"), {target: {value: "Clearbridge Mobile was founded by Deepak Chopra and Sanjay Malhotra in 2011, when mobile was still in its infancy. Realizing that there was an opportunity for businesses to capitalize on changing customer behavior, they started Clearbridge with a simple mission – to help companies leverage mobile to better connect with their customers. Today, Clearbridge has a robust roster of enterprise clients across media, fintech, telecom and more, and this mission is still what drives us."}})
        
      })

      await act(async () => {
        fireEvent.click(getByTestId("submit"))
      })

      expect(onSubmitForm).toBeCalled()
    })
  })
    
  
    
  
   /* describe("with empty CompanyName", () => {
      it("renders the CompanyName validation error", async () => {
        const companyObject = {CompanyName: "",City: "",State: "",FoundedDate: "",Description: ""}
        const {getByTestId} = render(<Form Heading={'Create A New Company'} passingObject={companyObject}  ButtonText={'Add'}/>)
        
        await act(async () => {
          const CompanyName = getByTestId("CompanyName")
          
          fireEvent.change(CompanyName, {target: {value: ""}})
          fireEvent.blur(CompanyName)
          fireEvent.click(getByTestId("submit"))
        })
  
        expect(getByTestId("ErrorName").innerHTML).toEqual("Please check the Company Name");
      })
    })
  
    describe("with empty city", () => {
      it("renders the city validation error", async () => {
        const companyObject = {CompanyName: "",City: "",State: "",FoundedDate: "",Description: ""}
        const {getByTestId} = render(<Form Heading={'Create A New Company'} passingObject={companyObject}  ButtonText={'Add'}/>)
  
        await act(async () => {
            const City = getByTestId("City")
            fireEvent.change(City, {target: {value: ""}})
            fireEvent.blur(City)
            fireEvent.click(getByTestId("submit"))
        })
  
        expect(getByTestId("ErrorCity").innerHTML).toEqual("Please check the City")
  
      })
    })
    describe("with empty state", () => {
        it("renders the state validation error", async () => {
            const companyObject = {CompanyName: "",City: "",State: "",FoundedDate: "",Description: ""}
            const {getByTestId} = render(<Form Heading={'Create A New Company'} passingObject={companyObject}  ButtonText={'Add'}/>)
    
          await act(async () => {
              const State = getByTestId("State")
              fireEvent.change(State, {target: {value: ""}})
              fireEvent.blur(State)
              fireEvent.click(getByTestId("submit"))
          })
    
          expect(getByTestId("ErrorState").innerHTML).toEqual("Please check the State")
    
        })
      })
      describe("with empty description", () => {
        it("renders the description validation error", async () => {
            const companyObject = {CompanyName: "",City: "",State: "",FoundedDate: "",Description: ""}
            const {getByTestId} = render(<Form Heading={'Create A New Company'} passingObject={companyObject}  ButtonText={'Add'}/>)
    
          await act(async () => {
              const Description = getByTestId("Description")
              fireEvent.change(Description, {target: {value: ""}})
              fireEvent.blur(Description)
              fireEvent.click(getByTestId("submit"))
          })
    
          expect(getByTestId("ErrorDescription").innerHTML).toEqual("Please check the Descritpion")
    
        })
      })*/
  })