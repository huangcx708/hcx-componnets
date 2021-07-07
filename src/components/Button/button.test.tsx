import React from 'react'
import { render } from '@testing-library/react'
import Button from './button'

describe('test Button component', () => {
    it('should render the corrent dafault button', () => {
        const wrapper = render(<Button>Nice</Button>)
        const ele = wrapper.getByText('Nice')
        expect(ele).toBeInTheDocument() 
        expect(ele.tagName).toEqual('BUTTON')
        expect(ele).toHaveClass('btn btn-default')
    })
})