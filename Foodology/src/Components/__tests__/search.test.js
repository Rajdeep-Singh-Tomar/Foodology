import { render } from "@testing-library/react"
import Body from "../Body";
import MOCK_DATA from "../Mocks/mockreslist.json"

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it("shouls render body search button",()=>{
    render(<Body/>)
})