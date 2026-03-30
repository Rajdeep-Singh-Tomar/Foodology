import { render,screen } from "@testing-library/react"
import Cart from "../Cart"
import MOCK_DATA from "../Mocks/rescart.json"
import "@testing-library/jest-dom"



it("should render cart with setails",()=>{
    render(<Cart res={MOCK_DATA}/>)

    const name = screen.getByText("KFC");

    expect(name).toBeInTheDocument();
})