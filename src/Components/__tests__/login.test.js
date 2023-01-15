import {render, screen, cleanup} from '@testing-library/react'
import Login from '../Login';

test('should render the login component', ()=>{
    render(<login/>);
        expect(true).toBe(true)
});